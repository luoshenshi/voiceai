## Welcome to VoiceAI

This package allows you to convert text-to-speech (TTS) in 4 custom voices:

- Snoop
- Gwyneth
- Matthew
- Narrator

**Caution:** This is an unofficial API from Speechify. :LOL:

## Getting Started

```bash
npm i voiceai
```

```javascript
const { VoiceAI } = require("voiceai");
const voiceAI = new VoiceAI();

voiceAI.speech("What's up, Cuh? I'm Snoop Doggy Dogg.").then((audio) => {
  audio.saveTo("output.mp3");
});
```

```javascript
const { VoiceAI } = require("voiceai");
const voiceAI = new VoiceAI();

/* Voices:

Snoop
Gwyneth
Matthew
Narrator

*/

voiceAI.speech("Hello, I'm Gwyneth. How may I help you?").then((audio) => {
  audio.saveTo("output.mp3");
});
```
