// var numbers = [1, 3, 5, 9]

// function normalizeNumbers(numbers) {
//     var result = 0
//    for ( var i = 0 ; i< numbers.length ; i ++) {
//      result = result + numbers[i]

//    }
//    return result
// }

// console.log(normalizeNumbers(numbers));

// var elInput = document.querySelector('.js-btn');
// var elWrapper = document.querySelector('.container')

// elInput.addEventListener('click', function() {
//   elWrapper.innerHTML = '';
//   var elTextarea = document.createElement('textarea');
//   elWrapper.appendChild(elTextarea);

// })
// console.log(elWrapper)
// // btn.addEventListener("click", () => {
//   input.type = "text";
// });

// var sardorPerson = {
//   firstName : 'Sardor',
//   lastName : `Ergashev`,
//   age : 15,
//   img :`https://picsum.photos/100`,
//   active :function () {
//     return('telegramga tinmay yozadi');
//   }
// }
// var prop = 'firstName'
// var nodiraka = {
//   firstName : 'Nodir',
//   lastName : `Smailov`,
//   age : 29,
//   img :`https://picsum.photos/100`
// }
// console.log(sardorPerson[prop]);
// console.log(sardorPerson.active());

// var users = [
//   [
//     {
//       id : 1,
//       firstName :  `Abdurahim`
//     },
//     {
//       id : 2,
//       firstName :  `Sardor`
//     },
//     {
//       id : 2,
//       firstName :  `Abbos`
//     },
//   ],
//   [
//     {
//       id : 1,
//       firstName :  `Nodir`
//     },
//     {
//       id : 2,
//       firstName :  `Dostonbek`
//     },
//     {
//       id : 2,
//       firstName :  `Jaloliddin`
//     },
//   ],
// ];

// console.log(users[0][2].firstName);
// console.log(users[1][1].id);

// var fruits = ['olma', 'nok', 'banan']
// fruits.push('olcha')
// fruits.push('shaftoli')
// fruits.unshift('bodring')
// // fruits.shift('behi')
// var elLastElement = fruits.pop();
// console.log(elLastElement);

// console.log(fruits)

// var a = 9;
// var b = 4;
// var p = (a + b) * 2 ;
// var s = a * b
// console.log(p)
// console.log(s)

// var elInput = document.querySelector('.js-btn');
// var result = ''
var elBtn = document.querySelector(".js-btn");
var elInput = document.querySelector(".js-input");
var elHeading = document.querySelector(".js-name");
elBtn.addEventListener("click", () => {
  elInput.value = `Hello ${elInput.value} how are you !!!`;
  elHeading.textContent = elInput.value;
  elInput.value = ""
});

// console.log(greeting);
