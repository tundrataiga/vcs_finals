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
          
     <div class="kintamasis  kintamasis-active"> <!-- img red -->
       <div class="kintamasis-content"> 
          <div class="lotos">
            <img id="img5" src="images/lotos_5.png" alt="">
          </div>
       </div>
     </div> <!-- img red uždaryta -->
            
          
     <div class="kintamasis  kintamasis-active"> <!-- img beatroot -->
        <div class="kintamasis-content"> 
           <div class="lotos">
              <img id="img3" src="images/lotos_3.png" alt="">
           </div>
        </div>
     </div> <!-- img beatroot uždaryta -->
            
            
     <div class="kintamasis  kintamasis-active"> <!-- img grey -->
        <div class="kintamasis-content">
            <div class="lotos">
               <img id="img" src="images/lotos.png" alt=""> 
            </div>
         </div>
     </div> <!-- img grey uždaryta -->  
            
            
     <div class="kintamasis"> <!-- img orange -->
        <div class="kintamasis-content"> 
            <div class="lotos">
               <img id="img4" src="images/lotos_4.png" alt="">
            </div>
        </div>
     </div> <!-- img orange uždaryta -->
            
            
    <div class="kintamasis"> <!-- img yellow -->
        <div class="kintamasis-content"> 
            <div class="lotos">
              <img id="img2" src="images/lotos_2.png" alt="">
            </div>
        </div>
    </div> <!-- img yellow uždaryta -->
            
  </div> <!-- flip-img konteineris/uždarytas -->
          
  
</div> <!-- fixed-frame uždarytas -->
      
    
<div class="alert"> <!-- alert langas -->
      
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    <h1>Nebelaiko nervai ?</h1> <br> 
    <h3>&uarr; Pasirink garsinį foną ir aplinką &rarr;<br>
    &darr; Extra slice of pleasure </h3><br> 
    <p>&emsp; Geros kelionės</p>
    
</div> <!-- alert langas uždarytas -->


  <!-- right menu -->

  <div class="right-menu menu">
      <a class="right-button active" href="#section-1"></a>
      <a class="right-button" href="#section-2"><span id="yellow">kosmose</span></a>
      <a class="right-button" href="#section-3"><span id="beatroot">antarktidoj</span></a>
      <a class="right-button" href="#section-4"><span id="orange">ant stogo</span></a>
      <a class="right-button" id="last-a-right" href="#section-5"><span id="red">kažkur toli</span></a>
  </div> 
  
  <!-- right menu uždarytas -->


  <!-- top menu -->

  <div class="top-menu menu">
      <audio id="WN" src="audio/WN.mp3" preload="auto" type="audio/mpeg" loop></audio>
      <audio id="Purr" src="audio/PURR.mp3" preload="auto" type="audio/mpeg" loop></audio>
      <audio id="Svirpliai" src="audio/svirpliai.mp3" preload="auto" type="audio/mpeg" loop></audio>
      <audio id="Chant" src="audio/Chant.mp3" preload="auto" type="audio/mpeg" loop></audio>
      <a id="a-wn" onclick="play('WN')"><span class="Baltas"></span></a>
      <a id="a-purr" onclick="play('Purr')"></a>
      <a id="a-svirpliai" onclick="play('Svirpliai')"><span class="Pievoj"></span></a>
      <a id="last-a-top" onclick="play('Chant')"><span class="Rytai"></span></a>
  </div>

  <!-- right menu uždarytas -->

  <!-- left menu -->

  <div class="left-menu menu">
      <audio id="Wine" src="audio/wine.mp3" preload="auto" type="audio/mpeg"></audio>
      <audio id="Tom" src="audio/tom.mp3" preload="auto" type="audio/mpeg"></audio>
      <audio id="Pop" src="audio/pop.mp3" preload="auto" type="audio/mpeg"></audio>
      <audio id="Letgo" src="audio/letgo.mp3" preload="auto" type="audio/mpeg"></audio>
      <a id="a-wine" onclick="playOnce('Wine')"></a>
      <a id="a-tom" onclick="playOnce('Tom')"><span class="Tom"></span></a>
      <a id="a-wrap" onclick="playOnce('Pop')"></a>
      <a id="last-a-left" onclick="playOnce('Letgo')"><span class="Let"></span></a>
  </div> 

  <!-- left menu uždarytas -->

  <!-- background scroll -->

      <div id="section-1" class="section-1  section"></div>
      <div id="section-2" class="section-2  section  section-bg"></div>
      <div id="section-3" class="section-3  section"></div>
      <div id="section-4" class="section-4  section  section-bg"></div>
      <div id="section-5" class="section-5  section"></div> 
          
   <!-- background scroll uždarytas -->       
          
      <a href="nohelp.php"><p id="noHelp">Nepadėjo?</p></a>
      
  
      <script src="scripts/script.js"></script>
      
</body>
</html>