import "./style.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import ImageLayer from "ol/layer/Image.js";
import OSM from "ol/source/OSM";
import Projection from "ol/proj/Projection.js";
import Static from "ol/source/ImageStatic.js";
import { getCenter } from "ol/extent.js";
const extent = [0, 0, 2100, 1200];
const projection = new Projection({
	code: "satmap-image",
	units: "pixels",
	extent: extent,
});

const map = new Map({
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
	],
	target: "map",
	view: new View({
		projection: projection,
		center: getCenter(extent),
		zoom: 2.58,
	}),
});
