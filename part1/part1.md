1. At line 11, the size of prices will be written to the console because console.log(i) will print i and i stops increamenting when i = prices.length.
2. At line 12, the discounted price of the last item in prices will be written to the console because the variable discountedPrice will store the last item's discounted price at the last iteration of the for loop.
3. At line 13, the final price of the last item in prices will be written to the console because the variable finalPrice will store the last item's rounded final price at the last iteration of the for loop.
4. The function will return [50, 100, 150]. In the function, we first initialize an array discounted and a variable finalPrice. After the for loop, discounted will store the final rounded discounted prices of the items from the input array prices. Since the discount value is 0.5, the discounted prices will be half of their original values.
5. At line 11, a ReferenceError will be thrown out because i is initialized in the scope of the for loop, and it cannot be referred outside the for loop.
6. At line 12, a ReferenceError will be thrown out because discountedPrice is initialized in the scope of the for loop, and it cannot be referred outside the for loop.
7. At line 13, the final price of the last item in prices will be written to the console because the variable finalPrice will store the last item's rounded final price at the last iteration of the for loop. It will not cause a ReferenceError because it is declared under the same scope as console.log().
8. Let's assume the assignment was successful in subsequent questions. The function will return [50, 100, 150]. In the function, we first initialize an array discounted and a variable finalPrice. After the for loop, discounted will store the final rounded discounted prices of the items from the input array prices. Since the discount value is 0.5, the discounted prices will be half of their original values.
9. At line 11, a ReferenceError will be thrown out because i is initialized in the scope of the for loop, and it cannot be referred outside the for loop.
10. At line 12, a ReferenceError will be thrown because the constant discountedPrice is declared in the scope of for loop and cannot be referred outside.
11. At line 13, a TypeError will be thrown because finalPrice is a constant and we cannot reassign its value.
12. Let's assume the assignment was successful in subsequent questions, if we count the property of constants, the function will return [] because discounted is a constant and we cannot change its value. If we don't count on the property of constants, the function will again return [50, 100, 150], in the function, we first initialize an array discounted and a variable finalPrice. After the for loop, discounted will store the final rounded discounted prices of the items from the input array prices. Since the discount value is 0.5, the discounted prices will be half of their original values.
13.
A. student.name
B. student['Grad Year']
C. student.greeting();
D. student['Favorite Teacher'].name
E. student.courseLoad[0]
14. 
A. '3'+2 = '32', 2 is converted to a string and concatenated with '3'.
B. '3'-2 = 1, '3' is converted to a number and subtract 2 is 1.
C. 3+null = 3, null is 0, 3+0 = 3.
D. '3'+null = '3null', null is converted to a string and concatenated with '3'.
E. true+3 = 4, true is a boolean and is 1 in number, 1+3=4.
F. false+null = 0, false is 0 in number, null is 0 in number as well.
G. "3"+undefined = '3undefined', undefined is converted to a string and concatenated with "3".
H. "3"+undefined = NaN, undefined is NaN and 3 cannot subtract NaN.
15.
A. '2' > 1 = true, '2' is converted to 2 and is greater than 1.
B. '2' < '12' = false, '2' is greater than '1' in unicode order.
C. 2 == '2' = true, '2' is converted to 2 and is equal to 2.
D. 2 === '2' = false because they are not the same type.
E. true == 2 = false, true = 1 in number which is less than 2.
F. true === Boolean(2) = true, 2 is not 0, so Boolean(2) = true, and true is same as true.
16. 
== performs non-strict equality check with possible type conversion.
=== is a strict equality operator that checks the equality without type conversion.
17. 'How are you?' will be printed out because true is 1 in number so it doesn't equal to 2, we then go to else if, 2 is not 0, so 2 is true in Boolean, so console.log('How are you?'); will be executed.
18. script is in part1-question18.js
19. The result would be [6, 8, 10]. At callback(num + 2), each number in the input array adds 2. Then in the function the for loop goes through the input array, for each number, it multiplies with 2 and gets pushed to the temp array. Lastly, the temp array that contains all the number with (original number + 2) * 2 is returned.
20. script is in part1-question20.js
21. The output of this code should be 1, 4, 3, 2. 
 
