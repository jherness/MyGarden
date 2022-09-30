import mysql.connector
import sys
import datetime
sys.path.append('/home/pi/irrsys/admin/')
import dbconfig

TABLE_NAME = "activation_history"
 


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
    query = f'SELECT * FROM {TABLE_NAME}'
    cursor.execute(query)
    records = cursor.fetchall()
    return(records)



def get_activation_history():
    try:
        connection = get_connection()
        if connection.is_connected():
            print("MariaDB connection is open")
            cursor = connection.cursor()
            return( get_data(cursor, connection))
        else:
            print("Faild to connect to DB")
    except mysql.connector.Error as error:
        handle_db_connection_error(error)
    finally:
        print(connection.is_connected())
        if connection.is_connected():
            finish(cursor, connection)


def main():
    get_activation_history()


if __name__ == '__main__':
    main()
