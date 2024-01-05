class Payload {
  constructor() {}

  getHeaders() {
    return {
      accept: "*/*",
      "accept-base64": "true",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json; charset=UTF-8",
      "sec-ch-ua":
        '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-speechify-client": "API",
      "x-speechify-client-version": "0.1.297",
      Referer: "https://soundbite.speechify.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    };
  }
  getBody(text, voice, engine) {
    if (!text) {
      throw new Error("No text was provided");
    }
    return {
      audioFormat: "mp3",
      paragraphChunks: [text],
      voiceParams: {
        name: voice,
        engine: engine,
        languageCode: "en-US",
      },
    };
  }
}

module.exports = { Payload };
