import datetime, time
import sys
sys.path.append('/home/pi/irrsys/')
sys.path.append('/home/pi/irrsys/drivers/')
sys.path.append('/home/pi/irrsys/loaders/')
import remote
import schedule
import history
import pcf8574 #relays controller
import historyLoader
import currentlyActiveLoader
import currently

SCHEDULE_ACTIVATION_CODE = 10
REMOTE_ACTIVATION_CODE = 9
HISTORY_TABLE_DATA = history.get_activation_history()
SCHEDULE_TABLE_DATA = schedule.get_schedule_activation()
REMOTE_TABLE_DATA = remote.get_remote_activation()
RELAYS_STATUS = currently.get_currently_active()


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
    today = datetime.datetime.today().weekday() #0 = Monday
    return(days_to_activate[today])


def is_time_between(start_hour, end_time, check_time=None):
    if start_hour.hour == 0 and start_hour.minute == 0 and start_hour.second == 1:
        return False
    check_time = check_time or datetime.datetime.now()
    return(check_time.time() >= start_hour.time() and check_time.time() <= end_time.time())


def get_schedule_time_params():
    start_hour = SCHEDULE_TABLE_DATA['start_hour']
    time_to_live = SCHEDULE_TABLE_DATA['time_to_live']
    end_time = start_hour + datetime.timedelta(minutes=time_to_live)
    return start_hour, end_time


def get_remote_time_params():
    start_hour = REMOTE_TABLE_DATA['start_data']
    time_to_live = REMOTE_TABLE_DATA['finish_data']
    end_time = start_hour + datetime.timedelta(minutes=time_to_live)
    return start_hour, end_time


def handle_time_between(start_hour : datetime, table_data : dict, activation_code : int):
    data = {
        'dateTime_of_activation' : datetime.datetime.now().replace(hour=start_hour.hour, minute=start_hour.minute,second=start_hour.second,microsecond=0),
        'finish_hour' : (datetime.datetime.now().replace(microsecond=0)),
        'activation_code' : activation_code
    }
    activate_relays(table_data)
    historyLoader.load_activation_history(data)


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
    currentlyActiveLoader.update_currently_active(relays)


def handle_manual_mode():
    start_hour, end_time = get_remote_time_params()
    if is_time_between(start_hour, end_time):
        handle_time_between(start_hour, REMOTE_TABLE_DATA, REMOTE_ACTIVATION_CODE)
        return
    if today_is_scheduled():
        start_hour, end_time = get_schedule_time_params()
        if is_time_between(start_hour, end_time):
            handle_time_between(start_hour, SCHEDULE_TABLE_DATA, SCHEDULE_ACTIVATION_CODE)
            return
    activate_relays()


def main():
    handle_manual_mode()


if __name__ == '__main__':
    main()
