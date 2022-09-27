import datetime
import mysql.connector


TABLE_NAME = "currently_active"
HOST = '192.168.1.198'
DB_NAME = 'mygarden'
USER = 'irruser'
PASS = 'irrpass'



def get_connection():
    connection = mysql.connector.connect(host=HOST,
                                         database=DB_NAME,
                                         user=USER,
                                         password=PASS)
    return connection


def handle_db_connection_error(error):
    print("Failed to insert record into MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def update_table(data, cursor, connection):
    query = f"INSERT INTO currently_active(water_sys, air_sys, light_sys, fertelize_sys) VALUES " \
            f"({data['water_sys']}, {data['air_sys']}, {data['light_sys']}, {data['fertelize_sys']})"
    cursor.execute(query)
    connection.commit()
    print(cursor.rowcount, "Record inserted successfully into currently_active table")


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
