
var db = require("../models");

module.exports = function(app) {

//- GET pontealtino.com/

//- GET pontealtino.com/clients
app.get("/clients", function(req, res) {
  db.Example.findAll({}).then(function(myClientsdb) {
    res.render("clients", {
      msg: "Welcome",
      examples: myClientsdb
    });
  });
});
//- GET pontealtino.com/clientes/:x
//- GET pontealtino.com/movimientos
//- GET pontealtino.com/movimientos/:x
//- GET pontealtino.com/reportes
//- GET pontealtino.com/calendar


  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};


