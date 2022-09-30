import datetime, time
import sys
sys.path.append('/home/pi/irrsys/')
sys.path.append('/home/pi/irrsys/drivers/')
import irrmain
import remote
import schedule
import pcf8574 #relays controller


SCHEDULE_TABLE_DATA = schedule.get_schedule_activation()
#REMOTE_TABLE_DATA = remote.get_remote_activation()
#SAMPLE = irrmain.getsensordata()
RELAYS_STATUS = irrmain.get_relays_status()


def is_today_scheduled(days_to_activate : dict):
    today = datetime.datetime.today().weekday() #1 = Monday
    return(days_to_activate[today])


def is_time_between(start_hour, time_to_live, check_time=None):
    end_time = start_hour + datetime.timedelta(minutes=time_to_live)
    # If check time is not given, default to current LOCALE time
    check_time = check_time or datetime.datetime.now()
    print("check_time = " , check_time)
    print("start_hour = " , start_hour)
    print("end_time = " , end_time)
    return(check_time.time() >= start_hour.time() and check_time.time() <= end_time.time())


def is_schedule_over():
    


def is_schedule_on():
    start_hour = SCHEDULE_TABLE_DATA['start_hour']
    time_to_live = SCHEDULE_TABLE_DATA['time_to_live']
    days_to_activate = {
        6: SCHEDULE_TABLE_DATA['sunday'],
        0: SCHEDULE_TABLE_DATA['monday'],
        1: SCHEDULE_TABLE_DATA['tuesday'],
        2: SCHEDULE_TABLE_DATA['wednesday'],
        3: SCHEDULE_TABLE_DATA['thursday'],
        4: SCHEDULE_TABLE_DATA['friday'],
        5: SCHEDULE_TABLE_DATA['saturday']
    }
    return(is_today_scheduled(days_to_activate) and is_time_between(start_hour, time_to_live))

def activate_relays(relays : dict):
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


def handle_manual_mode():
    if is_schedule_on():
        activate_relays(SCHEDULE_TABLE_DATA)


def main():
    handle_manual_mode()
    print(RELAYS_STATUS)





if __name__ == '__main__':
    main()

