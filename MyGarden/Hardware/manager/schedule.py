import mysql.connector
import sys
import datetime
sys.path.append('/home/pi/irrsys/admin/')
import dbconfig

TABLE_NAME = "schedule_activation"



def get_connection():
    config = dbconfig.get_configuration()
    connection = mysql.connector.connect(host=config['HOST'],
                                         database=config['DB_NAME'],
                                         user=config['USER'],
                                         password=config['PASS'])
    return connection


def handle_db_connection_error(error):
    print("Failed to get record in MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def get_data(cursor, connection):
    query = f'SELECT * FROM {TABLE_NAME}'
    cursor.execute(query)
    records = cursor.fetchall()
    result = {"start_hour" : datetime.datetime.today() + records[0][1],
        "time_to_live" : records[0][2],
        "sunday" : records[0][3] == 1,
        "monday": records[0][4] == 1,
        "tuesday": records[0][5] == 1,
        "wednesday": records[0][6] == 1,
        "thursday" : records[0][7] == 1,
        "friday" : records[0][8] == 1,
        "saturday": records[0][9] == 1,
        "air_sys": records[0][10] == 1,
        "water_sys": records[0][11] == 1,
        "light_sys": records[0][12] == 1,
        "fertelize_sys": records[0][13] == 1
    }
    return(result)


def get_schedule_activation():
    try:
        connection = get_connection()
        if connection.is_connected():
            print("MariaDB connection is open")
            cursor = connection.cursor()
            return get_data(cursor, connection)
        else:
            print("Faild to connect to DB")
    except mysql.connector.Error as error:
        handle_db_connection_error(error)
    finally:
        print(connection.is_connected())
        if connection.is_connected():
            finish(cursor, connection)


def main():
    get_schedule_activation()


if __name__ == '__main__':
    main()
