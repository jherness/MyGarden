import sys
sys.path.append('/home/pi/irrsys/manager/')
sys.path.append('/home/pi/irrsys/loaders/')
import sys_mod
from handle_manual_mode import handle_manual_mode
from handle_auto_mode import handle_auto_mode


def get_mode():
    mode = sys_mod.get_sys_mod()
    return mode['is_auto']


def main():
    if(get_mode()):
        handle_auto_mode()
        print("auto mode!!")
    else:
        handle_manual_mode()
        print("manual mode!!")


if __name__ == '__main__':
    main()
