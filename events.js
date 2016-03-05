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
var Btns = document.getElementsByTagName("button")

// Create variable for class
var article = document.getElementsByClassName("article-section")

// Added event listeners

// article.addeventListener("click", function() {
// 	output.innerHTML = "you clicked here"

// }
pageTitle.addEventListener("mouseover", function()	{
	output.innerHTML = "You moved your mouse over the header.";
});

pageTitle.addEventListener("mouseout", function(){
	output.innerHTML = "you left me sucker.";
});

colorBtn.addEventListener("click", function(){
	guineaBtn.classList.toggle("text");
});

hulkifyBtn.addEventListener("click", function(){
	guinea-pig.classList.toggle("Large");
})

captureBtn.addEventListener("click", function(){
	guinea-pig.classList.toggle("add-border");
})

// Created for loop that will go into all articles and bold the first one and italics the last one in array.
for(var i=0; i < article.length; i++){
	article[0].classList.add("bold")
	article[article.length -1].classList.add("italics")
};

// Created for loop that will make all buttons blocked.
for(var i=0; i < Btns.length; i++){
	Btns[i].classList.add("block");
}

keypress.addEventListener("keyup", function(event){
	output.innerHTML = keypress.value
});