console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(i=0; i<100; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(i=0; i<100; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FIZZBUZZ");
    }
    else if(i % 3 == 0)
    {
        console.log("FIZZ");
    }
    else if(i % 5 == 0)
    {
        console.log("Buzz");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let x = 0;
while(x < 101)
{
    if(x % 3 == 0 && x % 5 == 0 && x % 2 != 0)
    {
        console.log(x + "FIZZBUZZ");
    }
    else if(x % 3 == 0 && x % 5 == 0)
    {
        console.log( x + "FIZZBUZZ");
    }
    else if(x % 3 == 0 && x % 2 != 0)
    {
        console.log(x + "FIZZ");
    }
    else if(x % 5 == 0 && x % 2 != 0)
    {
        console.log( x + "Buzz");
    }
    else if(x % 3 == 0)
    {
        console.log("FIZZ");
    }
    else if(x % 5 == 0)
    {
        console.log("Buzz");
    }
    
    else if(x % 2 != 0)
    {
        console.log(x);
    }
    // switch(x)
    // {
    // case(x % 3 == 0 && x % 5 == 0 && x % 2 != 0):
    //     console.log(x + "FIZZBUZZ");
    //     x++;
    //     break;
    
    // case(x % 3 == 0 && x % 5 == 0):
    
    //     console.log("FIZZBUZZ");
    //     x++;
    //     break;
    
    // case(x % 3 == 0 && x % 2 != 0):
    
    //     console.log(x + "FIZZ");
    //     x++;
    //     break;
    
    // case(x % 5 == 0 && x % 2 != 0):
    
    //     console.log(x + "Buzz");
    //     x++;
    //     break;
    
    // case(x % 5 == 0):
    
    //     console.log("Buzz");
    //     x++;
    //     break;
    
    // case(x % 3 == 0):
    
    //     console.log("FIZZ");
    //     x++;
    //     break;
    
    // case(x % 2 != 0):
    
    //     console.log(x);
    //     x++
    //     break;
    
    // default:
    
    //     x++;
    
    //}
    x++;
}
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for(i=0; i<= n; i++)
{
    if(i==value)
    {
        console.log("Found value!");
        break;
    }
    else
    {
        console.log("Did not find value");
    }
}
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let y = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for(i = start; i <= n; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FIZZBUZZ");
    }
    else if(i % 3 == 0)
    {
        console.log("FIZZ");
    }
    else if(i % 5 == 0)
    {
        console.log("Buzz");
    }
}