
import datetime
import sys
sys.path.append('/home/pi/irrsys/')
import irrmain
import remote
import schedule


SCHEDULE_TABLE_DATA = schedule.get_schedule_activation()
REMOTE_TABLE_DATA = remote.get_remote_activation()
SAMPLE = irrmain.getsensordata()
RELAYS_STATUS = irrmain.get_relays_status()


def is_today_scheduled(days_to_activate : dict):
    today = datetime.datetime.today().weekday() #1 = Monday
    print(days_to_activate[today])


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
    systems_to_activate = {
        "air_sys": SCHEDULE_TABLE_DATA['air_sys'],
        "water_sys": SCHEDULE_TABLE_DATA['water_sys'],
        "light_sys": SCHEDULE_TABLE_DATA['light_sys'],
        "fertelize_sys": SCHEDULE_TABLE_DATA['fertelize_sys']
    }
    is_today_scheduled(days_to_activate)



def handle_manual_mode():
    is_schedule_on()


def main():
    handle_manual_mode()


if __name__ == '__main__':
    main()

