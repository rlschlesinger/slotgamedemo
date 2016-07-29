$(document).ready(function(){

  $("#spinbutton").click(function(){
    spin();
  });

  function spin(){
    var reels = document.getElementsByClassName('reel');
      for (var i = 0; reels.length - 1; i++){
        var reel = reels[i];
        setTimeout(iterate(reel), 500);
        setTimeout(function(){clearInterval();}, 1000);
      }
  }

  function iterate(item){
    item.style.animationPlayState ="running";
  }
});
