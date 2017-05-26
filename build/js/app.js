(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "582040ffa017dc95fac9fb9d7f941f9c0c0f9887"

},{}],2:[function(require,module,exports){
var GitUser = require('./../js/git_requests.js').getRepos;

$(document).ready(function(){
	$("#gitForm").submit(function(event){
		event.preventDefault();
		var user = $("#gitUser").val();
		GitUser(user);
		// console.log(userD);
	});
});
},{"./../js/git_requests.js":3}],3:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
