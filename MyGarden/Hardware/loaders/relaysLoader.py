import datetime
import mysql.connector
import sys
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
    print("Failed to update record in MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def update_table(data, cursor, connection):
    query = f"UPDATE {TABLE_NAME} SET" \
	    f" air_sys = {data['air_sys']}, water_sys = {data['water_sys']},"\
            f" light_sys = {data['light_sys']}," \
            f"fertelize_sys = {data['fertelize_sys']}  WHERE id = 1;"
    cursor.execute(query)
    connection.commit()
    print(cursor.rowcount, "Record updated successfully into currently_active table")


def load_currently_active(data):
    try:
        connection = get_connection()
        if connection.is_connected():
            cursor = connection.cursor()
            update_table(data, cursor, connection)
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
            "water_sys": 1,
            "air_sys": 0,
            "light_sys": 1,
            "fertelize_sys": 0
        }

    load_currently_active(data)


if __name__ == '__main__':
    main()
