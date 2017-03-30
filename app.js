var express      = require("express"),
    bodyParser   = require("body-parser"),
    app          = express();
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
    res.render("betterPortfolio");
});

app.get("/mywork", function(req, res){
    res.render("mywork");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});