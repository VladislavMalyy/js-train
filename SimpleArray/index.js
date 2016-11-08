/**
 * Created by Владислав on 02.11.2016.
 */
var arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
var arr2 = [46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47,16,-37,54,-4,72,-56,47,4,-16,25,-37];

var summPositiveElementArr = function (array) {
    var count = 0;
    var summ = 0;
    for (var i = 0; i < array.length; i++){
        if(array[i] >= 0){
            count++;
            summ += array[i];
        }
    }
    console.log("Amount positive elements: " + count);
    console.log("Summ positive elements: " + summ);
}
var minElementArr = function (array) {
    var minEll = array[0];
    var num = 0;
    for(var i = 0; i < array.length; i++){
        if(minEll > array[i]){
            minEll = array[i];
            num = i;
        }
    }
    console.log("Minimum element array: " + minEll);
    console.log("Number minimum element in array: " + num);
}
var maxElementArr = function (array) {
    var maxEll = array[0];
    var num = 0;
    for(var i = 0; i < array.length; i++){
        if(maxEll < array[i]){
            maxEll = array[i];
            num = i;
        }
    }
    console.log("Maximum element array: " + maxEll);
    console.log("Number maximum element in array: " + num);
}
var amountNegativeElementArr = function (array) {
    var amount = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] < 0){
            amount++
        }
    }
    console.log("Amount negative elements: " + amount);
}
var amountOddPositiveElementArr = function (array) {
    var amount = 0;
    var summ = 0;
    for(var i = 0; i < array.length; i++){
        if((array[i] >= 0) & (i%2) === 1){
            summ += array[i];
            amount++;
        }
    }
    console.log("Amount odd positive elements: " + amount);
    console.log("Summ odd positive elements: " + summ);
}
var amountEvenPositiveElementArr = function (array) {
    var amount = 0;
    var summ = 0;
    for(var i = 0; i < array.length; i++){
        if((array[i] >= 0) & (i%2) === 0){
            summ += array[i];
            amount++;
        }
    }
    console.log("Amount even positive elements: " + amount);
    console.log("Summ even positive elements: " + summ);
}
var intersectionPositiveElementArr = function(array){
    var intersection = 1;
    for(var i = 0; i < array.length; i++){
        if(array[i] > 0){
            intersection *= array[i];
        }
    }
    console.log("Intersection positive elements: " + intersection);
}
var amountElementsFour = function (array) {
    var amount = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] === 4){
            amount++;
        }
    }
    console.log("Amount elements equally 4: " + amount);
}
var zerroElements = function (array) {
    var maxEll = array[0];
    var arr = [];
    for(var i = 0; i < array.length; i++){
        if(maxEll < array[i]){
            maxEll = array[i];
        }
    }
    for(var i = 0; i < array.length; i++){
        if(array[i] !== maxEll){
            arr[i] = 0
        } else {
            arr[i] = maxEll;
        }
    }
    console.log("Array with max-element and 0: " + arr);
}
var residuationArray = function(array1, array2){
    var arr = [];
    for(var i = 0; i < array1.length; i++ ){
        arr.push(array1[i] - array2[i]);

    }
    console.log("Rasiduation array: ", arr);
}



summPositiveElementArr(arr);
minElementArr(arr);
maxElementArr(arr);
amountNegativeElementArr(arr);
amountOddPositiveElementArr(arr);
amountEvenPositiveElementArr(arr);
intersectionPositiveElementArr(arr);
amountElementsFour(arr);
zerroElements(arr);
residuationArray(arr,arr2);