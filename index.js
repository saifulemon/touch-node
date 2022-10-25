const express = require('express')
const app = express()
const port = 2000;

app.get('/', (req, res) => {
  res.send('Hello from my second ever node');
});

const users = [
  {id:0, name:'Safiul Islam', email:'dev.saifulemon@gmail.com', phone:'01302050981'},
  {id:1, name:'Saikat Noman', email:'SaikatNoman@gmail.com', phone:'01302055444'},
  {id:2, name:'Arshadul Islam', email:'ArshadulIslam@gmail.com', phone:'01258545845'},
  {id:3, name:'Abu Hasnat', email:'AbuHasnat@gmail.com', phone:'013065654681'},
  {id:4, name:'Mahir Sahriar', email:'MahirSahriar@gmail.com', phone:'013056415481'},
  {id:5, name:'Meherul Ahmed', email:'MeherulAhmed', phone:'04872514581'}
]

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});