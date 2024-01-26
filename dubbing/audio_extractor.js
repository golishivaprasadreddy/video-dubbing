const { exec } = require('child_process');

const inputVideoFile = './videoplayback.mp4';  // Replace with your input video file path
const outputAudioFile = 'output_audio.mp3';  // Replace with the desired output audio file path

// Use the exec function to run the Python script
exec(`python audioExtractor.py ${inputVideoFile} ${outputAudioFile}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});