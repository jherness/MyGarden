import smbus

device=0x20 

REL1 = 0x01
REL2 = 0x02
REL3 = 0x04
REL4 = 0x08

bus = smbus.SMBus(1)  #/dev/i2c-1


def testbit(num, k):
    if num & (1 << (k - 1)):
        return 'ON'
    else:
        return 'OFF'

def ParseStatus(sts):
    STATUS= {
           'REALY 1' : testbit(sts, 1),
           'REALY 2' : testbit(sts, 2),
           'REALY 3' : testbit(sts, 3),
           'REALY 4' : testbit(sts, 4)
    }
    print(STATUS)


def GetRealyStatus():
    byte = bus.read_byte(device)
    print('Realy Status=',hex(255-byte))
    ParseStatus(255-byte)

def RealyTestOn(rel):
    print(' in RelayTest on')
    byte = bus.read_byte(device)
    print('byte=',byte)
    tmp=byte & (~rel)
    bus.write_byte(device,tmp)


def RealyTestOff(rel):
    print(' in RelayTest off')
    byte = bus.read_byte(device)
    print('byte=',byte)
    tmp=byte | rel
    bus.write_byte(device, tmp)

def main():
    #RealyTestOn(REL1)
    RealyTestOn(REL2)
    #RealyTestOn(REL3)
    RealyTestOn(REL4)

    RealyTestOff(REL1)
    #RealyTestOff(REL2)
    #RealyTestOff(REL3)
    #RealyTestOff(REL4)
    GetRealyStatus()  

if __name__=="__main__":
   main()

