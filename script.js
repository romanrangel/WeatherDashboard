$(function () {
  var apiKey = "893ea11980d4efae153b2dd000354d0a";
  $(document).on("click", ".city", function () {
    var city = $(this).attr("data-city");
    var queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey;
    var queryWeekURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey;

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      $("#city-name").text(data.name + " Weather");
      $("#temp").text(data.main.temp + "°");
      $("#wind").text(data.wind.speed + " mph");
      $("#humidity").text(data.main.humidity + " %");
    });
  });

  $("#search-form").on("submit", function (event) {
    event.preventDefault();

    var search = $("#search-input").val().trim();

    $("#search-input").empty();

    var queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      search +
      "&units=imperial&appid=" +
      apiKey;

    $("#search-history").prepend(
      "<button class='list-group btn btn-light'>" + search + "<button>"
    );

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      $("#city-name").text(data.name);
      $("#temp").text(data.main.temp + "°");
      $("#wind").text(data.wind.speed + " mph");
      $("#city-name").text(data.name);
      $("#humidity").text(data.main.humidity + " %");
      $("#search-input").val("");
    });
  });
});