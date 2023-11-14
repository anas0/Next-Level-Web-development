1. What are some benefits of using TypeScript over JavaScript in a project?


Answer: Using TypeScript the main benefit we got is type safety which help us to write high quality maintainable code. We can write clean reuseable code which help us in the future when we modify the code.


2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each.


Answer: optional chaining (?.) - To use access properties or function to check is it null or undefined.


Example: const login = user?.email?.password;
It was checking if user is define then check if email is null or not then take password.


nullish coalescing (??) - It give value if exist or use default value if it is  null or undefined.
Example: const user = role ?? 'guest';.


3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?


Answer: In TypeScript we use async/await to handle asynchronous.

Async/await is more readable and synchronized. 


4. How can you use TypeScript's enums, and what are their advantages?


Answer: With enum we can define fix set of value which make code more readable.


5. Explain the role of type guards in TypeScript and provide an example of a custom type guard.
Answer: Type guards can check error in code. Also it can narrow down the type of a variable.


Example: 
const num: number = 123; 
typeof(num);

To check the type of the variable num


6. Can you give an example of how to use "readonly" properties in TypeScript?


Answer: Example-

class Animal{
    public readonly name: string;
    public color: string;
}

In here we can change the color but for name we can only read can to make a change.


7. Explain what a union type is in TypeScript and provide an example of its usage.


Answer: Union type allow to have many specified type.


Example: In here phone is a union type.

interface user{
    id: number;
    name: string;
    phone: string | number;

}