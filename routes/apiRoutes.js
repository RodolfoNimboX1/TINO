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
  app.update("/api/clients/:id", function(req, res) {
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
};
