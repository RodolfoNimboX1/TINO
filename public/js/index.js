
function loadClients(client){
  //creates an element like Example 1 in allClients.handlebars
  var clientList = $("<li class='clients'>");
  var clientListDiv = $("<div class='client-item'>");
  clientList.append(clientListDiv);

  var dropdownDiv = $("<div class='dropdown'>");
  var dropdownBtn = $('<a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">');
  dropdownDiv.append(dropdownBtn);

  var dropdownMenuDiv = $('<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">');
  var dropdownMenuItem = $('<a class="dropdown-item" id="client-view">');
  dropdownMenuItem.attr("onclick", "location.href='/client/:name'");
  var dropdownItemPdf = $('<a class="dropdown-item">');
  dropdownMenuDiv.append(dropdownItemPdf);
  dropdownMenuDiv.append(dropdownMenuItem);

  var clientName = $("<span>").text(client.fullname);
  var clientPhone = $("<span>").text(client.phone);
  var clientMail = $("<span>").text(client.mail);
  var br = $("<br>");
  clientName.append(br);
  clientPhone.append(br);
  clientListDiv.append(clientName);
  clientListDiv.append(clientPhone);
  clientListDiv.append(clientMail);
  clientListDiv.append(dropdownMenuDiv);
  clientListDiv.append(dropdownDiv);
  return clientListDiv;
 
}

// All Clients Page

// function getClients(){
//   $.ajax({
//     url: "/api/clients",
//     type: "GET",
//     dataType: "json",
//   }).done(function(allClients){
//     console.log(allClients);
//     return allClients;
//   }).then(function (clientsFound) {
//     console.log("yeiii!")
//     for(let i = 0; i< clientsFound.length; i ++){
//       console.log(clientsFound[i]);
//       var load = loadClients(clientsFound[i])  
//       console.log(load)
//       $("#client-table").append(load);
//     }
//   })
// }

function getClients(){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: "/api/clients",
      type: "get",
      dataType: "json",
      cache: false,
      success: function(data, textStatus, xhr){
        console.log("yei");
        console.log(data);
        resolve(data);
      },
      error: function(xhr, textStatus, errorThrown){
        reject("error");
      }
    })
  }).then(function(data, err){
    console.log(data);
    for(let i = 0; i< data.length; i ++){
      console.log(data[i]);
      var load = loadClients(data[i])  
      console.log(load)
      $("#client-table").append(load);
    }
    return data;
  })
}

getClients();
