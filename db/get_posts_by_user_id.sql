SELECT p.title, p.author_id, u.profile_pic FROM posts p
JOIN users u
ON p.author_id = u.id
WHERE author_id = $1;

-- SELECT * FROM posts p
-- JOIN users u 
-- ON p.author_id=u.id
-- WHERE author_id = $1;