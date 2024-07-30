    setTimeout(function(){
        $('#elevatorAniamte').find('.effectWrapper .effect').animate({opacity:"1", left: "-30%",top: "-30%"},1000);
        },500);

        setTimeout(function(){
        $('#elevatorAniamte').find('.effectWrapper').fadeOut();
        },1500);

        setTimeout(function(){
        $('#elevatorAniamte .left').animate({left:"-100%"},2000);
        $('#elevatorAniamte .right').animate({right:"-100%"},2000);
        },1750);

        setTimeout(function(){
        $('#elevatorAniamte').remove();
        },5500);

        setTimeout(function() {
            window.location.href = 'index.html'; // Ana sayfaya yönlendirme
        }, 5500);


        document.onkeydown = function (e) {
 
            //F12 Engelle
            if(e.keyCode == 123) {
                alert('f12 tuşu kapalıdır')
                return false;
            }
        
            // CTRL+I Engelle
            if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
                alert('I tuşu kapalıdır')
                return false;
            }
        
            // CTRL+J Engelle
            if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                alert('J tuşu kapalıdır')
                return false;
            }
        
            // CTRL+U Engelle
            if(e.ctrlKey && e.keyCode == 85) {
            alert('U tuşu kapalıdır')
                return false;
            }
        }