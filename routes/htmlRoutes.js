
var db = require("../models");

module.exports = function(app) {

//- GET pontealtino.com/
app.get("/",function(req, res) {
  res.render("index", {name: "testname"})
});


//- GET pontealtino.com/clients
app.get("/clients", function(req, res) {
  db.client.findAll({
    attributes: ["shortname", "mail", "phone"]
  }).then(function(allClients) {
    console.log(allClients);
    res.render("allClients", allClients);
  });
});


//- GET pontealtino.com/clients/:x
app.get("/clients/:id", function(req, res) {
  db.client.findOne({   
    where:  { id: req.params.id } 
  }).then(function(client) {
    console.log(client);
    res.render("filterclient", {name: "testname"});
  });
});

//- POST pontealtino.com/newclient
app.get("/newclient", function(req, res) {
  res.render("newclient");
});

//- POST pontealtino.com/newclient
app.post("/newclient", function(req, res) {
  db.client.create(req.body).then(function(newClientdb) {
    res.render("newclient", newClientdb);
  });
});


//- GET pontealtino.com/movements
app.get("/movements", function(req, res) {
  db.Movements.findAll({ 
    attributes: [ "status", "concept", "dateofpayment"]
  }).then(function(allMovements) {
    res.render("allMovements", allMovements);
  });
});

//- GET pontealtino.com/movements/:date
app.get("/movements/:date", function(req, res) {
  db.Movements.findOne({ 
    where:  { dateofpayment: req.params.date } 
  }).then(function(datePayment) {
    res.render("clientProfile", datePayment);
  });
});

// -GET pontealtino.com/newmovement

app.get("/newmovement", function(req, res) {
  db.Movements.create(req.body).then(function(newMovdb) {
    res.render("newmovement", newMovdb);
  });
});

//- GET pontealtino.com/reports
app.get("/report",function(req, res) {
  db.Report.findAll({}).then(function(showreport){
    res.render("report", showreport);
  })
});

//- GET pontealtino.com/calendar
app.get("/calendar",function(req, res) {
  res.render("calendar")
});
// - CREATE PDF

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};