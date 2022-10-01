import mysql.connector
import sys
import datetime
sys.path.append('/home/pi/irrsys/admin/')
import dbconfig

TABLE_NAME = "remote_activation"
 


def get_connection():
    config = dbconfig.get_configuration()
    connection = mysql.connector.connect(host=config['HOST'],
                                         database=config['DB_NAME'],
                                         user=config['USER'],
                                         password=config['PASS'])
    return connection


def handle_db_connection_error(error):
    print("Failed to insert  record in MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def replace_table(data, cursor, connection):
    query = f"REPLACE INTO {TABLE_NAME} (`id`, `start_data`, `finish_data`, `air_sys`, `water_sys`," \
            f" `light_sys`, `fertelize_sys`) VALUES " \
            f"({data['id']}, {data['start_data']}, {data['finish_data']},{data['air_sys']}, " \
            f"{data['water_sys']}, {data['light_sys']}, {data['fertelize_sys']});"
    cursor.execute(query)
    connection.commit()
    print(cursor.rowcount, "Record inserted successfully into samples table")


def replace_remote_activation(data):
    try:
        connection = get_connection()
        if connection.is_connected():
            print("MariaDB connection is open")
            cursor = connection.cursor()
            replace_table(data, cursor, connection)
        else:
            print("Faild to connect to DB")
    except mysql.connector.Error as error:
        handle_db_connection_error(error)
    finally:
        print(connection.is_connected())
        if connection.is_connected():
            finish(cursor, connection)


def main():
    data = {
        'id' :1,
        'start_data' :datetime.datetime.now(),
        'finish_data' :2,
        'air_sys' :1,
        'water_sys' :1,
        'light_sys' :1,
        'fertelize_sys' :1 
    }
    replace_remote_activation(data)


if __name__ == '__main__':
    main()
