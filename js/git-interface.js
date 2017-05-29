var GitUser = require('./../js/git_requests.js').getRepos;

$(document).ready(function(){
	$("#gitForm").submit(function(event){
		event.preventDefault();
		var user = $("#gitUser").val();
		GitUser(user);
		// console.log(userD);
	});
	$('#time').text(moment());
});