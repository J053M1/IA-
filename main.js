Webcam.attach('#camera');
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='fotocapture' src='"+data_uri+"'>";
    });

}
console.log("version ml5", ml5.version);
clasifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/e-1OmI1p4/model.json", model_loaded);
function model_loaded(){
    console.log("modelo cargado");
}
function checar(){
    img=document.getElementById("fotocapture");
    clasifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("nombre_objeto").innerHTML=results[0].label;
        document.getElementById("precision_objeto").innerHTML=results[0].confidence.toFixed(2);

    }
}