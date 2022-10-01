#TODO 
# change from humidity To Avg of 3 humidity ground Sensors


import sys
sys.path.append('/home/pi/irrsys/')
sys.path.append('/home/pi/irrsys/drivers/')
sys.path.append('/home/pi/irrsys/loaders/')
import datetime, time
import irrmain
import remote
import sys_mod
import pcf8574 #relays controller
import historyLoader
import remoteLoader


RELAYS_STATUS = irrmain.get_relays_status()
SAMPLE = irrmain.getsensordata()
SYS_MOD = sys_mod.get_sys_mod()
REMOTE_TABLE_DATA = remote.get_remote_activation()


def handle_auto_mode():
    current_temp, current_humid, current_light = get_sample_params()
    max_temp, min_humid, max_light = get_sys_mode_params()
    activation_code = get_appropriate_activiton_code(max_temp, max_light, min_humid, current_temp, current_humid, current_light)
    if activation_code == 1: # if every thing is ok
        activate_relays()
        return
    start_hour, end_time = get_remote_time_params()
    if is_time_between(start_hour, end_time): #if its not the first sample in a row that needs to be handeled
        handle_time_between(start_hour, REMOTE_TABLE_DATA, activation_code)
    else: # its the first sample that needs to be handeled, we need to keep the data of the activation time.
        handle_first_exception(activation_code)


def handle_first_exception(activation_code : int):
    start_hour = datetime.datetime.now()
    data = {
        'dateTime_of_activation' : start_hour.replace(microsecond=0),
        'finish_hour' : (start_hour + datetime.timedelta(minutes=2)),
        'activation_code' : activation_code
    }
    activate_relays(handle_exception(activation_code))
    remoteLoader.replace_remote_activation(data)


def handle_time_between(start_hour = None : datetime, relays_data : dict, activation_code : int):
    start_hour = start_hour or datetime.datetime.now()
    relays_data = 
    data = {
        'dateTime_of_activation' : datetime.datetime.now().replace(hour=start_hour.hour, minute=start_hour.minute,second=start_hour.second,microsecond=0),
        'finish_hour' : (datetime.datetime.now().replace(microsecond=0)),
        'activation_code' : activation_code
    }
    activate_relays(relays_data)
    historyLoader.load_activation_history(data)


def get_remote_time_params():
    start_hour = REMOTE_TABLE_DATA['start_data']
    time_to_live = REMOTE_TABLE_DATA['finish_data']
    end_time = start_hour + datetime.timedelta(minutes=time_to_live)
    return start_hour, end_time


def is_too_dry(min_humid, current_humid):
    return current_humid < min_humid 


def is_too_hot(max_temp, current_temp):
    return current_temp > max_temp


def is_time_between(start_hour : datetime, end_time = None : datetime, check_time=None):
    end_time = end_time or start_hour + datetime.timedelta(minutes=2)
    check_time = check_time or datetime.datetime.now()
    return(check_time.time() >= start_hour.time() and check_time.time() <= end_time.time())


def sample_is_ok(max_temp, max_light, min_humid, current_temp, current_humid, current_light):
    return not(is_too_hot(max_temp, current_temp) and is_too_dry(min_humid, current_humid) and is_dark(max_light, current_light))


#please note that i checked the dictionary and worsest is a legit word.... (superlative form of bad)
#sorry for wasting your time anita and shay...
def sample_is_worsest(max_temp, max_light, min_humid, current_temp, current_humid, current_light):
    return is_too_hot(max_temp, current_temp) and is_too_dry(min_humid, current_humid) and is_dark(max_light, current_light)


# Check if Turn On The Light
def is_dark(max_light, current_light):
    return current_light < 400
    

# geting the current temp, humid, light data
def get_sample_params():
    current_temp = SAMPLE["temperature"]
    current_humid = SAMPLE["humidity"]
    current_light = SAMPLE["light"]
    return current_temp, current_humid, current_light

# get the max temp, min humid from sys_mod (set in preferences)
def get_sys_mode_params():
    max_temp = SYS_MOD["max_temp"]
    min_humid = SYS_MOD["min_moist"]
    max_light = 400
    return max_temp, min_humid, max_light


#get the appropriate activation code based on sample analyze
def get_appropriate_activiton_code(max_temp, max_light, min_humid, current_temp, current_humid, current_light):
    if sample_is_ok(max_temp, max_light, min_humid, current_temp, current_humid, current_light):
        return 1 # all is under control!
    elif sample_is_worsest(max_temp, max_light, min_humid, current_temp, current_humid, current_light):
        return 2 # all is burning! 
    elif is_too_dry(min_humid, current_humid) and is_too_hot(max_temp, current_temp):
        return 3 # Low Humidity & High Temp, water & fan
    elif is_dark(max_light, current_light) and is_too_hot(max_temp, current_temp):
        return 4 # No Light & High Temp, light & fan
    elif is_dark(max_light, current_light) and is_too_dry(min_humid, current_humid):
        return 5 # No Light & Low Humidity, light & water
    elif is_too_dry(min_humid, current_humid):
        return 6 # Low Humidity, active water
    elif is_too_hot(max_temp, current_temp):
        return 7  # High Temp, active fan
    elif is_dark(max_light, current_light):
        return 8  # No Light, light


def handle_exception(activation_code):
    command = {'air_sys':False, 'water_sys':False, 'light_sys':False, 'fertelize_sys':False}
    if activation_code == 2:
        command =  {'air_sys':True, 'water_sys':True, 'light_sys':True, 'fertelize_sys':False}
    elif activation_code == 3:
        command =  {'air_sys':True, 'water_sys':True, 'light_sys':False, 'fertelize_sys':False}
    elif activation_code == 4:
        command =  {'air_sys':True, 'water_sys':True, 'light_sys':False, 'fertelize_sys':False}    
    elif activation_code == 5:
        command =  {'air_sys':True, 'water_sys':True, 'light_sys':False, 'fertelize_sys':False}
    elif activation_code == 6:
        command =  {'air_sys':True, 'water_sys':True, 'light_sys':False, 'fertelize_sys':False}
    elif activation_code == 7:
        command =  {'air_sys':True, 'water_sys':True, 'light_sys':False, 'fertelize_sys':False}
    elif activation_code == 8:
        command =  {'air_sys':True, 'water_sys':True, 'light_sys':False, 'fertelize_sys':False}
    return command



def activate_relays(relays = None):
    relays = relays or {'air_sys':False, 'water_sys':False, 'light_sys':False, 'fertelize_sys':False}
    if relays['air_sys']:
        pcf8574.activate_fan()
    else:
        pcf8574.deactivate_fan()
    if relays['water_sys']:
        pcf8574.activate_water()
    else:
        pcf8574.deactivate_water()
    if relays['light_sys']:
        pcf8574.activate_light()
    else:
        pcf8574.deactivate_light()
    if relays['fertelize_sys']:
        pcf8574.activate_fertelize()
    else:
        pcf8574.deactivate_fertelize()


def main():
   handle_auto_mode()


if __name__ == '__main__':
    main()
