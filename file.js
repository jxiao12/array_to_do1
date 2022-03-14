function push_front(lst, num){
    var myArr = [];
    myArr[0] = num;
    for( i = 0; i < lst.length; i++){
        myArr[i + 1] = lst[i];
    }
    return myArr;
}

function pop_front(array){
    var myArr = [];
    var lengths = array.length;
    for (i = 0; i < lengths - 1; ++i){
        myArr[array.length - 1 - 1] = array.pop();
    }
    return myArr;
}

function insert_at(array, index, val){
    var myArr = [];
    for(i = array.length - 1; i >= 0; --i){
        if(i != index){
            myArr.push(array.pop());
        } else {
            break;
        }
    }
    return myArr;
}

function insertAt(arr, val, ind) {
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val; 
}

function removeAt(arr, ind) {
    ind = Math.floor(ind);
    if (ind >= arr.length || ind < 0) {
        return null; 
    }
    var returnVal = arr[ind]; 
    for (var i = ind + 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop(); 
    return returnVal;
}

function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}


function removeDupes(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] == arr[i]) { 
            while (arr[i+1] == arr[i]) {
                removeAt(arr,i+1);
            }
        }
    }
}

console.log("Push Front")
console.log(push_front([1, 2, 3, 4, 5], 6))


console.log("Pop Front")
console.log(pop_front(push_front([1, 2, 3, 4, 5], 6)))

console.log("Insert At")
console.log()