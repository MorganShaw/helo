-- SELECT * FROM posts;

-- SELECT p.id, p.title, p.author_id, u.profile_pic FROM posts p
-- JOIN users u
-- ON p.author_id = u.id;


SELECT p.id, p.title, p.author_id, u.username, u.profile_pic FROM posts p
JOIN users u
ON p.author_id = u.id;