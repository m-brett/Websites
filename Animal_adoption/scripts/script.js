window.onload = function () {
    startTab();
};

function startTab() {
    document.getElementById("defaultOpen").click();
}

function openAnimal(evt, animal) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(animal).style.display = "block";
    evt.currentTarget.className += " active";
}

//var animals = JSON.parse(animals);
var animals = JSON.parse(JSON.stringify(animals || null ))
console.log(animals[dogs][0])