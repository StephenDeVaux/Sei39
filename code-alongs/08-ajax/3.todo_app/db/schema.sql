CREATE DATABASE todo_app;

\c todo_app;

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL
);

INSERT INTO todos (content) VALUES ('have lunch');
INSERT INTO todos (content) VALUES ('have dinner');