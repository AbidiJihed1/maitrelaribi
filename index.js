const app = require("./server/index");
const express = require("express")
const port = 5800;
const path = require("path");
const cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'maitrelaribi/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/maitrelaribi/build/index.html'));
});

app.listen(port,() => {
  console.log(`Backend server is running!  http://localhost:${port}`);
});