const translate = require('translator-for-you');
const fs = require('fs/promises'); // Use fs/promises for promise-based fs functions

async function translateFileContent(filePath, targetLanguage, outputFilePath) {
  try {
    // Read the content of the file
    const text = await fs.readFile(filePath, 'utf8');

    // Translate the content to the target language
    const translatedText = await translate(text, targetLanguage);

    // Write the translated content to the output file
    await fs.writeFile(outputFilePath, translatedText);

    console.log('Translation completed. Result written to', outputFilePath);
  } catch (err) {
    console.error('Error:', err);
  }
}

// Example: Translate 'original_text.txt' content to Hindi and write to 'translated.txt'
translateFileContent('./original_text.txt', 'ta', 'translated.txt');