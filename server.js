const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage }).single('files')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

app.set('views', path.join(__dirname, 'views', 'pages'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index.html')
})

app.post('/', function(req, res) {
  upload(req, res, function(err) {
    res.redirect('/')
  })
});

app.listen('3000', () => {
  console.log(`server running at 3000`)
})