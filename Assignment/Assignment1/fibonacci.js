//function Expression(Anonymous)
console.log('===Fibonacci Series===')

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
var val=fibonacci_series(10);
 console.log('Fibonacci_Series', val);

 //Name Function

 function fibonacci_series(n){
     if(n===1)
     {
         return [0,1];
     }
     else
     {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;  
     }
 };
 console.log(fibonacci_series(10));

 //fat arrow function

 var Fibonacci = (n) => {
  if(n===1){
      return [0 , 1];
  }
  else
  {
    var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;  
  }
}
console.log('Fibonacci Seriees =',Fibonacci(10));

 
