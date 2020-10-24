let classifier;
let video;
let resultLabel = "";

function modelReady(){
    console.log("Model is ready");
    classifier.predict(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else {
        resultLabel = results[0].label;
        classifier.predict(gotResults)
    }
}

 function setup(){
    createCanvas(640, 550);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    classifier = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw(){
    background(0);
    image(video, 0, 0);
    fill(255);
    textSize(32);
    text(resultLabel, 10, height - 20);
}