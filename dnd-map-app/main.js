import "./style.css";
import { Map, Tile, View } from "ol";
import { Feature } from "ol/index.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import ImageLayer from "ol/layer/Image.js";
import OSM from "ol/source/OSM";
import { Vector as VectorSource } from "ol/source.js";
import Projection from "ol/proj/Projection.js";
import Static from "ol/source/ImageStatic.js";
import { Point } from "ol/geom.js";
import { getCenter } from "ol/extent.js";
import { Control, defaults as defaultControls } from "ol/control.js";
import { useGeographic } from "ol/proj.js";

useGeographic();

const place = [500, 500];

const point = new Point(place);

//
// Define rotate to north control.
//

class RecenterControl extends Control {
	/**
	 * @param {Object} [opt_options] Control options.
	 */
	constructor(opt_options) {
		const options = opt_options || {};

		const button = document.createElement("button");
		button.innerHTML = "C";

		const element = document.createElement("div");
		element.className = "rotate-north ol-unselectable ol-control";
		element.appendChild(button);

		super({
			element: element,
			target: options.target,
		});

		button.addEventListener("click", this.handleRecenter.bind(this), false);
	}

	handleRecenter() {
		this.getMap().getView().fit(extent, map.getSize());
	}
}

const extent = [0, 0, 2400, 1200];
const projection = new Projection({
	code: "satmap-image",
	units: "pixels",
	extent: extent,
});

const map = new Map({
	controls: defaultControls().extend([new RecenterControl()]),
	target: "map",
	layers: [
		new TileLayer({
			source: new OSM(),
		}),
		new ImageLayer({
			source: new Static({
				url: "http://127.0.0.1:5500/sat_map.png",
				projection: projection,
				imageExtent: extent,
			}),
		}),
		new VectorLayer({
			source: new VectorSource({
				features: [new Feature(point)],
			}),
			style: {
				"circle-radius": 2,
				"circle-fill-color": "red",
			},
		}),
	],
	target: "map",
	view: new View({
		projection: projection,
		center: getCenter(extent),
		zoom: 2.58,
	}),
});
