

var search = 'test';
var recordNum = 2;
var startYear = 2010;
var endYear = 2018;

// <---------------adding click events------------------------->
var searchParameters = [];
searchParameters = $("#exampleInputEmail1").html;
var startYear = [];
startYear = $("#yearinput").html;
var endYear = [];
endYear = $("#endyearinput").html;
var recordNumber = [];
recordNumber = $("#exampleFormControlSelect1").html;
$("#searchButton").on("click", function() {

});
$("#clearButton").on("click", function() {
searchParameters = [];
startYear = [];
endYear = [];
recordNumber = [1];
});
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