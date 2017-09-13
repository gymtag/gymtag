$("#submit").on("click", function(event){
    event.preventDefault();
    var newRookie =  {
      firstName: $(".firstNameField").val().trim(), 
      lastName: $(".lastNameField").val().trim(),
      userName: $(".userNameField").val().trim(),
      photo: $(".photoField").val().trim(),
      userType: "rookie"
    };
      
    console.log(newRookie);
    
    $.post("/newUser", newRookie)

     .done(function(data) {
        console.log(data);

    });
      $(".firstNameField").val("");
      $(".lastNameField").val("");
      $(".userNameField").val("");
      $(".photoField").val("");
  });