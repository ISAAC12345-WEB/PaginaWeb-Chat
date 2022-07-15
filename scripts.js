$(document).ready(function(){
	$('#action_menu_btn').click(function(){
		$('.action_menu').toggle();
	});
});
var mensaje = document.getElementById("mensaje");
var textarea = document.getElementById("textarea");
var button = document.getElementById("button");

button.addEventListener("click", function(){
	var newMessage = document.createElement("li");
	newMessage.innerHTML = textarea.value;
	mensaje.appendChild(newMessage);
	textarea.value = "";
});