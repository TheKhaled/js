
var play=document.getElementById('play');
var pause = document.getElementById('pause')
var stop= document.getElementById('stop')
var akrmaudio =document.getElementById('audio');
var theaudio=document.getElementsByTagName('audio')[0];
var volume=document.getElementById('volume');
var time =document.getElementById('time');
var article=document.getElementsByTagName('article')[0]
console.log(article)
 var reader=document.querySelectorAll('.reader')
var figcaption=document.querySelector('figcaption')
var img =document.querySelector('img')
 

 var listQ={
    yaser:"Yaser ElDosery",
    eslam:"Eslam sobhy",
    hazaa:"hazaa al belushi",
 }

 var lengthOfTheList=Object.keys(listQ).length

console.log(lengthOfTheList)

play.addEventListener("click", function(){
    theaudio.play()
})

pause.addEventListener("click", function(){
    theaudio.pause()
})

stop.addEventListener("click",function(){
    theaudio.pause();
    theaudio.currentTime=0;  //  or theaudio.load()
})

stop.addEventListener("click",function(){
    theaudio.pause();
    theaudio.currentTime=0;  //  or theaudio.load()
})

volume.addEventListener("input", function(){
    theaudio.volume=volume.value;
})

theaudio.addEventListener("durationchange", function(){
    time.max=theaudio.duration;
    
})

///

audio.addEventListener("loadedmetadata", function() {
    time.max = audio.duration;
});

audio.addEventListener("timeupdate", function() {
    time.value = audio.currentTime;
});
time.addEventListener("input", function() {
    audio.currentTime = time.value;
});

///
time.addEventListener('input', function(){
    theaudio.currentTime=time.value;
})


// this is deflaut value 
var deflutKey=Object.keys(listQ)[0]
    var deflutValue=Object.values(listQ)[0]
 img.src=`../../assest/quran/${deflutKey}.jpeg`
    figcaption.textContent=deflutValue;
   


for (var i=0; i<lengthOfTheList; i++){
    var theValueofKey=Object.values(listQ)[i]


   article.innerHTML+=`<strong class="reader" > ${theValueofKey} </strong>`
  
 
    
}
var readers = document.querySelectorAll('.reader');

// readers.forEach(function(reader, index) {
//     reader.addEventListener("click", function(e) {
//         figcaption.textContent = Object.values(listQ)[index];
//         img.src = `../../assest/quran/${Object.keys(listQ)[index]}.jpeg`;
//         theaudio.src = `${index + 1}.mp3`;
//     });
// });
 

for(var g = 0; g < readers.length; g++) {
    readers[g].addEventListener("click", (function(index) {
        return function(e) {
            figcaption.textContent = Object.values(listQ)[index];
            img.src = `../../assest/quran/${Object.keys(listQ)[index]}.jpeg`;
            theaudio.src = `${index + 1}.mp3`;
        };
    })(g));
}


