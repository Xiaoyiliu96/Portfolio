var eye = document.querySelectorAll(".eye");
        window.addEventListener('mousemove',function(event){
     
         
            eye.forEach(function(eye){
     
            let angle = Math.atan2(event.pageX-eye.getBoundingClientRect()
            .left-eye.clientLeft/2,event.pageY-eye.getBoundingClientRect().top
            -eye.clientTop/2);
            let rot = angle * 180 / Math.PI * -1 - 90 ;
            eye.style.transform = `rotate(${
       rot}deg)`;
               })
        })