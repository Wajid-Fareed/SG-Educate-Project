
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevbtn = document.querySelector(".prev-btn");
    const nextbtn = document.querySelector(".next-btn");
    const slide1 = document.querySelector(".slide-1");
    const slide2 = document.querySelector(".slide-2");
    const slide3 = document.querySelector(".slide-3");
    const slide4 = document.querySelector(".slide-4");

    
    let imgindex = 0;
    slides[imgindex].classList.add('active');

    prevbtn.addEventListener('click', prevslide);
    nextbtn.addEventListener('click', nextslide);
    slide1.addEventListener('click', slideto1);
    slide2.addEventListener('click', slideto2);
    slide3.addEventListener('click', slideto3);
    slide4.addEventListener('click', slideto4);
    function prevslide(){
    slides[imgindex].classList.remove('active');
    imgindex = (imgindex === 0) ? slides.length - 1 : imgindex - 1;
    slides[imgindex].classList.add('active');
    slider.style.transform = `translateX(-${imgindex * 100}%)`;
    if(imgindex == 0){
      slide1.classList.add('active');
      slide2.classList.remove('active');
      slide3.classList.remove('active');
      slide4.classList.remove('active');
    }
    else if(imgindex == 1){
      slide1.classList.remove('active');
      slide2.classList.add('active');
      slide3.classList.remove('active');
      slide4.classList.remove('active');
    }
    else if(imgindex == 2){
      slide1.classList.remove('active');
      slide2.classList.remove('active');
      slide3.classList.add('active');
      slide4.classList.remove('active');
    }
    else{
      slide1.classList.remove('active');
      slide2.classList.remove('active');
      slide3.classList.remove('active');
      slide4.classList.add('active');
    }
    }
    function nextslide(){
    slides[imgindex].classList.remove('active');
    imgindex = (imgindex === slides.length - 1) ? 0 : imgindex + 1;
    slides[imgindex].classList.add('active');
    slider.style.transform = `translateX(-${imgindex * 100}%)`;
    if(imgindex == 0){
      slide1.classList.add('active');
      slide2.classList.remove('active');
      slide3.classList.remove('active');
      slide4.classList.remove('active');
    }
    else if(imgindex == 1){
      slide1.classList.remove('active');
      slide2.classList.add('active');
      slide3.classList.remove('active');
      slide4.classList.remove('active');
    }
    else if(imgindex == 2){
      slide1.classList.remove('active');
      slide2.classList.remove('active');
      slide3.classList.add('active');
      slide4.classList.remove('active');
    }
    else{
      slide1.classList.remove('active');
      slide2.classList.remove('active');
      slide3.classList.remove('active');
      slide4.classList.add('active');
    }
    }
    function slideto1(){
      slides[imgindex].classList.remove('active');
      imgindex = 0;
      slides[imgindex].classList.add('active');
      slider.style.transform = `translateX(-${imgindex * 100}%)`;
      slide1.classList.add('active');
      slide2.classList.remove('active');
      slide3.classList.remove('active');
      slide4.classList.remove('active');
    }
    function slideto2(){
      slides[imgindex].classList.remove('active');
      imgindex = 1;
      slides[imgindex].classList.add('active');
      slider.style.transform = `translateX(-${imgindex * 100}%)`;
      slide1.classList.remove('active');
      slide2.classList.add('active');
      slide3.classList.remove('active');
      slide4.classList.remove('active');
    }
    function slideto3(){
      slides[imgindex].classList.remove('active');
      imgindex = 2;
      slides[imgindex].classList.add('active');
      slider.style.transform = `translateX(-${imgindex * 100}%)`;
      slide1.classList.remove('active');
      slide2.classList.remove('active');
      slide3.classList.add('active');
      slide4.classList.remove('active');
    }
    function slideto4(){
      slides[imgindex].classList.remove('active');
      imgindex = 3;
      slides[imgindex].classList.add('active');
      slider.style.transform = `translateX(-${imgindex * 100}%)`;
      slide1.classList.remove('active');
      slide2.classList.remove('active');
      slide3.classList.remove('active');
      slide4.classList.add('active');
    }
   setInterval(  
    function auto(){
    slides[imgindex].classList.remove('active');
    imgindex = (imgindex === slides.length - 1) ? 0 : imgindex + 1;
    slides[imgindex].classList.add('active');
    slider.style.transform = `translateX(-${imgindex * 100}%)`;
    if(imgindex == 0){
      slide1.classList.add('active');
      slide2.classList.remove('active');
      slide3.classList.remove('active');
      slide4.classList.remove('active');
    }
    else if(imgindex == 1){
      slide1.classList.remove('active');
      slide2.classList.add('active');
      slide3.classList.remove('active');
      slide4.classList.remove('active');
    }
    else if(imgindex == 2){
      slide1.classList.remove('active');
      slide2.classList.remove('active');
      slide3.classList.add('active');
      slide4.classList.remove('active');
    }
    else{
      slide1.classList.remove('active');
      slide2.classList.remove('active');
      slide3.classList.remove('active');
      slide4.classList.add('active');
    }
    } ,5000)
    // function newsletterClose(){
    //   document.getElementById('newsletter').style.display = "none";
    // }
    //  setCookie = document.cookie;
    //  if(setCookie != "username= wajidfareed"){
    //   document.cookie = "username= wajidfareed"; 
    //   setTimeout(function newsletterAuto(){
    //     document.getElementById('newsletter').style.display = "block";
        
    //     // const d = new Date();
    //     // expires = d.setTime(d.getTime() + 1 * 600 * 1000);
        
    // }, 1000)
    //  }
    document.addEventListener('DOMContentLoaded', function () {
      var popup = document.getElementById('newsletter');
      var closeBtn = document.getElementById('newsletterClose');
      // var header = document.querySelector("header");
      var cookieName = 'popupShown';
  
      // Check if the cookie is already set
      if (getCookie(cookieName) !== 'true') {
        // Wait for 30 seconds and show the popup
        setTimeout(function () {
                            //  header.style.zIndex =0;
          popup.style.display = 'block';
        }, 30000);
      }
  
      // Close the popup and set the cookie
      closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        //  header.style.zIndex =9;
        setCookie(cookieName, 'true', 1); // Expires in 1 day
      });
    });
  
    // Function to set a cookie
    function setCookie(name, value, days) {
      var expires = '';
  
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
      }
  
      document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
  
    // Function to get a cookie
    function getCookie(name) {
      var nameEQ = name + '=';
      var cookies = document.cookie.split(';');
  
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
  
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
        }
  
        if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
        }
      }
  
      return null;
    }
