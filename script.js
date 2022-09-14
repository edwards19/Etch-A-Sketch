const container = document.querySelector('.container');
const div = document.createElement('div');
container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 30px); gap: 2px;');

const inputs = [...document.querySelectorAll('input')];
inputs.forEach((input) => {
  input.addEventListener('click', (e) => {
    //console.log(input.value ** 2)
    appendElements(e.target.value ** 2)
  }, { once: true })
})
  
// const first = document.getElementById('first');
// first.addEventListener('click', (e) => {
//   appendElements((first.value ** 2))
//   window.reset()
//   //window.location.reload()
// });

// const second = document.getElementById('second');
// second.addEventListener('click', (e) => {
//   appendElements(second.value ** 2)
// })

// const second = document.getElementById('second');
// second.addEventListener('click', (e) => {
//   appendElements(second.value ** 2)
// })

// const reset = document.createElement('button');
// reset.style.display = 'block';
// const resetText = document.createTextNode('Reset');
// reset.appendChild(resetText);
// container.appendChild(reset)

function appendElements(number = 16) {
  for (let i = 0; i < number; i++){
    const div = document.createElement('div');
    div.setAttribute('style', 'width:30px; height:30px; outline:2px solid black; background-color:lightblue;');
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'lightpink';
    })
    // container.addEventListener('click', () => {
    //   div.style.backgroundColor = 'lightblue';
    // })
    container.appendChild(div);
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
      div.style.backgroundColor = 'lightblue';
    })
  }
}

appendElements(16 ** 2)


// const cells = 529;

// const columns = Math.sqrt(cells);

// const result = appendElements(cells);

// // const cells = Math.sqrt(`${result}`);

// // console.log(cells)

// console.log(columns)