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
var apiKey = require('./../.env').apiKey;

	exports.getRepos = function(user){
		// var apiKey = "582040ffa017dc95fac9fb9d7f941f9c0c0f9887"
	  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
	    console.log(response);
	  }).fail(function(error){
	    console.log(error.responseJSON.message);
	  });
	};
