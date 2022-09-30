
import smbus
import json
import sys
from datetime import datetime
sys.path.append('/home/pi/irrsys/drivers')
sys.path.append('/home/pi/irrsys/loaders')
import bme280  # Temperature & Humidity & Pressurs sensor driver
import aht20   # Temperature & Humidity sensor driver
import tsl2584 # light sensor driver
import bh1750  # light sensor driver
import ads1115 # analog to digtal  driver 
import pcf8574 # io driver
import samplesLoader
import relaysLoader

def logtofile(mesg):
    now = datetime.now()
    timestemp = now.strftime("%d-%m-%Y %H:%M:%S")
    line = timestemp + ',' + mesg
    #print(line)
    with open("/home/pi/irrsys/logfile.txt", "a", newline='\n') as myfile:
        myfile.write(line + '\n')
        myfile.close()

def getsensordata():
    msg={}
    (temperature,pressure,humidity) = bme280.readBME280All()
    print ("BME280 Temperature : ", temperature, "C")
    print ("BME280 Pressure : ", pressure, "hPa")
    print ("BME280 Humidity : ", humidity, "%")
    msg["temperature"]=temperature
    msg["humidity"]=humidity
    msg["pressure"]= pressure
    (temperature,humidity) = aht20.readAHT20()
    print ("AHT20 Temperature : ", temperature, "C")
    print ("AHT Humidity : ", humidity, "%")


    (ch0,ch1) = tsl2584.readTSL2584()
    print ("Full Spectrum(IR + Visible) :%d lux" %ch0)
    print ("Infrared Value :%d lux" %ch1)
    print ("Visible Value :%d lux" %(ch0 - ch1))
    msg["IR+Visible"]=ch0
    msg["IR"]=ch1
    msg["light"]=ch0-ch1
    msg["ground_humidity1"] = 0
    msg["ground_humidity2"] = 0
    msg["ground_humidity3"] = 0

    luminance=bh1750.readBH1750();
    print ("Ambient Light luminance : %.2f lux" %luminance)

    #(raw_adc,raw_vlt)=ads1115.readADS1115(ain=0)
    #print ("Digital Value of Analog Input : %d" %raw_adc)
    #print ("Analog  Value of Analog Input : %.4f Volt" %raw_vlt)


    #msg["Digital-IN0"]=raw_adc
    #msg["Analog-IN0"]=raw_vlt
    #pcf8574.RealyTestOn(pcf8574.REL1)
    #pcf8574.RealyTestOff(pcf8574.REL1) 
    return msg;


def get_relays_status():
    relays_status = pcf8574.GetRealyStatus()
    print ("realay status = ",relays_status)
    return relays_status;
    

def load():
    samplesLoader.load_new_sample(getsensordata())
    relaysLoader.load_currently_active(get_relays_status())

def i2cdetect():
    global bus,i2cdevices
    print('in i2cdetect...')
    alldev=i2cdevices.keys()
    print("device list:",alldev)
    dev=[]
    for device in range(128):
        try:
            bus.read_byte(device)
            #print(hex(device))
            dev.append(hex(device))
        except:  # exception if read_byte fails
            pass
    print('device found=',dev)
    rslt=list(set(alldev)-set(dev))
    if len(rslt)==0:
       print('I2C devices found')
       return True
    else:
       print('I2C devices not found:',sorted(rslt))
       for x in rslt:
           print(x,":",i2cdevices[x])
       return False

def I2cSetup():
    global bus,i2cdevices
    bus=smbus.SMBus(1) # /dev/i2c-1
    i2cdevices={
            "0x20" : "PCF8574 io relay",
            "0x38" : "AHT20 Temperature&Humidity",
            "0x39" : "TSL2584 light",
            "0x48" : "ADS1115 A/D 4 Channel",
            "0x76" : "BME280 Temp&Hum&pressure"
           }
    #if not i2cdetect():
    #    return False

	
############################################################
######################## MAIN ##############################
############################################################
#logtofile("start program")
def main():
    I2cSetup()
    i2cdetect()
    load()


if __name__ == '__main__':
    main()
#logtofile("after i2cdetect")
#getsensordata()
#logtofile("end program")
#initvar()
#SpiSetup()
#GpioSetUp()
#HbridgeSetup()
#I2cSetup()

#i2cdetect()
#print(vars())

#cmd = '{"CMD":"RunMotor","DIR":"c","SPEED":c}'

#logtofile('Start of program')
#runserver()
	
