const {connection}=require('../DatabasecConfig/config.js')
const crypto = require('crypto');
const middleware = require('../midelware/auth.js');
const utils=require('../midelware/utils.js')
// const session=require ('./session.js')

module.exports = {
    LoginUser: (req, res) => {
      // Validate that req.body.Password exists
      if (!req.body.password) {
        return res.status(400).send('Password is required in the request body');
      }
  
      var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex');
  
      const query = `SELECT * from User where email="${req.body.email}"`;
      connection.query(query, (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else if (results.length > 0 && results[0].password === passwordHashed) {
          var session = utils.RandomString(32);
          middleware.CreateSession(req, res, results[0].id, session);
        } else if (results.length === 0 || results[0].password !== passwordHashed) {
          res.status(200).send('Something went wrong');
        } else {
          res.status(404).send('Not found');
        }
      });
    },
    Subscribe:(req,res)=>{
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
    
      // Check if the email already exists
      const checkEmailQuery = 'SELECT * FROM subscribe WHERE email = ?';
      connection.query(checkEmailQuery, [email], (err, results) => {
        if (err) {
          console.error('Error checking email:', err);
          return res.status(500).json({ error: 'Database error' });
        }
    
        if (results.length > 0) {
          // If email exists, update the 'test' field to true
          const updateQuery = 'UPDATE subscribe SET test = true WHERE email = ?';
          connection.query(updateQuery, [email], (err, updateResult) => {
            if (err) {
              console.error('Error updating email:', err);
              return res.status(500).json({ error: 'Database error' });
            }
            return res.json({ message: 'Email already exists, test updated to true' });
          });
        } else {
          // If email does not exist, insert the email with test = false (default)
          const insertQuery = 'INSERT INTO subscribe (email) VALUES (?)';
          connection.query(insertQuery, [email], (err, insertResult) => {
            if (err) {
              console.error('Error inserting email:', err);
              return res.status(500).json({ error: 'Database error' });
            }
            return res.json({ message: 'Email inserted successfully', id: insertResult.insertId });
          });
        }
      });
    },
    GetallEmail:((req,res)=>{
      const query='select * from subscribe'
      connection.query(query,(err,result)=>{
          err ? res.status(500).send(err) : res.status(201).send(result)
      })
  }),
  };
  