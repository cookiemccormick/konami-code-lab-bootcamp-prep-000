const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var index = 0
  
  // your code here
  document.body.addEventListener('keydown', onKeyDownHandler)
  
  function onKeyDownHandler(ArrowUp) {
    const key = ArrowUp.key;
    
    if (key === codes[index]) {
      index++
      
      if (index === codes.length) {
        alert("Hurray!")
        index = 0;
      }
    } else {
      index = 0
    }
  }
}