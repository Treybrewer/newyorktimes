

var search = 'test';
var recordNum = 2;
var startYear = 2010;
var endYear = 2018;

// <---------------adding click events------------------------->
var searchParameters = [];
var searchinput = $("#exampleInputEmail1").html;
var startYear = [];
var startYearinput = $("#yearinput").html;
var endYear = [];
var endYearinput = $("#endyearinput").html;
var recordNumber = [];
var recordNumberinput = $("#exampleFormControlSelect1").html;
$("#searchButton").on("click", function() {

});
$("#clearButton").on("click", function() {
searchParameters = [];
startYear = [];
endYear = [];
recordNumber = [1];
$("#exampleInputEmail1").val("");
$("#yearinput").val("");
$("#exampleFormControlSelect1").val("");
$("#endyearinput").val("");

});
<<<<<<< HEAD
// var search = $(this).attr('data-name');
// var queryURL =
//   'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b43250bb6ea945bbbcbee004241d4b01&q=' + search;

// $.ajax({
//     url: queryURL
// })
// .then(function(res) {
//     var arr = res.docs;
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i].headline.main);
//     }
// });
=======
var search = $(this).attr('data-name');

var queryURL =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b43250bb6ea945bbbcbee004241d4b01&q=test&begin_date=20001012&end_date=20081209';

$.ajax({
    url: queryURL
}).then(function(res) {
    var arr = res.response.docs;
    for (var i = 0; i < recordNum; i++) {
        console.log(arr[i]);
    }
});
>>>>>>> 302f9d2e0e9c92fa3c27084cd1e47681a7d97133
