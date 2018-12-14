$(document).ready(function(){
    var countDownDate = new Date("Jan 10, 2019 21:30:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 300;
    var background = new Image();
    background.src = "b99promo.jpg";
    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function(){
        ctx.drawImage(background,0,0); 
        ctx.font = "25px google";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Brooklyn 99 returns in", canvas.width/2, 50); 
        ctx.font = "120px google";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(days, canvas.width/2, 175); 
        ctx.font = "20px google";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("DAYS", canvas.width/2, 210); 
        ctx.font = "12px google";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Visit soundboards.xyz to use the Holt Soundboard", canvas.width/2, 280); 
    };
    setTimeout(function(){
        window.canvas2ImagePlugin.saveImageDataToLibrary(
        function(msg){
            alert(msg);
        },
        function(err){
            alert(err);
        },
        document.getElementById('myCanvas')
    );
    },2000);

});