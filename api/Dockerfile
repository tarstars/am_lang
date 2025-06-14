FROM python:3.11-slim

# Install system libraries required by google-cloud-texttospeech
RUN apt-get update && apt-get install -y gcc libffi-dev libnss3 libgconf-2-4 curl gnupg && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

CMD ["gunicorn", "-b", "0.0.0.0:8080", "main:app"]
