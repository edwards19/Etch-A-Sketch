const container = document.querySelector('.container');
const pixelSize = document.querySelector('.size')
let size = pixelSize.value;
const color = document.querySelector('.color');
const reset = document.querySelector('.reset');

let draw = false;


function appendPixels(size) {
  for (let i = 0; i < size ** 2; i++){
    // This line takes the css variable --size and replaces it with the function parameter from above
    container.style.setProperty('--size', size);
    const div = document.createElement('div');
    div.classList.toggle('pixel');
    container.appendChild(div);
    div.addEventListener('mouseover', () => {
      if(!draw) return;
      div.style.backgroundColor = color.value;
    })
    div.addEventListener('mousedown', () => {
      div.style.backgroundColor = color.value;
    })
  }
};

window.addEventListener('mousedown', () => {
  draw = true;
});

window.addEventListener('mouseup', () => {
  draw = false;
});

function restart() {
  container.textContent = '';
  appendPixels(size);
};

reset.addEventListener('click', restart);

pixelSize.addEventListener('keyup', () => {
  size = pixelSize.value;
  restart()
})

appendPixels(size);


// const cells = 529;

// const columns = Math.sqrt(cells);

// const result = appendElements(cells);

// // const cells = Math.sqrt(`${result}`);

// // console.log(cells)

// console.log(columns)