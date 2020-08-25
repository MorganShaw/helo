INSERT INTO posts
(title, img, content, author_id)
VALUES
($1, $2, $3, $4)
-- RETURNING *;


-- INSERT INTO posts
-- (title, img, content, author_id)
-- VALUES
-- ('Neck pain is no fun!', 'https://commonwealthspineandpain.com/wp-content/uploads/2016/03/iStock_000061745356_Small.jpg', 'Make it stop!', 2);