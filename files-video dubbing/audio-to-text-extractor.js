// npm install assemblyai
const fs = require('fs');
const { AssemblyAI } =  require('assemblyai');


const client = new AssemblyAI({
  apiKey: "344130a76e454d26bc7eac37fb1e06ea"
})

const audioUrl = './output_audio.mp3'

const config = {
  audio_url: audioUrl
}

const run = async () => {
  try {
    const transcript = await client.transcripts.create(config);
    
    // Use a callback function to handle the asynchronous writeFile operation
    fs.writeFile('./original_text.txt', transcript.text, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File written successfully.');
      }
    });
  } catch (err) {
    console.error('Error creating transcript:', err);
  }
};

run();


run()