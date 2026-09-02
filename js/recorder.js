/**
 * Voice Recorder Manager untuk Maharah Kalam (Latihan Berbicara)
 * Memungkinkan siswa merekam suara sendiri dan mendengarkannya kembali
 */

class VoiceRecorderManager {
  constructor() {
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.audioBlob = null;
    this.audioUrl = null;
    this.isRecording = false;
    this.activeAudio = null;
  }

  async startRecording(onRecordingStart, onError) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioChunks = [];
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.audioUrl = URL.createObjectURL(this.audioBlob);
      };

      this.mediaRecorder.start();
      this.isRecording = true;
      if (onRecordingStart) onRecordingStart();
    } catch (err) {
      console.error("Microphone access denied or error:", err);
      if (onError) onError("Tidak dapat mengakses mikrofon. Pastikan izin mikrofon telah diberikan pada browser.");
    }
  }

  stopRecording(onRecordingStop) {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
      this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
      this.isRecording = false;
      setTimeout(() => {
        if (onRecordingStop) onRecordingStop(this.audioUrl);
      }, 200);
    }
  }

  playRecordedAudio(onEnd) {
    if (!this.audioUrl) return;

    if (this.activeAudio) {
      this.activeAudio.pause();
    }

    this.activeAudio = new Audio(this.audioUrl);
    this.activeAudio.onended = () => {
      if (onEnd) onEnd();
    };
    this.activeAudio.play();
  }

  stopRecordedAudio() {
    if (this.activeAudio) {
      this.activeAudio.pause();
      this.activeAudio.currentTime = 0;
    }
  }
}

window.voiceRecorder = new VoiceRecorderManager();
