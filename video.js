var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

///To play the video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	
});

///to pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

/// to slow video
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

/// to speed it up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
});
/// to skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5;
	console.log(video.currentTime);
	if(video.currentTime >= video.duration){ 
		video.currentTime = 0;
		video.play();
	}
});
/// to mute
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = 'Mute';
	}
});

/// volume slider
document.querySelector("#volumeSlider").addEventListener("mousemove", function(e) {
	console.log("Slider");
	video.volume = e.currentTarget.value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

/// black white
document.querySelector("#old").addEventListener("click", function() {
	video.style.filter = "grayscale(100%)";
});


/// original
document.querySelector("#original").addEventListener("click", function() {
	video.style.filter = "grayscale(0%)";
});
