import mysql.connector
import sys
import datetime
sys.path.append('/home/pi/irrsys/admin/')
import dbconfig


TABLE_NAME = "currently_active"


def get_connection():
    config = dbconfig.get_configuration()
    connection = mysql.connector.connect(host=config['HOST'],
                                         database=config['DB_NAME'],
                                         user=config['USER'],
                                         password=config['PASS'])
    return connection


def handle_db_connection_error(error):
    print("Failed to get  record in MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def get_data(cursor, connection):
    query = f'SELECT * FROM {TABLE_NAME} where id = 1'
    cursor.execute(query)
    records = cursor.fetchall()
    result = {
        "air_sys": records[0][1] == 1,
        "water_sys": records[0][2] == 1,
        "light_sys": records[0][3] == 1,
        "fertelize_sys": records[0][4] == 1
    }
    return(result)


def get_currently_active():
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
    get_currently_active()


if __name__ == '__main__':
    main()
