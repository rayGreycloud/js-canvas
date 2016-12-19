// Grab canvas and context
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
// Set canvas size to window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Set stroke parameters
ctx.strokeStyle = `BADA55`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

// Initialize
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
// variable for line width change
let direction = true;

function draw(event) {
  // prevent drawing unless mousedown
  if (!isDrawing) return;
  // Set color
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // Draw line
  ctx.beginPath();
  // Start at last position
  ctx.moveTo(lastX, lastY);
  // Connect to current mouse position
  ctx.lineTo(event.offsetX, event.offsetY);
  // Draw line
  ctx.stroke();
  lastX, lastY = [event.offsetX, event.offsetY];

  // Increment color
  hue++;
  if (hue > 360) hue = 0;

  // Toggle direction at max and min width
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  // Increment line width
  if (direction) {
    ctx.lineWidth = ctx.lineWidth + 0.5;
  } else {
    ctx.lineWidth = ctx.lineWidth - 0.7;
  }
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
