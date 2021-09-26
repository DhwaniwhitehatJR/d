song="";
function preload(){
    song=loadSound("music.mp3");
}
scoreRightWrist=0;
scoreLeftWrist=0;
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPosses);
}

function modelLoaded(){
    console.log('poseNet is intialized');
}
function gotPosses(results){
if(results.length>0{
    scoreRightWrist=results[0].pose.keypoints[10].score;
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log("scoreRightWrist="+scoreRightWrist+"scoreLeftWrist="+scoreLeftWrist);
})
}
function draw(){

}
function play(){
    song.play();
}