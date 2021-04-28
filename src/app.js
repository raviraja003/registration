const express = require("express");
const path = require('path');
const app = express();
const hbs = require("hbs");

const Register = require('./models/data');
require("./db/conn");
require("./db/prod")(app);

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(static_path));
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
    res.render('register');
  });

app.get('/login', (req, res) => {
    res.render('login');
  });

app.get("/", (req, res) => {
    res.render("index")
});

app.post('/register', async(req,res) => {
    try {
        const password = req.body.password;
        const xpassword = req.body.Confirmpassword;

        if (password === xpassword) {
            const registerData = new Register({
                Firstname: req.body.Firstname,
                Lastname: req.body.Lastname,
                Email: req.body.Email,
                gender: req.body.gender,
                age: req.body.age,
                Phone:req.body.Phone,
                password:password,
                confirmpassword:xpassword,
                city:req.body.city
            })
            const registered = await registerData.save();
            res.status(201).render('login'); 
        } else {
            res.send('passwaord is not matched');
        }

    } catch (error) {
      res.status(400).send(error);
    }
      
})

app.post('/login', async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
        if (useremail.password === password) {
            res.status(201).render('index');
        } else {
            res.send('passwaord is not matched');
        }
    } catch (error) {
        res.status(400).send(error);
    }
  });




  app.listen(3000,() => console.log('connected.......'));

// app.listen(port, () => {
//     console.log(`server is running at port no. ${port}`);
// })