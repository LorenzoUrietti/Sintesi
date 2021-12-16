// full screen
var elem = document.documentElement;
let statoFullscreen=0;
function neoFullscreenUnico(){
    if(statoFullscreen===0){
        statoFullscreen++;
        if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
    } else if (statoFullscreen===1){
        statoFullscreen--;
        if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
    }
}

//funzioni attivate con tastiera(frecce + fullscreen)
var addEvent = document.addEventListener ? function(target,type,action){
    if(target){
        target.addEventListener(type,action,false);
    }
} : function(target,type,action){
    if(target){
        target.attachEvent('on' + type,action,false);
    }
  }
addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key===70){
        neoFullscreenUnico()
    }
});




mapboxgl.accessToken = 'pk.eyJ1Ijoia3ViYWJsYXN6Y3p5a293c2tpIiwiYSI6ImNrd3FoeXJibTBtdGgydmxjcTNiNmJ1ZDYifQ.jZg1C7nVKMPNcI4L5KrF6w';
// mappa
  const map = new mapboxgl.Map({
        container: 'map', // container ID
        style:'mapbox://styles/kubablaszczykowski/ckw9j5jc3byi814mp8u56usaq', // style URL
        center: [9.18, 45.441], // starting position [lng, lat]
        interactive: true,
        zoom: 17, // starting zoom
        antialias: true,
        pitch:75,

    });
 


    const routes = {
      target: [
          [6.56158447265625, 46.059891147620725],
          
          [6.907310485839843, 45.469039846107734]
      ],
      camera: [
          [6.559867858886718, 46.05965291336496],
          
          [6.907310485839843, 45.469280615977105]
      ]
  };

    // `routes` comes from https://docs.mapbox.com/mapbox-gl-js/assets/routes.js,
// which has properties that are in the shape of an array of arrays that correspond
//  to the `coordinates` property of a GeoJSON linestring, for example:
// [
//   [6.56158, 46.05989],
//   [6.56913, 46.05679],
//   ...
// ]
// this is the path the camera will look at
const targetRoute = routes.target;
// this is the path the camera will move along
const cameraRoute = routes.camera;
 
// add terrain, sky, and line layers once the style has loaded
map.on('load', () => {

map.addSource('trace', {
type: 'geojson',
data: {
'type': 'Feature',
'properties': {},
'geometry': {
'type': 'LineString',
'coordinates': targetRoute
}
}
});
map.addLayer({
type: 'line',
source: 'trace',
id: 'line',
paint: {
'line-color': 'orange',
'line-width': 0
},
layout: {
'line-cap': 'round',
'line-join': 'round'
}
});
});
 
// wait for the terrain and sky to load before starting animation
map.on('load', () => {
const animationDuration = 80000;
const cameraAltitude = 4000;
// get the overall distance of each route so we can interpolate along them
const routeDistance = turf.lineDistance(turf.lineString(targetRoute));
const cameraRouteDistance = turf.lineDistance(
turf.lineString(cameraRoute)
);
 
let start;
 
function frame(time) {
if (!start) start = time;
// phase determines how far through the animation we are
const phase = (time - start) / animationDuration;
 
// phase is normalized between 0 and 1
// when the animation is finished, reset start to loop the animation
if (phase > 1) {
// wait 1.5 seconds before looping
setTimeout(() => {
start = 0.0;
}, 1500);
}
 
// use the phase to get a point that is the appropriate distance along the route
// this approach syncs the camera and route positions ensuring they move
// at roughly equal rates even if they don't contain the same number of points
const alongRoute = turf.along(
turf.lineString(targetRoute),
routeDistance * phase
).geometry.coordinates;
 
const alongCamera = turf.along(
turf.lineString(cameraRoute),
cameraRouteDistance * phase
).geometry.coordinates;
 
const camera = map.getFreeCameraOptions();
 
// set the position and altitude of the camera
camera.position = mapboxgl.MercatorCoordinate.fromLngLat(
{
lng: alongCamera[0],
lat: alongCamera[1]
},
cameraAltitude
);
 
// tell the camera to look at a point along the route
camera.lookAtPoint({
lng: alongRoute[0],
lat: alongRoute[1]
});
 
map.setFreeCameraOptions(camera);
 
window.requestAnimationFrame(frame);
}
 
window.requestAnimationFrame(frame);
});

