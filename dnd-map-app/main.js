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
import GeoJSON from "ol/format/GeoJSON.js";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style.js";
import MultiPoint from "ol/geom/MultiPoint.js";
import { prov1_styles, prov1_geojsonObject } from "./provinceGeos";

useGeographic();

const place = [2155.69, 1602.65];
const point = new Point(place);
const projection = new Projection({
	code: "satmap-image",
	units: "pixels",
	extent: [0, 0, 9600, 4800],
});

var satMap = new ImageLayer({
	source: new Static({
		url: "http://127.0.0.1:5500/sat_map.png",
		projection: projection,
		maxZoom: 5,
		imageExtent: [0, 0, 9600, 4800],
	}),
});

var climateMap = new ImageLayer({
	source: new Static({
		url: "http://127.0.0.1:5500/climate_map.png",
		projection: projection,
		minZoom: 5,
		imageExtent: [0, 0, 9600, 4800],
		visible: true,
	}),
});
climateMap.setVisible(!climateMap.getVisible());

var elevMap = new ImageLayer({
	source: new Static({
		url: "http://127.0.0.1:5500/elevation_map.png",
		projection: projection,
		minZoom: 4,
		maxZoom: 3,
		imageExtent: [0, 0, 9600, 4800],
		visible: true,
	}),
});
elevMap.setVisible(!elevMap.getVisible());

var provinceLayer = new ImageLayer({
	source: new Static({
		url: "http://127.0.0.1:5500/province_map.png",
		projection: projection,
		minZoom: 4,
		maxZoom: 3,
		imageExtent: [0, 0, 9600, 4800],
		visible: true,
	}),
});
provinceLayer.setVisible(!provinceLayer.getVisible());

var citiesLayer = new ImageLayer({
	source: new Static({
		url: "http://127.0.0.1:5500/cities.png",
		projection: projection,
		minZoom: 4,
		maxZoom: 3,
		imageExtent: [0, 0, 9600, 4800],
		visible: true,
	}),
});
citiesLayer.setVisible(!citiesLayer.getVisible());

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

class ToggleClimateMap extends Control {
	/**
	 * @param {Object} [opt_options] Control options.
	 */
	constructor(opt_options) {
		const options = opt_options || {};

		const button = document.createElement("button");
		button.innerHTML = "K";

		const element = document.createElement("div");
		element.className = "toggle-climate ol-unselectable ol-control";
		element.appendChild(button);

		super({
			element: element,
			target: options.target,
		});

		button.addEventListener("click", this.toggleClimate.bind(this), false);
	}

	toggleClimate() {
		climateMap.setVisible(!climateMap.getVisible());
	}
}

class ToggleElevMap extends Control {
	/**
	 * @param {Object} [opt_options] Control options.
	 */
	constructor(opt_options) {
		const options = opt_options || {};

		const button = document.createElement("button");
		button.innerHTML = "E";

		const element = document.createElement("div");
		element.className = "toggle-elev ol-unselectable ol-control";
		element.appendChild(button);

		super({
			element: element,
			target: options.target,
		});

		button.addEventListener("click", this.toggleElev.bind(this), false);
	}

	toggleElev() {
		elevMap.setVisible(!elevMap.getVisible());
	}
}

class ToggleProvinces extends Control {
	/**
	 * @param {Object} [opt_options] Control options.
	 */
	constructor(opt_options) {
		const options = opt_options || {};

		const button = document.createElement("button");
		button.innerHTML = "P";

		const element = document.createElement("div");
		element.className = "toggle-provinces ol-unselectable ol-control";
		element.appendChild(button);

		super({
			element: element,
			target: options.target,
		});

		button.addEventListener("click", this.toggleProvinces.bind(this), false);
	}

	toggleProvinces() {
		provinceLayer.setVisible(!provinceLayer.getVisible());
	}
}

class ToggleCities extends Control {
	/**
	 * @param {Object} [opt_options] Control options.
	 */
	constructor(opt_options) {
		const options = opt_options || {};

		const button = document.createElement("button");
		button.innerHTML = "T";

		const element = document.createElement("div");
		element.className = "toggle-cities ol-unselectable ol-control";
		element.appendChild(button);

		super({
			element: element,
			target: options.target,
		});

		button.addEventListener("click", this.toggleCities.bind(this), false);
	}

	toggleCities() {
		citiesLayer.setVisible(!citiesLayer.getVisible());
	}
}

const map = new Map({
	controls: defaultControls().extend([new RecenterControl(), new ToggleClimateMap(), new ToggleElevMap(), new ToggleCities(), new ToggleProvinces()]),
	target: "map",
	layers: [
		new TileLayer({
			source: new OSM(),
		}),
		satMap,
		climateMap,
		elevMap,
		provinceLayer,
		citiesLayer,
		new VectorLayer({
			source: new VectorSource({
				features: new GeoJSON().readFeatures(prov1_geojsonObject),
			}),
			style: prov1_styles,
		}),
	],
	target: "map",
	view: new View({
		projection: projection,
		center: getCenter([0, 0, 9600, 4800]),
		extent: [0, 0, 9600, 4800],
		zoom: 1,
		minZoom: 2.58,
		maxZoom: 6,
	}),
});

var coordsList = "";
map.on("click", function (evt) {
	coordsList += "[" + evt.coordinate + "], ";
	console.log(coordsList);
});
