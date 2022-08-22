var $ = function(id) {
     return document.getElementById(id);
};

var mode_switch_toggle = function() {

    var lightMode = document.styleSheets[0];
    var darkMode = document.styleSheets[1];

    // toggle dark mode and light mode
    if (darkMode.disabled) {
        darkMode.disabled = false;
        lightMode.disabled = true;

        // this changes the text in the upper right hand corner
        $("mode_switch").innerHTML = "Light Mode";
    }
    else {
        darkMode.disabled = true;
        lightMode.disabled = false;

        // this changes the text in the upper right hand corner
        $("mode_switch").innerHTML = "Dark Mode";
    }
};
