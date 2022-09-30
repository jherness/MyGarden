import mysql.connector
import sys
sys.path.append('/home/pi/irrsys/admin/')
import dbconfig

TABLE_NAME = "sys_mod"


def get_connection():
    config = dbconfig.get_configuration()
    connection = mysql.connector.connect(host=config['HOST'],
                                         database=config['DB_NAME'],
                                         user=config['USER'],
                                         password=config['PASS'])
    return connection


def handle_db_connection_error(error):
    print("Failed to fetch  record in MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def get_data(cursor, connection):
    query = f'SELECT * FROM {TABLE_NAME}'
    cursor.execute(query)
    records = cursor.fetchall()
    result = {"is_auto" : records[0][1] == 1, "max_temp" : records[0][2], "min_moist" : records[0][3]}
    print(result)
    return(result)


def get_sys_mod():
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
    get_sys_mod()


if __name__ == '__main__':
    main()
