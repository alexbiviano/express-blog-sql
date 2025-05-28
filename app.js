const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/script');

//error 500
const errorsCatcher = require('./middlewares/errorsCatcher');

const notFound = require('./middlewares/Notfound');
app.use(express.static('public'));
app.use(express.json());
app.use("/script", postsRouter);
app.use(errorsCatcher);


app.use(notFound);
app.listen (port, () => {
    console.log('Server attivato sulla porta ' + port);
});
 
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
  console.log(`Server in ascolto sulla porta ${PORT}`);  
});  