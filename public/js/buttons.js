$(document).ready(function(){
$(".loginInput").hide();
$(".beginnerOrPro").hide();
$(".loginButton").on("click", function(event){
   	$(".newUserButton").hide();
   	$(".loginInput").show();
   	$(".newUserOrLogin").addClass("login");
   	$(".login").removeClass("newUserOrLogin");
   	$(".loginButton").addClass("newLoginButton");
   	$(".newLoginButton").removeClass("loginButton");
   	handleFormSubmit(event);   	
	submitPost();
});


var username = $(".username");
var newLoginButton = $(".newLoginButton");

function handleFormSubmit(event){

	event.preventDefault();

	var returningUser = {
		username: username.val().trim()
	}
};

function submitPost(post){
	$(".newLoginButton").on("click", function(event) {
		var expertRadio = document.getElementById("expert");
		var rookieRadio = document.getElementById("rookie");
		
		if (rookieRadio.checked) {
			console.log("rookie radio checked!");
			window.location.href = "/rookie-schedule?rookie_id=" + post.username;
		}
		if (expertRadio.checked) {
			console.log("expert radio checked!");
			window.location.href = "/expert-schedule?expert_id=" + post.username;
		}

		if (!username.val().trim() || !expertRadio.checked && !rookieRadio.checked) {
			alert("Please fill out all the fields.")
		}
	});
  }
});

$(".newUserButton").on("click", function(event){
	event.preventDefault();
   	$(".newUserButton").hide();
   	$(".loginButton").hide();
   	$(".beginnerOrPro").show();
});
