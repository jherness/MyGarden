use mygarden;

/*
drop table samples;
*/

create table samples(
    dt_of_sample datetime default current_timestamp,
    key1 varchar(255),
    key2 varchar(255),
    key3 varchar(255),
    key4 varchar(255),
    key5 varchar(255),
    key6 varchar(255)
);

select * from samples;