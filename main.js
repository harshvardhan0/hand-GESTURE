Webcam.set({
    width:350,
    height:350,
    Image_format:'png',png_quality:100,

});
camera = document.getElementById("camera");
Webcam.attach(camera);
function take_pic(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    }
    );
}
console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iskhTmZWj/model.json ',modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("no").innerHTML = results[0].label;
    document.getElementById("ao").innerHTML = results[0].confidence.toFixed(3);

}
}