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

-- Dummy data. Seems like I can't put dummy data into the users table because I can't store a password in the database (unless it's a hash password). I tried putting some awesome dummy data into the posts table (but it didn't work because I can't figure out how to do that with the author_id referencing the user id.)
INSERT INTO users (title, username, profile_pic)
VALUES

INSERT INTO posts (title, img, content, author_id)
VALUES
('Happy Halloween!', 'https://www.google.com/url?sa=i&url=http%3A%2F%2Faop-campus.com%2Fhappy-halloween%2F&psig=AOvVaw1ttAH0Oul-DBeNK9K2hM8t&ust=1597509805560000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDuoYKSm-sCFQAAAAAdAAAAABAD', 'Happy Halloween, everyone! I hope you all get plenty of candy and no razor blades in your apples.', 2),
('TBT', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy630dZyiSLs%2Fhqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy630dZyiSLs&tbnid=f8ijwHgslQwwKM&vet=12ahUKEwiLoMnWkpvrAhUJRs0KHbYDBucQMygCegUIARDBAQ..i&docid=l8Xhc_isoIcvnM&w=480&h=360&q=high%20school%20musical%20graduation%20zac%20efron&safe=active&ved=2ahUKEwiLoMnWkpvrAhUJRs0KHbYDBucQMygCegUIARDBAQ', 'Remember when Zac Efron gave a stirring graduation speech? Those were the days. Why does he have such a big beard now?', 1),
('Feeling the burn', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbiomehealthandfitness.com%2Ffitness-programs%2Fgainz%2F&psig=AOvVaw0o4BsqnX9OOWU7jdXYoYMy&ust=1597510149227000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCf3KOTm-sCFQAAAAAdAAAAABAD', 'Losers make excuses. Winners make gainz.', 3);

