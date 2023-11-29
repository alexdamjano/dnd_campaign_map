import Point from "ol/geom/Point.js";
import { Circle, Fill, Icon, Stroke, Style, Text } from "ol/style.js";
import { Vector as VectorSource } from "ol/source.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import { Feature } from "ol/index.js";
import Polyline from 'ol/format/Polyline.js';
import LineString from 'ol/geom/LineString.js';
import { TravelAnimation } from "./anim_class";

const styleSheet = {
            'route':
                new Style({
                    stroke: new Stroke({
                    width: 6,
                    color: [237, 212, 0, 0.8],
                    }),
                }),
            'icon':
                new Style({
                    image: new Icon({
                        scale: 0.1,
                        anchor: [0.5, 1.15],
                        src: 'http://127.0.0.1:5500/refinery.png',    
                    }),
                }),
            'vehicle':
                new Style({
                    image: new Icon({
                        scale: 0.1,
                        anchor: [0.5, 1],
                        src: 'http://127.0.0.1:5500/boat.png',    
                    }),
                }),
            'circle':
                new Style({
                        image: new Circle({
                            radius: 7,
                            fill: new Fill({
                                color: 'black',
                            }),
                            stroke: new Stroke({
                                color: 'white',
                                width: 2,
                            }),
                        }),
                    }),
            'geoMarker': new Style({
                image: new Circle({
                    radius: 7,
                        fill: new Fill({color: 'black'}),
                    stroke: new Stroke({
                        color: 'white',
                        width: 2,
                    }),
                }),
            }),
};

export class RefineryQuest { 
    constructor() { 
        this.endMarker = new Feature({
            type: 'icon',
            geometry: new Point([3658.5888708436005, 2889.958915042446]),
        });

        this.boat = new Feature({
            type: 'vehicle',
            geometry: new Point([2794.2988546825186, 2678.4583275691425]),
        });

        this.position = this.boat.getGeometry().clone();

        this.endCircle = new Feature({
            type: 'circle',
            geometry: new Point([3658.5888708436005, 2889.958915042446]),
        });

        this.route = new LineString([
            [2794.2988546825186, 2678.4583275691425],
            [2812.921105198964, 2685.6943010465952],
            [2819.1672826582662, 2675.7004425274736],
            [2829.161165004664, 2653.214197320047],
            [2837.489409559492, 2636.141318618562],
            [2849.5653431165647, 2634.4756649421415],
            [2864.139757188269, 2637.8069405252813],
            [2883.711116404385, 2634.4756649421415],
            [2902.0332433056105, 2624.0653691766383],
            [2923.686661674827, 2612.4058252113946],
            [2940.7595403763116, 2601.9955294458914],
            [2970.7411953579303, 2583.256997067986],
            [2987.397668582735, 2556.190228077678],
            [3006.136200960641, 2533.287577393571],
            [3027.3731979683266, 2515.798293215407],
            [3050.6922541291133, 2508.302867556364],
            [3123.9807617340157, 2512.4669858625653],
            [3188.1081582337533, 2532.0383291938306],
            [3238.4939833848475, 2560.354346383879],
            [3325.107656861713, 2606.5760849984736],
            [3402.9766564797956, 2656.129067426507],
            [3478.3472232377985, 2710.6790108838027],
            [3559.547530208722, 2773.140785476821],
            [3604.1035833771944, 2831.0220362869577],
            [3629.088293214402, 2875.578121225132],
            [3658.5888708436005, 2889.958915042446]
        ]);

        this.routeFeature = new Feature({
            type: 'route',
            geometry: this.route,
        });

        this.refineryStyles = styleSheet

        this.refineryLayer = new VectorLayer({
            source: new VectorSource({
                features: [
                    this.getEndMarker(),
                    this.getEndCircle(),
                    this.getVehicle(),
                    this.getRouteFeature(),
                ],
            }),
            style: function (feature) {
                const styles = styleSheet
                return styles[feature.get('type')];
            },
            minZoom: 3,
        });
    }

    getAnimClass() { 
        return new TravelAnimation(
            this.refineryStyles,
            this.route,
            this.position,
            this.refineryLayer,
            this.boat)
    }

    getLayer() { 
        return this.refineryLayer;
    }

    getEndMarker() { 
        return this.endMarker;
    }
    
    getEndCircle() { 
        return this.endCircle;
    }
    getVehicle() { 
        return this.boat;
    }
    getRouteFeature() { 
        return this.routeFeature;
    }
    getRoute() { 
        return this.route;
    }
    getStyles() { 
        return this.refineryStyles;
    }

    getPosition() { 
        return this.position;
    }
}
