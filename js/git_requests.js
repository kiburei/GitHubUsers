var apiKey = require('./../.env').apiKey;

	exports.getRepos = function(user){
		// var apiKey = "582040ffa017dc95fac9fb9d7f941f9c0c0f9887"
	  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
	    console.log(response);
	    $("#name").text(response.login + " has " + response.public_repos + ". You can view them at " + response.repos_url +". For more info check out user at ");
	    $("#desc").text(response.url);
	  }).fail(function(error){
	    console.log(error.responseJSON.message);
	  });
	};
