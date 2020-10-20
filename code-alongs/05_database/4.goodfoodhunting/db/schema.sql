CREATE DATABASE goodfoodhunting; 

CREATE TABLE dishes (
    id SERIAL PRIMARY KEY,
    name varCHAR(200),
    image_url TEXT
); 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email varCHAR(200),
    password_digest TEXT
); 

INSERT INTO dishes (name, image_url) VALUES ('dt', 'https://images.squarespace-cdn.com/content/v1/5c9a3b6dc46f6d168c59778c/1554303948470-SB10Y0NI9L881CXBD6OR/ke17ZwdGBToddI8pDm48kG87Sfbgg29A4BYEDq3OXvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcf4OxbJOyh_wHUnyc4kQLQ6SBshRGOku7c30Y_IRDNPta8R2IY5BHMaEj1zOWoDTZ/shutterstock_573417244.jpg?format=1000w');
INSERT INTO dishes (name, image_url) VALUES ('steve', 'https://241554-744745-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/07/774-English-v-Australian-food-square.jpg');