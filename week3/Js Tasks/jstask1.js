//Ex 1
// / Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores
GOOD LUCK
*/


const calcAverage =  (score1,score2,score3) => (score1+score2+score3)/3 ;
let avgDolphins1 =calcAverage (44,23,71);
let avgKoalas1 =calcAverage (65,54,49);
console.log (`'Data 1'Dolphin Average Score is ${avgDolphins1}`);
console.log (`'Data 1'Koala Average Score is ${avgKoalas1}`);
let avgDolphins2 =calcAverage (85,54,41);
let avgKoalas2 =calcAverage (23,34,27);
console.log (`'Data 2'Dolphin Average Score is ${avgDolphins2}`);
console.log (`'Data 2'Koala Average Score is ${avgKoalas2}`);

function checkWinner (avgDolphins1,avgKoalas1)
{
    if (avgDolphins1>= 2* avgKoalas1*2)
    {
        console.log (`Dolphins Win ${avgDolphins1} vs ${avgKoalas1}`);
    }
    else if (avgKoalas1 >= 2* avgDolphins1)
    {
        console.log (`Koala win ${avgKoalas1} vs ${avgDolphins1}`);
    }
    else
    {
        console.log (`All teams loser`);
    }
}
checkWinner (avgDolphins1,avgKoalas1);

function checkWinner (avgDolphins2,avgKoalas2)
{
    if (avgDolphins2>= 2*avgKoalas2)
    {
        console.log (`Dolphins Win ${avgDolphins2} vs ${avgKoalas2}`);
    }
    else if (avgKoalas2 >= 2* avgDolphins2)
    {
        console.log (`Koala win ${avgKoalas2} vs ${avgDolphins2}`);
    }
    else
    {
        console.log (`All teams loser`);
    }
}
checkWinner (avgDolphins2,avgKoalas2);

//////////////////////////////////////////////
//Ex 2
// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK
*/
const MarksObject =
{
    firstName:"Mark",
    lastName:"Miller",
    mass: 78,
    height:1.69
}
const JohnsObject =
{
    firstName:"John",
    lastName:"Smith",
    mass: 92,
    height:1.95
}

const calcBMI =  (mass,height) => mass / (height * height) ;
let MarksBMI =calcBMI (MarksObject.mass , MarksObject.height);
let  JohnsBMI=calcBMI (JohnsObject.mass , JohnsObject.height);

console.log (`MarksBMI is${MarksBMI}`);
console.log (`JohnsBMI is${JohnsBMI}`);

if (MarksBMI > JohnsBMI)
{
    console.log (MarksObject.firstName , MarksObject.lastName,` BMI ${MarksBMI} is heigher than ` ,JohnsObject.firstName,JohnsObject.lastName, `BMI ${JohnsBMI}`);
}
else if (JohnsBMI > MarksBMI)
{
    console.log (JohnsObject.firstName , JohnsObject.lastName ,`BMI ${JohnsBMI} is heigher than `,MarksObject.firstName , MarksObject.lastName, `BMI ${MarksBMI}`);

}
else 
{
    console.log (`Draw`);
}

//////////////////////////////////////////////////////////
//Ex 3
// / Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement  (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300
GOOD LUCK
*/

const bills =[275,40,430];


const tip1 = 300>bills>=50 ?  bills[0]*15/100 : bills[0]*20/100;
console.log (`The first tip is ${tip1}`);
const tip2 = 300>bills>=50 ? bills[1]*15/100: bills[1]*20/100;
console.log (`The Second tip is ${tip2}`);
const tip3 = 300>bills>=50 ? bills[2]*15/100: bills[2]*20/100;
console.log (`The Third tip is ${tip3}`);

const total1= bills[0] + Number(tip1);
console.log(`the bill was`,bills[0], `,the tip was ${tip1} and the total value ${total1}`);

const total2= bills[1] + Number(tip2);
console.log(`the bill was`,bills[1], `,the tip was ${tip2} and the total value ${total2}`);

const total3= bills[2] + Number(tip3);
console.log(`the bill was`,bills[2], `,the tip was ${tip3} and the total value ${total3}`);