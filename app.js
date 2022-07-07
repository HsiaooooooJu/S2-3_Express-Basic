const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// set localhost router
app.get('/', (req, res) => {
  res.render('index', { title: '首頁' })
})

// set detail page router
app.get('/:detailPage', (req, res) => {
  const { detailPage } = req.params
  res.render('index', { title: detailPage })
})

// set port
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})

// set static file
app.use(express.static('public'))