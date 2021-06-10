video = "";
status = "";

function preLoad() {

    video = createVideo('video.mp4');
    video.hide();
}

function setup() {

    canvas = createCanvas(480, 380);
    canvas.center();
    
}

function start() {

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Dectecting objects";
}

function draw() {

    image(video, 0, 0, 480, 380);
}


function modelLoaded() {

    console.log("model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}