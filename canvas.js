let speed = 10;
let scale = 0.17; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

let dvd = {
    x: 200,
    y: 300,
    xspeed: 1,
    yspeed: 1,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("splash-canvas");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'assets/GTBT_emologo_bad.png';

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw DVD Logo and his background
        ctx.fillStyle = "red";
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        //Move the logo
        dvd.x+=dvd.xspeed;
        dvd.y+=dvd.yspeed;
        //Check for collision
        checkHitBox();
        update();
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
    }

    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
    }
}
