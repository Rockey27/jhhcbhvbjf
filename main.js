noseX=0;
noseY=0;
diffrence=0;
rightwristX=0;
leftwristX=0;

function setup() {
video=createCapture(VIDEO);
video.size(550,550);

 canvas=createCanvas(550,550);
canvas.position(560,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log("POSENET IS INITIALIED");
}

function gotPoses(results){
if (results.length >0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY="+noseY);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
diffrence=floor(leftwristX-rightwristX);
}
}

function draw() {
    background('#969A97');
    text('THARUN', 50, 400 );
    textSize(10);
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,diffrence);
}