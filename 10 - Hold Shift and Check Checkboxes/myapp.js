const boxes = document.querySelectorAll('.item input');

console.log(boxes);

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are CHECKING the box

  let inBetween = false;

  if(e.shiftKey && this.checked) {
    boxes.forEach(box => {
      console.log(box);
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
        console.log('starting/finishing to check in between...')
      }

      if (inBetween) {
        box.checked = true;
      }
    })
  };

  lastChecked = this;
}

boxes.forEach(box =>
  box.addEventListener('click', handleCheck)
);
