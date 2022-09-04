from Drivers.Getdata import getdata
import mysql.connector

TABLE_NAME = "samples"
HOST = 'localhost'
DB_NAME = 'mygarden'
USER = 'root'
PASS = 'Q6kldxhtxiw'


def get_connection():
    connection = mysql.connector.connect(host=HOST,
                                         database=DB_NAME,
                                         user=USER,
                                         password=PASS)
    return connection


def handle_db_connection_error(error):
    print("Failed to insert record into MySQL table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MySQL connection is closed")


def update_table(cursor, connection):
    data = getdata()
    query = f"INSERT INTO {TABLE_NAME} (key1, key2, key3, key4, key5, key6) VALUES" \
            f" ({data['key1']}, {data['key2']}, {data['key3']}," \
            f" {data['key4']}, {data['key5']}, {data['key6']})"
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
