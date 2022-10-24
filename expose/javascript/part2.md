### Question 1
It outputs 3. 3 is the number of times the for loop runs, or in the context of the function, the number of contents in the `prices` array.
### Question 2
It outputs 150. `discountedPrice` is a variable containing the result of an index of the `prices` array being multiplied by 1 - the `discount` variable. In this case `discountedPrice` is declared after the for loop ends, with its contents being at the final index of the prices array, or 300. 300 was then multiplied by 0.5 and stored the value 150 into the `discountedPrice` variable.
### Question 3
It outputs 150. Like the previous question this variable is printed using the contents of the final index of `prices`. The `discountedPrice` variable was 150, and the operations done before the value is stored doesn't actually alter the final value, therefore 150 is stored in `finalPrice`. 
### Question 4
The function returns an array holding all of the newly discounted prices, [50, 100, 150]. This array is the end result of running the original array of [100, 200, 300] with a discount of 0.5 through the function. 
### Question 5
This returns a `null` output. This is due to assigning the `let` keyword to the `i` variable and trying to access it in a line outside of the scope in which it is defined (the for loop block).
### Question 6
Just like the `i` variable in question 5, this returns `null`. Because `discountedPrice` is assigned with the `let` keyword, it has block scope within the for loop. It cannot be accessed outside of the block where it is defined. 
### Question 7
It outputs 150. Although `finalPrice` is assigned with the `let` keyword, it is still in the scope in which the print statement is declared, therefore it prints the correct value of `finalPrice`. 
### Question 8
The function returns an array holding all of the newly discounted prices, [50, 100, 150]. Using the `let` keyword instead of `var` makes no difference in what the function returns as `finalPrice` is declared to have the block scope of the function, thus the `finalPrice` variable should be updated with no issues with scope.
### Question 9
Line 11 produces an error. This error is caused by the use of the `let` keyword when declaring `i`. `i` can only be used in the scope of the for loop and cannot be used outside of it. 
### Question 10
It outputs 3. Due to the `length` variable being declared with the `const` keyword, and the fact that is was never tried to be assigned another value, the `length` variable (the amount of prices) can be outputted without errors.
### Question 11
This function returns an array holding all of the newly discounted prices, [50, 100, 150]. Although `discountedPrice` is constant, we are assigning it a new value (which is then pushed into the array which we return) and pushing it to the stack for each iteration of the for loop, thus it won't cause any errors. 
### Question 12
- A:  Using `student.name` will access the value `'Sarah'` of the name property of the student object.
- B:  Using `student['Grad Year']` will access the value `2022` of the Grad Year property of the student object.
- C:  Using `student.greeting()` will call the function of the greeting property, which prints `Hello!`.
- D:  Using `student['Favorite Teacher'].name` will access the value `Thomas Powell` of the name property of the Favorite Teacher Property of the student object.
- E:  Using `student.courseLoad[0]` will access the value `CSE 110` of the courseLoad property of the student object.
### Question 13
- A:  This will output `32`. The integer `2` is converted to its string representation, and the addition operation would concatenate '3' and '2'.
- B:  This will output `1`. The `'3'` string is converted into its integer representation, and the subtraction operation would subtract 2 from 3, yielding 1. 
- C:  This will output `3`. The `null` string is converted to the integer `0`, so when addition is performed, the result is `0 + 3 = 3`.
- D:  This will output `3null`. `'3'` and `null` are recognized as strings and are concatenated.
- E:  This will output `4`. The boolean `true` is equivalent to `1`, it is converted into the integer form and added to 3. 
- F:  This will output `0`. The boolean `false` is equivalent to `0`, and `null` is also equivalent to `0`, thus they are both mapped to integer form and yield `0`.
- G:  This will output `3undefined`. Like the the `3null` situation above, `3` and `undefined` are converted to strings and concatenated.
- H:  This will output `nan`. The `3` and `undefined` are mapped to integers, however, `undefined1` maps to `nan`, and `3 - nan` is `nan`. 
### Question 14
- A:  This will output `true`. `'2'` maps to its integer value and is compared with 1, the comparison yields true.
- B:  This will output `false`. In javascript when two strings are compared like this, it will compare each digit/letter/symbol in the string until the condition is satisfied. In this case, it will compare if `2 < 1` and stop if it is true or false. `2 < 1` is false, and it will stop there and return false.
- C:  This will output `true`. The `==` regular equality check handles type conversion, it will convert `'2'` to 2 and compare it to 2, yielding true. 
- D:  This will output `false`. The `===` strict equality operator does not handle type conversion, so it will compare the integer `2` with the string `'2'`, which are not equal according to strict equality.
- E:  This will output `false`. Although `true` is converted to `1`, `1 != 2` therefore it should return `false`. 
- F:  This will output `true`. The `Boolean()` function will return `true` or `false` depending on this input given. Having a `2` as an argument, or any non-zero value, will return `true`. Lastly when doing the strict comparison with `true` and `true`, the result will also be `true`.
### Question 15
The `==` operator is a regular equality check, and it can perform type conversions. However it cannot differentiate between `false` and `0` or other types that would automatically be assumed to be the same thing. In order to do a strict equality check without type conversions, `===` should be used. It will differentiate between different types and will return a comparison between `false` and `0` to be `false`. 
### Question 16
Answered in `part2-question16.js`
