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
   //console.log(student.name);// direct access by property
   //console.log(student['age']);// access via property name string
   //console.log(student[myAge]);// access via property name in a variable.


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
    // use map function
const names=products.map(product=>product.name) // select an item by map and returns an array
//console.log(names);

// use forEach function

products.forEach(pd=>console.log(pd.price))// filter also iterate each element but does not return an array.
// so we could not use any variable.

// use filter -- it returns an array if fulfil the condition

const coursePrice=products.filter(product=>product.price<8000)
//console.log(coursePrice);

const specificColor=products.filter(product=>product.color.includes('a'))
//console.log(specificColor);

// use find=== it gives first element if condition matching and gives an object
// that is the difference from filter.

const specialColor=products.find(product=>product.color.includes('a'))
//console.log(specialColor);

12.
//array destructuring--- pls notify the serial no cause in array elements exit index wise.

const arrNumbers=[56,78,90]
const [x,y]=[56,78]
//console.log(x);


    const man1={
      name:'prince',age:'40',movies:['Poran','Din the day','DON']
    }

    const[firstMovie,secondMovie]=man1.movies
    //console.log(secondMovie);

  13.  // object destructuring--- it does not maintain serial or index no.
const employee={
   name:'prince',
   id:56,
   computer:'laptop',
   salary:50000,
   programing:['java','javascript','python','c++'],
   specification:{
      height:5,
      weight:62,
      address:'Bogura',
      watch:{
         color:'gray',
         price:6777,
         // brand:''
      }
   }
}

const{computer,salary}=employee
//console.log(salary);

const{weight,address}=employee.specification // if u want destructure  a property from nested object
//console.log(address);                        // then u have to do == object.property

const [ist,second,third]=employee.programing
//console.log(second);

14.// use optional chaining---- it gets rid from error . if does not exist value or property it defines null

const{brand}=employee?.specification?.watch
//console.log(brand);

15.//Find  keys, values of object--- it always return an array

const man2={
   name:'prince',age:'40',movies:['Poran','Din the day','DON']
 }

 const keys=Object.keys(man2)
 //console.log(keys);
 const values=Object.values(man2)
 //console.log(values);

const entries=Object.entries(man2) // it always return two dimensional  array
//console.log(entries); 


16. // Most important to Know
    //  a) use for of in array like object
    // b) loop in an object using for in
     //    c) Mostly uses forEach in normal array

17. // add or remove element from array of object

const elements=[
  
   { name:'python',price:9000,color:'green'},
   { name:'Javascript',price:8000,color:'yellow'},
    {name:'java',price:7000,color:'black'},
    {name:'laravel',price:5000,color:'chayan'}
 
 ]
 // add new element
 const newElement={name:'PHP',price:4000,color:'red'}
 // copy elements with spread operator and then add newElement
 const newElements=[...elements,newElement]
 //console.log(newElements);

 // remove an item
 // here remove item from array means create new array with specific item.
 const removeItem=elements.filter(item=>item.name!=='java')

 //console.log(removeItem);

 18. //truthy or falsy

   // check truthy

   let myNum=100;
   if(myNum){   //--- it shows value is true or exits
      myNum=myNum * 4
   }else{
      myNum=0;
   }

  // console.log(myNum);
   //--- it shows negative or falsy
  let myResult=100;
   if(!myResult){   
      myResult=myResult * 4
   }else{
      myResult=0;
   }
//console.log(myResult);

19. //ternary operatorder

let money=200;
let food=money>100 ? 'burger' : 'cha biscuit kha'
//console.log(food);

20.//  number to string 

const num1=89
//console.log(num1);
const numStr=num1+''  // to convert strimg
//console.log(numStr);

21. // convert string to number

const input='56'
const inputNum= +input

//console.log(inputNum);

22. // truthy or falsy
const isActive=true;
const displayUser=()=>console.log('I will learn Python')
const hideUser=()=>console.log('I will learn Java')

isActive ? displayUser() : hideUser()

23.// object declaration shortcut

const job='FrontEnd Developer'
const status='Freelancer'

const myPosition={
   job:job,
   status:status
}
//console.log( myPosition);

// or=======

const position1={job,status}
//console.log(position1);

