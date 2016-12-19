// Grab canvas and context
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
// Set canvas size to window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Set stroke parameters
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

// Initialize
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event) {
  // prevent drawing unless mousedown
  if (!isDrawing) return;

  ctx.beginPath();
  // Start at last position
  ctx.moveTo(lastX, lastY);
  // Connect to current mouse position
  ctx.lineTo(event.offsetX, event.offsetY);
  // Draw line
  ctx.stroke();
  lastX, lastY = [event.offsetX, event.offsetY];
}

// Mousedown so set isDrawing to true
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  lastX, lastY = [event.offsetX, event.offsetY];
});

// Call draw function on mousemove
canvas.addEventListener('mousemove', draw);

// Mouseup so set isDrawing to false
canvas.addEventListener('mouseup', () => isDrawing = false);
// Mouse is out so set isDrawing to false
canvas.addEventListener('mouseout', () => isDrawing = false);
