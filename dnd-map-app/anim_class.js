import { getVectorContext } from 'ol/render.js';
import { Map } from "ol";


let distance = 0;
let lastTime;

export class TravelAnimation { 
    constructor(stButton, sInput, dInput, animating, animStyles, animRoute, startPosition, animLayer, animVehicle, map) {
      this.startButton = stButton
      this.speedInput = sInput
      this.distanceInput = dInput
      this.start_button = stButton
      this.animating = animating
      this.styles = animStyles
      this.route = animRoute
      this.position = startPosition
      this.layer = animLayer
      this.vehicle = animVehicle
      this.map = map
      this.distance = distance

      //This has to be here because otherwise there are scoping issues for 'this'
      //when moveFeature gets called from either Animation function
      this.moveFeature = (event) => {
        console.log("   moving")
        const speed = Number(this.speedInput.value);
        const time = event.frameState.time;
        const elapsedTime = time - lastTime;
        this.distance = (this.distance + (speed * elapsedTime) / 1e6) % 2;
        this.distanceInput.value = this.distance * 500;
        lastTime = time;
        const currentCoordinate = this.route.getCoordinateAt(
          this.distance > 1 ? 2 - this.distance : this.distance
        );
        this.position.setCoordinates(currentCoordinate);
        const vectorContext = getVectorContext(event);
        vectorContext.setStyle(this.styles.vehicle);
        vectorContext.drawGeometry(this.position);
        this.map.render();
      }

  }

  startAnimation() {
    console.log("   start func")
    this.animating = true;
    lastTime = Date.now();
    this.startButton.textContent = 'Stop Animation';
    this.layer.on('postrender', this.moveFeature);
    // hide geoMarker and trigger map render through change event
    this.vehicle.setGeometry(null);
  }

  stopAnimation() {
    console.log("   stop func")
    this.animating = false;
    // Keep marker at current animation position
    this.startButton.textContent = 'Start Animation';
    this.vehicle.setGeometry(this.position);
    this.layer.un('postrender', this.moveFeature);
  }

  getAnimating() { 
    return this.animating
  }

  getDistance() { 
    return this.distance
  }

  setDistance(dist) { 
    this.distance = dist
  }
}