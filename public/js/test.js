// All Clients Page
$("#inputGroup-sizing-sm").on("click", function() {

    var clientSearchBar = $("#search-client").val().trim();
    var clientFound = {
        fullname: clientSearchBar,
    }

    $.ajax({
        url: "/api/clients/:" + fullname,
        type: "GET",
        data: clientFound,
        dataType: "json",
    }).done(function(filterClient){
        console.log(filterClient);
        return filterClient;
    }).then(function (uniqueClient) {
    
    });
});

// Submit new Client POST
$("#save-client").on("click", function() {
var new_name = $("#new-name").val().trim();
var new_email = $("#new-email").val().trim();
var new_phone = $("#new-phone").val().trim();
var new_street = $("#new-street").val().trim();
var new_city = $("#new-city").val().trim();
var new_dirf = (new_street, new_city);
var new_notes = $("#new-notes").val().trim();

var newClient = {
    fullname: new_name,
    mail: new_email,
    phone: new_phone,
    dirf: new_dirf,
    notes: new_notes
};

$.ajax("/api/clients", {
    type: "POST",
    data: newClient
}).then(function(result) {
    console.log("created new client");
    console.log(result);
    location.reload();
}); // ajax ends
});

// All Movements Page
$("#inputGroup-sizing-sm").on("click", function() {

    var movementSearchBar = $("#search-client-moves").val().trim();
    var movementFound = {
        fullname: movementSearchBar,
        amount: this.amount,
        status: this.status,
        concept: this.concept,
        dateofpayment: this.dateofpayment
    }

    $.ajax({
        method: "GET",
        data: movementFound
    }).then(function(response) {
        $("#all-movements").clear().draw();
        var tableRow = $("<tr>");
        var dataAmount = $("<td>").text(movementFound.amount);
        var dataStatus = $("<td>").text(movementFound.status);
        var dataConcept = $("<td>").text(movementFound.fullname);
        var dataDate = $("<td>").text(movementFound.dateofpayment);
        tableRow.append(dataAmount);
        tableRow.append(dataStatus);
        tableRow.append(dataConcept);
        tableRow.append(dataDate);
        $("#all-movements").append(tableRow);
    }); //ajax ends

});

// Submit new movement POST
$("#save-movement").on("click", function() {
    var new_amount = $("#amount-input").val().trim();
    var new_date = $("#amount-input").val().trim();
    var new_concept =$("#movement-comments").val().trim();
    var new_status = $(".form-check").val();

    var newMovement = {
        amount: new_amount,
        dateofpayment: new_date,
        concept: new_concept,
        status: new_status
    }

    $.ajax("/api/movements", {
        type: "POST",
        data: newMovement
    }).then(function(result) {
        console.log("created new movement");
        console.log(result);
        location.reload();
    }); // ajax ends
});