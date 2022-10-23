### Question 1
It prints 3. 3 is the number of times the for loop runs, or in the context of the function, the number of contents in the `prices` array.
### Question 2
It prints 150. `discountedPrice` is a variable containing the result of an index of the `prices` array being multiplied by 1 - the `discount` variable. In this case `discountedPrice` is declared after the for loop ends, with its contents being at the final index of the prices array, or 300. 300 was then multiplied by 0.5 and stored the value 150 into the `discountedPrice` variable.
### Question 3
It prints 150. Like the previous question this variable is printed using the contents of the final index of `prices`. The `discountedPrice` variable was 150, and the operations done before the value is stored doesn't actually alter the final value, therefore 150 is stored in `finalPrice`. 
### Question 4
The function returns an array holding all of the newly discounted prices, [50, 100, 150]. This array is the end result of running the original array of [100, 200, 300] with a discount of 0.5 through the function. 
### Question 5
This returns a `null` output. This is due to assigning the `let` keyword to the `i` variable and trying to access it in a line outside of the scope in which it is defined (the for loop block).
### Question 6
Just like the `i` variable in question 5, this returns `null`. Because `discountedPrice` is assigned with the `let` keyword, it has block scope within the for loop. It cannot be accessed outside of the block where it is defined. 
### Question 7
It prints 150. Although `finalPrice` is assigned with the `let` keyword, it is still in the scope in which the print statement is declared, therefore it prints the correct value of `finalPrice`. 
### Question 8
The function returns an array holding all of the newly discounted prices, [50, 100, 150]. Using the `let` keyword instead of `var` makes no difference in what the function returns as `finalPrice` is declared to have the block scope of the function, thus the `finalPrice` variable should be updated with no issues with scope.
### Question 9
