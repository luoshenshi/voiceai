const fs = require("fs");

class ConvertToAudio {
  constructor() {}

  convert(base64urlAudio, path) {
    // Remove the URL specific characters (- and _) and add padding characters
    const base64Audio = base64urlAudio
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(
        base64urlAudio.length + ((4 - (base64urlAudio.length % 4)) % 4),
        "="
      );

    // Convert the base64 audio to a buffer
    const audioBuffer = Buffer.from(base64Audio, "base64");

    // Save the buffer to an MP3 file
    fs.writeFileSync(path, audioBuffer, "base64");
  }
}
module.exports = { ConvertToAudio };
