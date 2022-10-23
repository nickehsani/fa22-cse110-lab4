### Question 1
It prints: ```final result: 20```. There are no errors.
### Question 2
Again, it prints: ```final result: 20```. There are no errors.
### Question 3
It prints: ```final result: 20```. There are no errors.
### Question 4
There is an error. The `result` variable is not defined in the scope in which line 13 tries to access it. 
### Question 5
There is an error. The `result` variable is constant and the compiler catches that a constant variable is trying to be reassigned in line 7 and thus throws an error. 
### Question 6
There is an error. Constant variables have the same scope as the `let` type variable. `result` is not defined when it is trying to be accessed in line 13 as it is out of scope.
