/* 변수선언
let messageStr = "Hello, Question";
*/

/* 경고 및 확인 메시지 출력
let flag = confirm(messageStr);
if (flag) {
    alert("True");
}
else {
    alert(False);
} */

/* 확인대화상자
let inputFieldDefaultText = "Answer";
prompt(messageStr, inputFieldDefaultText);
*/

/* Variables 
let num = 1;
let traffic = "bus";
let bool = true;
let nothing;
console.log(nothing);
*/

/* Array
let array1 = new Array("one", "two", "three");
let array2 = ["one", "two", "three"];
console.log(array2);
*/

/* Objects */
let Obj1 = {n1: "one", n2: "two", n3: "three"}
console.log(Obj1["n1"]);
console.log(Obj1.n2);

/*
for(let item in Obj1) {
    console.log(item);
    console.log(Obj1[item]);
}
*/

/* for 
let arr = Object.entries(Obj1); // Object.entries conversion method Object to Array
for(let i=0; i<3; i++) {
    console.log(arr[i]);
}
*/

/* while 
while(i<10) {
    console.log(i);
    i++;
}
*/

/* do while */
let i=0;
do {
    console.log("repeat: " + i);
    i++;
}
while(i<10);