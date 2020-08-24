SELECT * FROM posts
WHERE NOT author_id = $1
AND title = $1;