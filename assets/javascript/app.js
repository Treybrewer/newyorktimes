
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
    var search = $('#exampleInputEmail1').val();
    var recordNum = $('#exampleFormControlSelect1').val();
    var startYear = $('#yearinput').val();
    var endYear = $('#endyearinput').val();
    var queryURL =
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b43250bb6ea945bbbcbee004241d4b01&q=${search}&begin_date=${startYear}&end_date=${endYear}`;

    $.ajax({
        url: queryURL
    }).then(function (res) {
        var arr = res.response.docs;
        for (var i = 0; i < recordNum; i++) {
            console.log(arr[i]);
        }
    });
});
$("#clearButton").on("click", function() {
searchParameters = [];
startYear = [];
endYear = [];
recordNumber = [1];
});
