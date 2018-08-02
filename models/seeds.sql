INSERT INTO clients(fullname, shortname, mail, phone, dirf, createdate, notes) 
    VALUES ("Maria Gonzalez" , "Maria G.", "mari.g@gmail.com", "818 253 9082", "Av. El Rosario 301 cp 6091", "Contrato por dos meses.");
INSERT INTO clients(fullname, shortname, mail, phone, dirf, createdate, notes)    
    VALUES ("Sergio Martinez", "Serg. M", "Sergio.82@gmail.com", "811 6449370", "Morones Prieto 132 Pte cp 6400", "sin notas");
INSERT INTO clients(fullname, shortname, mail, phone, dirf, createdate, notes)    
    VALUES ("Eloisa Guerra", "Eloisa", "e.guerra@yahoo.com", "818 3985749", "Plutarco elias calles 144, Barrio Tampiquito cp 66240", "se le realizo un descuento en primer pago del 20%");


INSERT INTO Movements(status, dateofpayment, proxpay, amount, concept, discount)
    VALUES ("Pending", "2018/08/03","2018/09/03", 12500, "renta bodega");
INSERT INTO Movements(status, dateofpayment, proxpay, amount, concept, discount)
    VALUES ("Paid", "2018/08/01","2018/09/01", 20000, "web design");
INSERT INTO Movements(status, dateofpayment, proxpay, amount, concept, discount)
    VALUES ("Paid", "2018/08/22","2018/09/22", 17500, "web developement");