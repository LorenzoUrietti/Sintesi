mapboxgl.accessToken = 'pk.eyJ1Ijoia3ViYWJsYXN6Y3p5a293c2tpIiwiYSI6ImNrd3FoeXJibTBtdGgydmxjcTNiNmJ1ZDYifQ.jZg1C7nVKMPNcI4L5KrF6w';

const bounds= [
  //  [9.2, 45.43], //Southwest
  //  [9.16, 45.6]  //Northeast
]


// mappa
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style:'mapbox://styles/kubablaszczykowski/ckwqk0dena3l114oczlotidk1', // style URL
    center: [9.18, 45.441], // starting position [lng, lat]
    interactive: true,
    zoom: 13, // starting zoom
    antialias: true,
    pitch:10,
    // maxBounds:bounds,
    minZoom:11,
    maxZoom:18,
});


const chapters = {
    'baker': {
        bearing: 27,
        center: [9.181, 45.442],
        zoom: 15.5,
        pitch: 20,
        address: 'Via Giovanni 32',
    },
    'aldgate': {
        duration: 6000,
        center: [9.182, 45.44],
        bearing: 150,
        zoom: 15,
        pitch: 0,
        address: 'Via Lucilla 32'
    },
    'london-bridge': {
        bearing: 90,
        center: [9.179, 45.441],
        zoom: 13,
        speed: 0.6,
        pitch: 40,
        address: 'Via Ernesto 32'
    },
    'woolwich': {
        bearing: 90,
        center: [9.18, 45.441],
        zoom: 12.3,
        address: 'Via Cataranza 32'
    },
    'gloucester': {
        bearing: 45,
        center: [9.18, 45.441],
        zoom: 15.3,
        pitch: 20,
        speed: 0.5,
        address: 'Via Vai 32'
    },
    'caulfield-gardens': {
        bearing: 180,
        center: [9.18, 45.44],
        zoom: 12.3,
        address: 'Via broom 32'
    },
    'telegraph': {
        bearing: 90,
        center: [9.18, 45.441],
        zoom: 17.3,
        pitch: 40,
        address: 'Via Ancora 32'
    },
    'charing-cross': {
        bearing: 90,
        center: [9.18, 45.441],
        zoom: 14.3,
        pitch: 20,
        address: 'Via Enneacoda 32'
    }
};
         
    let activeChapterName = 'baker';
    function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;
     
    map.flyTo(chapters[chapterName]);
     
    document.getElementById(chapterName).classList.add('active');
    document.getElementById(activeChapterName).classList.remove('active');
    document.getElementById('indirizzo').innerHTML = chapters[chapterName].address;
     
    activeChapterName = chapterName;
    }
         
    function isElementOnScreen(id) {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
    }
     
    // On every scroll event, check which element is on screen
    window.onscroll = () => {
    for (const chapterName in chapters) {
        if (isElementOnScreen(chapterName)) {
        setActiveChapter(chapterName);
        break;
        }
    };
    scrollBar();
};

function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}