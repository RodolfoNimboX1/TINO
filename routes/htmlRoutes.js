
var db = require("../models");

module.exports = function(app) {

//- GET pontealtino.com/
app.get("/",function(req, res) {
  res.render("index", {name: "testname"})
});

//- GET pontealtino.com/clients
app.get("/clients", function(req, res) {
  db.Clients.findAll({
    attributes: ["shortname", "mail", "phone"]
  }).then(function(allClients) {
    console.log(allClients);
    res.render("allClients", allClients);
  });
});


//- GET pontealtino.com/clients/:x
app.get("/pontealtino.com/clients/:name", function(req, res) {
  db.Clients.findOne({ 
    where:  { fullname: req.params.name } 
  }).then(function(clientX) {
    res.render("filterclient", {name: "testname"});
  });
});

//- GET pontealtino.com/newclient
app.post("/pontealtino.com/newclient", function(req, res) {
  db.Clients.create(req.body).then(function(newClientdb) {
    res.json(newClientdb);
  });
});


//- GET pontealtino.com/movements
app.get("/pontealtino.com/movements", function(req, res) {
  db.Movements.findAll({ 
    attributes: ["shortname", "status", "concept", "dateofpayment"]
  }).then(function(allMovements) {
    res.render("movements", allMovements);
  });
});

//- GET pontealtino.com/movements/:date
app.get("/pontealtino.com/movements/:date", function(req, res) {
  db.Movements.findOne({ 
    where:  { dateofpayment: req.params.date } 
  }).then(function(datePayment) {
    res.render("clientProfile", datePayment);
  });
});

// -GET pontealtino.com/newmovement

app.get("/pontealtino.com/newmovement", function(req, res) {
  db.Movements.create(req.body).then(function(newMovdb) {
    res.json("newMovdb", newMovdb);
  });
});

//- GET pontealtino.com/reports
app.get("/report",function(req, res) {
  db.Report.findAll({}).then(function(showreport){
    res.render("report", showreport);
  })
  res.render("report");
});

//- GET pontealtino.com/calendar



  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};



