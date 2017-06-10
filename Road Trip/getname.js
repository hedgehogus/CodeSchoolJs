var gotName = false;

while(gotName == false) {
    var userName = prompt("What's your name?");
    
    if (confirm("Are you sure your name is " + userName + "?")){
        alert("Hello, " + userName + "!");
        gotName = true;
    }
}