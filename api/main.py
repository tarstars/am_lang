from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import texttospeech
import os
import base64

app = Flask(__name__)
CORS(app)

client = texttospeech.TextToSpeechClient()

def synthesize(text: str) -> bytes:
    input_text = texttospeech.SynthesisInput(text=text)
    voice = texttospeech.VoiceSelectionParams(language_code="ru-RU", name="ru-RU-Wavenet-A")
    audio_config = texttospeech.AudioConfig(audio_encoding=texttospeech.AudioEncoding.MP3)
    response = client.synthesize_speech(input=input_text, voice=voice, audio_config=audio_config)
    return response.audio_content

@app.get('/tts')
def tts():
    text = request.args.get('text')
    if not text:
        return jsonify({'error': 'missing text'}), 400
    audio_bytes = synthesize(text)
    b64 = base64.b64encode(audio_bytes).decode('utf-8')
    return jsonify({'audioContent': b64})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
