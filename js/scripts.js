$(document).ready(function() {
  $("form#favoriteThings").submit(function(event) {
    event.preventDefault();

    var favoriteThings = [];
    var favoriteThingsCopy = [];

    favoriteThings.push($("#favoriteFood").val());
    favoriteThings.push($("#favoriteColor").val());
    favoriteThings.push($("#favoriteVacation").val());

    favoriteThingsCopy.push(favoriteThings[1]);
    favoriteThingsCopy.push(favoriteThings[0]);
    favoriteThingsCopy.push(favoriteThings[2]);

    $("#output").append("<li>" + favoriteThingsCopy[0] + " Home Depot </li>");
    $("#output").append("<li>" + favoriteThingsCopy[1] + " Dominoes </li>");
    $("#output").append("<li>" + favoriteThingsCopy[2] + " Pacific Ocean </li>");
  })
});
