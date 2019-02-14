
// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output1").text(result);
  });

  $("form#subtract").submit(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#output2").text(result);
  });

  $("form#multiply").submit(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output3").text(result);
  });

  $("form#divide").submit(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var result = divide(number1, number2);
    $("#output4").text(result);
  });
});

// subtract
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = subtract(number1, number2);
// alert(result);
//
//
// // multiply
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = multiply(number1, number2);
// alert(result);
//
//
// // divide
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = divide(number1, number2);
// alert(result);


// //bmi
// var bmi = function(height,weight){
//   return 703 * (weight/(height*height));
// };
//
// var height = parseInt(prompt("Enter your height (in inches):"));
// var weight = parseInt(prompt("Enter your weight (in lbs):"));
// var result = bmi(height,weight);
// alert(result);

//c to f
// var ctof = function(celsius){
//   return celsius * 9 / 5 + 32;
// };
//
// var celsius = parseInt(prompt("Enter your temperature (in celsius):"));
// var result = ctof(celsius);
// alert(result);

// var sample_regex = /epicodus/gi
