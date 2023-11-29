import { TravelAnimation } from "./anim_class";

//TO BE MERGED INTO anim_class.js

const speedInput = document.getElementById('speed');
const distanceInput = document.getElementById('distance');
const startButton = document.getElementById('start-animation');
let distance = 0;
let lastTime;

function moveFeature(event) {
    const speed = Number(speedInput.value);
    const time = event.frameState.time;
    const elapsedTime = time - lastTime;
    distance = (distance + (speed * elapsedTime) / 1e6) % 2;
    distanceInput.value = distance*500;
    lastTime = time;

    const currentCoordinate = route.getCoordinateAt(
        distance > 1 ? 2 - distance : distance
    );
    position.setCoordinates(currentCoordinate);
    const vectorContext = getVectorContext(event);
    vectorContext.setStyle(styles.vehicle);
    vectorContext.drawGeometry(position);
    // tell OpenLayers to continue the postrender animation
    // anim.map.render();
}

export function startAnimation(animClass) {
    lastTime = Date.now();
    animClass.layer.on('postrender', moveFeature);
    // hide geoMarker and trigger map render through change event
    animClass.vehicle.setGeometry(null);
}

export function stopAnimation(animClass) {
    // Keep marker at current animation position
    animClass.vehicle.setGeometry(position);
    animClass.layer.un('postrender', moveFeature);
}