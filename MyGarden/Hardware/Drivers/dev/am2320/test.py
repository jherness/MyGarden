import smbus

device=0x5c 

bus = smbus.SMBus(1)  #/dev/i2c-1
byte = bus.read_byte(device)
print("byte=",byte)
