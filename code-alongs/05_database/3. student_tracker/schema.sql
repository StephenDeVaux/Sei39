CREATE DATABASE school;
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT,
  score INTEGER
);
insert into students (name, score) values ('ned', 100);
insert into students (name, score) values ('ned', 12);