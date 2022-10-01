import smbus
import time

address = 0x38 #device's address 

i2cbus = smbus.SMBus(1)
time.sleep(0.5)
def readAHT20():
    data = i2cbus.read_i2c_block_data(address,0x71,1)
    # check bit[3] cal Enable 1-calibrate,0-uncalibrated
    if (data[0] | 0x08) == 0:
        print('Initialization error')
    # triger measurement 
    i2cbus.write_i2c_block_data(address,0xac,[0x33,0x00])
    time.sleep(0.1)

    data = i2cbus.read_i2c_block_data(address,0x71,7)

    Traw = ((data[3] & 0xf) << 16) + (data[4] << 8) + data[5]
    temperature = 200*float(Traw)/2**20 - 50

    Hraw = ((data[3] & 0xf0) >> 4) + (data[1] << 12) + (data[2] << 4)
    humidity = 100*float(Hraw)/2**20
    return temperature,humidity

def main():
    temperature,humidity=readAHT20()
    print("temperature:",temperature)
    print("humidity:",humidity)

if __name__=="__main__":
   main()

