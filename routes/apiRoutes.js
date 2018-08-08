var db = require("../models");

module.exports = function(app) {
  // Get all clients
  app.get("/api/clients", function(req, res) {
    db.client.findAll({}).then(function(clients) {
      res.json(clients);
    });
  });

  // Get one client
  app.get("/api/clients/:id", function(req, res) {
    db.client.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(client) {
      res.json(client);
    });
  });

  // Create a new client
  app.post("/api/clients", function(req, res) {
    db.client.create({
      fullname: req.body.fullname,
      shortname: req.body.shortname,
      mail: req.body.mail,
      phone: req.body.phone,
      dirf: req.body.dirf,
      createdate: req.body.createdate,
      lastpay: req.body.lastpay,
      proxpay: req.body.proxpay
    }).then(function(client) {
      res.json(client);
    });
  });

  // Update a client
  app.put("/api/clients/:id", function(req, res) {
    db.client.create(req.body).then(function(client) {
      res.json(client);
    });
  });

  // Delete an example by id
  app.delete("/api/clients/:id", function(req, res) {
    db.client.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(client) {
      res.json(client);
    });
  });

  //GET all movements
  app.get("/api/movements", function(req, res) {
    db.Movements.findAll({}).then(function(movements) {
      res.json(movements);
    });
  });

  //GET movements filtered by name 
  app.get("/api/movements/:id", function(req, res) {
    db.Movements.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(movement) {
      res.json(movement);
    });
  });

  //Create new movement
  app.post("/api/movements", function(req, res) {
    db.Movements.create({
      status: req.body.status,
      dateofpayment: req.body.dateofpayment,
      proxpay: req.body.proxpay,
      amount: req.body.amount,
      concept: req.body.cncept,
      discount: req.body.discount
    }).then(function(newMovement) {
      res.json(newMovement);
    });
  });

  // Delete a movement
  app.delete("/api/Movements/:id", function(req, res) {
    db.Movements.destroy({ where: { id: req.params.id } }).then(function(movements) {
      res.json(movements);
    });
  });
  
  app.get("/api/calendar/events", function(req, res) {
    calendar.s().then(function() {
      console.log(calendar.e)
      return(calendar.e);
    });
  });
};


