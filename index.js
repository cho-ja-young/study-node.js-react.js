const express = require('express') // express모듈을 가져왔다.
const app = express() // 함수를 이용해서 express 앱을 만든다. 
const port = 3000 // 아무거나 해도 된다. 
const bodyParser = require('body-parser') // req.body 로 클라이언트에게 보내는 정보를 받아준다. 

const config = require('./config/key')

const {User} = require("./models/User")

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// application/json
app.use(bodyParser.json())


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => { // 루트 디렉토리에 Hello World!가 출력되게끔
  res.send('Hello World!')
})


app.post('/register', (req, res) => {

  // 회원가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다. 

  const user = new User(req.body) // DB에서 받아오기 

  // 회원가입을 위한 라우트 
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    }) // 성공했다는 의미 
  }) // 몽고 DB 메소드 
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


