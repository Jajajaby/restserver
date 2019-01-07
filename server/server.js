const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
app.get('/usuario', function (req, res) {
  // res.send recibe en formato html
  // res.json recibe en formato JSON
  res.json('GET Usuario');
})

app.post('/usuario', function (req, res) {
  res.json('POST Usuario');
})

app.put('/usuario/:id', function (req, res) {
  let user_id = req.params.id;
  res.json({
    user_id
  })
})

app.delete('/usuario', function (req, res) {
  res.json('DELETE Usuario');
})
 
app.listen(3000, () => {
  console.log("Escuchando puerto: ", 3000);
})