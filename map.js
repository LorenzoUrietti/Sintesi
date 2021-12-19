mapboxgl.accessToken = 'pk.eyJ1Ijoia3ViYWJsYXN6Y3p5a293c2tpIiwiYSI6ImNrd3FoeXJibTBtdGgydmxjcTNiNmJ1ZDYifQ.jZg1C7nVKMPNcI4L5KrF6w';
// mappa
  const map = new mapboxgl.Map({
        container: 'map', // container ID
        style:'mapbox://styles/kubablaszczykowski/ckw9j5jc3byi814mp8u56usaq', // style URL
        center: [9.18, 45.4485], // starting position [lng, lat]
        interactive: true,
        zoom: 13, // starting zoom
        antialias: true,
        pitch:45,
        minZoom:12,
        maxZoom:18,
    });
// evento iniziale
function intro(){
    map.flyTo({
      center: map.center,
      zoom: 15.3,
      bearing: 0,
      speed: 0.3, 
      essential: true
    });
}
let i = Math.floor(Math.random()*5);
// stato dei posti per funzioni pop, close 
  let stato0 = 0;
  let stato1 = 0;
  let stato2 = 0;
  let stato3 = 0;
  let stato4 = 0;
  let stato5 = 0;
  let stato6 = 0;
// stato della lista episodi
  let statol = 0;
// definizione degli episodi
  const geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Cox 18',
        'state': 0,
        'properties': {
          'iconSize': [100,100],
          'zindex': 10,
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.17711040615986, 45.44598455708191]
        },
        'path': 'img/map/marker/cox frame.png',
        'hover': 'img/map/hover/cox.gif',
        'address': 'Via Conchetta 18',
      },
      {
        'type': 'Calusca',
        'state': 1,
        'properties': {
          'iconSize': [100,100],
          'zindex': 9,
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.1778, 45.4463]
        },
        'path': 'img/map/marker/calusca frame.png',
        'hover': 'img/map/hover/calusca.gif',
        'address': 'Via Conchetta 18',
      },
      {
        'type': 'SantEustorgio',
        'state': 2,
        'properties': {
          'iconSize': [100,100],
          'zindex': 8,
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.181012668955663, 45.45373103235494]
        },
        'path': 'img/map/marker/santeustorgio frame.png',
        'hover': 'img/map/hover/curosreye.gif',
        'address': "Piazza Sant'Eustorgio 1"
      },  
      {
        'type': 'Rattazzo',
        'state': 3,
        'properties': {
          'iconSize': [100,100],
          'zindex': 7,
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.181442226243512,45.45618402402212]
        },
        'path': 'img/map/marker/rattazzo frame.png',
        'hover': 'img/map/hover/rattazzo.gif',
        'address': "Via Molino delle Armi 25"
      }, 
      {
        'type': 'Colonne di San Lorenzo',
        'state': 4,
        'properties': {
          'iconSize': [100,100],
          'zindex': 6,
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.181103162044264,45.458421582274866]
        },
        'path': 'img/map/marker/colonne frame.png',
        'hover': 'img/map/hover/curosreye.gif',
        'address': "Corso di Porta Ticinese"
      },  
      {
        'type': 'FieraSenigallia',
        'state': 5,
        'properties': {
          'iconSize': [100,100],
          'zindex': 5,
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.170451028227692,45.45066478460826]
        },
        'path': 'img/map/marker/calusca frame.png',
        'hover': 'img/map/hover/calusca.gif',
        'address': 'Ripa di Porta Ticinese'
      }, 
      {
        'type': 'Posto_g',
        'state': 6,
        'properties': {
          'iconSize': [200,146],
          'zindex': 4,
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.175563555822892, 45.453491468857344]
        },
        'path': 'img/map/marker/calusca frame.png',
        'hover': 'img/map/hover/calusca.gif',
        'address': 'Darsena'
      },    
    ]
  };
const geojsonArray = geojson.features;

