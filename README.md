# Armenian Language MVP

This repository contains a minimal React + Flask project for experimenting with Armenian language learning tools.

## Frontend
- Vite + React 18 + TypeScript
- Tailwind CSS for styling
- Example `LetterCard` component demonstrating audio playback

To develop:
```bash
cd frontend
npm install
npm run dev
```

## Backend
- Python 3.11 Flask API
- Example `/tts` endpoint that uses Google Cloud Text-to-Speech

To run locally:
```bash
cd api
pip install -r requirements.txt
python main.py
```
