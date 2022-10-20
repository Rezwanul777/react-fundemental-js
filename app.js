1.//How to declare let and constant variable

const myName='Seraj';//-----vraible can not be changrd

let shop='Macdonald';//-------only value change
shop='Cats and Eye';

2.// The six basic condition : > , <, ===, !==,  >= ,<=

3.//Multiple condition: && and ||

/*if(){

}else{

}*/

4. //Array, index , length, push,slice, pop--

const numbers=[78,89,90,67]
numbers[0]=99 // this is change of element of indexposition
//console.log(numbers);

5. //forloop and sometimes while loop

for(i=0;i<numbers.length;i++){
   const number=numbers[i]
   console.log(number);
}

6.// function call

   function multiply(num1,num2){
      const result= num1* num2
      return result
   }

   const output=multiply(5,6)

   7. // object--- three ways to access object

   const student={
      name:'prince',age:'40',id:'45'
   }

   const myAge='age'
   console.log(student.name);// direct access by property
   console.log(student['age']);// access via property name string
   console.log(student[myAge]);// access via property name in a variable.


   8. //Templet String

    const myNumbers=[3,5,7,8,9]
    const man={
      name:'prince',age:'40',movies:['Poran','Din the day','DON']
    }

    const about=`My name is ${man.name} age is ${man.age} has got number ${myNumbers[2]} like movie ${man.movies[1]}` 

    //console.log(about);

    9. // arrow function

    const getFortyfive=()=>45  // without parameter
    const addNumber=num=>num+45; // with one parameter
    const isEven=x=>x%2==0   // find even number or u can find odd number just use !=0

    const doMath=(num1,num2)=>{  // multiline arrow function return kore
      const addNum=num1+num2;
      const multiply=num1 * num2
      const result=addNum + multiply
      return result;
    }

    const result=doMath(5,5)
    //console.log(result);
   
    const addThreeNum=(x,y,z)=>x+y+z; // multiparameter uses
    //console.log(addThreeNum(4,5,6));

    10. // Spread operator--- it just copy from older array or object

    const newNumber=[34,56,89,90]
    const copyNum=[...newNumber]
    //console.log(copyNum);

    // create a new array from an older array and add new element
    const currentNum=[...newNumber,100]
    //console.log(currentNum);


    11. // knowledge of map, filter, find, forEach

    const products=[
  
      { name:'python',price:9000,color:'green'},
      { name:'Javascript',price:8000,color:'yellow'},
       {name:'java',price:7000,color:'black'},
       {name:'laravel',price:5000,color:'chayan'}
    
    ]
