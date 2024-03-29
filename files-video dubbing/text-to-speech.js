const fs = require('fs');
const path = require('path');
const player = require('play-sound')();
const gtts = require('gtts');

// Read text from the translated.txt file
const inputFile = path.join(__dirname, 'translated.txt');
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Language in which you want to convert to Tamil
  const language = 'ta'; // Indian Tamil accent

  // Create a gtts instance
  const speech = new gtts(data, language);

  // Save the audio file
  const outputFile = path.join(__dirname, 'translated_speech.mp3');
  speech.save(outputFile, (err) => {
    if (err) {
      console.error('Error saving the audio:', err);
      return;
    }

    console.log('Audio saved:', outputFile);

    // Play the converted file
    player.play(outputFile, (err) => {
      if (err) console.error('Error playing the audio:', err);
    });
  });
});
