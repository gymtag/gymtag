$(document).ready(function() {
  
    var resContainer = $(".reservation-container");

    var reservations;
    
    var url = window.location.search;
    var rookieId;
    if (url.indexOf("?rookie_id=") !== -1 && url.indexOf("&gym_id=") !== -1) {
      rookieId = url.split("=")[1].split("&")[0];
      gymId = url.split("=")[2];
      getReservations(rookieId, gymId);

    }
    else {
      getReservations();
    }

    function getReservations(rookie, gym){
        rookieId = rookie || "";
        gymId = gym || "";
        console.log("rookieId:" + rookieId);
        console.log("gymId:" + gymId);
        $.get("/appointments/rookie/" + rookieId + "/"+ gymId , function(data){
            console.log("Reservations", data);
            reservations = data;
            if (!reservations || !reservations.length) {
                displayEmpty(rookie);
            }
            else {
            initializeRows();
            }
        });
    };

    function initializeRows(){
        resContainer.empty();
        var resToAdd = [];
        for(var i = 0; i < reservations.length; i ++){
            resToAdd.push(createNewOption(reservations[i]));
        }
        resContainer.append(resToAdd);
    }

    function createNewOption(reservation){
        var newCardDeck = $("<div class='card-deck'>");
        var newCardDiv = $("<div class='card text-center' style='width: 20rem;'>");
        var newCardImg = $("<img class='card-img-top' src='" + reservation.photo +  "' alt='Card image cap'>");
        var nextNewDiv = $("<div class='card-body'>");
        var cardTitle = $("<h4 class='card-title'>").text("Expert: " + reservation.userName);
        var newResBody = $("<p class='card-text'>").text("Gym: " + reservation.gym);
        var newMonthBody = $("<p class='card-text'>").text("Month: " + reservation.month + " Day: " + reservation.day);
        var newTimeBody = $("<p class='card-text'>").text("Time: " + reservation.time + " " + reservation.am_pm);
        var button = $("<a href='#' class='btn btn-primary'>").text("Reserve");

        $(".reservation-container").append(newCardDeck);
        newCardDeck.append(newCardDiv);
        newCardDiv.append(newCardImg);
        newCardDiv.append(nextNewDiv);
        nextNewDiv.append(cardTitle);
        nextNewDiv.append(newResBody);
        nextNewDiv.append(newMonthBody);
        nextNewDiv.append(newTimeBody);
        nextNewDiv.append(button);

        return newCardDiv;
    };

  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Rookie User: " + id;
    }
    resContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No Scheduled Appointments yet" + partial);
    resContainer.append(messageh2);
  }
});