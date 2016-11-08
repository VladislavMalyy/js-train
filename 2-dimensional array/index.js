/**
 * Created by Владислав on 02.11.2016.
 */
var arr = [

    [16,-37,54,-4,72],

    [-56,47,4,-16,25],

    [-37,46,4,-51,27],

    [-63,4,-54,76,-4],

    [12,-35,4,47]


]

var sumIntersectionPositiveElements2DArr = function (array) {
    var count = 0;
    var summ = 0;
    var intersection = 1;
    for(var i =0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            if(array[i][j] >=0){
                summ += array[i][j];
                count++
            }
            if(array[i][j] > 0){
                intersection *= array[i][j];
            }
        }
    }
    console.log("Amount positive elements in array: " + count);
    console.log("Sum positive element in array: " + summ);
    console.log("Intersection positive element in array: " + intersection);
}

var minElement2DArr = function (array) {
    var numcols = 0;
    var numrows = 0;
    var minEll = array[0][0];
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            if(array[i][j] < minEll){
                minEll = array[i][j];
                numcols = j;
                numrows = i;
            }
        }
    }
    console.log("Minimum element in array: " + minEll);
    console.log("Number minimum element in array: column - " + numcols +", row - " + numrows);
}

var maxElement2dArr = function (array) {
    var numcols = 0;
    var numrows = 0;
    var maxEll = array[0][0];
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            if(array[i][j] > maxEll){
                maxEll = array[i][j];
                numcols = j;
                numrows = i;
            }
        }
    }
    console.log("Maximum element in array: " + maxEll);
    console.log("Number maximum element in array: column - " + numcols +", row - " + numrows);
}

var amountNegativeElements2DArr = function (array) {
    var count = 0;
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            if(array[i][j] < 0){
                count++;
            }
        }
    }
    console.log("Amount negative element in array: " + count);
}
var amountOddPositsveElement2DArr = function (array) {
    var count  = 0;
    var summ = 0;
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            if((array[i][j] > 0) & (j%2 === 1) ){
                count++;
                summ += array[i][j];
            }
        }
    }
    console.log("Amount odd positive elements in array: " + count);
    console.log("Summ odd positive elements in array: " + summ);
}
var amountEvenPositiveElements2DArray = function (array) {
    var count  = 0;
    var summ = 0;
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            if((array[i][j] > 0) & (j%2 === 0) ){
                count++;
                summ += array[i][j];
            }
        }
    }
    console.log("Amount even positive elements in array: " + count);
    console.log("Summ even positive elements in array: " + summ);
}
var elementFour = function (array) {
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if(array[i][j] === 4){
                count++;
            }
        }
    }
    console.log("Amount elements = 4: " + count);
}
var zeroElements = function (array) {
    var maxEll = array[0][0];
    for(var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if(array[i][j] > maxEll) {
                maxEll = array[i][j];
            }
        }
    }
    for(var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if(array[i][j] !== maxEll){
                array[i][j] = 0;
            } else {
                array[i][j] = maxEll;
            }
        }
    }
    console.log("Zero-Array with max-elements: ",array);
}

sumIntersectionPositiveElements2DArr(arr);
minElement2DArr(arr);
maxElement2dArr(arr);
amountNegativeElements2DArr(arr);
amountOddPositsveElement2DArr(arr);
amountEvenPositiveElements2DArray(arr);
elementFour(arr);
zeroElements(arr);