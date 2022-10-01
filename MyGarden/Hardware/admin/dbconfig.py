def get_configuration():
    return {
       'HOST' : '192.168.50.100',
       'DB_NAME' : 'mygarden',
       'USER' : 'irruser',
       'PASS' : 'irrpass'
    }


def main():
    print(get_configuration())


if __name__ == '__main__':
    main()
