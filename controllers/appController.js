const posts = require('../data/posts');

const connection = require('../data/db');


function index(req, res) {

    const sql = "SELECT * FROM `posts`";

    connection.query(sql, () => {
        if (err) return res.status(500).json({ error: "Si è verificato un errore." });
    });

    res.json(res);
};

function show(req, res) {
    const id = parseInt(req.params.id);

    const sql = `SELECT * FROM posts WHERE id = ?`;

    connection.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: "Qualcosa è andato storto! Riprova" });
        if (result.length === 0) return res.status(404).json({ error: "Error 404" });
    });

    res.json(res);
};

function modify(req, res) {
    const { id } = req.params;
    res.send(`Modifica di un post tramite id ${id}`);
};

function store(req, res) {

    const newId = posts[posts.length - 1].id + 1;
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };

    console.log(newPost);

    posts.push(newPost);
    res.status(201); 

    res.json('Aggiunta nuovo post');
};

function update(req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json({
            error: "Not found",
            message: "Errore. L'elemento è stato eliminato"
        });
    };

    //Aggiornamento posts
    posts.id = req.body.id,
        posts.title = req.body.title;
    posts.content = req.body.content;
    posts.image = req.body.image;
    posts.tags = req.body.tags;

    res.send(`Modifica del post tramite id ${id}`);
};

function destroy(req, res) {
    const id = parseInt(req.params.id);

    const sql = 'DELETE FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, result) => {

        if (err) return res.status(500).json({ error: "Qualcosa è andato storto! Riprova" });

        res.sendstatus(204);
    });
};


module.exports = { index, show, modify, store, update, destroy };