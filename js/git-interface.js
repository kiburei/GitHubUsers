var GitUser = require('./../js/git_requests.js').getRepos;

$(document).ready(function(){
	// event.preventDefault();
	$("#gitForm").submit(function(event){
		event.preventDefault();
		var user = $("#gitUser").val();
		// console.log(user);
		var giter = GitUser(user);
		console.log(giter);
	});
});