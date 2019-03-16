// these are general project notes
// i want to create an onclick function for the images
// then i want to create a variable that tracks the aount of clicks per image
// then i want to create a variable that equals the amount of clicks times the value
// where the value is the randomly assigned number

// use $(".myElementClass").text("to create win/loss messages")
// you can also add html elements -> with text and classes and all
// (1) $(".myElementClass").html("<p class=\"myclass\" to create win/loss messages")
// or
// (1) var myNewEl = $("<p>")
// myNewEl.text("check this out")
// myNewEl.addClass("checkClass")
// $("myElement").html(myNewEl)

// questions: how to properly link jquery
// q: how to do bootstrap-js

$(document).ready(function() {
// Variables related to scores and misc global data
  var winTotal = 0;
  var lossTotal = 0;
  var counter = 0; //for calculating how much youve hit so far

// Random Number Options/Generation
  var targetNumberOptions = [40, 50, 60];
  var targetNumber = targetNumberOptions[Math.floor(Math.random() * targetNumberOptions.length)];
  console.log(targetNumber);

  var crysOneOptions = [1, 2, 3];
  var crysOneValue = crysOneOptions[Math.floor(Math.random() * crysOneOptions.length)];
  console.log(crysOneValue);

  var crysTwoOptions = [4, 5, 6];
  var crysTwoValue = crysTwoOptions[Math.floor(Math.random() * crysTwoOptions.length)];
  console.log(crysTwoValue);

  var crysThreeOptions = [7, 8, 9];
  var crysThreeValue = crysThreeOptions[Math.floor(Math.random() * crysThreeOptions.length)];
  console.log(crysThreeValue);

  var crysFourOptions = [10, 11, 12];
  var crysFourValue = crysFourOptions[Math.floor(Math.random() * crysFourOptions.length)];
  console.log(crysFourValue);

// Code for onStart
  $("#winTotal").text(winTotal);
  $("#lossTotal").text(lossTotal);
  $("#targetNumber").text(targetNumber);

//Code for Value Assignment
  $("#targetNumber").attr("data-targetNumber", targetNumber)
  $("#crystalOne").attr("data-crysOneValue", crysOneValue);
  $("#crystalTwo").attr("data-crysTwoValue", crysTwoValue);
  $("#crystalThree").attr("data-crysThreeValue", crysThreeValue);
  $("#crystalFour").attr("data-crysFourValue", crysFourValue);


});
