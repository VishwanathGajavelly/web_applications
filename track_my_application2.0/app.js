var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();
var mongo = require('mongojs');
var ObjectId = mongo.ObjectId;
var db = mongo('jobsapp', ['jobs2']);




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.locals.errors = null; //to declare any global variables.
    next();
})

// Error formating - validator.
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

var jobs = [];

app.get('/', function (req, res) {

    db.jobs2.find(function(err,docs){
        console.log(docs);
          //res.send('Hello');
        res.render('index', {
        title: 'JOBS',
        jobs: docs

    });
    })

});

app.post('/jobs/add', function (req, res) {
    console.log(req.body.company);
    console.log(req.body.location);
    console.log(req.body.title);
    req.checkBody('company', 'Company is required').notEmpty();
    req.checkBody('location', 'Location is required').notEmpty();
    req.checkBody('title', 'Title is required').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        console.log("ERRORS");
        var title = 'vishwa';
        res.render('index', {
            title: title,
            jobs: jobs,
            errors: errors


        });

    } else {
        var newJob = {
            date: req.body.date,
            company: req.body.company,
            location: req.body.location,
            title: req.body.title

        }
        db.jobs2.insert( newJob, function(err,result){
            if(err){
                console.log(err);
            }
            res.redirect('/');
        });
    }

});

app.delete('/jobs/delete/:id', function(req,res){
    console.log("Delete Request.");
    db.jobs2.remove({_id: ObjectId(req.params.id)}, function(err,result){
         if(err){
             console.log("Error in the request.");
             console.log(err);
         }
            res.redirect('/');
    });
});

app.listen(3000, function () {
    console.log('Server Started on Port 3000');
})