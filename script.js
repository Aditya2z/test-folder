// // Add digits of a number
// function addDigits(number) {
//   let sum = 0;
//   let numberString = String(number);
//   for (let i = 0; i < numberString.length; i++) {
//     sum += Number(numberString[i]);
//   }
//   console.log(sum);
//   if (String(sum).length <= 1) {
//     console.log(sum);
//     return sum;
//   }
//   return addDigits(sum);
// }

// // Pivot Index of an array
// function pivotIndex(nums) {
//     let sum = 0;
//     let leftSum = 0;
  
//     for (let num of nums) {
//       sum += num;
//     }
  
//     for (let i = 0; i < nums.length; i++) {
//       if (leftSum == sum - leftSum - nums[i]) {
//         return i;
//       }
//       leftSum += nums[i];
//     }
//     return -1;
//   }

// //

let arrow = document.querySelectorAll(".arrow");
let circle = document.querySelectorAll(".circle");

circle.forEach(circle => {
  circle.addEventListener("click", handleClick);
})

function handleClick() {
  event.target.nextElementSibling.children[0].classList.add('move');
  setTimeout(() => this.style.backgroundColor = getRandomColor(), 5000);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
