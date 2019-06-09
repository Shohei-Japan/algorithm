const numLength = 500;
const awaitTime = 5;
const ground = document.getElementById("ground");

// create an array with numLength.
const nums = [...Array(numLength).keys()].map(n => n + 1);

// shuffle numbers in an array.
for (let i = nums.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * (i + 1));
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

// draw on DOM.
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

// await a lapse of awaitTime seconds.
function awaitSec() {
  return new Promise(resolve => {
    drawNums(nums);
    setTimeout(() => {
      resolve()
    }, awaitTime)
  })
}

// implement bubble sort.
async function bubbleSort() {
  const arrLength = nums.length;
  let temp;

  for (let i = 0; i < arrLength - 1; i++) {
    for (let j = 0; j < arrLength - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
    await awaitSec();
  }
}

const init = () => {
  drawNums(nums);
}

