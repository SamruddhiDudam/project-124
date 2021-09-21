nosex = 0;
nosey = 0;
left_wrist = 0;
right_wrist = 0;
lenght_between_both_wrists = 0;

function prelaod() {

}

function setup() {
    video = createCapture(VIDEO);
    canvas = createCanvas(500, 340);
    canvas.position(470, 290);
    oned_model = ml5.poseNet(video, modelloaded);
    oned_model.on('pose', gotpose);
}

function draw() {

}

function modelloaded() {
    console.log("Model Loaded")
}

function gotpose(result) {
    
} 

