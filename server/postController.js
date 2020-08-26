module.exports = {
    getPosts: async (req, res) => {
        const {userposts, search} = req.query;
        const {userId} = req.params;
        const db = req.app.get('db');
        if(userposts && search) {
            const posts = await db.get_posts_by_title(`%${search}%`)
            res.status(200).send(posts)
        } else if(!userposts && !search) {
            const posts = await db.get_posts_by_author(userId)
            res.status(200).send(posts)
        } else if(!userposts && search) {
            const posts = await db.get_posts_by_author_title([userId, `%${search}%`])
            res.status(200).send(posts)
        } else {
            const posts = await db.get_posts()
            res.status(200).send(posts)
        } 
    },
    addPost: async (req, res) => {
        const {userId} = req.params;
        const { title, img, content } = req.body;
        const db = req.app.get("db");
        //Pass them in as an object when you're going to reference them by variable names instead of $1, $2, etc in the SQL query.
        const [post] = await db.add_post(
          title,
          img,
          content,
          userId
        );
        res.status(200).send(post);
    }

}


// let filteredGenre = books.filter(book => book.genre === genre)

/////?userposts=true

// return all posts where userposts is true and search is a String.

// const filterPosts = () => {
//     for(let i = 0; i < posts.length; i++){
//         if (userposts !== null && search !==  null && posts[i].title.includes(search)) {
//             return posts[i]
//         } 
//         if(!userposts && !search && posts[i].author_id !== user.author_id){
//             return posts[i]
//         }
//         if(!userposts && search !== null && posts[i].title.includes(search) && posts[i].author_id !== user.author_id) {
//             return posts[i]
//         } 
//         if(userposts !== null && !search) {
//             return posts[i]
//         }

//     }

// }

// const filteredTitle = posts.filter(post => post.title === search)