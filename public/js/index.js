
function loadClients(client){
  //creates an element like Example 1 in allClients.handlebars
  var clientListDiv = $("<div class='client-item'>");
  var link = $("<a>");
  link.attr("id","client-view");
  link.attr("onclick", "location.href=/clients/"+client.id);
  var icon = $("<i>");
  icon.addClass("far");
  icon.addClass("fa-address-card");
  link.append(icon);
  clientListDiv.append(link);

  var clientName = $("<span>").text(client.fullname);
  clientListDiv.append(clientName);
  clientListDiv.append("<br>");
  var clientPhone = $("<span>").text(client.phone);
  clientListDiv.append(clientPhone);
  clientListDiv.append("<br>");
  var clientMail = $("<span>").text(client.mail);
  clientListDiv.append(clientMail);
  return clientListDiv;
}

// All Clients Page

function getClients(){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: "/api/clients",
      type: "get",
      dataType: "json",
      cache: false,
      success: function(data, textStatus, xhr){
        // console.log("works");
        // console.log(data);
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
      // console.log(data[i]);
      var load = loadClients(data[i])  
      // console.log(load)
      $("#client-table").append(load);
    }
    return data;
  })
}

function loadMovements(Movements){
  console.log(Movements.amount, "---------------PNMREP--------");
      var tableRow = $("<tr>");
      var dataAmount = $("<td>").text(Movements.amount);
      var dataStatus = $("<td>").text(Movements.status);
      var dataConcept = $("<td>").text(Movements.fullname);
      var dataDate = $("<td>").text(Movements.dateofpayment);
      tableRow.append(dataAmount);
      tableRow.append(dataStatus);
      tableRow.append(dataConcept);
      tableRow.append(dataDate);
      
 
  return tableRow;
}
// get movements 
function getMovements(){
  $.ajax({
    url: "/api/movements",
    type: "get",
    dataType: "json",
    cache: false,
    success: function(data, textStatus, xhr){
      // console.log("works" + "--------");
      for(let i = 0; i< data.length; i ++){
            // console.log(data[i], "//////////////////");
            // console.log("works until here");
            if (typeof(data[i] == "object")) {
              $("#all-climovements").append(loadMovements(data[i]));
              
            }
            // console.log(load)
            // console.log("works until here ALSO");
          }
          return data;
    },
    error: function(xhr, textStatus, errorThrown){
      reject("error");
    }
  });
  // return new Promise(function(resolve, reject){
  //   $.ajax({
  //     url: "/api/movements",
  //     type: "get",
  //     dataType: "json",
  //     cache: false,
  //     success: function(data, textStatus, xhr){
  //       console.log("works");
  //       console.log(data);
  //       resolve(data);
  //     },
  //     error: function(xhr, textStatus, errorThrown){
  //       reject("error");
  //     }
  //   })
  // }).then(function(data, err){
  //   // console.log(data, "-------");
  //   for(let i = 0; i< data.length; i ++){
  //     console.log(data[i] + "//////////////////");
  //     // console.log("works until here");
  //     var load = loadMovements(data[i])  
  //     // console.log(load)
  //     // console.log("works until here ALSO");
  //     $("#all-movements").append(loadMovements);
  //   }
  //   return data;
  // })
};
getClients();
getMovements();

$("#save-client").click(function(event){
  let newClient = {
    fullname: $("#new-name").val().trim(),
    shortname: $("#new-name").val().trim(),
    mail: $("#new-email").val().trim(),
    phone: $("#new-phone").val().trim(),
    dirf: ($("#new-street").val().trim() + " " + $("#new-city").val().trim()),
    lastpay: "",
    proxpay: ""
  }

  $.ajax({
      url: "/api/clients",
      type: "post",
      data: newClient,
      dataType: "json",
      cache: false,
      success: function(data, textStatus, xhr){
        console.log("yei");
        console.log(textStatus);
        resolve(data);
      },
      error: function(xhr, textStatus, errorThrown){
        reject("error");
      }
    })
})

$("#client-item").click(function(event){
  console.log(event);
  let clientId = event.attr(id);
  loadSingleClient(clientId);
})

loadSingleClient(1)

function loadSingleClient(clientId){
  return new Promise(function(resolve, reject){
    var clienturl = "/api/clients/" + clientId;
    $.ajax({
      url: clienturl,
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
    $("#client-name").text(data.fullname);
    $("#client-email").text(data.mail);
    $("#client-phone").text(data.phone);
    $("#client-notes").text(data.notes);

    var lastPayment = $("<li>");
    lastPayment.text("Next payment: " + "2018/08/15");
    var nextPayment = $("<li>");
    nextPayment.text("Last payment: " + "2018/07/15");
    var amount = $("<li>");
    amount.text("Amount: " + "3000");

    $(".movement-status").empty();
    $(".movement-status").append(lastPayment);
    $(".movement-status").append(nextPayment);
    $(".movement-status").append(amount);
    
  })
}

