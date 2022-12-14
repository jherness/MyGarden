import mysql.connector
import dbconfig


TABLE_NAME = 'samples'


def get_connection():
    config = dbconfig.get_configuration()
    connection = mysql.connector.connect(host=config['HOST'],
                                         database=config['DB_NAME'],
                                         user=config['USER'],
                                         password=config['PASS'])
    return connection


def delete_samples_over_month():
    try:
        connection = get_connection()
        if connection.is_connected():
                query = f'DELETE FROM {TABLE_NAME} WHERE dt_of_sample < DATE_SUB(NOW(),INTERVAL 1 MONTH)'
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
