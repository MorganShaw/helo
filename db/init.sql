CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(id)
);

ALTER TABLE users
ALTER COLUMN password TYPE TEXT;








--------------- Dummy data ---------------

-- Seems like I can't put dummy data into the users table because I can't store a password in the database (unless it's a hash password). I tried putting some awesome dummy data into the posts table (but it didn't work because I can't figure out how to do that with the author_id referencing the user id. Ok. I'll put some dummy data into Postman.)
INSERT INTO users (username, profile_pic)
VALUES...
