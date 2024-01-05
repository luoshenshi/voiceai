const { default: axios } = require("axios");
const { Payload } = require("./payload");
const payload = new Payload();
const { ConvertToAudio } = require("./convertToAudio");
const toAudio = new ConvertToAudio();

class VoiceAI {
  #base_url = "https://audio.api.speechify.com/";
  #path = "generateAudioFiles";

  constructor() {}

  speech = (text, voice) => {
    const url = this.#base_url + this.#path;
    let engine;
    voice = voice == undefined ? "Snoop" : voice;
    engine = voice == "Matthew" ? "neural" : "resemble";

    return new Promise((resolve, reject) => {
      axios
        .post(url, payload.getBody(text, voice, engine), payload.getHeaders())
        .then((response) => {
          const saveTo = (pathAndName) => {
            toAudio.convert(response.data.audioStream, pathAndName);
          };

          resolve({ saveTo });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

module.exports = { VoiceAI };
