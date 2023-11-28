import Point from "ol/geom/Point.js";

const refinery_icon = document.createElement('img');

export function refineryStyle(feature, resolution) {
    new Style({
        image: new Icon({
            src: 'http://127.0.0.1:5500/refinery.png',
        }),
    })
}

export const refineryPoint = {
    type: "Feature",
        properties: {
            name: "Tovoit1",
            color: "rgba(183, 65, 0)",
            fill: "rgba(183, 65, 0, 0.25)",
        },
        geometry: {
            type: "Point",
            coordinates: [3658.5888708436005,2889.958915042446],
        },
    }

// export function refineryStyle() {
// 	return [
// 		new Style({
// 			image: new CircleStyle({
// 				radius: 4,
// 				fill: new Fill({
// 					color: "white",
// 				}),
// 			}),
// 			geometry: () => {
// 				const coordinates = [3658.588,2889.958];
// 				return new MultiPoint(coordinates);
// 			},
// 		}),
// 	];
// }

// const duration = 3000;
// function flash(feature) {
//   const start = Date.now();
//   const flashGeom = feature.getGeometry().clone();
//   const listenerKey = tileLayer.on('postrender', animate);

//   function animate(event) {
//     const frameState = event.frameState;
//     const elapsed = frameState.time - start;
//     if (elapsed >= duration) {
//       unByKey(listenerKey);
//       return;
//     }
//     const vectorContext = getVectorContext(event);
//     const elapsedRatio = elapsed / duration;
//     // radius will be 5 at start and 30 at end.
//     const radius = easeOut(elapsedRatio) * 25 + 5;
//     const opacity = easeOut(1 - elapsedRatio);

//     const style = new Style({
//       image: new CircleStyle({
//         radius: radius,
//         stroke: new Stroke({
//           color: 'rgba(255, 0, 0, ' + opacity + ')',
//           width: 0.25 + opacity,
//         }),
//       }),
//     });

//     vectorContext.setStyle(style);
//     vectorContext.drawGeometry(flashGeom);
//     // tell OpenLayers to continue postrender animation
//     map.render();
//   }
// }

// source.on('addfeature', function (e) {
//   flash(e.feature);
// });