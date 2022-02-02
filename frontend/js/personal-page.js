 /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("logOutDropdown").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.logOutbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content-logOut");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }
          
          //menu grafico
          $(".btn-toggle").on("click", function() {
                  $('.dropdown-menu').toggleClass('open');
              });
              $(".dropdown-menu li").on("click", function() {
                  $('.btn-toggle').text($(this).text() + " ↘");
                  $('.dropdown-menu').removeClass('open');
              });
  
          //cambiografico
          function changeImage1() {
              document.getElementById("grafico").src = "../static/grafici/grafico-1.png";}
  
              function changeImage2() {
              document.getElementById("grafico").src = "../static/grafici/grafico-2.png";}
  
              function changeImage3() {
              document.getElementById("grafico").src = "../static/grafici/grafico-3.png";}
             
         
         //countdown
          var countDownDate1 = new Date("Feb 8, 2022 18:00:00").getTime();     
          var x = setInterval(function() {
          var now = new Date().getTime();
          var distance = countDownDate1 - now;
  
          
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
          document.getElementById("countdown1").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";
  
          if (distance < 0) {
              clearInterval(x);
              document.getElementById("countdown1").innerHTML = "EXPIRED";
          }
          }, 1000);
  
          
  
          var countDownDate2 = new Date("Feb 13, 2022 10:30:00").getTime();
  
          var x2 = setInterval(function() {
          var now2 = new Date().getTime();
          var distance2 = countDownDate2 - now2;
  
          var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
          var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
          var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
  
          document.getElementById("countdown2").innerHTML = days2 + "d " + hours2 + "h "
          + minutes2 + "m " + seconds2 + "s ";
  
          if (distance2 < 0) {
              clearInterval(x2);
              document.getElementById("countdown2").innerHTML = "EXPIRED";
          }
          }, 1000);
  
  
  
          var countDownDate3 = new Date("Mar 8, 2022 18:35:00").getTime();
  
          var x3 = setInterval(function() {
          var now3 = new Date().getTime();
          var distance3 = countDownDate3 - now3;
  
          var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
          var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
          var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
  
          document.getElementById("countdown3").innerHTML = days3 + "d " + hours3 + "h "
          + minutes3 + "m " + seconds3 + "s ";
  
          if (distance3 < 0) {
              clearInterval(x2);
              document.getElementById("countdown3").innerHTML = "EXPIRED";
          }
          }, 1000);
  