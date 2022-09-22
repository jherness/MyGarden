import smbus
import time

# Get I2C bus
bus = smbus.SMBus(1)

def readTSL2584(): 
    # TSL2584 address, 0x39(57)
    # Select control register, 0x00(00) with command register, 0x80(128)
    #		0x01(01)	Power ON mode
    bus.write_byte_data(0x39, 0x00 | 0x80, 0x01)
    # Select timing register, 0x01(01) with command register, 0x80(128)
    #		0x6C(108)	Nominal integration time = 399.6ms
    bus.write_byte_data(0x39, 0x01 | 0x80, 0x6C)
    bus.write_byte_data(0x39, 0x07 | 0x80, 0x00)
    bus.write_byte_data(0x39, 0x00 | 0x80, 0x03) # enable data conversion 
    time.sleep(0.5)
    # Read data back from 0x0C(12) with command register, 0x80(128), 2 bytes
    # ch0 LSB, ch0 MSB
    data = bus.read_i2c_block_data(0x39, 0x14 | 0xA0, 2)
    #print("low=",data[0],bus.read_byte_data(0x39, 0x14 | 0x80))
    #print("upper=",data[1],bus.read_byte_data(0x39, 0x15 | 0x80))
    # Read data back from 0x0E(14) with command register, 0x80(128), 2 bytes
    # ch1 LSB, ch1 MSB
    data1 = bus.read_i2c_block_data(0x39, 0x16 | 0xA0, 2)

    # Convert the data
    ch0 = data[1] * 256 + data[0]
    ch1 = data1[1] * 256 + data1[0]
    ResDiv = int(ch1)/int(ch0)
    bus.write_byte_data(0x39, 0x00 | 0x80, 0x00) # power off
    return ch0,ch1

def main():
    ch0,ch1=readTSL2584()
    print ("Full Spectrum(IR + Visible) :%d lux" %ch0)
    print ("Infrared Value :%d lux" %ch1)
    print ("Visible Value :%d lux" %(ch0 - ch1))

if __name__=="__main__":
   main()
