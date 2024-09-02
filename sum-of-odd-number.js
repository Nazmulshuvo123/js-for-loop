
/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
//Display sum of all the odd numbers from 91 to 129.
let sum = 0;
for( n = 91; n <= 129; n++){
    // console.log(n);
    if( n % 2 === 1){
        console.log("The odd number is :", n);
        sum = sum + n;
        // console.log("The sum is: ", sum);
    }
}
console.log("The sum is: ", sum);


//Display sum of all the even numbers from 51 to 85.
// let total = 0;
// for( i = 51; i <= 85; i++){
//     // console.log(i);
//     if( i % 2 === 1){
//         // console.log("The odd number is :", i);
//         total = total + i;
//         // console.log("The sum is : ", total);
//     }
// }
// console.log("The sum is : ", total);