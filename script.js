const videoElement = document.getElementById('video');
const button= document.getElementById('button');

// Promt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try {
        // Assign a constant and wait for the user to select tab to display
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Assign Source of video element as the chosen stream
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
    }catch(error){
        // Catch Error Here
        console.log('whoops, error herre:',error);
    }
}

button.addEventListener('click',async ()=>{
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});
// On Load
selectMediaStream();