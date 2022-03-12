<h2>Introduction</h2>

<p>
  Perform addition, subtraction, multiplication and division operations for floating point numbers.
</p>

<h2>Documentation</h2>
  Results when performing operations with javascript.
<pre>
5.33 + 5.2 === 10.530000000000001
8.13 - 5.75 === 2.380000000000001
8.38 * 0.3 === 2.5140000000000002
4.2 / 1.2 === 3.5000000000000004
</pre>

  Result when performing with float-calculator
```js
mathCalculation("+",5.33, 5.2 ) === 10.53
mathCalculation("-",8.13, 5.75 ) === 2.38
mathCalculation("*",8.38, 0.3) === 2.514
mathCalculation("/",4.2, 1.2 )=== 3.5
```

Why you need it?
if you're dealing with sensitive stuff like monetary transactions, and you don't need to lose the last digits of numbers with methods like toFixed().

<h3> Install </h3>

<pre>npm i float-calculator </pre>

<h3> Usage </h3>

```js
import mathCalculation from "float-calculator";
mathCalculation("+",1.2,2,3)
mathCalculation("-",1.2,2,3)
mathCalculation("*",1.2,2,3)
mathCalculation("/",1.2,2,3)
```
