/*

Name: Deziallia Morris
Date: June 3, 2022

*/

"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

var toFahrenheit = function() {
    if ($("to_fahrenheit").checked) {
        $("degree_label_1").innerHTML = "Enter C degrees:";
        $("degree_label_2").innerHTML = "Degrees Fahrenheit:";

        $("degrees_entered").nextElementSibling.firstChild.nodeValue = "";
        clearTextBoxes();

        $("degrees_entered").focus();
    }
};

var toCelsius = function() {
    if ($("to_celsius").checked) {
        $("degree_label_1").innerHTML = "Enter F degrees:";
        $("degree_label_2").innerHTML = "Degrees Celsius:";

        $("degrees_entered").nextElementSibling.firstChild.nodeValue = "";
        clearTextBoxes();

        $("degrees_entered").focus();
    }
};

var convertTemp = function() {
    var degreeEntered = parseInt($("degrees_entered").value);

    if ($("to_fahrenheit").checked) {
        if(!isNaN(degreeEntered)) {
            $("degrees_entered").nextElementSibling.firstChild.nodeValue = "";

            $("degrees_computed").value = parseInt((degreeEntered * (9 /5)) + 32);
            $("degrees_entered").focus();
            
        }
        else {
            $("degrees_entered").nextElementSibling.firstChild.nodeValue 
            = "You must enter a valid number for degrees.";
            
            $("degrees_entered").focus();
        }
    }

    if ($("to_celsius").checked) {
        if(!isNaN(degreeEntered)) {
            $("degrees_entered").nextElementSibling.firstChild.nodeValue = "";

            $("degrees_computed").value = parseInt((degreeEntered - 32) * (5 / 9));
            $("degrees_entered").focus();
        }
        else {
            $("degrees_entered").nextElementSibling.firstChild.nodeValue 
            = "You must enter a valid number for degrees.";

            $("degrees_entered").focus();
        }
    }

};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").onclick = clearTextBoxes;
	$("degrees_entered").focus();
};