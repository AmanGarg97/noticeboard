const express = require('express')
const path = require('path')
var multer  = require('multer')
const ejs = require('ejs');
const notice = require('./db').notice

const app = express();

const port = process.env.PORT || 2679

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)


// This is I am trying for image uploading



// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

// Init app

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/views/index.ejs', (req, res) => res.render('index'));

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
        //console.log(req.file.path)
        //console.log(req.body.id)
        //console.log('Aman Garg')
        var pathimage = req.file.path;
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      //Adding to database.
  notice.update(
    {imagepath : pathimage},
    {where : {id : req.body.id}}
  ).then(result =>
     handleResult(result)
  ).catch(err=>
    res.status(501).send({
      error: "Could not add image"
  })
  )

      }
    }
//     console.log("outside uploads")
// console.log(req.body.id)
// console.log(req.file.path)
  });
});



//My testing ends here.


app.listen(port, () => console.log('Server started at http://localhost:2679'))