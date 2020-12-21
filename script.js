// Wait for elements to finish loading by placing code in $(function(){})
$(function () {
    // Replace API_KEY with your api key for OpenWeatherAPI
    var apiKey = "893ea11980d4efae153b2dd000354d0a";
    $(document).on("click", ".city", function () {
      // get the name of the city using the data-city attribute of the clicked
      // element
      var city = $(this).attr("data-city");
      // construct a url to search OpenWeatherAPI for the current weather in the
      // city
      var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        apiKey;
      // send ajax request for current weather to OpenWeatherAPI
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        // log the data from the api to the console
        console.log(data);
        // set the text of the #city-name h2 element using the city name in the
        // response
        $("#city-name").text(data.name + " Weather");
        // display the temperature, wind, and humidity in the elements found in
        // the html. (set the text)
        $("#temp").text(data.main.temp + "°");
        $("#wind").text(data.wind.speed + " mph");
        $("#humidity").text(data.main.humidity + " %");
      });
    });
    // listen for "submit" event on the #search-form
    $("#search-form").on("submit", function (event) {
      // ==================================================================
      // Add your code between these lines
      // prevent the default form behavior
      event.preventDefault();
      // store value of form input in a variable named search. remove any leading
      // or trailing white space using the trim method
      var search = $("#search-input").val().trim();
      // do nothing if search has no characters (empty string)
      $("#search-input").empty();
      // construct a url to search OpenWeatherAPI for the current weather in the
      // city
      var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        search +
        "&units=imperial&appid=" +
        apiKey;
      // ==================================================================
      // send ajax request for current weather to OpenWeatherAPI
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        // log the data from the api to the console
        console.log(data);
        // ==================================================================
        // Add your code between these lines
        // display the city name, temperature, wind, and humidity in the elements
        // found in the html.
        $("#city-name").text(data.name);
        $("#temp").text(data.main.temp+ "°");
        $("#wind").text(data.wind.speed + " mph");
        $("#city-name").text(data.name);
        $("#humidity").text(data.main.humidity + " %");
        // Clear the search input
        $("#search-input").val("");
        // ==================================================================
      });
    });
  });
  // How would you request the current weather for a city?
  // How would you request the current weather for multiple cities?
  // How would you request an hourly forecast from a city?