// luoghi secondari
  const geojson2 = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Frizzi e Lazzi',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.17834174476333, 45.44576083057554]
        },
        'path': 'img/map/marker2/frizzi-e-lazzi.jpg',
        'address': 'Via Evangelista Torricelli 5',
      },
      {
        'type': 'Ripa dei Malfattori',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.167254444453532, 45.44988046508232]
        },
        'path': 'img/map/marker2/Ripa dei Malfattori.jpg',
        'address': 'Ripa di Porta Ticinese 83',
      },
      {
        'type': 'New Kary',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.183793821623322,45.46119131067335]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },
      {
        'type': 'Via Scaldasole',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.179643347959454,45.45441810571858]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },
      {
        'type': 'Viale Gorizia',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.176077678778984, 45.453182403845965 ]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },
      {
        'type': 'Via Torricelli 3',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [ 9.179245901824002, 45.44611605705023]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },    
      {
        'type': 'Via Torricelli 19',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.177326009474985, 45.44435591009226]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },   
      {
        'type': 'Via Pavia 19',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.179491236607493, 45.44780992128515]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },   
      {
        'type': 'Tutto Per Operai',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.171263590498352, 45.451144613754344]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },
      {
        'type': 'La Fiera di Senigallia',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [ 9.171814330516234,45.45115386428098]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },
      {
        'type': 'Via Gentilino',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.181176745319178, 45.449091607211955]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },
      {
        'type': 'Alzaia Naviglio Pavese 22',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.17777269050508, 45.449390659136434]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },     
      {
        'type': 'Santa Marta',
        'properties': {
          'iconSize': [24,26]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [9.183573119140243, 45.46171078293023 ]
        },
        'path': 'img/map/marker2/Leoncavallo_Milano-kMZD-U43030365222380ed-1224x916@Corriere-Web-Milano-593x443.jpg'
      },
    ]
  };

// Add episode-markers to the map.
  for (const marker of geojson.features) {
// Create a DOM element for each marker.
    const el = document.createElement('div');
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    const path = marker.path;
    const hover = marker.hover;
    const zindex = marker.properties.zindex;
      el.className = 'marker';
      el.style.backgroundImage = `url('${path}')`;
      // scalare le dimensioni in base al livello di zoom. Non funziona perché map.zoom risulta undefined
      // if(map.zoom>=13){el.style.width = `${width}px`;} else {el.style.width = `40px`;}
      el.style.width = `120px`;
      el.style.height = `120px`;
      el.style.backgroundSize = '100%';
      el.style.boxShadow = '100px black';
      el.style.zIndex= `${zindex}`;
      //el.style.transition = `0.05s`; la transizione fa laggare i marker
  // Funzione al click dei marker
      el.addEventListener('click', () => { 
        map.flyTo({
          center: [marker.geometry.coordinates[0]+0.0026, marker.geometry.coordinates[1]], 
          essential: true,
          speed: 0.8,
          zoom: 16.5,
          curve: 1,
          pitch: 55,
        });
        console.log(i);
        i=marker.state;
        if (marker.geometry.coordinates == geojson.features[0].geometry.coordinates){
          close1(); stato1 = 0; close2(); stato2 = 0; close3(); stato3 = 0; close4(); stato4 = 0; close5(); stato5 = 0; close6(); stato6 = 0; closeEpList(); funzionepop0(); i++;
        } else if (marker.geometry.coordinates == geojson.features[1].geometry.coordinates){
          close0(); stato0 = 0; close2(); stato2 = 0; close3(); stato3 = 0; close4(); stato4 = 0; close5(); stato5 = 0; close6(); stato6 = 0; closeEpList(); funzionepop1(); i++;
        } else if (marker.geometry.coordinates == geojson.features[2].geometry.coordinates){
          close0(); stato0 = 0; close1(); stato1 = 0; close2(); stato2 = 0; close4(); stato4 = 0; close5(); stato5 = 0; close6(); stato6 = 0; closeEpList(); funzionepop2(); i++;
        } else if (marker.geometry.coordinates == geojson.features[3].geometry.coordinates){
          close0(); stato0 = 0; close1(); stato1 = 0; close2(); stato2 = 0; close4(); stato4 = 0; close5(); stato5 = 0; close6(); stato6 = 0; closeEpList(); funzionepop3(); i++;
        } else if (marker.geometry.coordinates == geojson.features[4].geometry.coordinates){
          close0(); stato0 = 0; close1(); stato1 = 0; close3(); stato3 = 0; close2(); stato2 = 0; close5(); stato5 = 0; close6(); stato6 = 0; closeEpList(); funzionepop4(); i++;
        } else if (marker.geometry.coordinates == geojson.features[5].geometry.coordinates){
          close0(); stato0 = 0; close2(); stato2 = 0; close3(); stato3 = 0; close4(); stato4 = 0; close1(); stato1 = 0; close6(); stato6 = 0; closeEpList(); funzionepop5(); i++;
        } else if (marker.geometry.coordinates == geojson.features[geojsonArray.length-1].geometry.coordinates){
          close0(); stato0 = 0; close1(); stato1 = 0; close3(); stato3 = 0; close4(); stato4 = 0; close5(); stato5 = 0; close2(); stato2 = 0; closeEpList(); funzionepop6(); i=0;
        }
      });
  // Funzione hover marker
      el.addEventListener('mouseover',() => {
        el.style.backgroundImage = `url('${hover}')`;

      })
      el.addEventListener('mouseout',() => {
        el.style.backgroundImage = `url('${path}')`;
      })
// Add markers to the map.
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  }

