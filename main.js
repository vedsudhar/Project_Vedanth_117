function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kOACmGxmC/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var cat = 0;
var dog = 0;
var cow = 0;
var lion = 0;

function gotResults(error, results) 
{
    if (error) 
    {
     console.error(error);
    } 
    else 
    {
    console.log(results);
    
    random_number_r = Math.floor(Math.random()* 255) + 1
    random_number_g = Math.floor(Math.random()* 255) + 1
    random_number_b = Math.floor(Math.random()* 255) + 1

    document.getElementById("result_count").innerHTML = 
    'Detected Cat '+cat[0].label;

    document.getElementById("result_count").innerHTML = 
    'Detected Cow '+cow[0].label;
    
    document.getElementById("result_count").innerHTML = 
    'Detected Dog '+dog[0].label;
    
    document.getElementById("result_count").innerHTML = 
    'Detected Lion '+lion[0].label;

    document.getElementById("result_label").innerHTML = 
    'I can hear '+results.label;


   document.getElementById("result_label").style.color =
    "rgb("+random_number_r+","+random_number_g+","+
    random_number_b+")";
    document.getElementById("result_count").style.color =
    "rgb("+random_number_r+","+random_number_g+","+
    random_number_b+")";
    
    img = document.getElementById('cat');
    img1 = document.getElementById('cow');
    img2 = document.getElementById('dog');
    img3 = document.getElementById('lion');

    if (results[0].label == "meow")
    {
        img.src = 'cat.png';
        cat++;
    }

    else if (results[0].label == "barking")
    {
        img.src = 'dog.png';
        dog++;
    }

    else if (results[0].label == "Mooing")
    {
        img.src = 'cow.png';
        cow++;
    }

    else if ((results[0].label = 'Roaring'))
    {
        img.src = 'lion.png';
        lion++;
     }
     else
     {
        img.src = 'ear_image.png'
     }
    }



        
}