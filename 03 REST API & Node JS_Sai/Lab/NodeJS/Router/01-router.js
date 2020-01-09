var express = require("express");
var path = require("path");
var app = express();

var router = express.Router();
app.use("/", router);

router.param("user_id", function(req, res, next,id) {
  req.user = {
    id: id,
    name: "TJ"
  };
  next();
});

router.get("/test", (req, res) => {
  res.send("from test");
});

router.route("/users/:user_id-:user_id").all((req,res,  next) => {
  console.log("Hello");
  next();
});

router
  .route("/users/:user_id")
  .all(function(req, res, next) {
    console.log("hello");
    next();
  })
  .get(function(req, res, next) {
    res.json(req.user);
  })
  .put((req, res, next) => {
    req.user.name = req.query.name;
    
  
    res.json(req.user);
  })
  .post((req, res, next) => {
    next(new Error("not implemented post"));
  })
  .delete((req, res, next) => {
    next(new Error("not implemented delete"));
  });

var server = app.listen(5000, function() {
  console.log("Node server is running..");
});
