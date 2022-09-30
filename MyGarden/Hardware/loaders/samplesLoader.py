import datetime
import mysql.connector
import sys
sys.path.append('/home/pi/irrsys/admin/')
import dbconfig

TABLE_NAME = "samples"


def get_connection():
    config = dbconfig.get_configuration()
    connection = mysql.connector.connect(host=config['HOST'],
                                         database=config['DB_NAME'],
                                         user=config['USER'],
                                         password=config['PASS'])
    return connection


def handle_db_connection_error(error):
    print("Failed to insert record into MariaDB table {}".format(error))


def finish(cursor, connection):
    cursor.close()
    connection.close()
    print("MariaDB connection is closed")


def update_table(data, cursor, connection):
    query = f"INSERT INTO {TABLE_NAME} (temperature, humidity, pressure, light, ground_humidity1," \
            f" ground_humidity2, ground_humidity3) VALUES " \
            f"({data['temperature']}, {data['humidity']}, {data['pressure']},{data['light']}, " \
            f"{data['ground_humidity1']}, {data['ground_humidity2']}, {data['ground_humidity3']})"
    cursor.execute(query)
    connection.commit()
    print(cursor.rowcount, "Record inserted successfully into samples table")


def load_new_sample(data):
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
         if connection.is_connected():
             finish(cursor, connection)


def main():
    data = {
        "id": 4,
        "dt_of_sample": datetime.datetime.now(),
        "temperature": 22,
        "humidity": 77,
        "pressure": 1010,
        "light": 1100,
        "ground_humidity1": 60,
        "ground_humidity2": 50,
        "ground_humidity3": 60
    }
    load_new_sample(data)


if __name__ == '__main__':
    main()