// Add simple-markers to the map.
  for (const marker of geojson2.features) {
    // Create a DOM element for each marker.
        const el = document.createElement('div');
        const path = marker.path;
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        const name = marker.type;
          el.className = 'marker2';
          el.style.backgroundImage = `url('img/map/marker2/SantaMarta_Mod.png')`;
          el.style.width = `35px`;
          el.style.height = `35px`;
          el.style.backgroundSize = '100%';
          el.style.borderRadius = '60px';
          el.style.zIndex= `3`;
          el.style.cursor='pointer';
          el.style.border='3px solid #97ba00';
      // Funzione al click dei marker
          el.addEventListener('click', () => {
              //piazza il popup
          });
      // Funzione hover marker
          el.addEventListener('mouseover',() => {
            el.style.width = `40px`;
            el.style.height = `40px`;
          })
          el.addEventListener('mouseout',() => {
            el.style.width = `35px`;
            el.style.height = `35px`;
          })
          const popupmin = new mapboxgl.Popup({ offset: 25 }).setHTML(
            name 
            )
   
    // Add markers to the map.
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popupmin)
          .addTo(map);
      }

// ogni funzione apre il popup di un posto divesrso
  function funzionepop0() {
    let popup = document.getElementById("popup0");
    if(stato0===0){
      popup.classList.remove('hidenow')
      popup.classList.remove('hide');
      popup.classList.add("show");
      stato0++;
      document.getElementById('address').innerHTML = geojson.features[0].address;
    } else if (stato0===1){
      popup.classList.remove('show');
      popup.classList.add('hide');
      stato0--;
      document.getElementById('address').innerHTML = '';
    } 
  }
  function funzionepop1() {
    let popup = document.getElementById("popup1");
    if(stato1===0){
      popup.classList.remove('hidenow')
      popup.classList.remove('hide');
      popup.classList.add("show");
      stato1++;
      document.getElementById('address').innerHTML = geojson.features[1].address;
    } else if (stato1===1){
      popup.classList.remove('show');
      popup.classList.add('hide');
      stato1--;
      document.getElementById('address').innerHTML = '';
    } 
  }
  function funzionepop2() {
    let popupl = document.getElementById("popup2");
    if(stato2===0){
      popupl.classList.remove('hidenow')
      popupl.classList.remove('hide');
      popupl.classList.add("show");
      stato2++;
      document.getElementById('address').innerHTML = geojson.features[2].address;
    } else if (stato2===1){
      popupl.classList.remove('show');
      popupl.classList.add('hide');
      stato2--;
      document.getElementById('address').innerHTML = '';
    } 
  }
  function funzionepop3() {
    let popupl = document.getElementById("popup3");
    if(stato3===0){
      popupl.classList.remove('hidenow')
      popupl.classList.remove('hide');
      popupl.classList.add("show");
      stato3++;
      document.getElementById('address').innerHTML = geojson.features[3].address;
    } else if (stato3===1){
      popupl.classList.remove('show');
      popupl.classList.add('hide');
      stato3--;
      document.getElementById('address').innerHTML = '';
    } 
  }
  function funzionepop4() {
    let popupl = document.getElementById("popup4");
    if(stato4===0){
      popupl.classList.remove('hidenow')
      popupl.classList.remove('hide');
      popupl.classList.add("show");
      stato4++;
      document.getElementById('address').innerHTML = geojson.features[4].address;
    } else if (stato4===1){
      popupl.classList.remove('show');
      popupl.classList.add('hide');
      stato4--;
      document.getElementById('address').innerHTML = '';
    } 
  }
  function funzionepop5() {
    let popupl = document.getElementById("popup5");
    if(stato5===0){
      popupl.classList.remove('hidenow')
      popupl.classList.remove('hide');
      popupl.classList.add("show");
      stato5++;
      document.getElementById('address').innerHTML = geojson.features[5].address;
    } else if (stato5===1){
      popupl.classList.remove('show');
      popupl.classList.add('hide');
      stato5--;
      document.getElementById('address').innerHTML = '';
    } 
  }
  function funzionepop6() {
    
    let popupl = document.getElementById("popup6");
    if(stato6===0){
      popupl.classList.remove('hidenow')
      popupl.classList.remove('hide');
      popupl.classList.add("show");
      stato6++;
      document.getElementById('address').innerHTML = geojson.features[6].address;
    } else if (stato6===1){
      popupl.classList.remove('show');
      popupl.classList.add('hide');
      stato6--;
      document.getElementById('address').innerHTML = '';
    } 
  }
  // funzione per lista episodi
  function showList() {   if(stato0 || stato1 || stato2 || stato3 || stato4 || stato5 || stato6 == 1){
    close0(); close1(); close2(); close3(); close4(); close5(); close6();}
    let popupl = document.getElementById("epList");
    if(statol==0){
      popupl.classList.remove('hidenow')
      popupl.classList.remove('hidel');
      popupl.classList.add('showl');
      statol++;
    } else if (statol==1){
      popupl.classList.remove('showl');
      popupl.classList.add('hidel');
      statol--;
      close0(); close1(); close2(); close3(); close4(); close5(); close6();
    } 
  }

