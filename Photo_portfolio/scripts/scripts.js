function openNav(num) {
    var sidebar = document.getElementById("side_bar"+num);
    var menu =  document.getElementById("menu"+num);
    sidebar.style.width = "300px";
    sidebar.style.height = "100vh";
    menu.style.marginLeft = "300px";
    menu.style.transition = "margin-left 0.5s";
}

function closeNav(num) {
    document.getElementById("side_bar"+num).style.width = "0";
    document.getElementById("menu"+num).style.marginLeft= "0";
}

/*
document.getElementById("side_bar"+num).addEventListener("wheel", closeNav);
document.getElementById("main"+num).addEventListener("wheel", closeNav);*/
