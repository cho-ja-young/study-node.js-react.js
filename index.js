const express = require('express') // express모듈을 가져왔다.
const app = express() // 함수를 이용해서 express 앱을 만든다. 
const port = 3000 // 아무거나 해도 된다. 

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://JaMong_0226:whwkahd1004@boilerplate.3xzzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => { // 루트 디렉토리에 Hello World!가 출력되게끔
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
