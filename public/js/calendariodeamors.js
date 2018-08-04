function tino(calendarList) {
  var title = $("<div class='title'>");
  var day = $("<div class='day'>");
  var hour = $("<div class='hour'>");
  var hr = $("<hr>");
  hr.append(hour);
  hour.append(day);
  day.append(title);
}

$(document).ready(function() {
  $("#calendarBtn").click(function(eventos) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: "/api/calendar/events",
        type: "get",
        dataType: "json",
        cache: false,
        success: function(data, textStatus, xhr) {
          console.log("yei");
          console.log(data);
          resolve(data);
        },
        error: function(xhr, textStatus, errorThrown) {
          reject(textStatus);
        }
      });
    }).then(function(data, err) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        var load = tino(data[i]);
        console.log(load);
        $("#calendar").append(load);
      }
      return data;
    });
  });
});
