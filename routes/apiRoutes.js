var db = require("../models");

module.exports = function(app) {
  // Get all clients
  app.get("/api/clients", function(req, res) {
    db.Client.findAll({}).then(function(client) {
      res.json(client);
    });
  });

  // Get one client
  app.get("/api/clients/:id", function(req, res) {
    db.Client.findAll({}).then(function(client) {
      res.json(client);
    });
  });

  // Create a new client
  app.post("/api/clients", function(req, res) {
    db.Client.create({
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
    db.Client.create(req.body).then(function(client) {
      res.json(client);
    });
  });

  // Delete an example by id
  app.delete("/api/clients/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
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
  
};


