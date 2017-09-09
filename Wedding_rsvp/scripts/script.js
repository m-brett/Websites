/* Validate LogIn to Predetermined Password*/
function validatePW(){
    var ans = document.forms["logIn"]["login_pw"].value;
    console.log(ans);
    /* if two match - unhide extra sections
    reset as empty string
    else return error message
    rest as empty string*/
}

/* Add extra field to login form */
function addFields(){
    var container = document.getElementById("container");
    /* Form Details to add */
    container.appendChild(document.createTextNode("Member"));
    var input = document.createElement("input");
    /* Set the values on the input box */
    input.type = "text";
    input.name = "member";
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
}

