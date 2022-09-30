import sys
sys.path.append('/home/pi/irrsys/drivers/')
import pcf8574





def main():
    #pcf8574.activate_water()
    #pcf8574.deactivate_water()
    #pcf8574.activate_fan()
    #print(pcf8574.deactivate_fan())
    #pcf8574.activate_light()
    #pcf8574.deactivate_light()
    #pcf8574.activate_fertelize()
    #pcf8574.deactivate_fertelize()
    print(pcf8574.GetRealyStatus())

if __name__=="__main__":
    main()
