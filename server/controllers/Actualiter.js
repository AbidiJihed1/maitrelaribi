const {connection}=require('../DatabasecConfig/config')
module.exports={
    GetPoste:((req,res)=>{
        const query='select * from Post'
        connection.query(query,(err,result)=>{
            err ? res.status(500).send(err) : res.status(201).send(result)
        })
    }),
    AddPost: (req, res) => {
        const { title, imageUrl, text, fileUrl } = req.body;
        const query = `INSERT INTO Post (title, imageUrl, fileUrl, text) VALUES ("${title}", "${imageUrl}", "${fileUrl}", "${text}")`;
        
        connection.query(query, (err, result) => {
            err ? res.status(500).send(err) : res.status(200).send('Post added');
        });
    },
    
    UpdatePost: ((req, res) => {
        const postId = req.params.id; // Assuming the post ID is provided in the request parameters
        const { title, imageUrl, text } = req.body;
    
        const query = `UPDATE Post SET title="${title}", imageUrl="${imageUrl}", text="${text}" WHERE id=${postId}`;
        
        connection.query(query, (err, result) => {
            err ? res.status(500).send(err) : res.status(200).send('Post updated successfully');
        });
    }),
    DeletePost: ((req, res) => {
        const postId = req.params.id; // Assuming the post ID is provided in the request parameters
    
        const query = `DELETE FROM Post WHERE id=${postId}`;
    
        connection.query(query, (err, result) => {
            err ? res.status(500).send(err) : res.status(200).send('Post deleted successfully');
        });
    }),
    GetUser:((req,res)=>{
        const query='select * from User'
        connection.query(query,(err,result)=>{
            err ? res.status(500).send(err) : res.status(201).send(result)
        })
    }),
    
    
}