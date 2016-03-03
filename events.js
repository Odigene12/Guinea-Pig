// Create variables for all id's 
var output = document.getElementById("output-target");
var keypress = document.getElementById("keypress-input");
var pageTitle = document.getElementById("page-title");
var pageHeader= document.getElementById("page-header");
var guineaBtn = document.getElementById("guinea-pig");
var colorBtn = document.getElementById("add-color");
var hulkifyBtn = document.getElementById("make-large");
var captureBtn = document.getElementById("add-border");
var roundBtn = document.getElementById("add-rounding");

// Create variable for class
var article = document.getElementsByClassName("article-section")

// Added event listeners

// article.addeventListener("click", function() {
// 	output.innerHTML = "you clicked here"

// }
pageTitle.addEventListener("mouseover", function()	{
	output.innerHTML = "You moved your mouse over the header.";
});
