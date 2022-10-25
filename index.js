const express = require('express');
const cors = require('cors');
const app = express();
const port = 2000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from my second ever node');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
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
  const search = req.query.search;
  // use query parameter
  if(search) {
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(searchResult);
  }
  else {
    res.send(users);
  }
});

// dynamic API
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
})


app.get('/fruits', (req, res) => {
  res.send(['mango', 'banana', 'Apple', 'melon', 'orange']);
})