const express = require("express");
const app = express();
const port = 3000;


const postRouter = require('./routers/post');


app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
    console.log('Benvenuto nel mio Blog');
    res.send('Benvenuto nel mio Blog')
})

app.use('/posts', postRouter);

//listen
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});