const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const nonsenseGenerator = require('./nonsense_generator')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

// 註冊樣板 ifEquals 方法
app.engine('handlebars', exphbs({
  helpers: {
    ifEquals: function (arg1, arg2, options) {
      if (arg1 === arg2) return options.fn(this)
    }
  }
}))
app.set('view engine', 'handlebars')

// setting bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const jobs = req.body.jobs
  const sentance = nonsenseGenerator(jobs)
  res.render('index', { jobs, sentance })
})

app.listen(port, () => {
  console.log(`nonsecse_generator server is running on port ${port}`)
})
