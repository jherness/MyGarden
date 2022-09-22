import smbus
import time

# Get I2C bus
bus = smbus.SMBus(1)
# BH1715 address, 0x23(35)
def readBH1750():
    # Send power on command
    #		0x01(01)	Power On
    bus.write_byte(0x23, 0x01)
    # Send continuous measurement command
    # 0x10(16)Set Continuous high resolution mode, 1 lux resolution, Time = 120ms
    bus.write_byte(0x23, 0x10)

    time.sleep(0.5)

    # Read data back, 2 bytes using General Calling
    # luminance MSB, luminance LSB
    data = bus.read_i2c_block_data (0x23, 2)

    # Convert the data
    luminance = (data[0] * 256 + data[1]) / 1.2
    return  luminance
def main():

  while True:
    print ("Ambient Light luminance : %.2f lux" %readBH1750())
    #print ("Light Level : " + str(readLight()) + " lux")
    time.sleep(0.5)

if __name__=="__main__":
   main()

