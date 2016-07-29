$(document).ready(function(){

  $("#spinbutton").click(function(){
    var reels = document.getElementsByClassName('reel');
    var i = 0;
    setInterval(function(){
      var reel = reels[i];
      spin(reel);
      i++;
    }, 500);

    setTimeout(function(){
    for (var ii = 0; ii < reels.length ; ii++){
      var reel = reels[ii];
      stop(reel);
    }}, 5000);

  });

  function spin(item){
    item.style.animationPlayState ="running";
  }

  function stop(item){
    item.style.animationPlayState ="paused";
  }
});
