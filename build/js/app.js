!function e(t,n,r){function o(u,s){if(!n[u]){if(!t[u]){var c="function"==typeof require&&require;if(!s&&c)return c(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var a=n[u]={exports:{}};t[u][0].call(a.exports,function(e){var n=t[u][1][e];return o(n||e)},a,a.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){n.apiKey="582040ffa017dc95fac9fb9d7f941f9c0c0f9887"},{}],2:[function(e,t,n){var r=e("./../js/git_requests.js").getRepos;$(document).ready(function(){$("#gitForm").submit(function(e){e.preventDefault();var t=$("#gitUser").val(),n=r(t);console.log(n)})})},{"./../js/git_requests.js":3}],3:[function(e,t,n){var r=e("./../.env").apiKey;n.getRepos=function(e){$.get("https://api.github.com/users/"+e+"?access_token="+r).then(function(e){console.log(e),$("#name").text(e.login+" has "+e.public_repos+". You can view them at "+e.repos_url+". For more info check out user at "),$("#desc").text(e.url)}).fail(function(e){console.log(e.responseJSON.message)})}},{"./../.env":1}]},{},[2]);