// specifiche per chiudere i popup
  function close0() {
    let popup = document.getElementById("popup0");
    popup.classList.remove('show');
    popup.classList.add('hide');
    stato0=0;
    document.getElementById('address').innerHTML = '';
  }
  function close1() {
    let popup = document.getElementById("popup1");
    popup.classList.remove('show');
    popup.classList.add('hide');
    stato1=0;
    document.getElementById('address').innerHTML = '';
  }
  function close2() {
    let popup = document.getElementById("popup2");
    popup.classList.remove('show');
    popup.classList.add('hide');
    stato2=0;
    document.getElementById('address').innerHTML = '';
  }
  function close3() {
    let popup = document.getElementById("popup3");
    popup.classList.remove('show');
    popup.classList.add('hide');
    stato3=0;
    document.getElementById('address').innerHTML = '';
  }
  function close4() {
    let popup = document.getElementById("popup4");
    popup.classList.remove('show');
    popup.classList.add('hide');
    stato4=0;
    document.getElementById('address').innerHTML = '';
  }
  function close5() {
    let popup = document.getElementById("popup5");
    popup.classList.remove('show');
    popup.classList.add('hide');
    stato5=0;
    document.getElementById('address').innerHTML = '';
  }
  function close6() {
    let popup = document.getElementById("popup6");
    popup.classList.remove('show');
    popup.classList.add('hide');
    stato6=0;
    document.getElementById('address').innerHTML = '';
  }

  function closeEpList() {
    let popupl = document.getElementById("epList");
    popupl.classList.remove('showl');
    popupl.classList.add('hidel');
    statol=0;
    close0(); close1(); close2(); close3(); close4(); close5(); close6();
  }

