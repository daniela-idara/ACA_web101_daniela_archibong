$(function(){
   
    // This section makes the buttons toggle the squares. 
    // All the warm colored squares will toggle when pressed.

    $("#warm").click(function(){
    $("div.red, div.pink, div.orange, div.yellow").toggle();
    });
    
    // All the cool colored squares will toggle when pressed.

     $("#cool").click(function(){
    $("div.lime, div.green, div.ltblue, div.blue, div.ltpurp, div.purple").toggle();
    });
    
    // All the neutral colored squares will toggle when pressed.
    
    $("#neut").click(function(){
    $("div.brown, div.black").toggle();
    });
    
    // All the warm colored circle clicks will make the warm colored squares move. 
    // The console will also show that a warm color has been clicked.
    

    $(".redCircle").click(function(){
      $("div.pink, div.red").animate({marginBottom: '5px'}).animate({marginBottom: '0px'});
      console.log("Warm Color Clicked");
    });
    
     $(".orangeCircle").click(function(){
      $("div.orange").animate({marginTop: '5px', marginBottom: '5px'}).animate({marginTop: '0px', marginBottom: '0px'});
       console.log("Warm Color Clicked");
    }); 
    
    $(".yellowCircle").click(function(){
      $("div.yellow").animate({marginTop: '5px', marginBottom: '5px'}).animate({marginTop: '0px', marginBottom: '0px'});
      console.log("Warm Color Clicked");
    }); 
    
    // All the cool colored circle clicks will make the cool colored squares move. 
    // The console will also show that a cool color has been clicked.

    $(".greenCircle").click(function(){
      $("div.yellow, div.lime, div.green").animate({marginBottom: '5px'}).animate({marginBottom: '0px'});
      console.log("Cool Color Clicked");
    });
    
    $(".blueCircle").click(function(){
      $("div.green, div.ltblue, div.blue").animate({marginBottom: '5px'}).animate({marginBottom: '0px'});
      console.log("Cool Color Clicked");
    });
    
    $(".purpleCircle").click(function(){
      $("div.blue, div.ltpurp, div.purple").animate({marginBottom: '5px'}).animate({marginBottom: '0px'});
      console.log("Cool Color Clicked");
    });
   
    // This function will increase the score counter for the amount of times a warm colored circle has been clicked.
    // When multiple of 10 is displayed in the clicker counter, an announcement will appear to exclaim the number achieved.

  $('.redCircle, .orangeCircle, .yellowCircle').click(function() {
      $('#warmTotal').html(function(i, val) { return val*1+1 });
      if (warmTotal.innerHTML == 9) {   document.getElementById('announce').style.display = "block";
   } if (warmTotal.innerHTML == 10) {   document.getElementById('announce').innerHTML="You Got 10!";  
    } else if (warmTotal.innerHTML == 20) {   document.getElementById('announce').innerHTML="You Got 20!";  
    } else if (warmTotal.innerHTML == 30) {   document.getElementById('announce').innerHTML="You Got 30!";
    } else if (warmTotal.innerHTML == 40) {   document.getElementById('announce').innerHTML="You Got 40!";     
    } else if (warmTotal.innerHTML == 50) {   document.getElementById('announce').innerHTML="You Got 50!";     
    } else if (warmTotal.innerHTML == 60) {   document.getElementById('announce').innerHTML="You Got 60!";     
    } else if (warmTotal.innerHTML == 70) {   document.getElementById('announce').innerHTML="You Got 70!"; 
    } else if (warmTotal.innerHTML == 80) {   document.getElementById('announce').innerHTML="You Got 80!";     
    } else if (warmTotal.innerHTML == 90) {   document.getElementById('announce').innerHTML="You Got 90!";     
    } else if (warmTotal.innerHTML == 100) {   document.getElementById('announce').innerHTML="You Got 100!";     
    } else { 
      document.getElementById('announce').innerHTML="Keep Going!";
    }
  });
  
    // This function will increase the score counter for the amount of times a cool colored circle has been clicked.
    // When multiple of 10 is displayed in the clicker counter, an announcement will appear to exclaim the number achieved.

   $('.greenCircle, .blueCircle, .purpleCircle').click(function() {
      $('#coolTotal').html(function(i, val) { return val*1+1 });
     if (coolTotal.innerHTML == 9) {   document.getElementById('announceCool').style.display = "block";
   }  if (coolTotal.innerHTML == 10) {   document.getElementById('announceCool').innerHTML="You Got 10!";  
    } else if (coolTotal.innerHTML == 20) {   document.getElementById('announceCool').innerHTML="You Got 20!";  
    } else if (coolTotal.innerHTML == 30) {   document.getElementById('announceCool').innerHTML="You Got 30!"; 
    } else if (coolTotal.innerHTML == 40) {   document.getElementById('announceCool').innerHTML="You Got 40!";     
    } else if (coolTotal.innerHTML == 50) {   document.getElementById('announceCool').innerHTML="You Got 50!";     
    } else if (coolTotal.innerHTML == 60) {   document.getElementById('announceCool').innerHTML="You Got 60!";     
    } else if (coolTotal.innerHTML == 70) {   document.getElementById('announceCool').innerHTML="You Got 70!"; 
    } else if (coolTotal.innerHTML == 80) {   document.getElementById('announceCool').innerHTML="You Got 80!";     
    } else if (coolTotal.innerHTML == 90) {   document.getElementById('announceCool').innerHTML="You Got 90!";     
    } else if (coolTotal.innerHTML == 100) {   document.getElementById('announceCool').innerHTML="You Got 100!";     
    } else { 
      document.getElementById('announceCool').innerHTML="Keep Going!";
    }
  });
      
  });