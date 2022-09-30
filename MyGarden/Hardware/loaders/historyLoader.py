import datetime
import mysql.connector
import sys
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
    print("Failed to insert record in MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def insert_table(data, cursor, connection):
    query = f"REPLACE INTO {TABLE_NAME} (`dateTime_of_activation`, `finish_hour`, `activation_code`)" \
            f" VALUES ('{data['dateTime_of_activation']}'," \
            f" '{data['finish_hour']}', {data['activation_code']});"  
    cursor.execute(query)
    connection.commit()
    print(cursor.rowcount, "Record inserted successfully into activation_history table")


def load_activation_history(data):
    try:
        connection = get_connection()
        if connection.is_connected():
            cursor = connection.cursor()
            insert_table(data, cursor, connection)
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
        "dateTime_of_activation": datetime.datetime.now(),
        "finish_hour": "12:42:55",
        "activation_code": 7
    }

    load_activation_history(data)



if __name__ == '__main__':
    main()