//funzione frecce
  function movefw(){
    const markerLngLat = geojson.features[i].geometry.coordinates;
    switch(i){
      case 0:
        map.flyTo({
          center: [markerLngLat[0]+0.0026, markerLngLat[1]], 
          essential: true,
          speed:0.6,
          zoom: 16.5,
          pitch: 55,
        });
        close0(); close1(); close2(); close3(); close4(); close5(); close6();
        closeEpList()
        funzionepop0();
        console.log(i)
        stato0=0;
        i++;
      break;
      case 1:
        map.flyTo({
          center: [markerLngLat[0]+0.0026, markerLngLat[1]], 
          essential: true,
          speed:0.6,
          zoom: 16.5,
          pitch: 55,
        });
        close0(); close1(); close2(); close3(); close4(); close5(); close6();
        closeEpList()
        funzionepop1();
        console.log(i)
        stato1=0;
        i++;
      break;
      case 2:
        map.flyTo({
          center: [markerLngLat[0]+0.0026, markerLngLat[1]], 
          essential: true,
          speed:0.6,
          zoom: 16.5,
          pitch: 55,
        });
        close0(); close1(); close2(); close3(); close4(); close5(); close6();
        closeEpList()
        funzionepop2();
        console.log(i)
        stato2=0;
        i++;
      break;
      case 3:
        map.flyTo({
          center: [markerLngLat[0]+0.0026, markerLngLat[1]], 
          essential: true,
          speed:0.6,
          zoom: 16.5,
          pitch: 55,
        });
        close0(); close1(); close2(); close3(); close4(); close5(); close6();
        closeEpList()
        funzionepop3();
        console.log(i)
        stato3=0;
        i++;
      break;
      case 4:
        map.flyTo({
          center: [markerLngLat[0]+0.0026, markerLngLat[1]], 
          essential: true,
          speed:0.6,
          zoom: 16.5,
          pitch: 55,
        });
        close0(); close1(); close2(); close3(); close4(); close5(); close6();
        closeEpList()
        funzionepop4();
        console.log(i)
        stato4=0;
        i++;
      break;
      case 5:
        map.flyTo({
          center: [markerLngLat[0]+0.0026, markerLngLat[1]], 
          essential: true,
          speed:0.6,
          zoom: 16.5,
          pitch: 55,
        });
        close0(); close1(); close2(); close3(); close4(); close5(); close6();
        closeEpList()
        funzionepop5();
        console.log(i)
        stato5=0;
        i++;
      break;
      case geojsonArray.length-1:
        map.flyTo({
          center: [markerLngLat[0]+0.0026, markerLngLat[1]],
          essential: true,
          speed:0.6,
          zoom: 16.5,
          pitch: 55,
        });
        close0(); close1(); close2(); close3(); close4(); close5(); close6();
        closeEpList()
        funzionepop6();
        console.log(i)
        stato6=0;
        i=0;
      break;
      default:
        map.flyTo({
          center:map.center,
          zoom: 10.5,
          essential: true,
        })
        console.log(i)

    }
  }
  function movebw(){
  // const markerState= geojson.features[i].state;
  // const markerLngLat = geojson.features[i].geometry.coordinates;
  switch(i){
    case 0:
      map.flyTo({
        center: [geojson.features[geojsonArray.length-1-1].geometry.coordinates[0]+0.0026, geojson.features[geojsonArray.length-1-1].geometry.coordinates[1]],
        essential: true,
        speed:0.6,
        zoom: 16.5,
        pitch: 55,
      });
      close0(); close1(); close2(); close3(); close4(); close5(); close6();
      closeEpList()
      funzionepop5();
      console.log(i)
      stato0=0;
      i=geojsonArray.length-1;
    break;
    case geojsonArray.length-1:
      map.flyTo({
        center: [geojson.features[5-1].geometry.coordinates[0]+0.0026, geojson.features[5-1].geometry.coordinates[1]], 
        essential: true,
        speed:0.6,
        zoom: 16.5,
        pitch: 55,
      });
      close0(); close1(); close2(); close3(); close4(); close5(); close6();
      closeEpList()
      funzionepop4();
      console.log(i)
      stato6=0;
      i--;
    break;
    case 5:
      map.flyTo({
        center: [geojson.features[4-1].geometry.coordinates[0]+0.0026, geojson.features[4-1].geometry.coordinates[1]], 
        essential: true,
        speed:0.6,
        zoom: 16.5,
        pitch: 55,
      });
      close0(); close1(); close2(); close3(); close4(); close5(); close6();
      closeEpList()
      funzionepop3();
      console.log(i)
      stato5=0;
      i--;
    break;
    case 4:
      i--;
      map.flyTo({
        center: [geojson.features[3-1].geometry.coordinates[0]+0.0026, geojson.features[3-1].geometry.coordinates[1]], 
        essential: true,
        speed:0.6,
        zoom: 16.5,
        pitch: 55,
      });
      close0(); close1(); close2(); close3(); close4(); close5(); close6();
      closeEpList()
      funzionepop2();
      console.log(i)
      stato4=0;
      
    break;
    case 3:
      map.flyTo({
        center: [geojson.features[2-1].geometry.coordinates[0]+0.0026, geojson.features[2-1].geometry.coordinates[1]], 
        essential: true,
        speed:0.6,
        zoom: 16.5,
        pitch: 55,
      });
      close0(); close1(); close2(); close3(); close4(); close5(); close6();
      closeEpList()
      funzionepop1();
      console.log(i)
      stato3=0;
      i--;
    break;
    case 2:
      map.flyTo({
        center: [geojson.features[1-1].geometry.coordinates[0]+0.0026, geojson.features[1-1].geometry.coordinates[1]], 
        essential: true,
        speed:0.6,
        zoom: 16.5,
        pitch: 55,
      });
      close0(); close1(); close2(); close3(); close4(); close5(); close6();
      closeEpList()
      funzionepop0();
      console.log(i)
      stato2=0;
      i--;
    break;
    case 1:
      map.flyTo({
        center: [geojson.features[6].geometry.coordinates[0]+0.0026, geojson.features[6].geometry.coordinates[1]],
        essential: true,
        speed:0.6,
        zoom: 16.5,
        pitch: 55,
      });  
      close0(); close1(); close2(); close3(); close4(); close5(); close6();
      closeEpList()
      funzionepop6();
      console.log(i)
      stato1=0;
      i--;
    break;
    default:
      map.flyTo({
        center:map.center,
        zoom: 10.5,
        essential: true,
      });
      console.log(i)
      close0(); close1(); close2(); close3(); close4(); close5(); close6();

  }
}

//function
function overview(){
  map.flyTo({
    center: [9.18, 45.441],
    pitch: 10,
    zoom: 15,
  })
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
    if(key===39){
        movefw()
    } else if(key===37){
        movebw()
    } else if (key===70){
        neoFullscreenUnico()
    } else if (key===76){
      showList()
    } 
});



//debug
console.log(map.minZoom)
console.log(geojsonArray.length-1)
