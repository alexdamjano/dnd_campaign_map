import { getVectorContext } from 'ol/render.js';
import { Map } from "ol";

const speedInput = document.getElementById('speed');
const distanceInput = document.getElementById('distance');
const startButton = document.getElementById('start-animation');
let distance = 0;
let lastTime;

export class TravelAnimation { 
    constructor(animating, animStyles, animRoute, startPosition, animLayer, animVehicle, map) {
      // this.start_button = startButton
        this.animating = animating
        this.styles = animStyles
        this.route = animRoute
        this.position = startPosition
        this.layer = animLayer
        this.vehicle = animVehicle
        this.map = map
  }
  
  moveFeature(event) {
    const speed = Number(speedInput.value);
    const time = event.frameState.time;
    const elapsedTime = time - lastTime;
    distance = (distance + (speed * elapsedTime) / 1e6) % 2;
    distanceInput.value = distance * 500;
    lastTime = time;
    const currentCoordinate = this.route.getCoordinateAt(
      distance > 1 ? 2 - distance : distance
    );
    this.position.setCoordinates(currentCoordinate);
    const vectorContext = getVectorContext(event);
    vectorContext.setStyle(this.styles.vehicle);
    vectorContext.drawGeometry(this.position);
    this.map.render();
  }

  startAnimation() {
    this.animating = true;
    lastTime = Date.now();
    startButton.textContent = 'Stop Animation';
    this.layer.on('postrender', this.moveFeature.bind(this));
    // hide geoMarker and trigger map render through change event
    this.vehicle.setGeometry(null);
  }

  stopAnimation() {
    this.animating = false;
    // Keep marker at current animation position
    startButton.textContent = 'Start Animation';
    this.vehicle.setGeometry(this.position);
    this.layer.un('postrender', this.moveFeature.bind(this));
  }
}
