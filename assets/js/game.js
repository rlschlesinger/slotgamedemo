$(document).ready(function(){

  //Image array
  var imgArray = new Array();

  imgArray[0] = new Image();
  imgArray[0].src = 'assets/images/symbols/wild/wild1.png';

  imgArray[1] = new Image();
  imgArray[1].src = 'assets/images/symbols/m2/m2.png';

  imgArray[2] = new Image();
  imgArray[2].src = 'assets/images/symbols/m3/M3.png';

  imgArray[3] = new Image();
  imgArray[3].src = 'assets/images/symbols/m4/M4.png';

  imgArray[4] = new Image();
  imgArray[4].src = 'assets/images/symbols/m5/M5.png';

  imgArray[5] = new Image();
  imgArray[5].src = 'assets/images/symbols/royals/9.png';

  imgArray[6] = new Image();
  imgArray[6].src = 'assets/images/symbols/royals/10.png';

  imgArray[7] = new Image();
  imgArray[7].src = 'assets/images/symbols/royals/A.png';

  imgArray[8] = new Image();
  imgArray[8].src = 'assets/images/symbols/royals/J.png';

  imgArray[9] = new Image();
  imgArray[9].src = 'assets/images/symbols/royals/K.png';

  imgArray[10] = new Image();
  imgArray[10].src = 'assets/images/symbols/royals/Q.png';


  //Reel ID Array

  var reelIDs = ['reel-one', 'reel-two', 'reel-three', 'reel-four', 'reel-five'];
  console.log("reels in array");


  //Function to insert images into reels

  function insertImages(div, imgArray){
    for (var i = 0; i < imgArray.length; i++){
      //Randomize order of images
      var ranNum = Math.floor(Math.random() * (10 + 1));
      //Copy instance of image to variable
      var image = imgArray[ranNum].cloneNode(true);
      //Insert images into reel
      div.appendChild(image);
    }
  }

  function loadImages(imageArray, reelArray){
    //Iterate through reels
    for (var i = 0; i < reelArray.length; i++){
      var div = document.getElementById(reelArray[i]);
      //Iterate through images
      insertImages(div, imageArray)

    }
  }

  //Call load image function
  loadImages(imgArray, reelIDs);

  //On click function to spin reels
  $("#spinbutton").click(function(){
    var reels = document.getElementsByClassName('reel');
    var i = 0;
    //Spin reels one at a time
    setInterval(function(){
      var reel = reels[i];
      spin(reel);
      i++;
    }, 400);

    //Stop reels
    setTimeout(function(){
    for (var ii = 0; ii < reels.length ; ii++){
      var reel = reels[ii];
      stop(reel);
    }}, 4000);

  });

  function spin(item){
    item.style.animationPlayState ="running";
  }

  function stop(item){
    item.style.animationPlayState ="paused";
  }

});
