SELECT * FROM posts
WHERE NOT author_id = $1;