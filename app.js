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
