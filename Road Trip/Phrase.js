function countE(){
    var phrase = prompt("Whitch prase would you like to examine?");
    if ( typeof(phrase) != "string") {
        alert ("That's not a valid entry!");
        return false;
    } else {
        var eCount = 0;
        for (var index = 0; index < phrase.length; index++){
            if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E'){
                eCount++;
            }
        }
        alert ("There are " + eCount + " E's");
        return true;
    }
}