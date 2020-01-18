<!DOCTYPE html>
<html lang="lt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>NebelaikoNervai</title>
    <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>


 <div class="fixed-frame">  

  <div class="kt-container"> <!-- flip-img konteineris -->

      <div id="alotos5" class="kintamasis  kintamasis-active"> <!-- red block -->
        <div  class="kintamasis-content"> 
          <div  class="lotos">

            <img id="img5" src="images/lotos_5.png" alt="">

            <div id="r-menu5" class="right-menu menu">
              <a data-number="1" class="right-button active" href="#section-1"></a>
              <a data-number="2" class="right-button" href="#section-2"></a>
              <a data-number="3" class="right-button" href="#section-3"></a>
              <a data-number="4" class="right-button" href="#section-4"></a>
              <a data-number="5" class="right-button" id="last-a-right" href="#section-5"></a>
            </div> 

            <div id="t-menu5" class="top-menu menu">
              <audio class="top-audio" id="WN" src="audio/WN.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Purr" src="audio/PURR.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Svirpliai" src="audio/svirpliai.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Chant" src="audio/Chant.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <a class="top-button active-top-button" id="a-wn" onclick="play('WN')"><span class="Baltas"></span></a>
              <a class="top-button" id="a-purr" onclick="play('Purr')"></a>
              <a class="top-button" id="a-svirpliai" onclick="play('Svirpliai')"><span class="Pievoj"></span></a>
              <a class="top-button" id="last-a-top" onclick="play('Chant')"><span class="Rytai"></span></a>
           </div>

              <a href="nohelp.php"><p id="noHelp5">Nepadėjo?</p></a> 
          </div>
        </div>
      </div> <!-- red block uždaryta -->
            
          
      <div id="alotos3"  class="kintamasis  kintamasis-active"> <!-- rose block -->
        <div  class="kintamasis-content"> 
          <div class="lotos">

              <img id="img3" src="images/lotos_3.png" alt="">

              <div id="r-menu3" class="right-menu menu">
                <a class="right-button active" href="#section-1"></a>
                <a class="right-button" href="#section-2"></a>
                <a class="right-button" href="#section-3"></a>
                <a class="right-button" href="#section-4"></a>
                <a class="right-button" id="last-a-right" href="#section-5"></a>
              </div> 

              <div id="t-menu3" class="top-menu menu">
                <audio class="top-audio" id="WN" src="audio/WN.mp3" preload="auto" type="audio/mpeg" loop></audio>
                <audio class="top-audio" id="Purr" src="audio/PURR.mp3" preload="auto" type="audio/mpeg" loop></audio>
                <audio class="top-audio" id="Svirpliai" src="audio/svirpliai.mp3" preload="auto" type="audio/mpeg" loop></audio>
                <audio class="top-audio" id="Chant" src="audio/Chant.mp3" preload="auto" type="audio/mpeg" loop></audio>
                <a class="top-button active-top-button" id="a-wn" onclick="play('WN')"><span class="Baltas"></span></a>
                <a class="top-button" id="a-purr" onclick="play('Purr')"></a>
                <a class="top-button" id="a-svirpliai" onclick="play('Svirpliai')"><span class="Pievoj"></span></a>
                <a class="top-button" id="last-a-top" onclick="play('Chant')"><span class="Rytai"></span></a>
              </div>

              <a href="nohelp.php"><p id="noHelp3">Nepadėjo?</p></a> 

        </div>
       </div>
      </div> <!-- rose block uždaryta -->
            
            
      <div id="alotos" class="kintamasis  kintamasis-active"> <!-- grey block-->
        <div  class="kintamasis-content">
          <div  class="lotos">

            <img id="img" src="images/lotos.png" alt=""> 

            <div id="r-menu" class="right-menu menu">
              <a class="right-button active" href="#section-1"></a>
              <a class="right-button" href="#section-2"></a>
              <a class="right-button" href="#section-3"></a>
              <a class="right-button" href="#section-4"></a>
              <a class="right-button" id="last-a-right" href="#section-5"></a>
            </div> 

            <div id="t-menu" class="top-menu menu">
              <audio class="top-audio" id="WN" src="audio/WN.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Purr" src="audio/PURR.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Svirpliai" src="audio/svirpliai.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Chant" src="audio/Chant.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <a class="top-button active-top-button" id="a-wn" onclick="play('WN')"><span class="Baltas"></span></a>
              <a class="top-button" id="a-purr" onclick="play('Purr')"></a>
              <a class="top-button" id="a-svirpliai" onclick="play('Svirpliai')"><span class="Pievoj"></span></a>
              <a class="top-button" id="last-a-top" onclick="play('Chant')"><span class="Rytai"></span></a>
            </div>

            <a href="nohelp.php"><p id="noHelp">Nepadėjo?</p></a>

          </div>
        </div>
      </div>  <!-- grey block uždaryta --> 
            
            
      <div id="alotos4" class="kintamasis"> <!-- light rose block -->
        <div  class="kintamasis-content"> 
          <div  class="lotos">

            <img id="img4" src="images/lotos_4.png" alt="">

            <div id="r-menu4" class="right-menu menu">
              <a class="right-button active" href="#section-1"></a>
              <a class="right-button" href="#section-2"></a>
              <a class="right-button" href="#section-3"></a>
              <a class="right-button" href="#section-4"></a>
              <a class="right-button" id="last-a-right" href="#section-5"></a>
            </div> 

            <div id="t-menu4" class="top-menu menu">
              <audio class="top-audio" id="WN" src="audio/WN.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Purr" src="audio/PURR.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Svirpliai" src="audio/svirpliai.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Chant" src="audio/Chant.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <a class="top-button active-top-button" id="a-wn" onclick="play('WN')"><span class="Baltas"></span></a>
              <a class="top-button" id="a-purr" onclick="play('Purr')"></a>
              <a class="top-button" id="a-svirpliai" onclick="play('Svirpliai')"><span class="Pievoj"></span></a>
              <a class="top-button" id="last-a-top" onclick="play('Chant')"><span class="Rytai"></span></a>
            </div>

            <a href="nohelp.php"><p id="noHelp4">Nepadėjo?</p></a> 

          </div>
        </div>
      </div> <!-- light rose block uždaryta -->
            
            
      <div id="alotos2" class="kintamasis"> <!-- yellow block -->
        <div  class="kintamasis-content"> 
          <div  class="lotos">

            <img id="img2" src="images/lotos_2.png" alt="">

            <div id="r-menu2" class="right-menu menu">
              <a class="right-button active" href="#section-1"></a>
              <a class="right-button" href="#section-2"></a>
              <a class="right-button" href="#section-3"></a>
              <a class="right-button" href="#section-4"></a>
              <a class="right-button" id="last-a-right" href="#section-5"></a>
            </div> 

            <div id="t-menu2" class="top-menu menu">
              <audio class="top-audio" id="WN" src="audio/WN.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Purr" src="audio/PURR.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Svirpliai" src="audio/svirpliai.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <audio class="top-audio" id="Chant" src="audio/Chant.mp3" preload="auto" type="audio/mpeg" loop></audio>
              <a class="top-button active-top-button" id="a-wn" onclick="play('WN')"><span class="Baltas"></span></a>
              <a class="top-button" id="a-purr" onclick="play('Purr')"></a>
              <a class="top-button" id="a-svirpliai" onclick="play('Svirpliai')"><span class="Pievoj"></span></a>
              <a class="top-button" id="last-a-top" onclick="play('Chant')"><span class="Rytai"></span></a>
            </div>

            <a href="nohelp.php"><p id="noHelp2">Nepadėjo?</p></a> 

          </div>
        </div>
      </div> <!-- yellow block uždaryta -->
            
    </div> <!-- flip-img konteineris/uždarytas -->
          
  </div> <!-- ffixed-frame/uždarytas -->
      
    <!-- alert langas -->
    <div class="alert">
      
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <h1>Nebelaiko nervai ?</h1> <br> 
        <h3>&uarr; Pasirink garsinį foną ir aplinką &rarr;<br>
        &darr; Extra slice of pleasure </h3><br> 
        <p>&emsp; Geros kelionės</p>
    
      </div>
      <!-- right menu -->
 

      <!-- left menu -->
      <div class="left-menu menu">
          <audio class="left-audio" id="Wine" src="audio/wine.mp3" preload="auto" type="audio/mpeg"></audio>
          <audio class="left-audio" id="Tom" src="audio/tom.mp3" preload="auto" type="audio/mpeg"></audio>
          <audio class="left-audio" id="Pop" src="audio/pop.mp3" preload="auto" type="audio/mpeg"></audio>
          <audio class="left-audio" id="Letgo" src="audio/letgo.mp3" preload="auto" type="audio/mpeg"></audio>
          <a class="left-button" id="a-wine" onclick="playOnce('Wine')"></a>
          <a class="left-button" id="a-tom" onclick="playOnce('Tom')"><span class="Tom"></span></a>
          <a class="left-button" id="a-wrap" onclick="playOnce('Pop')"></a>
          <a class="left-button" id="last-a-left" onclick="playOnce('Letgo')"><span class="Let"></span></a>
      </div> 

      <!-- background scroll -->
          <div id="section-1" class="section-1  section" id="color-bg"></div>
          <div id="section-2" class="section-2  section  section-bg" id="space-bg"></div>
          <div id="section-3" class="section-3  section" id="antarctica-bg"></div>
          <div id="section-4" class="section-4  section  section-bg" id="vilnius-bg"></div>
          <div id="section-5" class="section-5  section" id="island-bg"></div> 
          
      
  
    <script src="scripts/script.js"></script>
</body>
</html>