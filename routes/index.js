const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/users/:username', (req, res) => {
  res.send(req.params.username)
})

router.get('/books/:bookId', (req, res) => {
  res.send(req.params)
})

router.get('/users/:username/books/:bookId', (req, res) => {
  const { username, bookId } = req.params
  res.send(`${username} ${bookId}`)
  /* Buscar a la persona y buscar los libros con ese ID, para mostrar una vista de los libros que pertenecen a ese usario */
})

router.get('/search', (req, res) => {
  
  res.send(req.query)
})

router.get('/get-user-info', (req, res) => {
  res.render('user-info-form');
});

router.get('/display-user-info', (req, res) => {
  const { name, age, superhero } = req.query
  res.send(`
    Your name is ${name}
    Your age is ${age}
    Your favorite superhero is ${superhero}
  `)
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.post('/login', (req,res) => {
  // 👇🏼 No hagan esto NUNCAAAAAA
  console.log(req.body)
  const { email, password } = req.body
  res.send(`Email: ${email}, Password: ${password}`)
})

router.get('/test', (req, res) => {
  res.send(req.bodyFake);
});

module.exports = router