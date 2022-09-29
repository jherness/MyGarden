import mysql.connector


TABLE_NAME = "sys_mod"
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
    print("Failed to update record in MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def get_data(cursor, connection):
    query = "SELECT * FROM sys_mod"
    cursor.execute(query)
    records = cursor.fetchall()
    result = {"is_auto" : records[0][1] == True, "max_temp" : records[0][2], "min_moist" : records[0][2]}
    return(result)



def get_sys_mod():
    try:
        connection = get_connection()
        if connection.is_connected():
            print("MariaDB connection is open")
            cursor = connection.cursor()
            get_data(cursor, connection)
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


