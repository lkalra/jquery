//manipulating element & searching h1 tag in complete document thn changing its color
$("h1").css("color", "red") //setting value
console.log($("h1").css("font-size")) //will get size of font in chrome console

//select element
document.querySelector("h1") // - js
$("h1") // - jquery

document.querySelectorAll("button") // - js
$("button") // - jquery

//use classes in jquery through css
$("h1").addClass("big-title margins")

//another method - removeClass

//check if element has class
$("h1").hasClass("margins")

//manipulate text 
$("h1").text("bye") // change hello to bye
$("button").text("Dont click") //change click me to dont click
$("button").html("<em> Dont click </em>") //change click me to dont click with html

//manipulate attributes
$("img").attr("src")
$("a").sttr("href", "yahoo")

//eventlistners
$("h1").click(function () {
    $("h1").css("color", "purple")
})

//through js

// for (i = 0; i < document.querySelectorAll("button").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.color = "red";
//     })
// }

//through jquery

$("button").click(function () {
    $("h1").css("color", "purple")
})

//check if something getting enter in input box

$("input").keypress(function(event) {
    console.log(event.key)
})

//console will print anything that gets enter in website anywhere
$("document").keypress(function(event) {
    console.log(event.key) 
})

//to change h1 to whatever gets entered in website
$("document").keypress(function(event) {
    $("h1").text(event.key) 
})

//change while doing something - functions in js (mouseover, click)
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple")
})

//to add something direct through console
Before("<button>New</button>") // before,after

//prepend and aappend will add the button after opening h1 tag and before hello text 
{/* <h1>Hello.</h1> */}

//to remove button
$("button").remove()


//to hide selected element & to toggle it change hide to toggle or fadeOut/fadeIn/fadeToggle or slideUp/slideDown/slideToggle
$("button").click(function () {
    $("h1").hide()
})

// to make custom animation - works for only numeric values not color and all
$("button").click(function () {
    $("h1").animate({opacity:0.5})
})

//to make multiple work can chain
$("h1").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})