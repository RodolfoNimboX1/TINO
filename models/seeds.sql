
USE myClientsdb; 
INSERT INTO clients(fullname, shortname, mail, phone, dirf, notes, createdAt, updatedAt) 
VALUES 
  ("Maria Gonzalez " , "Maria.", "maria.gzz@gmail.com", "818 253 9082", "sha la la  301 cp 6091", "contrato por 10 meses.", NOW(), NOW()),
  ("Jesus Maldonado " , "Chuy M.", "chuy.m@gmail.com", "818 253 9082", "Av. El Rosario 301 cp 6091", "Contrato por cuatro meses.", NOW(), NOW()),
  ("Sergio Martinez", "Serg. M", "Sergio.82@gmail.com", "811 6449370", "Morones Prieto 132 Pte cp 6400", "sin notas", NOW(), NOW()),
  ("Eloisa Guerra", "Eloisa", "e.guerra@yahoo.com", "818 3985749", "Plutarco elias calles 144 Barrio Tampiquito cp 66240", "se le realizo un descuento en primer pago del 20%", NOW(), NOW());
    
    


INSERT INTO Movements(status, dateofpayment, proxpay, amount, concept, createdAt, updatedAt, clientId)
 VALUES     ("Pending", "2018/08/03","2018/09/03", 12500, "renta bodega", NOW(), NOW(), 1),
            ("Paid", "2018/08/01","2018/09/01", 20000, "web design", NOW(), NOW(),2),
            ("Paid", "2018/08/22","2018/09/22", 17500, "web developement", NOW(), NOW(), 3),
            ("Early", "2018/08/18", "2018/09/18", 8500, "logo Design", NOW(), NOW(), 4);

    
    
SELECT * FROM clients;
SELECT * FROM Movements;