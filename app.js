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

    
