/**
 * Quiz Engine & Evaluation Handler
 * Mengelola Kuis Evaluasi Seluruh Maharah (Qira'ah, Kalam, Istima', Kitabah, Mufrodat)
 */

class QuizEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = [];
    this.score = 0;
    this.timerInterval = null;
    this.secondsElapsed = 0;
    this.isCompleted = false;
  }

  initQuiz(questions) {
    this.questions = [...questions];
    this.currentIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.score = 0;
    this.secondsElapsed = 0;
    this.isCompleted = false;
    this.startTimer();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.secondsElapsed = 0;
    this.timerInterval = setInterval(() => {
      this.secondsElapsed++;
      const timerEl = document.getElementById("quiz-timer");
      if (timerEl) {
        const mins = Math.floor(this.secondsElapsed / 60).toString().padStart(2, '0');
        const secs = (this.secondsElapsed % 60).toString().padStart(2, '0');
        timerEl.innerText = `${mins}:${secs}`;
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  selectAnswer(optionIndex) {
    this.userAnswers[this.currentIndex] = optionIndex;
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      return true;
    }
    return false;
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return true;
    }
    return false;
  }

  calculateResults() {
    this.stopTimer();
    this.score = 0;
    let correctCount = 0;
    const skillBreakdown = {};

    this.questions.forEach((q, idx) => {
      const selected = this.userAnswers[idx];
      const isCorrect = selected === q.correct;
      if (isCorrect) {
        correctCount++;
      }

      if (!skillBreakdown[q.skill]) {
        skillBreakdown[q.skill] = { total: 0, correct: 0 };
      }
      skillBreakdown[q.skill].total++;
      if (isCorrect) skillBreakdown[q.skill].correct++;
    });

    this.score = Math.round((correctCount / this.questions.length) * 100);
    this.isCompleted = true;

    return {
      score: this.score,
      correctCount: correctCount,
      totalQuestions: this.questions.length,
      timeTaken: this.secondsElapsed,
      skillBreakdown: skillBreakdown
    };
  }

  getFormattedTime() {
    const mins = Math.floor(this.secondsElapsed / 60);
    const secs = this.secondsElapsed % 60;
    return `${mins} menit ${secs} detik`;
  }
}

window.quizEngine = new QuizEngine();
