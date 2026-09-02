/**
 * TTS (Text to Speech) & Audio Controller
 * Menggunakan Web Speech API untuk pelafalan Bahasa Arab (ar-SA)
 */

class TTSManager {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.arabicVoice = null;
    this.isPlaying = false;
    this.currentUtterance = null;
    this.rate = 0.85; // Kecepatan pelafalan yang cocok untuk pembelajaran (agak sedikit lambat)

    this.initVoices();
    if (this.synth) {
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
    // Cari suara Bahasa Arab (ar-SA, ar-EG, atau prefix 'ar')
    this.arabicVoice = this.voices.find(v => v.lang.startsWith('ar')) || null;
  }

  speak(text, onStartCallback = null, onEndCallback = null) {
    if (!this.synth) {
      alert("Browser Anda tidak mendukung Text-to-Speech audio.");
      return;
    }

    // Hentikan audio yang sedang berjalan jika ada
    this.stop();

    // Bersihkan teks dari tanda kurung atau simbol jika perlu
    const cleanText = text.replace(/[\(\)]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ar-SA';
    utterance.rate = this.rate;

    if (this.arabicVoice) {
      utterance.voice = this.arabicVoice;
    }

    utterance.onstart = () => {
      this.isPlaying = true;
      if (onStartCallback) onStartCallback();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.currentUtterance = null;
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = (e) => {
      console.warn("Speech Synthesis error:", e);
      this.isPlaying = false;
      if (onEndCallback) onEndCallback();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
      this.isPlaying = false;
    }
  }

  setRate(newRate) {
    this.rate = newRate;
  }
}

// Sound Effects Synthesizer menggunakan Web Audio API (untuk Efek Kuis: Benar / Salah / Klik)
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playCorrect() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.25); // G5
      
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.5);
    } catch(e) {
      console.log("Audio FX error:", e);
    }
  }

  playWrong() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.3);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch(e) {
      console.log("Audio FX error:", e);
    }
  }

  playClick() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch(e) {}
  }
}

window.ttsManager = new TTSManager();
window.soundFX = new SoundFX();
