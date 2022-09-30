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
SYS_MOD = sys_mod.get_sys_mod


def check_moist(min_moist, current_moist ):
    return min_moist>current_moist


def check_Temp(max_Temp, current_Temp ):
    return max_Temp<current_Temp

#return True or False about High Temp and Low Humidity activation
def handle_moist_temp_check(max_temp,current_temp,min_moist,current_moist):
    return check_moist(min_moist,current_moist) and check_Temp(max_temp,current_temp)


def handle_manual_mode():
    current_temp,current_moist = get_sample_params()
    max_temp,min_moist = get_max_temp_and_min_moist()
    auto_mode_check=handle_moist_temp_check(max_temp,current_temp,min_moist,current_moist)
    print( "current temp is",current_temp, "max temp is",max_temp)
    print("current moist is", current_moist, "min moist is" ,min_moist)
    print("check auto mode ")
    print(auto_mode_check)
    print("__________________________________")
    current_light = get_required_light_from_sample(get_sample())
    print("print check light")
    print(check_if_to_turn_light(current_light))
    print("print check fan")
    print(check_if_turn_fan(current_temp))
    # [0] check Auto mode(Temp and moist)  [1]Dark Or not [2] Hot Or not [3] moist or not
    return auto_mode_check,check_if_to_turn_light(current_light),check_if_turn_fan(current_temp),check_if_turn_water(current_moist)


# Get Current Light
def get_required_light_from_sample(sample_json_to_check):
    current_light = sample_json_to_check["light"]
    return current_light


# get current Temp
def get_required_temp_from_sample(sample_json_to_check):
    current_temp = sample_json_to_check["temperature"]
    return current_temp


# Check if Turn On The Light
def check_if_to_turn_light(current_light):
    return current_light<400


# Check if to turn on fan
def check_if_turn_fan(current_temp):
    return current_temp>32


def check_if_turn_water(current_moist):
    return current_moist<25


# geting the current temp and moist
def get_sample_params():
    current_temp = SAMPLE["temperature"]
    current_moist = SAMPLE["humidity"]
    return current_temp, current_moist

# ge the max temp and min moist from propertis_json
def get_sys_mode_params():
    max_temp=propertis_json["max_temp"]
    min_moist = propertis_json["min_moist"]
    return max_temp,min_moist


#def handle_auto_mode():
def make_activiton_code(checkers,is_remote,is_schedule):
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
        return 7  # No Light  & Low Humidity  Active light and water
    elif checkers[1] == True and checkers[2]==True:
        return 8  # No Light & High Temp' Active light and fan


def main():
   does = do_all()
   print(does)


if __name__ == '__main__':
    main()
