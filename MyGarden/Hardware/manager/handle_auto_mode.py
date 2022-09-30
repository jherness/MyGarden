#TODO Check max Temp
# Send A Feed Back After Checking Below
# check if to open light
# change from humidity To Avg of 3 humidity ground Sensors


import sys
sys.path.append('/home/pi/irrsys/')
sys.path.append('/home/pi/irrsys/drivers/')
sys.path.append('/home/pi/irrsys/loaders/')
import datetime, time
import irrmain
import sys_mod
import pcf8574 #relays controller
import historyLoader


RELAYS_STATUS = irrmain.get_relays_status()
SAMPLE = irrmain.getsensordata()
SYS_MOD = sys_mod.get_sys_mod()


def is_too_dry(min_humid, current_humid ):
    return current_humid < min_humid 


def is_too_hot(max_temp, current_temp ):
    return current_Temp > max_temp


def handle_manual_mode():
    current_temp, current_humid, current_light = get_sample_params()
    max_temp, min_humid, max_light = get_sys_mode_params()
    print( "current temp is",current_temp, "max temp is",max_temp)
    print("current humid is", current_humid, "min moist is" ,min_humid)
    print("check auto mode ")
    print(auto_mode_check)
    print("__________________________________")
    current_light = get_required_light_from_sample(get_sample())
    print("print check light")
    print(is_dark(current_light))
    print("print check fan")
    print(check_if_turn_fan(current_temp))
    # [0] check Auto mode(Temp and moist)  [1]Dark Or not [2] Hot Or not [3] moist or not
    return auto_mode_check,is_dark(current_light),check_if_turn_fan(current_temp),check_if_turn_water(current_humid)


def is_time_between(start_hour : datetime, end_time : datetime, check_time=None):
    if start_hour.hour == 0 and start_hour.minute == 0 and start_hour.second == 1:
        return False
    check_time = check_time or datetime.datetime.now()
    return(check_time.time() >= start_hour.time() and check_time.time() <= end_time.time())


def sample_is_ok(max_temp, min_humid):
    return not (is_too_hot())


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


#def handle_auto_mode():
def get_appropriate_activiton_code():
    if checkers[0] == True:
        return 1 # High Temp & Low Humidity Active water and fan
    elif checkers[1]==True:
        return 2 # No Light Active Light
    elif checkers[2]==True:
        return 3 # High Temp Active Fan
    elif checkers[3]== True:
        return 4 # Low Humidity active water
    elif checkers[2] == False:
        return 5  # Low temp active light active light
    elif checkers[0] == True and checkers[1]==True:
        return 6  # No Light ,High Temp & Low Humidity  active light water& fan
    elif checkers[2] == True and checkers[3]==True:
        return 7  # No Light & Low Humidity  Active light and water
    elif checkers[1] == True and checkers[2]==True:
        return 8  # No Light & High Temp' Active light and fan


def main():
   does = do_all()
   print(does)


if __name__ == '__main__':
    main()
