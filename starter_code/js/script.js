// YOUR CODE GOES HERE
var clientID = "1ce17112b850e601f2181770fd4c0db2";

$(document).ready(function() {
    // your code here


    $("#search-btn").click(function() {
        var userInput = $("#search-query").val();
        searchFlickr(clientID, userInput, 10, function(photos) {
            console.log(photos);

            $.each(photos.photo, function(index, value) {
                insertIntoPage(value);
            });
        });

    });
//this thing right here isnt working and its getting me dumb tight this is not okay!!! it was working before my reset button doesnt wrk ughhhhhhhhhh          
     $("#reset-btn").click(function() {
     $("#search-results").empty();
});

});



function insertIntoPage(photosInfo) {
    var container = $('#search-results')
    var url_m = photosInfo.url_m;
    var listItem = $("<img src =" + url_m + "></img>");
    listItem.text(photosInfo.title)

    container.append(listItem);
}



