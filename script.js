const container = document.querySelector('.container');
const pixelSize = document.querySelector('.size')
let size = pixelSize.value;
const color = document.querySelector('.color');
const reset = document.querySelector('.reset');
const eraser = document.querySelector('.eraser');

let draw = false;


function appendPixels(size) {
  if (size <= 80) {
    for (let i = 0; i < size ** 2; i++) {
      // This line takes the css variable --size and replaces it with the function parameter from above
      container.style.setProperty('--size', size);
      const div = document.createElement('div');
      div.classList.toggle('pixel');
      container.appendChild(div);
      div.addEventListener('mouseover', () => {
        if (!draw) return;
        div.style.backgroundColor = color.value;
      })
      div.addEventListener('mousedown', () => {
        div.style.backgroundColor = color.value;
      })
      eraser.addEventListener('click', () => {
        div.addEventListener('mouseover', () => {
          if (!draw) return;
          div.style.backgroundColor = 'beige'
        })
        div.addEventListener('mousedown', () => {
          div.style.backgroundColor = 'beige'
        })
      })
      color.addEventListener('click', () => {
        div.addEventListener('mouseover', () => {
          if (!draw) return;
          div.style.backgroundColor = color.value;
        })
        div.addEventListener('mousedown', () => {
          div.style.backgroundColor = color.value;
        })
      })
     
    }
  } else {
    alert('The max size for the grid is 100, please introduce a new value!');
    appendPixels(30);
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
});

appendPixels(size);


