
(function(){
    // var btn=document.getElementsByClassName("iconfont icon-shenqing-fanhui");
    // var btn=document.getElementsByClassName("iconfont icon-shenqing-fanhui");
    // for(var i=0;i<btn.length;i++){
    //     btn[i].addEventListener("click", function(){
    //     history.back();
    //     })
    // }
	(function(){  
        function w() {  
            var r = document.documentElement;  
            var a = r.getBoundingClientRect().width;//获取当前设备的宽度  
            if (a > 720 ){//720不固定，根据设计稿的高度定  
                a = 720;  
            }   
            var rem = a / 26.78;  
            r.style.fontSize = rem + "px"  
        }  
        w();  
    })(); 

    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);

    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);    
})()
 
 