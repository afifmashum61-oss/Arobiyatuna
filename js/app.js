/**
 * Application Main Controller (app.js)
 * Mengatur Navigasi Bab, Tab Maharah, Interaksi Audio, & UI Event Listeners
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let currentChapterId = 1;
  let currentMaharahTab = "mufrodat";

  // Elements
  const chapterGridEl = document.getElementById("chapter-grid");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-content-panel");

  // Initialize App
  init();

  function init() {
    renderChapterCards();
    setupTabSwitchers();
    loadChapterData(currentChapterId);
    setupGlobalEvents();
  }

  // 1. Render Chapter Selector Cards
  function renderChapterCards() {
    if (!chapterGridEl) return;
    chapterGridEl.innerHTML = "";

    arabicData.chapters.forEach((ch) => {
      const card = document.createElement("div");
      card.className = `chapter-card ${ch.id === currentChapterId ? "active" : ""}`;
      card.dataset.id = ch.id;

      card.innerHTML = `
        <div class="chapter-header">
          <span class="chapter-badge">BAB ${ch.id}</span>
          <i class="fas ${ch.icon} chapter-icon"></i>
        </div>
        <div class="chapter-arabic-title">${ch.title}</div>
        <div class="chapter-indo-title">${ch.titleIndo}</div>
        <div class="chapter-subtitle">${ch.subtitleIndo}</div>
      `;

      card.addEventListener("click", () => {
        if (window.ttsManager) window.ttsManager.stop();
        currentChapterId = ch.id;
        document.querySelectorAll(".chapter-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        loadChapterData(currentChapterId);
      });

      chapterGridEl.appendChild(card);
    });
  }

  // 2. Setup Maharah Tab Switchers
  function setupTabSwitchers() {
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (window.soundFX) window.soundFX.playClick();
        if (window.ttsManager) window.ttsManager.stop();

        const targetTab = btn.dataset.tab;
        currentMaharahTab = targetTab;

        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        tabPanels.forEach(panel => {
          panel.classList.remove("active");
          if (panel.id === `panel-${targetTab}`) {
            panel.classList.add("active");
          }
        });

        // Load specific tab view if needed
        loadChapterData(currentChapterId);
      });
    });
  }

  // 3. Load Chapter Data into Active Tabs
  function loadChapterData(chapterId) {
    const chapter = arabicData.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    renderMufrodat(chapter);
    renderQiraah(chapter);
    renderHiwar(chapter);
    renderIstima(chapter);
    renderQawaid(chapter);
    renderQuizTab();
  }

  // --------------------------------------------------------------------------
  // Tab 1: Mufrodat (20 Vocabularies per Chapter)
  // --------------------------------------------------------------------------
  function renderMufrodat(chapter) {
    const container = document.getElementById("mufrodat-container");
    if (!container) return;

    container.innerHTML = "";
    chapter.mufrodat.forEach((item) => {
      const card = document.createElement("div");
      card.className = "vocab-card";

      card.innerHTML = `
        <span class="vocab-category">${item.category}</span>
        <div class="vocab-icon"><i class="fas ${item.icon}"></i></div>
        <div class="vocab-arabic">${item.arabic}</div>
        <div class="vocab-latin">${item.latin}</div>
        <div class="vocab-indo">${item.indo}</div>
        <div class="vocab-action">
          <button class="btn-audio" title="Dengarkan Pelafalan Audio">
            <i class="fas fa-volume-up"></i>
          </button>
        </div>
      `;

      const audioBtn = card.querySelector(".btn-audio");
      audioBtn.addEventListener("click", () => {
        if (window.ttsManager) {
          window.ttsManager.speak(item.arabic, () => {
            audioBtn.style.color = "var(--primary-gold)";
          }, () => {
            audioBtn.style.color = "";
          });
        }
      });

      container.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // Tab 2: Maharah Qira'ah (Reading Skills)
  // --------------------------------------------------------------------------
  function renderQiraah(chapter) {
    const container = document.getElementById("qiraah-container");
    if (!container) return;

    let showTranslation = true;

    container.innerHTML = `
      <div class="qiraah-box">
        <div class="qiraah-controls">
          <div>
            <h3 style="font-family: var(--font-arabic-heading); font-size: 1.5rem; color: var(--primary-gold-hover);">
              ${chapter.qiraah.title}
            </h3>
            <span style="font-size: 0.88rem; color: var(--text-muted);">
              Klik ikon speaker pada setiap paragraf untuk mendengarkan pelafalan audio.
            </span>
          </div>
          <div style="display: flex; gap: 10px;">
            <button id="btn-toggle-trans" class="btn btn-secondary btn-sm">
              <i class="fas fa-eye"></i> Sembunyikan Terjemahan
            </button>
            <button id="btn-read-all" class="btn btn-primary btn-sm">
              <i class="fas fa-play"></i> Baca Seluruh Teks
            </button>
          </div>
        </div>

        <div id="qiraah-paragraphs-list"></div>
      </div>
    `;

    const listEl = container.querySelector("#qiraah-paragraphs-list");

    chapter.qiraah.paragraphs.forEach((p, idx) => {
      const pCard = document.createElement("div");
      pCard.className = "paragraph-card";
      pCard.id = `para-${idx}`;

      const words = p.arabic.split(" ");
      const wrappedArabic = words.map(w => `<span class="clickable-word">${w}</span>`).join(" ");

      pCard.innerHTML = `
        <div class="paragraph-arabic">${wrappedArabic}</div>
        <div class="paragraph-translation">${p.translation}</div>
        <div class="paragraph-footer">
          <button class="btn btn-outline-gold btn-sm para-audio-btn">
            <i class="fas fa-volume-up"></i> Dengarkan Paragraf
          </button>
        </div>
      `;

      const audioBtn = pCard.querySelector(".para-audio-btn");
      audioBtn.addEventListener("click", () => {
        document.querySelectorAll(".paragraph-card").forEach(c => c.classList.remove("speaking"));
        pCard.classList.add("speaking");

        if (window.ttsManager) {
          window.ttsManager.speak(p.arabic, null, () => {
            pCard.classList.remove("speaking");
          });
        }
      });

      pCard.querySelectorAll(".clickable-word").forEach(wEl => {
        wEl.addEventListener("click", () => {
          const wordText = wEl.innerText.replace(/[.,؛:]/g, '').trim();
          if (window.ttsManager) window.ttsManager.speak(wordText);
        });
      });

      listEl.appendChild(pCard);
    });

    const toggleBtn = container.querySelector("#btn-toggle-trans");
    toggleBtn.addEventListener("click", () => {
      showTranslation = !showTranslation;
      container.querySelectorAll(".paragraph-translation").forEach(el => {
        if (showTranslation) {
          el.classList.remove("hidden");
        } else {
          el.classList.add("hidden");
        }
      });
      toggleBtn.innerHTML = showTranslation
        ? `<i class="fas fa-eye-slash"></i> Sembunyikan Terjemahan`
        : `<i class="fas fa-eye"></i> Tampilkan Terjemahan`;
    });

    const readAllBtn = container.querySelector("#btn-read-all");
    readAllBtn.addEventListener("click", () => {
      if (window.ttsManager) {
        window.ttsManager.speak(chapter.qiraah.fullArabic);
      }
    });
  }

  // --------------------------------------------------------------------------
  // Tab 3: Maharah Kalam (20 Dialogue Entries per Chapter + Person Avatar Icons)
  // --------------------------------------------------------------------------
  function renderHiwar(chapter) {
    const container = document.getElementById("hiwar-container");
    if (!container) return;

    container.innerHTML = `
      <div style="margin-bottom: 1.5rem; background: var(--light-surface); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
        <h4 style="margin-bottom: 0.3rem;"><i class="fas fa-comments" style="color: var(--primary-gold);"></i> Percakapan Interaktif 20 Dialog (الحِوَارُ)</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted);">
          Dengarkan percakapan antar tokoh dengan ikon avatar di bawah ini, lalu gunakan fitur perekam suara untuk berlatih!
        </p>
      </div>

      <div class="hiwar-container">
        ${chapter.hiwar.map((dialog, idx) => {
          const isSpeakerA = idx % 2 === 0;
          const iconClass = dialog.avatarIcon || (isSpeakerA ? 'fa-user-graduate' : 'fa-user-tie');
          return `
            <div class="hiwar-bubble ${isSpeakerA ? 'speaker-a' : 'speaker-b'}">
              <div class="hiwar-avatar" title="${dialog.speaker}">
                <i class="fas ${iconClass}"></i>
              </div>
              <div class="hiwar-content-card">
                <div class="hiwar-speaker-name">
                  <i class="fas ${iconClass}"></i> ${dialog.speaker} (${dialog.role})
                </div>
                <div class="hiwar-arabic">${dialog.arabic}</div>
                <div class="hiwar-translation">${dialog.translation}</div>
                <div class="hiwar-actions">
                  <button class="btn btn-secondary btn-sm hiwar-speak-btn" data-text="${dialog.arabic}">
                    <i class="fas fa-volume-up"></i> Putar Suara
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <div class="recorder-box">
        <h4 style="font-family: var(--font-arabic-heading); color: var(--primary-gold); margin-bottom: 0.5rem;">
          <i class="fas fa-microphone"></i> Latihan Pelafalan Mandiri (Perekam Suara)
        </h4>
        <div id="recorder-status" class="recorder-status">
          Klik tombol "Mulai Merekam" untuk merekam suara pelafalan Anda.
        </div>
        <div style="display: flex; justify-content: center; gap: 10px;">
          <button id="btn-start-record" class="btn btn-primary">
            <i class="fas fa-microphone"></i> Mulai Merekam
          </button>
          <button id="btn-stop-record" class="btn btn-dark" style="display:none;">
            <i class="fas fa-stop"></i> Hentikan Rekaman
          </button>
          <button id="btn-play-record" class="btn btn-secondary" style="display:none;">
            <i class="fas fa-play"></i> Putar Rekaman Saya
          </button>
        </div>
      </div>
    `;

    container.querySelectorAll(".hiwar-speak-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const text = btn.dataset.text;
        if (window.ttsManager) window.ttsManager.speak(text);
      });
    });

    const startRecBtn = container.querySelector("#btn-start-record");
    const stopRecBtn = container.querySelector("#btn-stop-record");
    const playRecBtn = container.querySelector("#btn-play-record");
    const statusEl = container.querySelector("#recorder-status");

    startRecBtn.addEventListener("click", () => {
      if (window.voiceRecorder) {
        window.voiceRecorder.startRecording(
          () => {
            statusEl.innerHTML = `<span class="recording-pulse"></span> Merekam... Berbicaralah sekarang!`;
            startRecBtn.style.display = "none";
            stopRecBtn.style.display = "inline-flex";
            playRecBtn.style.display = "none";
          },
          (errText) => {
            alert(errText);
          }
        );
      }
    });

    stopRecBtn.addEventListener("click", () => {
      if (window.voiceRecorder) {
        window.voiceRecorder.stopRecording(() => {
          statusEl.innerText = "Rekaman berhasil disimpan! Klik 'Putar Rekaman Saya' untuk mendengarkan.";
          stopRecBtn.style.display = "none";
          startRecBtn.style.display = "inline-flex";
          startRecBtn.innerHTML = `<i class="fas fa-redo"></i> Rekam Ulang`;
          playRecBtn.style.display = "inline-flex";
        });
      }
    });

    playRecBtn.addEventListener("click", () => {
      if (window.voiceRecorder) {
        window.voiceRecorder.playRecordedAudio(() => {
          statusEl.innerText = "Selesai memutar rekaman suara Anda.";
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // Tab 4: Maharah Istima' (60 Questions Bank - 20 Questions per Bab)
  // --------------------------------------------------------------------------
  function renderIstima(chapter) {
    const container = document.getElementById("istima-container");
    if (!container) return;

    let activeFilter = "all";

    const renderQuestions = () => {
      let filteredQuestions = arabicData.istimaBank || [];
      if (activeFilter !== "all") {
        const cId = parseInt(activeFilter);
        filteredQuestions = filteredQuestions.filter(q => q.chapterId === cId);
      }

      container.innerHTML = `
        <div style="margin-bottom: 1.5rem; background: var(--light-surface); padding: 1.2rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
            <div>
              <h4 style="font-family: var(--font-arabic-heading); font-size: 1.4rem; color: var(--dark-bg); margin-bottom: 0.3rem;">
                <i class="fas fa-headphones-alt" style="color: var(--primary-gold);"></i> أسْئِلَةُ الإِسْتِمَاعِ وَالتَّفْكِيْرِ النَّاقِدِ (60 سُؤَالًا - 20 لِكُلِّ بَابٍ)
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-muted);">
                اضْغَطْ عَلَى زِرِّ <strong>"اسْتَمِعْ إِلَى الصَّوْتِ"</strong> لِلِاسْتِمَاعِ إِلَى النَّصِّ، ثُمَّ اخْتَرِ الإِجَابَةَ الصَّحِيْحَةَ باللُّغَةِ العَرَبِيَّةِ!
              </p>
            </div>
            <div class="istima-filter-btns" style="display: flex; flex-wrap: wrap; gap: 6px;">
              <button class="btn btn-sm ${activeFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" data-filter="all">
                جَمِيْعُ الأَسْئِلَةِ (60)
              </button>
              <button class="btn btn-sm ${activeFilter === '1' ? 'btn-primary' : 'btn-secondary'}" data-filter="1">
                الْبَابُ الأَوَّلُ (20)
              </button>
              <button class="btn btn-sm ${activeFilter === '2' ? 'btn-primary' : 'btn-secondary'}" data-filter="2">
                الْبَابُ الثَّانِي (20)
              </button>
              <button class="btn btn-sm ${activeFilter === '3' ? 'btn-primary' : 'btn-secondary'}" data-filter="3">
                الْبَابُ الثَّالِثُ (20)
              </button>
            </div>
          </div>
        </div>

        <div id="istima-questions-list"></div>
      `;

      container.querySelectorAll(".istima-filter-btns button").forEach(btn => {
        btn.addEventListener("click", () => {
          activeFilter = btn.dataset.filter;
          renderQuestions();
        });
      });

      const listEl = container.querySelector("#istima-questions-list");

      filteredQuestions.forEach((q, idx) => {
        const qCard = document.createElement("div");
        qCard.className = "istima-card";

        qCard.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
            <span class="chapter-badge">البَابُ ${q.chapterId}</span>
            <span class="quiz-skill-tag" style="margin-bottom: 0; font-family: var(--font-arabic-heading);"><i class="fas fa-brain"></i> ${q.typeTag}</span>
          </div>

          <div class="audio-player-box">
            <div class="audio-player-info">
              <i class="fas fa-play-circle" style="font-size: 1.8rem; color: var(--primary-gold);"></i>
              <div>
                <strong style="display: block; font-family: var(--font-arabic-heading);">صَوْتُ السُّؤَالِ #${idx + 1}</strong>
                <span style="font-size: 0.8rem; color: var(--text-muted);">اضْغَطْ لِلِاسْتِمَاعِ إِلَى قِرَاءَةِ النَّصِّ</span>
              </div>
            </div>
            <button class="btn btn-primary btn-sm play-istima-audio-btn">
              <i class="fas fa-volume-up"></i> اسْتَمِعْ إِلَى الصَّوْتِ
            </button>
          </div>

          <div style="font-family: var(--font-arabic); font-size: 1.8rem; font-weight: 700; margin: 1rem 0; color: var(--text-dark); direction: rtl; text-align: right; line-height: 1.8;">
            ${q.question}
          </div>

          <div class="quiz-options">
            ${q.options.map((opt, oIdx) => `
              <button class="quiz-option-btn arabic-option" data-idx="${oIdx}">
                <span>${opt}</span>
                <i class="far fa-circle"></i>
              </button>
            `).join("")}
          </div>

          <div class="istima-feedback" style="display:none; margin-top: 1rem; padding: 0.8rem 1.2rem; border-radius: var(--radius-sm); font-size: 1.1rem; font-family: var(--font-arabic); direction: rtl; text-align: right;"></div>
        `;

        qCard.querySelector(".play-istima-audio-btn").addEventListener("click", () => {
          if (window.ttsManager) window.ttsManager.speak(q.audioText);
        });

        const optionBtns = qCard.querySelectorAll(".quiz-option-btn");
        const feedbackEl = qCard.querySelector(".istima-feedback");

        optionBtns.forEach(btn => {
          btn.addEventListener("click", () => {
            const selectedIdx = parseInt(btn.dataset.idx);
            optionBtns.forEach(b => b.className = "quiz-option-btn arabic-option");

            if (selectedIdx === q.correct) {
              btn.classList.add("correct");
              if (window.soundFX) window.soundFX.playCorrect();
              feedbackEl.style.display = "block";
              feedbackEl.style.backgroundColor = "#E8F8F0";
              feedbackEl.style.color = "#1E8449";
              feedbackEl.innerHTML = `<i class="fas fa-check-circle"></i> <strong>إِجَابَةٌ صَحِيْحَةٌ!</strong> ${q.explanation}`;
            } else {
              btn.classList.add("wrong");
              optionBtns[q.correct].classList.add("correct");
              if (window.soundFX) window.soundFX.playWrong();
              feedbackEl.style.display = "block";
              feedbackEl.style.backgroundColor = "#FDEDEC";
              feedbackEl.style.color = "#C0392B";
              feedbackEl.innerHTML = `<i class="fas fa-times-circle"></i> <strong>إِجَابَةٌ خَاطِئَةٌ!</strong> ${q.explanation}`;
            }
          });
        });

        listEl.appendChild(qCard);
      });
    };

    renderQuestions();
  }

  // --------------------------------------------------------------------------
  // Tab 5: Maharah Kitabah & Qawa'id (Grammar, Tashrif & Rules Table)
  // --------------------------------------------------------------------------
  function renderQawaid(chapter) {
    const container = document.getElementById("qawaid-container");
    if (!container) return;

    let tashrifHTML = "";
    if (chapter.qawaid.tashrifTable && chapter.qawaid.tashrifTable.length > 0) {
      tashrifHTML = `
        <div style="margin-top: 1.5rem; margin-bottom: 1.8rem; overflow-x: auto;">
          <h4 style="font-family: var(--font-arabic-heading); color: var(--primary-gold-hover); margin-bottom: 0.8rem; font-size: 1.3rem;">
            <i class="fas fa-table"></i> جَدْوَلُ تَصْرِيْفِ الْفِعْلِ الْمَاضِي (14 ضَمِيْرًا - "احتفل")
          </h4>
          <table class="tashrif-table" style="width: 100%; border-collapse: collapse; background: #FFF; border: 1px solid var(--border-color); border-radius: var(--radius-sm); box-shadow: var(--shadow-sm);">
            <thead>
              <tr style="background-color: var(--dark-bg); color: var(--gold-light); font-family: var(--font-arabic-heading);">
                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: center;">الضَّمِيْرُ</th>
                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: center;">الْمَعْنَى (Kata Ganti)</th>
                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: center;">الْفِعْلُ الْمَاضِي (Fi'il Madhi)</th>
                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: center;">Pengucapan (Latin)</th>
                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: center;">Arti Bahasa Indonesia</th>
                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: center;">Audio</th>
              </tr>
            </thead>
            <tbody>
              ${chapter.qawaid.tashrifTable.map((row) => `
                <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s ease;">
                  <td style="padding: 10px; font-family: var(--font-arabic); font-size: 1.8rem; font-weight: 700; color: var(--primary-gold-hover); text-align: center; background: #FAF6EF;">
                    ${row.dhomir}
                  </td>
                  <td style="padding: 10px; text-align: center; font-size: 0.9rem; font-weight: 600; color: var(--text-muted);">
                    ${row.dhomirMeaning}
                  </td>
                  <td style="padding: 10px; font-family: var(--font-arabic); font-size: 2rem; font-weight: 700; color: var(--text-dark); text-align: center; direction: rtl;">
                    ${row.arabic}
                  </td>
                  <td style="padding: 10px; font-style: italic; text-align: center; color: var(--primary-gold-hover); font-weight: 600;">
                    ${row.latin}
                  </td>
                  <td style="padding: 10px; text-align: center; font-size: 0.95rem;">
                    ${row.meaning}
                  </td>
                  <td style="padding: 10px; text-align: center;">
                    <button class="btn btn-secondary btn-sm play-tashrif-btn" data-text="${row.arabic}">
                      <i class="fas fa-volume-up"></i>
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    let rulesTableHTML = "";
    if (chapter.qawaid.rulesTable) {
      const rt = chapter.qawaid.rulesTable;
      rulesTableHTML = `
        <div style="margin-top: 1.5rem; margin-bottom: 1.8rem;">
          <div style="text-align: center; margin-bottom: 1rem;">
            <h3 style="font-family: var(--font-arabic-heading); font-size: 2.2rem; color: var(--dark-bg); margin-bottom: 0.3rem;">
              ${rt.title}
            </h3>
            <div style="font-size: 0.95rem; color: var(--text-muted); font-family: var(--font-arabic);">
              ${rt.reference}
            </div>
          </div>

          <table style="width: 100%; border-collapse: collapse; border: 2px solid #2C3E50; background-color: #FEFDE8; box-shadow: var(--shadow-md);">
            <tbody>
              ${rt.sections.map((sec) => `
                <tr style="border-bottom: 2px solid #2C3E50;">
                  <td style="padding: 1.5rem; border-right: 2px solid #2C3E50; text-align: center; direction: rtl; font-family: var(--font-arabic); font-size: 2.1rem; line-height: 2.3; width: 75%;">
                    ${sec.examples.map(ex => `
                      <div style="margin-bottom: 0.8rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #D5C28C; padding-bottom: 6px;">
                        <button class="btn btn-outline-gold btn-sm play-rule-item-btn" data-text="${ex.arabicPlain}" style="padding: 2px 8px;">
                          <i class="fas fa-volume-up"></i>
                        </button>
                        <div style="direction: rtl; text-align: right;">
                          <span style="color: #E74C3C; font-weight: 800;">${ex.targetVerb}</span> ${ex.restSentence}
                        </div>
                      </div>
                    `).join("")}
                  </td>
                  <td style="padding: 1.5rem; text-align: center; font-family: var(--font-arabic-heading); font-size: 3.8rem; font-weight: 800; color: var(--dark-bg); background-color: #FEFDE8; vertical-align: middle; width: 25%;">
                    ${sec.particle}
                    <div style="font-size: 0.88rem; font-family: var(--font-sans); font-weight: 600; color: var(--primary-gold-hover); margin-top: 4px;">
                      ${sec.particleName}
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <div style="margin-top: 1.2rem; padding: 1.2rem; background-color: #FFF; border: 1.5px solid var(--border-color); border-radius: var(--radius-sm); box-shadow: var(--shadow-sm);">
            <div style="font-weight: 700; font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--text-dark);">
              Keterangan: Perhatikan perubahan <em>fi'il mudhari'</em> pada kolom di atas!
            </div>
            <div style="font-size: 1rem; color: var(--text-dark); line-height: 1.7;">
              1. <strong style="font-family: var(--font-arabic); font-size: 1.4rem; color: var(--primary-gold-hover);">لَمْ</strong> di sini <em>lam nafi</em> yang berarti <strong>belum/tidak</strong>, sedangkan <strong style="font-family: var(--font-arabic); font-size: 1.4rem; color: var(--primary-gold-hover);">لَا</strong> adalah <em>la nahiyah</em> yang berarti <strong>jangan!</strong>. Keduanya masuk kepada <em>fi'il mudhari'</em> saja.
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="qawaid-explanation-box">
        <h3 class="qawaid-title"><i class="fas fa-book-open"></i> ${chapter.qawaid.title}</h3>
        <p style="margin-bottom: 1rem; color: var(--text-dark);">${chapter.qawaid.explanation}</p>
        
        ${tashrifHTML}
        ${rulesTableHTML}

        <h5 style="margin-bottom: 0.5rem; font-weight:700;">Contoh Penggunaan dalam Kalimat:</h5>
        <ul style="padding-left: 1.2rem; margin-bottom: 1rem;">
          ${chapter.qawaid.examples.map(ex => `
            <li style="margin-bottom: 0.4rem;">
              <strong>${ex.pattern}:</strong> 
              <span style="font-family: var(--font-arabic); font-size: 1.4rem; color: var(--primary-gold-hover); margin: 0 6px;">${ex.sample}</span> 
              <em>(${ex.meaning})</em>
            </li>
          `).join("")}
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-family: var(--font-arabic-heading); font-size: 1.2rem; color: var(--dark-bg);">
          <i class="fas fa-pen-nib"></i> Latihan Menyusun Kalimat (مَهَارَةُ الْكِتَابَةِ)
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-muted);">
          Klik kata-kata di bawah ini untuk menyusunnya menjadi kalimat Bahasa Arab yang sempurna!
        </p>
      </div>

      <div id="qawaid-exercises-list"></div>
    `;

    // Setup Tashrif & Rules Table Audio Listeners
    container.querySelectorAll(".play-tashrif-btn, .play-rule-item-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const text = btn.dataset.text;
        if (window.ttsManager) window.ttsManager.speak(text);
      });
    });

    const listEl = container.querySelector("#qawaid-exercises-list");

    chapter.qawaid.exercises.forEach((ex, idx) => {
      const exBox = document.createElement("div");
      exBox.className = "istima-card";

      const shuffledWords = [...ex.words].sort(() => 0.5 - Math.random());
      let currentOrder = [];

      exBox.innerHTML = `
        <div style="font-weight: 700; margin-bottom: 0.8rem;">Latihan #${idx + 1}: ${ex.instruction}</div>
        
        <div class="word-chips-container target-sentence-box">
          <span style="color: var(--text-muted); font-size: 0.9rem;" class="placeholder-text">Klik pilihan kata di bawah...</span>
        </div>

        <div class="word-chips-container source-words-box">
          ${shuffledWords.map((word) => `
            <div class="word-chip" data-word="${word}">${word}</div>
          `).join("")}
        </div>

        <div style="display: flex; gap: 10px; margin-top: 1rem;">
          <button class="btn btn-primary btn-sm check-order-btn"><i class="fas fa-check"></i> Periksa Susunan</button>
          <button class="btn btn-secondary btn-sm reset-order-btn"><i class="fas fa-undo"></i> Reset</button>
        </div>

        <div class="exercise-feedback" style="display:none; margin-top: 1rem; padding: 0.8rem; border-radius: var(--radius-sm);"></div>
      `;

      const targetBox = exBox.querySelector(".target-sentence-box");
      const sourceBox = exBox.querySelector(".source-words-box");
      const placeholder = exBox.querySelector(".placeholder-text");
      const checkBtn = exBox.querySelector(".check-order-btn");
      const resetBtn = exBox.querySelector(".reset-order-btn");
      const feedbackEl = exBox.querySelector(".exercise-feedback");

      sourceBox.querySelectorAll(".word-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          if (chip.classList.contains("selected")) return;
          chip.classList.add("selected");

          if (placeholder) placeholder.style.display = "none";

          const word = chip.dataset.word;
          currentOrder.push(word);

          const placedChip = document.createElement("div");
          placedChip.className = "word-chip";
          placedChip.innerText = word;
          targetBox.appendChild(placedChip);
        });
      });

      resetBtn.addEventListener("click", () => {
        currentOrder = [];
        targetBox.innerHTML = `<span style="color: var(--text-muted); font-size: 0.9rem;" class="placeholder-text">Klik pilihan kata di bawah...</span>`;
        sourceBox.querySelectorAll(".word-chip").forEach(c => c.classList.remove("selected"));
        feedbackEl.style.display = "none";
      });

      checkBtn.addEventListener("click", () => {
        const userStr = currentOrder.join(" ");
        const correctStr = ex.correctOrder.join(" ");

        if (userStr === correctStr) {
          if (window.soundFX) window.soundFX.playCorrect();
          feedbackEl.style.display = "block";
          feedbackEl.style.backgroundColor = "#E8F8F0";
          feedbackEl.style.color = "#1E8449";
          feedbackEl.innerHTML = `<i class="fas fa-check-circle"></i> <strong>Sempurna!</strong> Susunan kalimat Anda tepat: <em>${ex.arabicSentence}</em>`;
        } else {
          if (window.soundFX) window.soundFX.playWrong();
          feedbackEl.style.display = "block";
          feedbackEl.style.backgroundColor = "#FDEDEC";
          feedbackEl.style.color = "#C0392B";
          feedbackEl.innerHTML = `<i class="fas fa-times-circle"></i> <strong>Susunan Belum Tepat.</strong> Jawaban yang benar adalah: <em>${ex.arabicSentence}</em>`;
        }
      });

      listEl.appendChild(exBox);
    });
  }

  // --------------------------------------------------------------------------
  // Tab 6: Kuis Evaluasi Multi-Maharah (Full Arabic Questions)
  // --------------------------------------------------------------------------
  function renderQuizTab() {
    const container = document.getElementById("quiz-container");
    if (!container) return;

    container.innerHTML = `
      <div id="quiz-start-screen" style="text-align: center; padding: 2rem 1rem;">
        <i class="fas fa-award" style="font-size: 4rem; color: var(--primary-gold); margin-bottom: 1rem;"></i>
        <h2 style="font-family: var(--font-arabic-heading); font-size: 2rem; margin-bottom: 0.5rem;">
          الإِخْتِبَارُ الشَّامِلُ (Kuis Evaluasi Seluruh Maharah)
        </h2>
        <p style="max-width: 600px; margin: 0 auto 1.5rem auto; color: var(--text-muted);">
          Kuis ini berisi 30 soal evaluasi komprehensif dalam bahasa Arab menguji seluruh kemampuan Anda: Mufrodat, Qira'ah, Kalam, Istima', dan Kitabah/Qawa'id dari Bab 1 hingga Bab 3.
        </p>
        <button id="btn-start-evaluation-quiz" class="btn btn-primary btn-lg">
          <i class="fas fa-play-circle"></i> Mulai Kuis Evaluasi Sekarang
        </button>
      </div>

      <div id="quiz-active-screen" style="display: none;">
        <div class="quiz-header">
          <div>
            <span style="font-weight: 700;">السُّؤَالُ <span id="quiz-curr-num">1</span> مِنْ <span id="quiz-total-num">30</span></span>
          </div>
          <div class="quiz-timer">
            <i class="fas fa-clock"></i> <span id="quiz-timer">00:00</span>
          </div>
        </div>

        <div class="quiz-question-box">
          <span id="quiz-skill-tag" class="quiz-skill-tag" style="font-family: var(--font-arabic-heading);">Maharah</span>
          <div id="quiz-question-text" class="quiz-question-text" style="font-family: var(--font-arabic); font-size: 1.9rem; direction: rtl; text-align: right; line-height: 1.8;">Pertanyaan...</div>

          <div id="quiz-options-container" class="quiz-options"></div>

          <div style="display: flex; justify-content: space-between; margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
            <button id="btn-prev-question" class="btn btn-secondary" style="display:none;"><i class="fas fa-arrow-left"></i> السُّؤَالُ السَّابِقُ</button>
            <button id="btn-next-question" class="btn btn-primary">السُّؤَالُ التَّالِي <i class="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    `;

    const startScreen = container.querySelector("#quiz-start-screen");
    const activeScreen = container.querySelector("#quiz-active-screen");
    const startBtn = container.querySelector("#btn-start-evaluation-quiz");

    startBtn.addEventListener("click", () => {
      if (window.quizEngine) {
        window.quizEngine.initQuiz(arabicData.evaluationQuiz);
        startScreen.style.display = "none";
        activeScreen.style.display = "block";
        displayQuizQuestion();
      }
    });
  }

  function displayQuizQuestion() {
    const qe = window.quizEngine;
    if (!qe) return;

    const q = qe.questions[qe.currentIndex];

    document.getElementById("quiz-curr-num").innerText = qe.currentIndex + 1;
    document.getElementById("quiz-total-num").innerText = qe.questions.length;
    document.getElementById("quiz-skill-tag").innerText = `${q.skill} - البَابُ ${q.chapterId}`;
    document.getElementById("quiz-question-text").innerText = q.question;

    const optionsContainer = document.getElementById("quiz-options-container");
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = `quiz-option-btn arabic-option ${qe.userAnswers[qe.currentIndex] === idx ? 'selected' : ''}`;
      btn.innerHTML = `
        <span>${opt}</span>
        <i class="${qe.userAnswers[qe.currentIndex] === idx ? 'fas fa-check-circle' : 'far fa-circle'}"></i>
      `;

      btn.addEventListener("click", () => {
        if (window.soundFX) window.soundFX.playClick();
        qe.selectAnswer(idx);
        displayQuizQuestion();
      });

      optionsContainer.appendChild(btn);
    });

    const prevBtn = document.getElementById("btn-prev-question");
    const nextBtn = document.getElementById("btn-next-question");

    prevBtn.style.display = qe.currentIndex > 0 ? "inline-flex" : "none";
    if (qe.currentIndex === qe.questions.length - 1) {
      nextBtn.innerHTML = `<i class="fas fa-check-double"></i> الإِنْهَاءُ وَعَرْضُ النَّتِيْجَةِ`;
    } else {
      nextBtn.innerHTML = `السُّؤَالُ التَّالِي <i class="fas fa-arrow-right"></i>`;
    }

    prevBtn.onclick = () => {
      if (qe.prevQuestion()) displayQuizQuestion();
    };

    nextBtn.onclick = () => {
      if (qe.currentIndex === qe.questions.length - 1) {
        finishQuiz();
      } else {
        if (qe.nextQuestion()) displayQuizQuestion();
      }
    };
  }

  function finishQuiz() {
    const qe = window.quizEngine;
    if (!qe) return;

    const results = qe.calculateResults();

    const modalEl = document.getElementById("certificate-modal");
    if (!modalEl) return;

    modalEl.querySelector("#cert-score").innerText = results.score;
    modalEl.querySelector("#cert-time").innerText = qe.getFormattedTime();
    modalEl.querySelector("#cert-correct").innerText = `${results.correctCount} dari ${results.totalQuestions}`;

    const breakdownEl = modalEl.querySelector("#cert-breakdown");
    breakdownEl.innerHTML = "";

    Object.keys(results.skillBreakdown).forEach(skill => {
      const item = results.skillBreakdown[skill];
      const div = document.createElement("div");
      div.className = "breakdown-item";
      div.innerHTML = `
        <div class="breakdown-label">${skill}</div>
        <div class="breakdown-value">${item.correct}/${item.total} Benar</div>
      `;
      breakdownEl.appendChild(div);
    });

    modalEl.classList.add("active");
  }

  // 4. Global Events & Modal Dismiss
  function setupGlobalEvents() {
    const modalEl = document.getElementById("certificate-modal");
    if (modalEl) {
      modalEl.querySelector("#btn-close-cert").addEventListener("click", () => {
        modalEl.classList.remove("active");
        renderQuizTab();
      });
    }
  }
});
