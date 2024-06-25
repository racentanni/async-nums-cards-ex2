let favoriteNumber = 7;
let baseURL = "http://numbersapi.com";

//1.
$.getJSON(`${baseURL}/${favoriteNumber}?json`, function (data) {
  console.log(data);
});

//2.
let favoriteNumbers = [7, 34, 12];
$.getJSON(`${baseURL}/${favoriteNumbers}?json`, function (data) {
  console.log(data);
});

//3.
let facts = [];
$.getJSON(`${baseURL}/${favoriteNumber}?json`, function(data) {
  facts.push(data.text);
  $.getJSON(`${baseURL}/${favoriteNumber}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${baseURL}/${favoriteNumber}?json`, function(data) {
      facts.push(data.text);
      $.getJSON(`${baseURL}/${favoriteNumber}?json`, function(data) {
        facts.push(data.text);
        facts.forEach((fact) => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});
