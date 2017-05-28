var arr = [1,4,2,5,3,6,4,7,5,8,6,9,10,10,11];
var passengers = ["aaa", "bbb", undefined, "ccc"];

function printArray(){
    for( var i = 0; i < arr.length; i++) {
        console.log(i + ". = " + arr[i]);
    }
}

function evenCount() {
    
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            count ++;
        } else {
            arr[i] = undefined;
        }
    }
    console.log(arr);
    console.log("counter: " + count);
    return 
}

function addPassenger(name, list){
    if (list.length == 0){
        list.push(name);        
    } else {
        for (var i = 0; i < list.length; i++ ){
            if (list[i] == undefined) {
                list [i] = name;
                return list;
            } else if ( i == list.length - 1){
                list.push (name);
                return list;
            }
        }
    }
    return list;
}

function deletePassenger(name, list){
    if (list.length == 0){
        console.log("list is empty!");

    } else {
        for (var i = 0; i < list.length; i ++){
            if (list[i] == name) {
                list[i] = undefined;
                return list;
            } else if ( i == list.length - 1) {
                console.log ("Passenger not found!") 
            }
        }
    }
    return list;
}