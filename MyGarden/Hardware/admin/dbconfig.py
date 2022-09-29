def get_configuration():
    return {
        HOST : '192.168.1.198',
        DB_NAME : 'mygarden',
        USER : 'irruser',
        PASS : 'irrpass'
    }



def main():
    print(get_configuration())


if __name__ == '__main__':
    main()

    
