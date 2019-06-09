const field = document.getElementById("field");
const ground = document.getElementById("ground");
const numLength = 100;
const awaitTime = 10;

const nums = [...Array(numLength).keys()].map(n => n + 1);

// shuffle
for (let i = nums.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * (i + 1));
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

// draw on DOM
const drawNums = () => {
  while (ground.firstChild) {
    ground.removeChild(ground.firstChild);
  }
  nums.forEach(num => {
    const div = document.createElement("div");
    div.className = "bar";
    div.style.height = `calc(var(--base-height) * ${num / numLength * 100})`
    ground.appendChild(div);
  })
}

function await1sec(n) {
  return new Promise(resolve => {
    drawNums(nums);
    setTimeout(() => {
      resolve()
    }, awaitTime)
  })
}

async function bubbleSort() {
  const arrLength = nums.length;
  let maxNum = nums[0];
  let maxNumIndex = 0;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (maxNum < nums[j + 1]) {
        maxNum = nums[j + 1];
        maxNumIndex = j + 1;
      }
    }
    nums.splice(arrLength - i, 0, maxNum);
    nums.splice(maxNumIndex, 1);

    await await1sec(i);
    
    maxNum = nums[0];
    maxNumIndex = 0;
  }
}

const init = () => {
  drawNums(nums);
}

