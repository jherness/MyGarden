import datetime, time
import sys
sys.path.append('/home/pi/irrsys/')
sys.path.append('/home/pi/irrsys/drivers/')
sys.path.append('/home/pi/irrsys/loaders/')
import irrmain
import remote
import schedule
import history
import pcf8574 #relays controller
import historyLoader


HISTORY_TABLE_DATA = history.get_activation_history()
SCHEDULE_TABLE_DATA = schedule.get_schedule_activation()
#REMOTE_TABLE_DATA = remote.get_remote_activation()
RELAYS_STATUS = irrmain.get_relays_status()


def today_is_scheduled():
    days_to_activate = {
        6: SCHEDULE_TABLE_DATA['sunday'],
        0: SCHEDULE_TABLE_DATA['monday'],
        1: SCHEDULE_TABLE_DATA['tuesday'],
        2: SCHEDULE_TABLE_DATA['wednesday'],
        3: SCHEDULE_TABLE_DATA['thursday'],
        4: SCHEDULE_TABLE_DATA['friday'],
        5: SCHEDULE_TABLE_DATA['saturday']
    }
    today = datetime.datetime.today().weekday() #1 = Monday
    return(days_to_activate[today])


def is_time_between(check_time=None):
    start_hour = SCHEDULE_TABLE_DATA['start_hour']
    time_to_live = SCHEDULE_TABLE_DATA['time_to_live']
    end_time = start_hour + datetime.timedelta(minutes=time_to_live)
    check_time = check_time or datetime.datetime.now()
    return(check_time.time() >= start_hour.time() and check_time.time() <= end_time.time())


def is_time_before(start_hour :datetime, time_to_live : int, check_time=None):
    start_hour = SCHEDULE_TABLE_DATA['start_hour']
    time_to_live = SCHEDULE_TABLE_DATA['time_to_live']
    end_time = start_hour + datetime.timedelta(minutes=time_to_live)
    check_time = check_time or datetime.datetime.now()
    return(check_time.time() <= start_hour.time())
    


def finish():
    end_time = start_hour + datetime.timedelta(minutes=time_to_live)


def handle_time_after():
    start_hour = SCHEDULE_TABLE_DATA['start_hour']
    time_to_live = SCHEDULE_TABLE_DATA['time_to_live']
    end_time = start_hour + datetime.timedelta(minutes=time_to_live)
    is_in_db = [item for item in HISTORY_TABLE_DATA if item[0] == start_hour and item[1] == end_time]
    if len(is_in_db) == 0:
        data = {
            'dateTime_of_activation' = (datetime.datetime.now().replace(hour=start_hour.hour, minute=start_hour.minute, second=start_hour.second, microsecond=0)),
            'finish_hour' = (datetime.datetime.now().replace(hour=end_time.hour, minute=end_time.minute, second=end_time.second, microsecond=0)),
            'activation_code' = 10
        }
        historyLoader.load_activation_history(data)
    else:
        print("im already in db!")



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


def handle_manual_mode():
    if today_is_scheduled():
        if is_time_before():
            return
        elif is_time_between():
            activate_relays(SCHEDULE_TABLE_DATA)
            return
        else:
            

    if 


def main():
    handle_manual_mode()
    print(RELAYS_STATUS)


if __name__ == '__main__':
    main()

