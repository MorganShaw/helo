module.exports = {
    getPosts: async (req, res) => {
        const {userposts, search} = req.query;
        const db = req.app.get('db');
        const posts = await db.posts.get_posts();
        res.state(200).send(posts);

    }


}
