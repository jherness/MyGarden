import mysql.connector


TABLE_NAME = 'samples'
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


def delete_samples_over_month():
    try:
        connection = get_connection()
        if connection.is_connected():
                query = "DELETE FROM samples WHERE dt_of_sample < DATE_SUB(NOW(),INTERVAL 1 MONTH)"
                mycursor = connection.cursor()
                mycursor.execute(query)
                connection.commit()
                print(mycursor.rowcount, "record(s) deleted")
        else:
            print("Faild to connect to DB")
    except mysql.connector.Error as error:
        handle_db_connection_error(error)
    finally:
        if connection.is_connected():
            finish(mycursor, connection)


def handle_db_connection_error(error):
    print("Failed to delete records in MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def main():
    delete_samples_over_month()


if __name__ == '__main__':
    main()
