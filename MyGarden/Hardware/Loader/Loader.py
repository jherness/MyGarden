import mysql.connector
import json

TABLE_NAME = "samples"
HOST = '192.168.1.157'
DB_NAME = 'mygarden'
USER = 'root'
PASS = 'admin1'


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


def update_table(cursor, connection):
    data = json.{}
    query = f"INSERT INTO {TABLE_NAME} (temperature, humidity, pressure, light, ground_humidity1, ground_humidity2, ground_humidity3) VALUES" 
            f" ({data['temperature']}, {data['humidity']}, {data['pressure']}," \
            f" {data['light']}, {data['ground_humidity1']}, {data['ground_humidity2']}, {data['ground_humidity3']})"
    cursor.execute(query)
    connection.commit()
    print(cursor.rowcount, "Record inserted successfully into samples table")


def main():
    try:
        connection = get_connection()
        if connection.is_connected():
            cursor = connection.cursor()
            update_table(cursor, connection)
        else:
            print("Faild to connect to DB")
    except mysql.connector.Error as error:
        handle_db_connection_error(error)
    finally:
        if connection.is_connected():
            finish(cursor, connection)


if __name__ == '__main__':
    main()
