
var search = $(this).attr('data-name');
var queryURL =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b43250bb6ea945bbbcbee004241d4b01&q=' + search;

$.ajax({
    url: queryURL
})
.then(function(res) {
    var arr = res.docs;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].headline.main);
    }
});