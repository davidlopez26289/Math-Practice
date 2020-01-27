//global variables
var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");

function mean(){
        var first = doc1.value;
        var second = doc2.value;
        var third = doc3.value;
        var fourth = doc4.value;
        var fifth = doc5.value;
        var sixth = doc6.value;

        var numbers = (parseInt(first) + parseInt(second) + parseInt(third) + parseInt(fourth) + parseInt(fifth) + parseInt(sixth))/6;
        output.innerHTML= "The mean is" + " " + numbers;
}

function largestNum(){
 var first = parseFloat( doc1.value);
 var second = parseFloat( doc2.value);
 var third = parseFloat( doc3.value);
 var fourth = parseFloat( doc4.value);
 var fifth = parseFloat( doc5.value);
 var sixth = parseFloat( doc6.value);

 var number = Math.max(first, second, third, fourth, fifth, sixth);
 output.innerHTML = "The largest number is" + " " + number;

}

function smallestNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var small = Math.min(first,second,third, fourth, fifth, sixth );
    output.innerHTML = "The smallest number is" + " " + small;
}
function leastHighest(){
 var first = parseFloat( doc1.value);
 var second = parseFloat( doc2.value);
 var third = parseFloat( doc3.value);
 var fourth = parseFloat( doc4.value);
 var fifth = parseFloat( doc5.value);
 var sixth = parseFloat( doc6.value);

 var o1 = 0;
 var o2= 0;
 var o3= 0;
 var o4 = 0;
 var o5 = 0;
 var o6 = 0;

 if(o1 === first){
    first = first;
    second = second;
    third = third;
    fourth = fourth;
    fifth = fifth;
    sixth = sixth;
 }

}
function range(){
 var first = parseFloat( doc1.value);
 var second = parseFloat( doc2.value);
 var third = parseFloat( doc3.value);
 var fourth = parseFloat( doc4.value);
 var fifth = parseFloat( doc5.value);
 var sixth = parseFloat( doc6.value);

 var number = Math.max(first, second, third, fourth, fifth, sixth) - Math.min(first,second,third, fourth, fifth, sixth );

output.innerHTML = "The range is " + " " + number;
}
function middle(){
 var first = parseFloat( doc1.value);
 var second = parseFloat( doc2.value);
 var third = parseFloat( doc3.value);
 var fourth = parseFloat( doc4.value);
 var fifth = parseFloat( doc5.value);
 var sixth = parseFloat( doc6.value);

 var number = (parseInt(third) + parseInt(fourth))/2; 

 output.innerHTML = "The median is" + " " + number;
}
function mode(){
 var first = parseFloat( doc1.value);
 var second = parseFloat( doc2.value);
 var third = parseFloat( doc3.value);
 var fourth = parseFloat( doc4.value);
 var fifth = parseFloat( doc5.value);
 var sixth = parseFloat( doc6.value);

 var n1 = 1;
 var n2 = 1;
 var n3 = 1;
 var n4 = 1;
 var n5 = 1;
 var n6 = 1;

 if(first === two){

 }
}
function duplicate(){
    var first = parseFloat( doc1.value);
    var second = parseFloat( doc2.value);
    var third = parseFloat( doc3.value);
    var fourth = parseFloat( doc4.value);
    var fifth = parseFloat( doc5.value);
    var sixth = parseFloat( doc6.value);
}
function unique(){
    var first = parseFloat( doc1.value);
    var second = parseFloat( doc2.value);
    var third = parseFloat( doc3.value);
    var fourth = parseFloat( doc4.value);
    var fifth = parseFloat( doc5.value);
    var sixth = parseFloat( doc6.value);
}