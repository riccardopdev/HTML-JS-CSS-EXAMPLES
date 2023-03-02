let deltaX = 0;
let deltaY = 0;
let lastX = 0;
let lastY = 0;

// Update CSS with pan offsets
function rotateCube(distanceY = 0, distanceX = 0) {
  document.getElementById('cube').style.transform = `rotateY(${distanceY}deg) rotateX(${distanceX}deg)`;
  lastX = distanceX;
  lastY = distanceY;
} 

// Add current position to pan distance, divided by 2 for slower speed
function calculateOffset(distance, delta) {
  return distance / 2 + delta;
}

// Init Hammer
const hammertime = new Hammer(document.querySelector('.container'));
// Set motion tracking
hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
// Update transformation CSS on pan
hammertime.on('pan', ev => rotateCube(
  calculateOffset(ev.deltaX, deltaX), 
  calculateOffset(-ev.deltaY, deltaY),
));

// Save position on mouse up
hammertime.on('panend', ev => {
  deltaX = lastY;
  deltaY = lastX;
});