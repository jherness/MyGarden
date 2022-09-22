import smbus
import time

# Get I2C bus
bus = smbus.SMBus(1)
def readADS1115Chs(ain):
    ain=0,1,2,3 for IN0,IN1,IN2,IN3
	# ADS1115 address, 0x48(72)
    # Select configuration register, 0x01(01)
    #		0xC183	AINP = AIN0 and AINN = GND, +/- 6.144V
    #               Continuous conversion mode, 128SPS
    #		0xD183	AINP = AIN1 and AINN = GND, +/- 6.144V
    #               Continuous conversion mode, 128SPS
    #		0xE183	AINP = AIN2 and AINN = GND, +/- 6.144V
    #               Continuous conversion mode, 128SPS
    #		0xF183	AINP = AIN3 and AINN = GND, +/- 6.14 4V
    #               Continuous conversion mode, 128SPS
	ch=16*(12+ain)+1
	data=[ch,0x83]
    #data = [0xC1,0x83]
    bus.write_i2c_block_data(0x48, 0x01, data)
    time.sleep(0.5)
    # ADS1115 address, 0x48(72)
    # Read data back from 0x00(00), 2 bytes
    # raw_adc MSB, raw_adc LSB
    data = bus.read_i2c_block_data(0x48, 0x00, 2)
    # Convert the data
    raw_adc = data[0] * 256 + data[1]
    if raw_adc > 32767:
	    raw_adc -= 65535
    Step=6.144/32767
    #print ("step=",Step)
    raw_vlt=raw_adc*Step
    return raw_adc,raw_vlt
def main():
    (raw_adc,raw_vlt)=readADS1115Chs(ain=0)
    print ("Digital Value of Analog Input : %d" %raw_adc)
    print ("Analog  Value of Analog Input : %.4f Volt" %raw_vlt)

if __name__=="__main__":
   main()
