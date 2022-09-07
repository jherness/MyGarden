use mygarden;

/*
drop database mygarden
*/

/*
drop table samples;
*/

create table samples(
    dt_of_sample datetime default current_timestamp,
    key1 FLOAT NOT NULL,
    key2 FLOAT NOT NULL,
    key3 FLOAT NOT NULL,
    key4 FLOAT NOT NULL,
    key5 FLOAT NOT NULL,
    key6 FLOAT NOT NULL
);

select * from samples;