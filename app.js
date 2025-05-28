const express = require('express');  
const dbConnection = require('./dbConfig'); 

const app = express();  
app.use(express.json());  

 
app.delete('/posts/:id', (req, res) => {  
  const postId = req.params.id;  
  const query = 'DELETE FROM posts WHERE id = ?'; 

  dbConnection.query(query, [postId], (err, results) => {  
    if (err) {  
      console.error('Errore nella query: ', err);  
      return res.status(500).json({ error: 'Errore nell\'eliminazione del post' });  
    }  
    
    if (results.affectedRows === 0) {  
      return res.status(404).json({ error: 'Post non trovato' });  
    }  
    
    res.status(204).send();  
  });  
});  

 
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
  console.log(`Server in ascolto sulla porta ${PORT}`);  
});  