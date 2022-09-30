
import sys
sys.path.append('/home/pi/irrsys/manager/')
sys.path.append('/home/pi/irrsys/loaders/')
import sys_mod


def get_mode():
    mode = sys_mod.get_sys_mod()
    return mode['is_auto']


def handle_auto_mode():
    print("auto")


def handle_manual_mode():
    print("manual")


def main():
    if(get_mode()):
        handle_auto_mode()
    else:
        handle_manual_mode()


if __name__ == '__main__':
    main()
