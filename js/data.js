/**
 * Data Store untuk Aplikasi Web Media Pembelajaran Bahasa Arab Interaktif
 * 3 Bab Utama dengan:
 * - 20 Mufrodat per Bab (60 Mufrodat Total)
 * - 20 Dialog Hiwar per Bab dengan Ikon Orang / Avatar Interaktif
 * - 20 Soal Istima' Berpikir Kritis per Bab (60 Soal Istima' Total) dalam Bahasa Arab
 * - Qawa'id Bab 1: Tabel Tashrif Lughawi 14 Dhomir Fi'il Madhi "اِحْتَفَلَ" (احتفل)
 * - Kuis Evaluasi 30 Soal Multi-Maharah
 */

const arabicData = {
  chapters: [
    {
      id: 1,
      title: "سَنَةٌ هِجْرِيَّةٌ جَدِيْدَةٌ",
      titleIndo: "Tahun Baru Hijriah",
      subtitle: "هِجْرَةُ الرَّسُوْلِ ﷺ وَتَطْبِيْقُهَا فِي الْحَيَاةِ الْيَوْمِيَّةِ",
      subtitleIndo: "Hijrah Rasulullah ﷺ dan Penerapannya di Era Digital",
      icon: "fa-calendar-alt",
      qiraah: {
        title: "سَنَةٌ هِجْرِيَّةٌ جَدِيْدَةٌ",
        fullArabic: `اليَوْمَ هُوَ الأَوَّلُ مِنْ شَهْرِ مُحَرَّمٍ، وَالتَّلَامِيْذُ يَحْتَفِلُوْنَ بِسَنَةٍ هِجْرِيَّةٍ جَدِيْدَةٍ فِي مَلْعَبِ الْمَدْرَسَةِ. التَّلَامِيْذُ يَجْلِسُوْنَ فِي جُزْءِ الْيَمِيْنِ، وَالتِّلْمِيْذَاتُ يَجْلِسْنَ فِي الْجُزْءِ الْيَسَارِ. هُمْ يَسْتَمِعُوْنَ إِلَى الْمُحَاضَرَةِ الدِّيْنِيَّةِ الَّتِي يُلْقِيْهَا الأُسْتَاذُ مُحَمَّدُ نَبِيْلُ. تَحَدَّثَ الأُسْتَاذُ فِي مُحَاضَرَتِهِ عَنْ هِجْرَةِ الرَّسُوْلِ ﷺ مِنْ مَكَّةَ إِلَى الْمَدِيْنَةِ. وَهَذِهِ هِيَ الْقِصَّةُ:

هَاجَرَ الرَّسُوْلُ ﷺ وَأَصْحَابُهُ مِنْ مَكَّةَ إِلَى الْمَدِيْنَةِ. هُمْ تَرَكُوا وَطَنَهُمْ وَبُيُوتَهُمْ وَأَمْوَالَهُمْ وَتِجَارَتَهُمْ فِي مَكَّةَ. حَاوَلَ الْكُفَّارُ أَنْ يَقْتُلُوا النَّبِيَّ ﷺ، وَحَاوَلُوا أَنْ يَمْنَعُوهُ وَيَمْنَعُوا أَصْحَابَهُ مِنَ الْهِجْرَةِ، وَلَكِنَّ اللَّهَ حَفِظَ النَّبِيَّ ﷺ وَنَجَّاهُ وَنَجَّى أَصْحَابَهُ فِي الْهِجْرَةِ وَجَعَلَهُمْ يَصِلُوْنَ إِلَى الْمَدِيْنَةِ سَالِمِيْنَ.

كَانَتِ الْهِجْرَةُ حَادِثَةً عَظِيْمَةً فِي التَّارِيْخِ الإِسْلَامِيِّ؛ لِذَا جَعَلَ الْمُسْلِمُوْنَ يَوْمَ الْهِجْرَةِ أَوَّلَ يَوْمٍ فِي تَقْوِيْمِ الْعَامِ الْهِجْرِيِّ. وَأَوَّلُ مَنْ وَضَعَ التَّقْوِيْمَ الْهِجْرِيَّ هُوَ عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ.

قَالَ الأُسْتَاذُ أَيْضًا فِي مُحَاضَرَتِهِ عَنْ تَطْبِيْقِ التَّلَامِيْذِ لِلْهِجْرَةِ فِي حَيَاتِهِمُ الْيَوْمِيَّةِ. يُمْكِنُنَا تَطْبِيْقُ الْهِجْرَةِ بِاسْتِخْدَامِ الْهَاتِفِ لِوَسَائِلِ التَّوَاصُلِ الاِجْتِمَاعِيِّ بِحِكْمَةٍ. يَجِبُ عَلَيْنَا أَنْ نَسْتَعْمِلَ التِّكْنُولُوجِيَا فِي الأَنْشِطَةِ النَّافِعَةِ، مِثْلَ الدَّعْوَةِ وَالتَّعَلُّمِ. لَا يَجُوْزُ لَنَا اسْتِخْدَامُهَا فَقَطْ لِلتَّصْوِيْرِ الذَّاتِيِّ (selfie) وَنَشْرِ hoax وَغَيْرِ ذَلِك.`,
        paragraphs: [
          {
            arabic: "اليَوْمَ هُوَ الأَوَّلُ مِنْ شَهْرِ مُحَرَّمٍ، وَالتَّلَامِيْذُ يَحْتَفِلُوْنَ بِسَنَةٍ هِجْرِيَّةٍ جَدِيْدَةٍ فِي مَلْعَبِ الْمَدْرَسَةِ. التَّلَامِيْذُ يَجْلِسُوْنَ فِي جُزْءِ الْيَمِيْنِ، وَالتِّلْمِيْذَاتُ يَجْلِسْنَ فِي الْجُزْءِ الْيَسَارِ.",
            translation: "Hari ini adalah tanggal satu Muharram, dan para siswa sedang merayakan tahun baru Hijriah di lapangan sekolah. Murid-murid laki-laki duduk di sebelah kanan, dan murid-murid perempuan duduk di sebelah kiri."
          },
          {
            arabic: "هُمْ يَسْتَمِعُوْنَ إِلَى الْمُحَاضَرَةِ الدِّيْنِيَّةِ الَّتِي يُلْقِيْهَا الأُسْتَاذُ مُحَمَّدُ نَبِيْلُ. تَحَدَّثَ الأُسْتَاذُ فِي مُحَاضَرَتِهِ عَنْ هِجْرَةِ الرَّسُوْلِ ﷺ مِنْ مَكَّةَ إِلَى الْمَدِيْنَةِ.",
            translation: "Mereka mendengarkan ceramah agama yang disampaikan oleh Ustadz Muhammad Nabil. Ustadz berbicara dalam ceramahnya tentang hijrah Rasulullah ﷺ dari Makkah ke Madinah."
          },
          {
            arabic: "هَاجَرَ الرَّسُوْلُ ﷺ وَأَصْحَابُهُ مِنْ مَكَّةَ إِلَى الْمَدِينَةِ. هُمْ تَرَكُوا وَطَنَهُمْ وَبُيُوتَهُمْ وَأَمْوَالَهُمْ وَتِجَارَتَهُمْ فِي مَكَّةَ.",
            translation: "Rasulullah ﷺ dan para sahabatnya berhijrah dari Makkah ke Madinah. Mereka meninggalkan tanah air, rumah-rumah, harta benda, dan perdagangan mereka di Makkah."
          },
          {
            arabic: "حَاوَلَ الْكُفَّارُ أَنْ يَقْتُلُوا النَّبِيَّ ﷺ، وَحَاوَلُوا أَنْ يَمْنَعُوهُ وَيَمْنَعُوا أَصْحَابَهُ مِنَ الْهِجْرَةِ، وَلَكِنَّ اللَّهَ حَفِظَ النَّبِيَّ ﷺ وَنَجَّاهُ وَنَجَّى أَصْحَابَهُ فِي الْهِجْرَةِ وَجَعَلَهُمْ يَصِلُوْنَ إِلَى الْمَدِيْنَةِ سَالِمِيْنَ.",
            translation: "Orang-orang kafir berusaha membunuh Nabi ﷺ dan mencoba menghalangi beliau serta para sahabatnya dari hijrah. Namun Allah menjaga Nabi ﷺ dan menyelamatkan beliau beserta sahabat-sahabatnya dalam hijrah serta membuat mereka tiba di Madinah dengan selamat."
          },
          {
            arabic: "كَانَتِ الْهِجْرَةُ حَادِثَةً عَظِيْمَةً فِي التَّارِيْخِ الإِسْلَامِيِّ؛ لِذَا جَعَلَ الْمُسْلِمُوْنَ يَوْمَ الْهِجْرَةِ أَوَّلَ يَوْمٍ فِي تَقْوِيْمِ الْعَامِ الْهِجْرِيِّ. وَأَوَّلُ مَنْ وَضَعَ التَّقْوِيْمَ الْهِجْرِيَّ هُوَ عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ.",
            translation: "Hijrah adalah peristiwa besar dalam sejarah Islam; oleh karena itu umat Islam menjadikan hari hijrah sebagai hari pertama dalam kalender tahun Hijriah. Dan orang pertama yang menetapkan kalender Hijriah adalah Umar bin Khattab radhiyallahu 'anhu."
          },
          {
            arabic: "قَالَ الأُسْتَاذُ أَيْضًا فِي مُحَاضَرَتِهِ عَنْ تَطْبِيْقِ التَّلَامِيْذِ لِلْهِجْرَةِ فِي حَيَاتِهِمُ الْيَوْمِيَّةِ. يُمْكِنُنَا تَطْبِيْقُ الْهِجْرَةِ بِاسْتِخْدَامِ الْهَاتِفِ لِوَسَائِلِ التَّوَاصُلِ الاِجْتِمَاعِيِّ بِحِكْمَةٍ.",
            translation: "Ustadz juga menyampaikan dalam ceramahnya tentang penerapan hijrah oleh para siswa dalam kehidupan sehari-hari. Kita dapat menerapkan hijrah dengan menggunakan ponsel untuk media sosial secara bijak."
          },
          {
            arabic: "يَجِبُ عَلَيْنَا أَنْ نَسْتَعْمِلَ التِّكْنُولُوجِيَا فِي الأَنْشِطَةِ النَّافِعَةِ، مِثْلَ الدَّعْوَةِ وَالتَّعَلُّمِ. لَا يَجُوْزُ لَنَا اسْتِخْدَامُهَا فَقَطْ لِلتَّصْوِيْرِ الذَّاتِيِّ (selfie) وَنَشْرِ hoax وَغَيْرِ ذَلِك.",
            translation: "Kita wajib menggunakan teknologi dalam kegiatan yang bermanfaat, seperti da'wah dan belajar. Tidak boleh bagi kita menggunakannya hanya untuk swafoto (selfie), menyebarkan berita bohong (hoax), dan lain sebagainya."
          }
        ]
      },
      mufrodat: [
        { arabic: "سَنَةٌ هِجْرِيَّةٌ", latin: "Sanatun Hijriyyah", indo: "Tahun Hijriah", category: "Waktu", icon: "fa-calendar" },
        { arabic: "شَهْرُ مُحَرَّمٍ", latin: "Syahru Muharram", indo: "Bulan Muharram", category: "Waktu", icon: "fa-moon" },
        { arabic: "مَلْعَبُ الْمَدْرَسَةِ", latin: "Mal'abul Madrasah", indo: "Lapangan Sekolah", category: "Tempat", icon: "fa-school" },
        { arabic: "مُحَاضَرَةٌ دِيْنِيَّةٌ", latin: "Muhadharah Diniyyah", indo: "Ceramah Agama", category: "Kegiatan", icon: "fa-bullhorn" },
        { arabic: "هَاجَرَ - يُهَاجِرُ", latin: "Hajara - Yuhajiru", indo: "Berhijrah / Pindah", category: "Kata Kerja", icon: "fa-walking" },
        { arabic: "الْكُفَّارُ", latin: "Al-Kuffar", indo: "Orang-orang kafir", category: "Orang", icon: "fa-users" },
        { arabic: "تَقْوِيْمٌ", latin: "Taqwim", indo: "Kalender / Penanggalan", category: "Benda", icon: "fa-calendar-alt" },
        { arabic: "تَطْبِيْقٌ", latin: "Tathbiq", indo: "Penerapan / Aplikasi", category: "Konsep", icon: "fa-cogs" },
        { arabic: "وَسَائِلُ التَّوَاصُلِ", latin: "Wasailut Tawashul", indo: "Media Sosial / Komunikasi", category: "Teknologi", icon: "fa-share-alt" },
        { arabic: "التَّصْوِيْرُ الذَّاتِيُّ", latin: "At-Taswir adz-Dzati", indo: "Swafoto (Selfie)", category: "Teknologi", icon: "fa-camera" },
        { arabic: "الْيَمِيْنُ", latin: "Al-Yamin", indo: "Sebelah Kanan", category: "Arah", icon: "fa-arrow-right" },
        { arabic: "الْيَسَارُ", latin: "Al-Yasar", indo: "Sebelah Kiri", category: "Arah", icon: "fa-arrow-left" },
        { arabic: "وَطَنٌ", latin: "Wathan", indo: "Tanah Air / Negeri", category: "Tempat", icon: "fa-flag" },
        { arabic: "أَمْوَالٌ", latin: "Amwal", indo: "Harta Benda", category: "Benda", icon: "fa-coins" },
        { arabic: "تِجَارَةٌ", latin: "Tijarah", indo: "Perdagangan / Bisnis", category: "Pekerjaan", icon: "fa-store" },
        { arabic: "سَالِمِيْنَ", latin: "Salimin", indo: "Selamat / Sejahtera", category: "Sifat", icon: "fa-shield-alt" },
        { arabic: "التِّكْنُولُوجِيَا", latin: "At-Teknologiyya", indo: "Teknologi Digital", category: "Teknologi", icon: "fa-mobile-alt" },
        { arabic: "الدَّعْوَةُ", latin: "Ad-Da'wah", indo: "Dakwah / Syiar Islam", category: "Ibadah", icon: "fa-bullhorn" },
        { arabic: "التَّعَلُّمُ", latin: "At-Ta'allum", indo: "Belajar / Menuntut Ilmu", category: "Pendidikan", icon: "fa-book-reader" },
        { arabic: "الأَنْشِطَةُ النَّافِعَةُ", latin: "Al-Ansyiathah an-Nafi'ah", indo: "Kegiatan Bermanfaat", category: "Konsep", icon: "fa-thumbs-up" }
      ],
      hiwar: [
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "السَّلَامُ عَلَيْكُمْ يَا حَسَنُ، مَاذَا يَفْعَلُ التَّلَامِيْذُ فِي مَلْعَبِ الْمَدْرَسَةِ؟", translation: "Assalamu'alaikum wahai Hasan, apa yang sedang dilakukan para siswa di lapangan sekolah?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "وَعَلَيْكُمُ السَّلَامُ يَا أَحْمَدُ. هُمْ يَحْتَفِلُوْنَ بِسَنَةٍ هِجْرِيَّةٍ جَدِيْدَةٍ.", translation: "Wa'alaikumussalam wahai Ahmad. Mereka sedang merayakan tahun baru Hijriah." },
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "أَيْنَ يَجْلِسُ التَّلَامِيْذُ وَالتِّلْمِيْذَاتُ؟", translation: "Di manakah duduk murid laki-laki dan murid perempuan?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "التَّلَامِيْذُ يَجْلِسُوْنَ فِي الْيَمِيْنِ، وَالتِّلْمِيْذَاتُ فِي الْيَسَارِ.", translation: "Murid laki-laki duduk di sebelah kanan, dan murid perempuan di sebelah kiri." },
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "إِلَى مَنْ يَسْتَمِعُوْنَ فِي هَذَا الْيَوْمِ؟", translation: "Kepada siapakah mereka mendengarkan ceramah pada hari ini?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "يَسْتَمِعُوْنَ إِلَى الْمُحَاضَرَةِ الدِّيْنِيَّةِ الَّتِي يُلْقِيْهَا الأُسْتَاذُ مُحَمَّدُ نَبِيْلُ.", translation: "Mereka mendengarkan ceramah agama yang disampaikan oleh Ustadz Muhammad Nabil." },
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "عَمَّا يَتَحَدَّثُ الأُسْتَاذُ فِي مُحَاضَرَتِهِ؟", translation: "Tentang apakah Ustadz berbicara dalam ceramahnya?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "يَتَحَدَّثُ عَنْ هِجْرَةِ الرَّسُوْلِ ﷺ مِنْ مَكَّةَ إِلَى الْمَدِيْنَةِ.", translation: "Beliau berbicara tentang Hijrah Rasulullah ﷺ dari Makkah ke Madinah." },
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "مَاذَا تَرَكَ الصَّحَابَةُ فِي مَكَّةَ عِنْدَ الْهِجْرَةِ؟", translation: "Apa yang ditinggalkan para sahabat di Makkah ketika berhijrah?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "تَرَكُوا وَطَنَهُمْ وَبُيُوتَهُمْ وَأَمْوَالَهُمْ وَتِجَارَتَهُمْ.", translation: "Mereka meninggalkan tanah air, rumah, harta benda, dan perdagangan mereka." },
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "هَلْ حَاوَلَ الْكُفَّارُ مَنْعَ الرَّسُوْلِ مِنَ الْهِجْرَةِ؟", translation: "Apakah orang-orang kafir mencoba menghalangi Rasulullah dari hijrah?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "نَعَمْ، حَاوَلُوا قَتْلَهُ، وَلَكِنَّ اللَّهَ حَفِظَهُ وَنَجَّاهُ فِي الْهِجْرَةِ.", translation: "Ya, mereka mencoba membunuh beliau, namun Allah menjaga dan menyelamatkannya." },
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "مَنِ الَّذِي وَضَعَ التَّقْوِيْمَ الْهِجْرِيَّ لأَوَّلِ مَرَّةٍ؟", translation: "Siapakah yang pertama kali menetapkan kalender Hijriah?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "هُوَ عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ.", translation: "Dia adalah Umar bin Khattab radhiyallahu 'anhu." },
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "كَيْفَ نُطَبِّقُ الْهِجْرَةَ فِي حَيَاتِنَا الْيَوْمِيَّةِ؟", translation: "Bagaimanakah kita menerapkan Hijrah dalam kehidupan sehari-hari kita?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "نُطَبِّقُهَا بِاسْتِخْدَامِ الْهَاتِفِ لِوَسَائِلِ التَّوَاصُلِ بِحِكْمَةٍ.", translation: "Kita menerapkannya dengan menggunakan ponsel untuk media sosial secara bijak." },
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "فِي أَيِّ نَشَاطٍ يَجِبُ اسْتِخْدَامُ التِّكْنُولُوجِيَا؟", translation: "Dalam kegiatan apa kita wajib menggunakan teknologi?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "فِي الأَنْشِطَةِ النَّافِعَةِ، مِثْلَ الدَّعْوَةِ وَالتَّعَلُّمِ.", translation: "Dalam kegiatan yang bermanfaat, seperti da'wah dan belajar." },
        { speaker: "أَحْمَدُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "مَا الَّذِي لَا يَجُوْزُ فِعْلُهُ بِالْهَاتِفِ؟", translation: "Apa yang tidak boleh dilakukan dengan menggunakan ponsel?" },
        { speaker: "حَسَنُ", role: "Siswa B", avatarIcon: "fa-user-tie", arabic: "لَا يَجُوْزُ اسْتِخْدَامُهُ فَقَطْ لِلتَّصْوِيْرِ الذَّاتِيِّ وَنَشْرِ الْأَكَاذِيْبِ.", translation: "Tidak boleh menggunakannya hanya untuk swafoto (selfie) dan menyebarkan berita bohong (hoax)." }
      ],
      qawaid: {
        title: "تَصْرِيْفُ الْفِعْلِ الْمَاضِي (Tashrif Lughawi Fi'il Madhi 14 Dhomir - 'اِحْتَفَلَ')",
        explanation: "Tashrif Lughawi adalah perubahan bentuk kata kerja (Fi'il Madhi) berdasarkan 14 Kata Ganti Nama (Dhomir). Berikut adalah tabel Tashrif Lughawi lengkap untuk Fi'il Madhi 'اِحْتَفَلَ' (Merayakan):",
        tashrifTable: [
          { dhomir: "هُوَ", dhomirMeaning: "Dia (1 Laki-laki)", arabic: "اِحْتَفَلَ", latin: "Ihtafala", meaning: "Dia (1 Lk) telah merayakan" },
          { dhomir: "هُمَا", dhomirMeaning: "Mereka Berdua (2 Laki-laki)", arabic: "اِحْتَفَلَا", latin: "Ihtafalā", meaning: "Mereka berdua (2 Lk) telah merayakan" },
          { dhomir: "هُمْ", dhomirMeaning: "Mereka (Jamak Laki-laki)", arabic: "اِحْتَفَلُوا", latin: "Ihtafalū", meaning: "Mereka (Jamak Lk) telah merayakan" },
          { dhomir: "هِيَ", dhomirMeaning: "Dia (1 Perempuan)", arabic: "اِحْتَفَلَتْ", latin: "Ihtafalat", meaning: "Dia (1 Pr) telah merayakan" },
          { dhomir: "هُمَا", dhomirMeaning: "Mereka Berdua (2 Perempuan)", arabic: "اِحْتَفَلَتَا", latin: "Ihtafalatā", meaning: "Mereka berdua (2 Pr) telah merayakan" },
          { dhomir: "هُنَّ", dhomirMeaning: "Mereka (Jamak Perempuan)", arabic: "اِحْتَفَلْنَ", latin: "Ihtafalna", meaning: "Mereka (Jamak Pr) telah merayakan" },
          { dhomir: "أَنْتَ", dhomirMeaning: "Kamu (1 Laki-laki)", arabic: "اِحْتَفَلْتَ", latin: "Ihtafalta", meaning: "Kamu (1 Lk) telah merayakan" },
          { dhomir: "أَنْتُمَا", dhomirMeaning: "Kamu Berdua (2 Laki-laki)", arabic: "اِحْتَفَلْتُمَا", latin: "Ihtafaltumā", meaning: "Kamu berdua (2 Lk) telah merayakan" },
          { dhomir: "أَنْتُمْ", dhomirMeaning: "Kalian (Jamak Laki-laki)", arabic: "اِحْتَفَلْتُمْ", latin: "Ihtafaltum", meaning: "Kalian (Jamak Lk) telah merayakan" },
          { dhomir: "أَنْتِ", dhomirMeaning: "Kamu (1 Perempuan)", arabic: "اِحْتَفَلْتِ", latin: "Ihtafalti", meaning: "Kamu (1 Pr) telah merayakan" },
          { dhomir: "أَنْتُمَا", dhomirMeaning: "Kamu Berdua (2 Perempuan)", arabic: "اِحْتَفَلْتُمَا", latin: "Ihtafaltumā", meaning: "Kamu berdua (2 Pr) telah merayakan" },
          { dhomir: "أَنْتُنَّ", dhomirMeaning: "Kalian (Jamak Perempuan)", arabic: "اِحْتَفَلْتُنَّ", latin: "Ihtafaltunna", meaning: "Kalian (Jamak Pr) telah merayakan" },
          { dhomir: "أَنَا", dhomirMeaning: "Saya (Laki-laki / Perempuan)", arabic: "اِحْتَفَلْتُ", latin: "Ihtafaltu", meaning: "Saya telah merayakan" },
          { dhomir: "نَحْنُ", dhomirMeaning: "Kami / Kita", arabic: "اِحْتَفَلْنَا", latin: "Ihtafalnā", meaning: "Kami/Kita telah merayakan" }
        ],
        examples: [
          { pattern: "Fi'il Madhi (Dhomir هُمْ)", sample: "التَّلَامِيْذُ اِحْتَفَلُوا بِسَنَةٍ هِجْرِيَّةٍ", meaning: "Siswa-siswa telah merayakan tahun baru Hijriah" },
          { pattern: "Fi'il Madhi (Dhomir نَحْنُ)", sample: "نَحْنُ اِحْتَفَلْنَا فِي مَلْعَبِ الْمَدْرَسَةِ", meaning: "Kami telah merayakan di lapangan sekolah" }
        ],
        exercises: [
          {
            id: 1,
            instruction: "Susunlah kata-kata berikut menjadi kalimat sempurna sesuai teks Bab 1!",
            words: ["مِنْ", "الرَّسُوْلُ", "هَاجَرَ", "مَكَّةَ", "إِلَى", "الْمَدِيْنَةِ"],
            correctOrder: ["هَاجَرَ", "الرَّسُوْلُ", "مِنْ", "مَكَّةَ", "إِلَى", "الْمَدِيْنَةِ"],
            arabicSentence: "هَاجَرَ الرَّسُوْلُ مِنْ مَكَّةَ إِلَى الْمَدِيْنَةِ"
          },
          {
            id: 2,
            instruction: "Susunlah kata-kata berikut tentang penetapan kalender Hijriah!",
            words: ["التَّقْوِيْمَ", "وَضَعَ", "عُمَرُ", "الْهِجْرِيَّ", "أَوَّلُ", "مَنْ"],
            correctOrder: ["أَوَّلُ", "مَنْ", "وَضَعَ", "التَّقْوِيْمَ", "الْهِجْرِيَّ", "عُمَرُ"],
            arabicSentence: "أَوَّلُ مَنْ وَضَعَ التَّقْوِيْمَ الْهِجْرِيَّ عُمَرُ"
          }
        ]
      }
    },
    {
      id: 2,
      title: "سِيْرَةُ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّم",
      titleIndo: "Sirah Nabi Muhammad ﷺ",
      subtitle: "مِنْ وِلَادَتِهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ إِلَى وَفَاتِهِ",
      subtitleIndo: "Perjalanan Hidup Rasulullah ﷺ dari Lahir hingga Wafat",
      icon: "fa-history",
      qiraah: {
        title: "سِيْرَةُ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّم",
        fullArabic: `فِي الْأُسْبُوعِ الْمَاضِي، احْتَفَلَ التَّلَامِيذُ بِذِكْرَى مَوْلِدِ الرَّسُولِ. هُمْ يَسْتَمِعُونَ إِلَى مُحَاضَرَةٍ دِينِيَّةٍ أَلْقَاهَا الْأُسْتَاذُ مُحَمَّدُ إِدْرِيسُ. وَتَحَدَّثَ الْأُسْتَاذُ فِي مُحَاضَرَتِهِ عَنْ "سِيرَةِ النَّبِيِّ مُنْذُ وِلَادَتِهِ إِلَى وَفَاتِهِ".

قَدْ وُلِدَ فِي يَوْمِ الاثْنَيْنِ، فِي عَامِ الْفِيلِ، الثَّانِي عَشَرَ مِنْ شَهْرِ رَبِيعِ الأَوَّلِ. اسْمُ أَبِيهِ عَبْدُ اللَّهِ بْنُ عَبْدِ الْمُطَّلِبِ، وَأُمُّهُ آمِنَةُ بِنْتُ وَهْبٍ. وُلِدَ الرَّسُولُ يَتِيمًا، فَقَدْ تُوُفِّيَ أَبُوهُ وَهُوَ فِي بَطْنِ أُمِّهِ، ثُمَّ تُوُفِّيَتْ أُمُّهُ وَكَانَ عُمْرُهُ سِتَّ سِنِينَ، فَرَبَّاهُ جَدُّهُ عَبْدُ الْمُطَّلِبِ. وَلَمَّا تُوُفِّيَ جَدُّهُ عَبْدُ الْمُطَّلِبِ، رَبَّاهُ عَمُّهُ أَبُو طَالِبٍ، وَكَانَ عُمْرُهُ ثَمَانِيَ سِنِينَ.

فِي الصِّغَرِ، عَمِلَ مُحَمَّدٌ فِي رِعَايَةِ الْغَنَمِ، ثُمَّ ذَهَبَ إِلَى الشَّامِ مَعَ عَمِّهِ أَبِي طَالِبٍ لِلتِّجَارَةِ، ثُمَّ تَزَوَّجَ خَدِيجَةَ بَعْدَ ذَلِك، وَكَانَ عُمْرُهُ خَمْسًا وَعِشْرِينَ سَنَةً، وَعُمْرُهَا أَرْبَعِينَ سَنَةً.

وَلَمَّا بَلَغَ عُمْرُهُ أَرْبَعِينَ سَنَةً، بَعَثَ اللَّهُ مُحَمَّدًا نَبِيًّا وَرَسُولًا، ثُمَّ تُوُفِّيَ عَمُّهُ أَبُو طَالِبٍ وَكَانَ عُمْرُهُ خَمْسِينَ سَنَةً، ثُمَّ تُوُفِّيَتْ مِنْ بَعْدِهِ زَوْجَتُهُ خَدِيجَةُ، وَهِيَ أَوَّلُ مَنْ آمَنَ بِاللَّهِ وَرَسُولِهِ وَأَوَّلُ امْرَأَةٍ صَدَّقَتْ نُبُوَّتَهُ.

وَبَعْدَ ذَلِك خَرَجَ الرَّسُولُ مَعَ أَصْحَابِهِ إِلَى الطَّائِفِ يَدْعُو أَهْلَهَا إِلَى الْإِسْلَامِ فَلَمْ يُسْلِمُوا، ثُمَّ أَسْرَى اللَّهُ بِرَسُولِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى، وَإِلَى السَّمَوَاتِ فِي الْمِعْرَاجِ.

ثُمَّ هَاجَرَ الرَّسُولُ وَأَصْحَابُهُ مِنْ مَكَّةَ إِلَى الْمَدِينَةِ وَكَانَتْ هِجْرَتُهُ فِي السَّنَةِ الثَّالِثَةِ وَالْخَمْسِينَ مِنْ عُمْرِهِ. وَوَفَاتُهُ فِي الثَّانِي عَشَرَ مِنْ شَهْرِ رَبِيعٍ الأَوَّلِ مِنَ السَّنَةِ الْحَادِيَةِ عَشْرَةَ لِلْهِجْرَةِ، وَكَانَ عُمْرُهُ ثَلَاثًا وَسِتِّينَ سَنَةً.

وَقَالَ الْأُسْتَاذُ: الْحِكَمُ الْمَأْخُوذَةُ مِنْ ذِكْرَى مَوْلِدِ النَّبِيِّ مِنْهَا: تَزِيدُ الْحُبَّ لِلنَّبِيِّ، التَّخَلُّقُ بِأَخْلَاقِ الرَّسُولِ، اِتِّبَاعُ سُنَنِ الرَّسُولِ، نَشْرُ الْخَيْرَاتِ بَيْنَ النَّاسِ.`,
        paragraphs: [
          {
            arabic: "فِي الْأُسْبُوعِ الْمَاضِي، احْتَفَلَ التَّلَامِيذُ بِذِكْرَى مَوْلِدِ الرَّسُولِ. هُمْ يَسْتَمِعُونَ إِلَى مُحَاضَرَةٍ دِينِيَّةٍ أَلْقَاهَا الْأُسْتَاذُ مُحَمَّدُ إِدْرِيسُ.",
            translation: "Pada minggu lalu, para siswa merayakan peringatan maulid Nabi. Mereka mendengarkan ceramah agama yang disampaikan oleh Ustadz Muhammad Idris."
          },
          {
            arabic: "قَدْ وُلِدَ فِي يَوْمِ الاثْنَيْنِ، فِي عَامِ الْفِيلِ، الثَّانِي عَشَرَ مِنْ شَهْرِ رَبِيعِ الأَوَّلِ. اسْمُ أَبِيهِ عَبْدُ اللَّهِ بْنُ عَبْدِ الْمُطَّلِبِ، وَأُمُّهُ آمِنَةُ بِنْتُ وَهْبٍ.",
            translation: "Nabi dilahirkan pada hari Senin, Tahun Gajah, tanggal 12 bulan Rabi'ul Awwal. Nama ayahnya adalah Abdullah bin Abdul Muttalib, dan ibunya adalah Aminah binti Wahab."
          },
          {
            arabic: "وُلِدَ الرَّسُولُ يَتِيمًا، فَقَدْ تُوُفِّيَ أَبُوهُ وَهُوَ فِي بَطْنِ أُمِّهِ، ثُمَّ تُوُفِّيَتْ أُمُّهُ وَكَانَ عُمْرُهُ سِتَّ سِنِينَ، فَرَبَّاهُ جَدُّهُ عَبْدُ الْمُطَّلِبِ. وَلَمَّا تُوُفِّيَ جَدُّهُ عَبْدُ الْمُطَّلِبِ، رَبَّاهُ عَمُّهُ أَبُو طَالِبٍ، وَكَانَ عُمْرُهُ ثَمَانِيَ سِنِينَ.",
            translation: "Rasulullah lahir dalam keadaan yatim, karena ayahnya wafat ketika beliau masih di kandungan ibunya. Kemudian ibunya wafat ketika beliau berumur 6 tahun, lalu beliau diasuh kakeknya Abdul Muttalib. Ketika kakeknya wafat, beliau diasuh pamannya Abu Talib saat berusia 8 tahun."
          },
          {
            arabic: "فِي الصِّغَرِ، عَمِلَ مُحَمَّدٌ فِي رِعَايَةِ الْغَنَمِ، ثُمَّ ذَهَبَ إِلَى الشَّامِ مَعَ عَمِّهِ أَبِي طَالِبٍ لِلتِّجَارَةِ، ثُمَّ تَزَوَّجَ خَدِيجَةَ بَعْدَ ذَلِك، وَكَانَ عُمْرُهُ خَمْسًا وَعِشْرِينَ سَنَةً، وَعُمْرُهَا أَرْبَعِينَ سَنَةً.",
            translation: "Di masa kecil, Muhammad bekerja menggembala kambing, kemudian pergi ke Syam bersama pamannya Abu Talib untuk berdagang. Kemudian beliau menikah dengan Khadijah setelah itu saat berusia 25 tahun dan Khadijah berusia 40 tahun."
          },
          {
            arabic: "وَلَمَّا بَلَغَ عُمْرُهُ أَرْبَعِينَ سَنَةً، بَعَثَ اللَّهُ مُحَمَّدًا نَبِيًّا وَرَسُولًا، ثُمَّ تُوُفِّيَ عَمُّهُ أَبُو طَالِبٍ وَكَانَ عُمْرُهُ خَمْسِينَ سَنَةً، ثُمَّ تُوُفِّيَتْ مِنْ بَعْدِهِ زَوْجَتُهُ خَدِيجَةُ، وَهِيَ أَوَّلُ مَنْ آمَنَ بِاللَّهِ وَرَسُولِهِ.",
            translation: "Ketika usianya mencapai 40 tahun, Allah mengutus Muhammad sebagai Nabi dan Rasul. Kemudian pamannya Abu Talib wafat saat Nabi berumur 50 tahun, lalu tak lama setelah itu istrinya Khadijah wafat; dialah wanita pertama yang beriman kepada Allah dan Rasul-Nya."
          },
          {
            arabic: "وَبَعْدَ ذَلِك خَرَجَ الرَّسُولُ مَعَ أَصْحَابِهِ إِلَى الطَّائِفِ يَدْعُو أَهْلَهَا إِلَى الْإِسْلَامِ فَلَمْ يُسْلِمُوا، ثُمَّ أَسْرَى اللَّهُ بِرَسُولِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى، وَإِلَى السَّمَوَاتِ فِي الْمِعْرَاجِ.",
            translation: "Setelah itu Rasulullah keluar bersama sahabatnya ke Thaif mengajak penduduknya ke Islam namun mereka belum berislam. Kemudian Allah memperjalankan (Isra') Rasul-Nya di malam hari dari Masjidil Haram ke Masjidil Aqsha, dan diangkat ke langit dalam peristiwa Mi'raj."
          },
          {
            arabic: "ثُمَّ هَاجَرَ الرَّسُولُ وَأَصْحَابُهُ مِنْ مَكَّةَ إِلَى الْمَدِينَةِ وَكَانَتْ هِجْرَتُهُ فِي السَّنَةِ الثَّالِثَةِ وَالْخَمْسِينَ مِنْ عُمْرِهِ. وَوَفَاتُهُ فِي الثَّانِي عَشَرَ مِنْ شَهْرِ رَبِيعٍ الأَوَّلِ مِنَ السَّنَةِ الْحَادِيَةِ عَشْرَةَ لِلْهِجْرَةِ، وَكَانَ عُمْرُهُ ثَلَاثًا وَسِتِّينَ سَنَةً.",
            translation: "Kemudian Rasulullah dan para sahabatnya berhijrah dari Makkah ke Madinah saat usianya 53 tahun. Dan wafatnya beliau pada tanggal 12 Rabi'ul Awwal tahun 11 Hijriah saat berusia 63 tahun."
          }
        ]
      },
      mufrodat: [
        { arabic: "مَوْلِدُ الرَّسُولِ", latin: "Maulidur Rasul", indo: "Kelahiran Nabi", category: "Peristiwa", icon: "fa-baby" },
        { arabic: "عَامُ الْفِيلِ", latin: "'Amul Fil", indo: "Tahun Gajah", category: "Waktu", icon: "fa-calendar-times" },
        { arabic: "يَتِيْمٌ", latin: "Yatim", indo: "Yatim (Ayah Wafat)", category: "Status", icon: "fa-child" },
        { arabic: "رِعَايَةُ الْغَنَمِ", latin: "Ri'ayatul Ghanam", indo: "Menggembala Kambing", category: "Pekerjaan", icon: "fa-horse" },
        { arabic: "التِّجَارَةُ", latin: "At-Tijarah", indo: "Perdagangan", category: "Pekerjaan", icon: "fa-shopping-bag" },
        { arabic: "بَعَثَ - يَبْعَثُ", latin: "Ba'atsa - Yab'atsu", indo: "Mengutus", category: "Kata Kerja", icon: "fa-paper-plane" },
        { arabic: "الإِسْرَاءُ وَالْمِعْرَاجُ", latin: "Al-Isra' wal Mi'raj", indo: "Perjalanan Isra' & Mi'raj", category: "Peristiwa", icon: "fa-star" },
        { arabic: "وَفَاةٌ", latin: "Wafat", indo: "Meninggal dunia", category: "Peristiwa", icon: "fa-heart-broken" },
        { arabic: "الثَّانِي عَشَرَ", latin: "As-Tsani 'Asyar", indo: "Tanggal 12", category: "Angka", icon: "fa-sort-numeric-up" },
        { arabic: "رَبِيعُ الأَوَّلِ", latin: "Rabi'ul Awwal", indo: "Bulan Rabi'ul Awwal", category: "Waktu", icon: "fa-moon" },
        { arabic: "شَهْرٌ", latin: "Syahr", indo: "Bulan (Penanggalan)", category: "Waktu", icon: "fa-calendar-alt" },
        { arabic: "عُمْرٌ", latin: "'Umr", indo: "Usia / Umur", category: "Waktu", icon: "fa-hourglass-half" },
        { arabic: "سِنِيْنَ", latin: "Sinin", indo: "Tahun-tahun", category: "Waktu", icon: "fa-history" },
        { arabic: "جَدٌّ", latin: "Jadd", indo: "Kakek", category: "Keluarga", icon: "fa-user-clock" },
        { arabic: "عَمٌّ", latin: "'Amm", indo: "Paman (dari Ayah)", category: "Keluarga", icon: "fa-user-friends" },
        { arabic: "زَوْجَةٌ", latin: "Zaujah", indo: "Istri", category: "Keluarga", icon: "fa-female" },
        { arabic: "أُمِّيٌّ", latin: "Ummiyy", indo: "Tidak Membaca & Menulis", category: "Status", icon: "fa-book" },
        { arabic: "السَّمَوَاتُ", latin: "As-Samawat", indo: "Langit-langit", category: "Alam", icon: "fa-cloud-sun" },
        { arabic: "السُّنَنُ", latin: "As-Sunan", indo: "Sunnah-sunnah Nabi", category: "Agama", icon: "fa-scroll" },
        { arabic: "الأَخْلَاقُ", latin: "Al-Akhlaq", indo: "Akhlak Mulia", category: "Akhlak", icon: "fa-heart" }
      ],
      hiwar: [
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "مَتَى وُلِدَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَا عَلِيُّ؟", translation: "Kapan Nabi Muhammad ﷺ dilahirkan wahai Ali?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "وُلِدَ فِي يَوْمِ الاثْنَيْنِ، 12 مِنْ شَهْرِ رَبِيْعِ الأَوَّلِ فِي عَامِ الْفِيْلِ.", translation: "Beliau lahir pada hari Senin, 12 Rabi'ul Awwal di Tahun Gajah." },
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "مَا اسْمُ أَبِيْهِ وَمَا اسْمُ أُمِّهِ؟", translation: "Siapakah nama ayahnya dan siapa nama ibunya?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "اسْمُ أَبِيهِ عَبْدُ اللَّهِ، وَأُمُّهُ آمِنَةُ بِنْتُ وَهْبٍ.", translation: "Nama ayahnya Abdullah, dan ibunya Aminah binti Wahab." },
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "هَلْ وُلِدَ النَّبِيُّ يَتِيْمًا؟", translation: "Apakah Nabi dilahirkan dalam keadaan yatim?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "نَعَمْ، فَقَدْ تُوُفِّيَ أَبُوهُ وَهُوَ فِي بَطْنِ أُمِّهِ.", translation: "Ya, karena ayahnya wafat ketika beliau masih di kandungan ibunya." },
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "مَنْ رَبَّى النَّبِيَّ بَعْدَ وَفَاةِ أُمِّهِ؟", translation: "Siapakah yang mengasuh Nabi setelah ibunya wafat?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "رَبَّاهُ جَدُّهُ عَبْدُ الْمُطَّلِبِ، ثُمَّ عَمُّهُ أَبُو طَالِبٍ.", translation: "Beliau diasuh kakeknya Abdul Muttalib, lalu pamannya Abu Talib." },
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "مَاذَا عَمِلَ مُحَمَّدٌ فِي صِغَرِهِ؟", translation: "Apakah pekerjaan Muhammad di masa kecilnya?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "عَمِلَ فِي رِعَايَةِ الْغَنَمِ، ثُمَّ ذَهَبَ إِلَى الشَّامِ لِلتِّجَارَةِ.", translation: "Beliau bekerja menggembala kambing, kemudian pergi ke Syam untuk berdagang." },
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "كَمْ كَانَ عُمْرُهُ عِنْدَمَا تَزَوَّجَ خَدِيْجَةَ؟", translation: "Berapakah usia beliau ketika menikah dengan Khadijah?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "كَانَ عُمْرُهُ خَمْسًا وَعِشْرِينَ سَنَةً، وَعُمْرُهَا أَرْبَعِينَ سَنَةً.", translation: "Usia beliau 25 tahun, dan usia Khadijah 40 tahun." },
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "كَمْ كَانَ عُمْرُهُ عِنْدَمَا نَزَلَ عَلَيْهِ الْوَحْيُ؟", translation: "Berapa usia beliau ketika wahyu turun kepada beliau?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "كَانَ عُمْرُهُ أَرْبَعِيْنَ سَنَةً.", translation: "Usia beliau saat itu adalah 40 tahun." },
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "مَنْ هِيَ أَوَّلُ امْرَأَةٍ آمَنَتْ بِالرَّسُوْلِ؟", translation: "Siapakah wanita pertama yang beriman kepada Rasulullah?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "هِيَ زَوْجَتُهُ خَدِيْجَةُ رَضِيَ اللَّهُ عَنْهَا.", translation: "Dialah istrinya Khadijah radhiyallahu 'anha." },
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "كَمْ كَانَ عُمْرُ النَّبِيِّ عِنْدَ الْهِجْرَةِ؟", translation: "Berapakah usia Nabi ketika beliau berhijrah?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "كَانَتْ هِجْرَتُهُ فِي السَّنَةِ الثَّالِثَةِ وَالْخَمْسِينَ مِنْ عُمْرِهِ.", translation: "Hijrah beliau terjadi pada usia 53 tahun." },
        { speaker: "عُمَرُ", role: "Siswa A", avatarIcon: "fa-user-graduate", arabic: "وَمَا هِيَ الْحِكْمَةُ مِنْ ذِكْرَى مَوْلِدِ النَّبِيِّ؟", translation: "Dan apa hikmah dari peringatan maulid Nabi?" },
        { speaker: "عَلِيٌّ", role: "Siswa B", avatarIcon: "fa-user-ninja", arabic: "تَزِيْدُ الْحُبَّ لِلنَّبِيِّ، وَالتَّخَلُّقُ بِأَخْلَاقِهِ، وَاتِّبَاعُ سُنَنِهِ.", translation: "Menambah rasa cinta kepada Nabi, meneladani akhlaknya, dan mengikuti sunnahnya." }
      ],
      qawaid: {
        title: "الأَعْدَادُ وَالأَعْمَارُ فِي السِّيْرَةِ (Bilangan & Usia dalam Sirah)",
        explanation: "Dalam Sirah Nabi, kita mempelajari pengucapan angka dan usia (الأَعْدَادُ). Contoh: 6 tahun (سِتَّ سِنِينَ), 25 tahun (خَمْسًا وَعِشْرِينَ سَنَةً), 40 tahun (أَرْبَعِينَ سَنَةً), 63 tahun (ثَلَاثًا وَسِتِّينَ سَنَةً).",
        examples: [
          { pattern: "Usia 25", sample: "كَانَ عُمْرُهُ خَمْسًا وَعِشْرِينَ سَنَةً", meaning: "Usianya adalah 25 tahun" },
          { pattern: "Usia 63", sample: "تُوُفِّيَ وَعُمْرُهُ ثَلَاثٌ وَسِتُّونَ سَنَةً", meaning: "Beliau wafat pada usia 63 tahun" }
        ],
        exercises: [
          {
            id: 1,
            instruction: "Susun kata-kata berikut mengenai usia Nabi saat diutus menjadi Rasul!",
            words: ["بَعَثَ", "أَرْبَعِينَ", "سَنَةً", "عُمْرُهُ", "اللَّهُ", "نَبِيًّا", "بَلَغَ", "لَمَّا"],
            correctOrder: ["لَمَّا", "بَلَغَ", "عُمْرُهُ", "أَرْبَعِينَ", "سَنَةً", "بَعَثَ", "اللَّهُ", "نَبِيًّا"],
            arabicSentence: "لَمَّا بَلَغَ عُمْرُهُ أَرْبَعِينَ سَنَةً بَعَثَ اللَّهُ نَبِيًّا"
          }
        ]
      }
    },
    {
      id: 3,
      title: "نُزُولُ الْقُرْآنِ وَ عِيدُ الْفِطْرِ وَعِيدُ الْأَضْحَى",
      titleIndo: "Nuzulul Qur'an & Dua Hari Raya",
      subtitle: "نُزُولُ الْوَحْيِ فِي غَارِ حِرَاءٍ وَفَرْحَةُ العِيْدَيْنِ",
      subtitleIndo: "Turunnya Wahyu di Gua Hira dan Kebahagiaan Hari Raya",
      icon: "fa-quran",
      qiraah: {
        title: "نُزُولُ الْقُرْآنِ وَ عِيدُ الْفِطْرِ وَعِيدُ الْأَضْحَى",
        fullArabic: `نَزَلَ الْقُرْآنُ عَلَى النَّبِيِّ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي غَارِ حِرَاءٍ، وَكَانَ عُمْرُهُ أَرْبَعِينَ سَنَةً. كَانَ النَّبِيُّ مُحَمَّدٌ يَخْلُو بِنَفْسِهِ فِي الْغَارِ وَيَتَعَبَّدُ اللَّهَ فِيهِ ، ثُمَّ نَزَلَ عَلَيْهِ جِبْرِيلُ بِالْوَحْيِ وَأَمَرَهُ بِالْقِرَاءَةِ. وَكَانَ ذَلِكَ فِي اللَّيْلَةِ السَّابِعَةِ عَشْرَةَ مِنْ شَهْرِ رَمَضَانَ.

قَالَ جِبْرِيلُ لِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ :اقْرَأْ، فَقَالَ مُحَمَّدٌ :مَا أَنَا بِقَارِئٍ، (لِأَنَّ مُحَمَّدًا كَانَ أُمِّيًّا). فَقَالَ جِبْرِيلُ :اقْرَأْ، فَقَالَ مُحَمَّدٌ :مَا أَنَا بِقَارِئٍ. ثُمَّ قَالَ جِبْرِيلُ:

اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ (١) خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ (٢) اقْرَأْ وَرَبُّكَ الْأَكْرَمُ (٣) الَّذِي عَلَّمَ بِالْقَلَمِ (٤) عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ (٥)

وَهَذِهِ الْآيَاتُ هِيَ أَوَّلُ مَا نَزَلَ مِنَ الْقُرْآنِ عَلَى النَّبِيِّ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ. وَاسْتَمَرَّ نُزُولُ الْقُرْآنِ الْكَرِيمِ عَلَى النَّبِيِّ ثَلَاثًا وَعِشْرِينَ سَنَةً :ثَلَاثَ عَشْرَةَ سَنَةً فِي مَكَّةَ وَعَشْرَ سَنَوَاتٍ فِي الْمَدِينَةِ.

صَارَ الْقُرْآنُ الْكَرِيمُ دُسْتُورًا لِلْمُسْلِمِينَ فِي حَيَاتِهِمْ. الْقُرْآنُ لَيْسَ لِلْهِدَايَةِ فَقَطْ، بَلْ هُوَ أَيْضًا لِلْإِلْهَامِ وَالْقُوَّةِ لَنَا .الْقُرْآنُ لَيْسَ لِلْقِرَاءَةِ فَقَطْ، بَلْ يُعْمَلُ بِهِ فِي الْحَيَاةِ الْيَوْمِيَّةِ .لَيْسَ فَقَطْ تُلْفَظُ حُرُوفُهُ، بَلْ يُفْهَمُ مَعْنَاهُ. هَيَّا نُطَبِّقُهُ فِي حَيَاتِنَا الْيَوْمِيَّةِ، فِي الْمُجْتَمَعِ، وَفِي حَيَاتِنَا كَأُمَّةٍ وَدَوْلَةٍ.

---

عِيدُ الْفِطْرِ وَعِيدُ الْأَضْحَى

لِلْمُسْلِمِينَ عِيدَانِ، هُمَا عِيدُ الْفِطْرِ فِي الْأَوَّلِ مِنْ شَهْرِ شَوَّالٍ، وَعِيدُ الْأَضْحَى فِي الْعَاشِرِ مِنْ شَهْرِ ذِي الْحِجَّةِ.

فِي لَيْلَةِ الْعِيدِ، بَعْضٌ مِنَ الْمُسْلِمِينَ يَجْتَمِعُونَ مَعَ عَائِلَتِهِمْ فِي الْبَيْتِ. هُمْ يَتَكَلَّمُونَ وَيَتَبَادَلُونَ عَنْ الْقِصَصِ. هُمْ مَسْرُورُونَ بِمَجِيءِ الْعِيدِ. وَ بَعْضُهُمُ الْآخَرُ يُكَبِّرُونَ اللَّهَ فِي الْمَسَاجِدِ.

وَفِي صَبَاحِ الْعِيدِ، هُمْ يَذْهَبُونَ إِلَى الْمَسَاجِدِ أَوْ فِي الْمَيَادِينِ لِصَلَاةِ الْعِيدِ. بَعْدَ صَلَاةِ الْعِيدِ، هُمْ يَزُورُونَ الْأَقَارِبَ وَالْجِيرَانَ لِيَصِلُوا الرَّحِمَ وَيَسْأَلُوا الْعَفْوَ مِنْهُمْ مِنَ الْخَطَأِ وَالتَّقْصِيرِ.

وَفِي عِيدِ الْأَضْحَى، بَعْدَ صَلَاةِ عِيدِ الْأَضْحَى، يَذْبَحُ الْمُسْلِمُونَ الْقَادِرُونَ الْأَضَاحِيَ تَقَرُّبًا إِلَى اللَّهِ، فَيَأْكُلُونَ مِنْ لَحْمِ الْأُضْحِيَّةِ، وَيُهْدُونَ مِنْهَا لِلْأَقَارِبِ وَالْأَصْدِقَاءِ، وَيَتَصَدَّقُونَ مِنْهَا عَلَى الْفُقَرَاءِ وَالْمَسَاكِينِ.

الْحِكَمُ الْمَأْخُوذَةُ مِنْ عِيدِ الْفِطْرِ وَ عِيدِ الْأَضْحَى مِنْهَا:
١. يَأْتِي الْعِيدُ بِالْفَرَحِ وَالسَّعَادَةِ، وَأَيْضًا لِلتَّوَاصُلِ وَالتَّآخِي بَيْنَ النَّاسِ.
٢. يُعَلِّمُ الصِّيَامُ وَالْأُضْحِيَّةُ لَنَا التَّعَاوُنَ وَالتَّقَاسُمَ.
٣. أَنَّ فِي الْإِسْلَامِ، هُنَاك مُسَاوَاةٌ بَيْنَ النَّاسِ. لَهُمْ مَكَانَةٌ وَاحِدَةٌ فِي الْإِسْلَامِ، وَلَا يَفْضُلُ أَحَدٌ عَلَى الْآخَرِ إِلَّا بِالتَّقْوَى.
٤. تُعَلِّمُنَا الْأُضْحِيَّةُ أَيْضًا الْإِخْلَاصَ فِي الْعِبَادَةِ.`,
        paragraphs: [
          {
            arabic: "نَزَلَ الْقُرْآنُ عَلَى النَّبِيِّ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي غَارِ حِرَاءٍ، وَكَانَ عُمْرُهُ أَرْبَعِينَ سَنَةً. كَانَ النَّبِيُّ مُحَمَّدٌ يَخْلُو بِنَفْسِهِ فِي الْغَارِ وَيَتَعَبَّدُ اللَّهَ فِيهِ.",
            translation: "Al-Qur'an turun kepada Nabi Muhammad ﷺ di Gua Hira saat usia beliau 40 tahun. Nabi Muhammad biasa menyendiri di gua tersebut untuk beribadah kepada Allah."
          },
          {
            arabic: "ثُمَّ نَزَلَ عَلَيْهِ جِبْرِيلُ بِالْوَحْيِ وَأَمَرَهُ بِالْقِرَاءَةِ. وَكَانَ ذَلِكَ فِي اللَّيْلَةِ السَّابِعَةِ عَشْرَةَ مِنْ شَهْرِ رَمَضَانَ.",
            translation: "Kemudian Malaikat Jibril turun membawa wahyu dan menyuruh beliau membaca. Peristiwa tersebut terjadi pada malam ke-17 bulan Ramadhan."
          },
          {
            arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ (١) خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ (٢) اقْرَأْ وَرَبُّكَ الْأَكْرَمُ (٣) الَّذِي عَلَّمَ بِالْقَلَمِ (٤) عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ (٥)",
            translation: "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan. Dia telah menciptakan manusia dari segumpal darah. Bacalah, dan Tuhanmulah Yang Maha Mulia. Yang mengajar (manusia) dengan perantaraan kalam. Dia mengajarkan manusia apa yang tidak diketahuinya."
          },
          {
            arabic: "لِلْمُسْلِمِينَ عِيدَانِ، هُمَا عِيدُ الْفِطْرِ فِي الْأَوَّلِ مِنْ شَهْرِ شَوَّالٍ، وَعِيدُ الْأَضْحَى فِي الْعَاشِرِ مِنْ شَهْرِ ذِي الْحِجَّةِ.",
            translation: "Bagi umat Islam ada dua hari raya, yaitu Hari Raya Idul Fitri pada tanggal 1 Syawwal, dan Hari Raya Idul Adha pada tanggal 10 Dzulhijjah."
          },
          {
            arabic: "وَفِي عِيدِ الْأَضْحَى، بَعْدَ صَلَاةِ عِيدِ الْأَضْحَى، يَذْبَحُ الْمُسْلِمُونَ الْقَادِرُونَ الْأَضَاحِيَ تَقَرُّبًا إِلَى اللَّهِ.",
            translation: "Dan pada Hari Raya Idul Adha, setelah shalat Idul Adha, umat Islam yang mampu menyembelih hewan kurban untuk mendekatkan diri kepada Allah."
          }
        ]
      },
      mufrodat: [
        { arabic: "غَارُ حِرَاءٍ", latin: "Gharu Hira'", indo: "Gua Hira", category: "Tempat", icon: "fa-mountain" },
        { arabic: "الْوَحْيُ", latin: "Al-Wahyu", indo: "Wahyu Allah", category: "Agama", icon: "fa-scroll" },
        { arabic: "عِيدُ الْفِطْرِ", latin: "'Idul Fitri", indo: "Hari Raya Idul Fitri", category: "Hari Raya", icon: "fa-star-and-crescent" },
        { arabic: "عِيدُ الْأَضْحَى", latin: "'Idul Adha", indo: "Hari Raya Idul Adha", category: "Hari Raya", icon: "fa-drumstick-bite" },
        { arabic: "الأُضْحِيَّةُ", latin: "Al-Udh-hiyyah", indo: "Hewan Kurban", category: "Ibadah", icon: "fa-leaf" },
        { arabic: "صِلَةُ الرَّحِمِ", latin: "Silaturrahim", indo: "Menyambung Silaturahmi", category: "Akhlak", icon: "fa-hands-helping" },
        { arabic: "اقْرَأْ", latin: "Iqra'", indo: "Bacalah! (Fi'il Amr)", category: "Perintah", icon: "fa-book-open" },
        { arabic: "الْقَلَمُ", latin: "Al-Qalam", indo: "Pena / Alat Tulis", category: "Benda", icon: "fa-pen" },
        { arabic: "شَهْرُ رَمَضَانَ", latin: "Syahru Ramadhan", indo: "Bulan Ramadhan", category: "Waktu", icon: "fa-moon" },
        { arabic: "شَهْرُ شَوَّالٍ", latin: "Syahru Syawwal", indo: "Bulan Syawwal", category: "Waktu", icon: "fa-calendar" },
        { arabic: "ذُو الْحِجَّةِ", latin: "Dzulhijjah", indo: "Bulan Dzulhijjah", category: "Waktu", icon: "fa-kaaba" },
        { arabic: "الْمَسَاجِدُ", latin: "Al-Masajid", indo: "Masjid-masjid", category: "Tempat", icon: "fa-mosque" },
        { arabic: "الْمَيَادِيْنُ", latin: "Al-Mayadin", indo: "Lapangan-lapangan", category: "Tempat", icon: "fa-map-marked-alt" },
        { arabic: "الْأَقَارِبُ", latin: "Al-Aqarib", indo: "Kerabat / Sanak Saudara", category: "Orang", icon: "fa-users" },
        { arabic: "الْجِيْرَانُ", latin: "Al-Jiran", indo: "Tetangga-tetangga", category: "Orang", icon: "fa-home" },
        { arabic: "الْفُقَرَاءُ", latin: "Al-Fuqara'", indo: "Fakir Miskin", category: "Orang", icon: "fa-hand-holding-heart" },
        { arabic: "التَّعَاوُنُ", latin: "At-Ta'awun", indo: "Tolong-menolong", category: "Akhlak", icon: "fa-hands" },
        { arabic: "التَّقَاسُمُ", latin: "At-Taqasum", indo: "Saling Berbagi", category: "Akhlak", icon: "fa-share" },
        { arabic: "التَّقْوَى", latin: "At-Taqwa", indo: "Ketakwaan kepada Allah", category: "Ibadah", icon: "fa-heart-circle-check" },
        { arabic: "الْإِخْلَاصُ", latin: "Al-Ikhlas", indo: "Keikhlasan dalam Ibadah", category: "Akhlak", icon: "fa-gem" }
      ],
      hiwar: [
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "مَتَى نَزَلَ الْقُرْآنُ لِلْمَرَّةِ الأُوْلَى يَا عَائِشَةُ؟", translation: "Kapan Al-Qur'an turun pertama kali wahai Aisyah?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "نَزَلَ فِي 17 مِنْ شَهْرِ رَمَضَانَ فِي غَارِ حِرَاءٍ.", translation: "Turun pada tanggal 17 bulan Ramadhan di Gua Hira." },
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "كَمْ كَانَ عُمْرُ النَّبِيِّ عِنْدَمَا نَزَلَ عَلَيْهِ الْوَحْيُ؟", translation: "Berapa usia Nabi ketika wahyu turun kepada beliau?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "كَانَ عُمْرُهُ أَرْبَعِيْنَ سَنَةً.", translation: "Usia beliau saat itu adalah 40 tahun." },
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "مَا هِيَ الآيَاتُ الأُوْلَى الَّتِي نَزَلَتْ؟", translation: "Apakah ayat-ayat pertama yang diturunkan?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "هِيَ الآيَاتُ الأُوْلَى مِنْ سُوْرَةِ الْعَلَقِ: اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ.", translation: "Yaitu ayat-ayat pertama dari Surah Al-Alaq: Bacalah dengan menyebut nama Tuhanmu." },
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "كَمْ سَنَةً اسْتَمَرَّ نُزُوْلُ الْقُرْآنِ؟", translation: "Berapa tahunkah Al-Qur'an diturunkan secara berangsur-angsur?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "اسْتَمَرَّ ثَلَاثًا وَعِشْرِيْنَ سَنَةً: 13 فِي مَكَّةَ وَ10 فِي الْمَدِيْنَةِ.", translation: "Diturunkan selama 23 tahun: 13 tahun di Makkah dan 10 tahun di Madinah." },
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "كَمْ عِيْدًا لِلْمُسْلِمِيْنَ فِي السَّنَةِ؟", translation: "Berapa hari rayakah bagi umat Islam dalam setahun?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "لِلْمُسْلِمِيْنَ عِيْدَانِ: عِيْدُ الْفِطْرِ وَعِيْدُ الأَضْحَى.", translation: "Bagi umat Islam ada dua hari raya: Idul Fitri dan Idul Adha." },
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "مَتَى يَكُوْنُ عِيْدُ الْفِطْرِ؟", translation: "Kapan Hari Raya Idul Fitri dirayakan?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "يَكُوْنُ فِي الأَوَّلِ مِنْ شَهْرِ شَوَّالٍ.", translation: "Dirayakan pada tanggal 1 bulan Syawwal." },
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "وَمَتَى يَكُوْنُ عِيْدُ الأَضْحَى؟", translation: "Dan kapan Hari Raya Idul Adha dirayakan?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "يَكُوْنُ فِي الْعَاشِرِ مِنْ شَهْرِ ذِي الْحِجَّةِ.", translation: "Dirayakan pada tanggal 10 bulan Dzulhijjah." },
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "مَاذَا يَفْعَلُ الْمُسْلِمُوْنَ فِي صَبَاحِ الْعِيْدِ؟", translation: "Apa yang dilakukan umat Islam pada pagi hari Idul Fitri?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "يَذْهَبُوْنَ إِلَى الْمَسَاجِدِ لِصَلَاةِ الْعِيْدِ ثُمَّ يَزُوْرُوْنَ الأَقَارِبَ.", translation: "Mereka pergi ke masjid untuk shalat Id lalu mengunjungi kerabat." },
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "مَاذَا يَذْبَحُ الْمُسْلِمُوْنَ فِي عِيْدِ الأَضْحَى؟", translation: "Apa yang disembelih umat Islam pada Idul Adha?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "يَذْبَحُ القَادِرُوْنَ الأُضْحِيَّةَ تَقَرُّبًا إِلَى اللَّهِ.", translation: "Umat yang mampu menyembelih hewan kurban untuk mendekatkan diri kepada Allah." },
        { speaker: "فَاطِمَةُ", role: "Siswi A", avatarIcon: "fa-user-astronaut", arabic: "إِلَى مَنْ يُعْطَى لَحْمُ الأُضْحِيَّةِ؟", translation: "Kepada siapakah daging kurban diberikan?" },
        { speaker: "عَائِشَةُ", role: "Siswi B", avatarIcon: "fa-user-nurse", arabic: "يُهْدَى لِلأَقَارِبِ وَيُتَصَدَّقُ مِنْهُ عَلَى الْفُقَرَاءِ وَالْمَسَاكِيْنِ.", translation: "Dihadiahkan kepada kerabat dan disedekahkan kepada fakir miskin." }
      ],
      qawaid: {
        title: "حُرُوفُ النَّفْيِ وَالنَّهْيِ وَالأَمْرِ (Penggunaan Kata Larangan & Perintah)",
        explanation: "Dalam teks Bab 3 terdapat kalimat larangan dan perintah: اقْرَأْ (Bacalah! - Fi'il Amr), لَا يَجُوْزُ (Tidak boleh - Nafi/Nahi).",
        examples: [
          { pattern: "Fi'il Amr (Perintah)", sample: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ", meaning: "Bacalah dengan menyebut nama Tuhanmu!" },
          { pattern: "Nafi (Penolakan/Pengecualian)", sample: "الْقُرْآنُ لَيْسَ لِلْقِرَاءَةِ فَقَطْ", meaning: "Al-Qur'an bukan sekadar untuk dibaca saja" }
        ],
        exercises: [
          {
            id: 1,
            instruction: "Susun kata-kata berikut menjadi ayat pertama Al-Alaq!",
            words: ["بِاسْمِ", "الَّذِي", "رَبِّكَ", "اقْرَأْ", "خَلَقَ"],
            correctOrder: ["اقْرَأْ", "بِاسْمِ", "رَبِّكَ", "الَّذِي", "خَلَقَ"],
            arabicSentence: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ"
          }
        ]
      }
    }
  ],

  // --------------------------------------------------------------------------
  // Bank Soal Maharah Istima' (20 Soal PER BAB = 60 Soal Total Full Bahasa Arab)
  // --------------------------------------------------------------------------
  istimaBank: [
    // === BAB 1 ISTIMA' (SOAL 1 - 20) ===
    {
      id: 1, chapterId: 1, typeTag: "تَحْلِيْلُ الْمَكَانِ وَالْـمَوْقِفِ",
      audioText: "التَّلَامِيْذُ يَحْتَفِلُوْنَ بِسَنَةٍ هِجْرِيَّةٍ جَدِيْدَةٍ فِي مَلْعَبِ الْمَدْرَسَةِ، التَّلَامِيْذُ فِي الْيَمِيْنِ وَالتِّلْمِيْذَاتُ فِي الْيَسَارِ",
      question: "أَيْنَ يَجْتَمِعُ التَّلَامِيْذُ لِلِاحْتِفَالِ بِسَنَةٍ هِجْرِيَّةٍ جَدِيْدَةٍ، وَكَيْفَ يَجْلِسُونَ؟",
      options: ["فِي الْمَسْجِدِ، يَجْلِسُ التَّلَامِيْذُ وَالتِّلْمِيْذَاتُ مُخْتَلِطِيْنَ", "فِي مَلْعَبِ الْمَدْرَسَةِ، التَّلَامِيْذُ فِي الْيَمِيْنِ وَالتِّلْمِيْذَاتُ فِي الْيَسَارِ", "فِي الْفَصْلِ مَعَ الأُسْتَاذِ مُحَمَّدِ نَبِيْلٍ", "فِي مَكْتَبَةِ الْمَدْرَسَةِ"],
      correct: 1, explanation: "الْإِجَابَةُ الصَّحِيْحَةُ هِيَ: 'فِي مَلْعَبِ الْمَدْرَسَةِ، التَّلَامِيْذُ فِي الْيَمِيْنِ وَالتِّلْمِيْذَاتُ فِي الْيَسَارِ'."
    },
    {
      id: 2, chapterId: 1, typeTag: "تَحْلِيْلُ التَّضْحِيَةِ (HOTS)",
      audioText: "هَاجَرَ الرَّسُوْلُ وَأَصْحَابُهُ مِنْ مَكَّةَ إِلَى الْمَدِينَةِ وَتَرَكُوا وَطَنَهُمْ وَأَمْوَالَهُمْ وَتِجَارَتَهُمْ",
      question: "لِمَاذَا كَانَتْ تَضْحِيَةُ الصَّحَابَةِ فِي الْهِجْرَةِ عَظِيْمَةً جِدًّا؟",
      options: ["لِأَنَّهُمْ يَبْحَثُونَ عَنْ مَكَانٍ لِلْعُطْلَةِ", "لِأَنَّهُمْ تَرَكُوا وَطَنَهُمْ وَبُيُوتَهُمْ وَأَمْوَالَهُمْ وَتِجَارَتَهُمْ دِفَاعًا عَنِ الإِيْمَانِ", "لِأَنَّهُمْ أَرَادُوا التِّجَارَةَ الرَّابِحَةَ فِي الْمَدِيْنَةِ", "لِأَنَّ مَكَّةَ لَمْ تَعُدْ صَالِحَةً لِلْعَيْشِ"],
      correct: 1, explanation: "تَرَكَ الصَّحَابَةُ وَطَنَهُمْ وَأَمْوَالَهُمْ فِي مَكَّةَ نُصْرَةً لِلَّهِ وَرَسُوْلِهِ."
    },
    {
      id: 3, chapterId: 1, typeTag: "تَقْيِيْمُ الْجُمَلِ (الصَّوَاب/الْخَطَأ)",
      audioText: "حَاوَلَ الْكُفَّارُ أَنْ يَقْتُلُوا النَّبِيَّ وَلَكِنَّ اللَّهَ حَفِظَ النَّبِيَّ وَنَجَّاهُ فِي الْهِجْرَةِ",
      question: "أَيُّ جُمْلَةٍ مِنَ الْجُمَلِ الآتِيَةِ هِيَ الجُمْلَةُ الصَّحِيْحَةُ عَنِ الْهِجْرَةِ؟",
      options: ["نَجَحَ الْكُفَّارُ فِي مَنْعِ الرَّسُوْلِ مِنَ الْهِجْرَةِ", "هَاجَرَ النَّبِيُّ بِمُفْرَدِهِ بِدُوْنِ أَصْحَابِهِ", "حَاوَلَ الْكُفَّارُ قَتْلَ النَّبِيِّ، وَلَكِنَّ اللَّهَ حَفِظَهُ وَنَجَّاهُ حَتَّى وَصَلَ إِلَى الْمَدِيْنَةِ سَالِمًا", "هَاجَرَ النَّبِيُّ خَوْفًا مِنَ الْكُفَّارِ"],
      correct: 2, explanation: "النَّصُّ الصَّوْتِيُّ يُؤَكِّدُ: 'وَلَكِنَّ اللَّهَ حَفِظَ النَّبِيَّ وَنَجَّاهُ'."
    },
    {
      id: 4, chapterId: 1, typeTag: "تَفْكِيْرٌ نَاقِدٌ (التَّقْوِيْمُ)",
      audioText: "أَوَّلُ مَنْ وَضَعَ التَّقْوِيْمَ الْهِجْرِيَّ هُوَ عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ",
      question: "مَنْ هُوَ أَوَّلُ مَنْ وَضَعَ التَّقْوِيْمَ الْهِجْرِيَّ فِي التَّارِيْخِ الإِسْلَامِيِّ؟",
      options: ["أَبُو بَكْرٍ الصِّدِّيْقُ رَضِيَ اللَّهُ عَنْهُ", "عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ", "عُثْمَانُ بْنُ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ", "عَلِيُّ بْنُ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُ"],
      correct: 1, explanation: "عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ هُوَ أَوَّلُ مَنْ وَضَعَ التَّقْوِيْمَ الْهِجْرِيَّ."
    },
    {
      id: 5, chapterId: 1, typeTag: "التَّطْبِيْقُ المَعَاصِرُ",
      audioText: "يُمْكِنُنَا تَطْبِيْقُ الْهِجْرَةِ بِاسْتِخْدَامِ الْهَاتِفِ لِوَسَائِلِ التَّوَاصُلِ الاِجْتِمَاعِيِّ بِحِكْمَةٍ",
      question: "كَيْفَ نُطَبِّقُ مَعْنَى الْهِجْرَةِ فِي عَصْرِ التِّكْنُولُوجِيَا الْحَدِيْثَةِ؟",
      options: ["بِتَرْكِ اسْتِخْدَامِ الْهَاتِفِ نِهَائِيًّا", "بِاسْتِخْدَامِ الْهَاتِفِ وَوَسَائِلِ التَّوَاصُلِ الاِجْتِمَاعِيِّ بِحِكْمَةٍ لِلتَّعَلُّمِ وَالدَّعْوَةِ", "بِشِرَاءِ هَاتِفٍ جَدِيْدٍ كُلَّ سَنَةٍ هِجْرِيَّةٍ", "بِمَسْحِ جَمِيْعِ التَّطْبِيْقَاتِ فِي الْهَاتِفِ"],
      correct: 1, explanation: "تَطْبِيْقُ الْهِجْرَةِ مَعْنَاهُ اسْتِخْدَامُ الْهَاتِفِ بِحِكْمَةٍ فِي الأَنْشِطَةِ النَّافِعَةِ."
    },
    {
      id: 6, chapterId: 1, typeTag: "تَحْلِيْلُ الأَفْعَالِ المَمْنُوْعَةِ",
      audioText: "لَا يَجُوْزُ لَنَا اسْتِخْدَامُ التِّكْنُولُوجِيَا فَقَطْ لِلتَّصْوِيْرِ الذَّاتِيِّ وَنَشْرِ hoax",
      question: "مَا هُوَ الِاسْتِخْدَامُ الَّذِي لَا يَجُوْزُ لَنَا فِي اسْتِعْمَالِ الْهَاتِفِ؟",
      options: ["قِرَاءَةُ الْكُتُبِ وَالدُّرُوْسِ الإِلِكْتَرُونِيَّةِ", "اسْتِخْدَامُهُ فَقَطْ لِلتَّصْوِيْرِ الذَّاتِيِّ (selfie) وَنَشْرِ الأخْبَارِ الْكَاذِبَةِ (hoax)", "الاِسْتِمَاعُ إِلَى الْمُحَاضَرَةِ الدِّيْنِيَّةِ", "التَّوَاصُلُ مَعَ الأَقَارِبِ"],
      correct: 1, explanation: "النَّصُّ يَحُثُّ عَلَى مَنْعِ اسْتِخْدَامِ الْهَاتِفِ لِلتَّصْوِيْرِ الذَّاتِيِّ وَنَشْرِ الْأَكَاذِيْبِ."
    },
    {
      id: 7, chapterId: 1, typeTag: "تَكْمِيْلُ الْجُمْلَةِ",
      audioText: "هُمْ يَسْتَمِعُوْنَ إِلَى الْمُحَاضَرَةِ الدِّيْنِيَّةِ الَّتِي يُلْقِيْهَا الأُسْتَاذُ مُحَمَّدُ نَبِيْلُ",
      question: "أَكْمِلِ الْجُمْلَةَ الآتِيَةَ: 'هُمْ ... إِلَى الْمُحَاضَرَةِ الدِّيْنِيَّةِ'",
      options: ["يَكْتُبُوْنَ", "يَسْتَمِعُوْنَ", "يَأْكُلُوْنَ", "يَنَامُوْنَ"],
      correct: 1, explanation: "الْفِعْلُ الصَّحِيْحُ هُوَ 'يَسْتَمِعُوْنَ'."
    },
    {
      id: 8, chapterId: 1, typeTag: "تَحْلِيْلُ الْمَعَانِي",
      audioText: "كَانَتِ الْهِجْرَةُ حَادِثَةً عَظِيْمَةً فِي التَّارِيْخِ الإِسْلَامِيِّ",
      question: "مَا مَعْنَى كَلِمَةِ 'حَادِثَةً عَظِيْمَةً' فِي النَّصِّ؟",
      options: ["كَارِثَةً شَدِيْدَةً", "حَدَثًا مَجِيْدًا وَتَارِيْخِيًّا كَبِيْرًا", "حَادِثَةً عَادِيَّةً يَوْمِيَّةً", "قِصَّةً خَيَالِيَّةً"],
      correct: 1, explanation: "'حَادِثَةً عَظِيْمَةً' تَعْنِي حَدَثًا مَجِيْدًا وَمُهِمًّا."
    },
    {
      id: 9, chapterId: 1, typeTag: "تَحْلِيْلُ الأَهْدَافِ",
      audioText: "يَجِبُ عَلَيْنَا أَنْ نَسْتَعْمِلَ التِّكْنُولُوجِيَا فِي الأَنْشِطَةِ النَّافِعَةِ مِثْلَ الدَّعْوَةِ وَالتَّعَلُّمِ",
      question: "مَا هُمَا النَّشَاطَانِ النَّافِعَانِ الْمَذْكُوْرَانِ فِي الاِسْتِمَاعِ؟",
      options: ["اللَّعِبُ وَالتَّسَوُّقُ", "الدَّعْوَةُ وَالتَّعَلُّمُ", "التَّصْوِيْرُ وَمُشَاهَدَةُ الأَفْلَامِ", "النَّوْمُ وَالرَّاحَةُ"],
      correct: 1, explanation: "النَّشَاطَانِ الْـمَذْكُوْرَانِ هُمَا: 'الدَّعْوَةُ وَالتَّعَلُّمُ'."
    },
    {
      id: 10, chapterId: 1, typeTag: "تَحْلِيْلُ النَّتِيْجَةِ",
      audioText: "وَجَعَلَهُمْ يَصِلُوْنَ إِلَى الْمَدِيْنَةِ سَالِمِيْنَ",
      question: "كَيْفَ وَصَلَ الرَّسُوْلُ وَأَصْحَابُهُ إِلَى الْمَدِيْنَةِ بَعْدَ الْهِجْرَةِ؟",
      options: ["وَصَلُوا مَجْرُوحِيْنَ", "وَصَلُوا ضَائِعِيْنَ فِي الصَّحْرَاءِ", "وَصَلُوا إِلَى الْمَدِيْنَةِ سَالِمِيْنَ", "رَجَعُوا إِلَى مَكَّةَ"],
      correct: 2, explanation: "وَصَلَ الرَّسُوْلُ وَأَصْحَابُهُ إِلَى الْمَدِيْنَةِ سَالِمِيْنَ بِحِفْظِ اللَّهِ."
    },
    {
      id: 11, chapterId: 1, typeTag: "تَحْلِيْلُ زَمَنِ الْحَدَثِ",
      audioText: "اليَوْمَ هُوَ الأَوَّلُ مِنْ شَهْرِ مُحَرَّمٍ",
      question: "فِي أَيِّ يَوْمٍ يَحْتَفِلُ التَّلَامِيْذُ بِالسَّنَةِ الْهِجْرِيَّةِ الْجَدِيْدَةِ؟",
      options: ["فِي الأَوَّلِ مِنْ شَهْرِ مُحَرَّمٍ", "فِي 10 ذِي الْحِجَّةِ", "فِي 17 رَمَضَانَ", "فِي 1 شَوَّالٍ"],
      correct: 0, explanation: "يَحْتَفِلُ التَّلَامِيْذُ فِي 'الأَوَّلِ مِنْ شَهْرِ مُحَرَّمٍ'."
    },
    {
      id: 12, chapterId: 1, typeTag: "تَحْلِيْلُ اسْمِ الْمُحَاضِرِ",
      audioText: "هُمْ يَسْتَمِعُوْنَ إِلَى الْمُحَاضَرَةِ الدِّيْنِيَّةِ الَّتِي يُلْقِيْهَا الأُسْتَاذُ مُحَمَّدُ نَبِيْلُ",
      question: "مَنِ الَّذِي أَلْقَى الْمُحَاضَرَةَ الدِّيْنِيَّةَ لِلتَّلَامِيْذِ؟",
      options: ["الأُسْتَاذُ إِدْرِيْسُ", "الأُسْتَاذُ مُحَمَّدُ نَبِيْلُ", "الأُسْتَاذُ عُمَرُ", "الأُسْتَاذُ حَسَنُ"],
      correct: 1, explanation: "أَلْقَى الْمُحَاضَرَةَ 'الأُسْتَاذُ مُحَمَّدُ نَبِيْلُ'."
    },
    {
      id: 13, chapterId: 1, typeTag: "تَحْلِيْلُ وِجْهَةِ الْهِجْرَةِ",
      audioText: "تَحَدَّثَ الأُسْتَاذُ عَنْ هِجْرَةِ الرَّسُوْلِ مِنْ مَكَّةَ إِلَى الْمَدِيْنَةِ",
      question: "إِلَى أَيْنَ هَاجَرَ الرَّسُوْلُ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مِنْ مَكَّةَ؟",
      options: ["إِلَى الطَّائِفِ", "إِلَى الشَّامِ", "إِلَى الْمَدِيْنَةِ", "إِلَى الْيَمَنِ"],
      correct: 2, explanation: "هَاجَرَ الرَّسُوْلُ 'إِلَى الْمَدِيْنَةِ'."
    },
    {
      id: 14, chapterId: 1, typeTag: "تَحْلِيْلُ نِيَّةِ الْكُفَّارِ",
      audioText: "حَاوَلَ الْكُفَّارُ أَنْ يَقْتُلُوا النَّبِيَّ وَيَمْنَعُوا أَصْحَابَهُ مِنَ الْهِجْرَةِ",
      question: "مَاذَا حَاوَلَ الْكُفَّارُ أَنْ يَفْعَلُوا لِلنَّبِيِّ عِنْدَ الْهِجْرَةِ؟",
      options: ["مُسَاعَدَتَهُ", "قَتْلَهُ وَمَنْعَهُ مَعَ أَصْحَابِهِ مِنَ الْهِجْرَةِ", "إِعْطَاءَهُ الهَدَايَا", "السَّفَرَ مَعَهُ"],
      correct: 1, explanation: "حَاوَلَ الْكُفَّارُ 'أَنْ يَقْتُلُوا النَّبِيَّ وَيَمْنَعُوا أَصْحَابَهُ'."
    },
    {
      id: 15, chapterId: 1, typeTag: "تَحْلِيْلُ أَوَّلِ يَوْمٍ فِي التَّقْوِيْمِ",
      audioText: "جَعَلَ الْمُسْلِمُوْنَ يَوْمَ الْهِجْرَةِ أَوَّلَ يَوْمٍ فِي تَقْوِيْمِ الْعَامِ الْهِجْرِيِّ",
      question: "مَاذَا جَعَلَ الْمُسْلِمُوْنَ يَوْمَ الْهِجْرَةِ فِي التَّقْوِيْمِ؟",
      options: ["أَوَّلَ يَوْمٍ فِي تَقْوِيْمِ الْعَامِ الْهِجْرِيِّ", "آخِرَ يَوْمٍ فِي السَّنَةِ", "عُطْلَةً صَيْفِيَّةً", "يَوْمَ التِّجَارَةِ"],
      correct: 0, explanation: "جَعَلُوهُ 'أَوَّلَ يَوْمٍ فِي تَقْوِيْمِ الْعَامِ الْهِجْرِيِّ'."
    },
    {
      id: 16, chapterId: 1, typeTag: "تَحْلِيْلُ وَسِيْلَةِ التَّوَاصُلِ",
      audioText: "يُمْكِنُنَا تَطْبِيْقُ الْهِجْرَةِ بِاسْتِخْدَامِ الْهَاتِفِ لِوَسَائِلِ التَّوَاصُلِ الاِجْتِمَاعِيِّ",
      question: "مَا هِيَ الآلَةُ الْمَذْكُوْرَةُ فِي التَّطْبِيْقِ الْمَعَاصِرِ لِلْهِجْرَةِ؟",
      options: ["التِّلْفَازُ", "الْهَاتِفُ (Smartphone)", "الرَّادِيُو", "السَّيَّارَةُ"],
      correct: 1, explanation: "الآلَةُ الْمَذْكُوْرَةُ هِيَ 'الْهَاتِفُ'."
    },
    {
      id: 17, chapterId: 1, typeTag: "تَحْلِيْلُ صِفَةِ الِاسْتِخْدَامِ",
      audioText: "بِاسْتِخْدَامِ الْهَاتِفِ لِوَسَائِلِ التَّوَاصُلِ الاِجْتِمَاعِيِّ بِحِكْمَةٍ",
      question: "كَيْفَ يَجِبُ اسْتِخْدَامُ وَسَائِلِ التَّوَاصُلِ الاِجْتِمَاعِيِّ؟",
      options: ["بِغَضَبٍ", "بِحِكْمَةٍ", "بِإِسْرَافٍ", "بِلا عَقْلٍ"],
      correct: 1, explanation: "يَجِبُ اسْتِخْدَامُهَا 'بِحِكْمَةٍ'."
    },
    {
      id: 18, chapterId: 1, typeTag: "تَحْلِيْلُ مَنْعِ الإِشَاعَاتِ",
      audioText: "لَا يَجُوْزُ نَشْرُ hoax وَغَيْرِ ذَلِك",
      question: "مَا مَعْنَى 'hoax' الْمَمْنُوْعُ نَشْرُهُ فِي الإِسْلَامِ؟",
      options: ["الأَخْبَارُ الصَّادِقَةُ", "الأَخْبَارُ الْكَاذِبَةُ وَالإِشَاعَاتُ", "الدُّرُوْسُ الْعِلْمِيَّةُ", "الأَحَادِيْثُ النَّبَوِيَّةُ"],
      correct: 1, explanation: "'hoax' هِيَ الأَخْبَارُ الْكَاذِبَةُ وَالإِشَاعَاتُ."
    },
    {
      id: 19, chapterId: 1, typeTag: "تَحْلِيْلُ الْجِنْسِ فِي الْجُلُوْسِ",
      audioText: "التَّلَامِيْذُ فِي الْيَمِيْنِ وَالتِّلْمِيْذَاتُ فِي الْيَسَارِ",
      question: "أَيْنَ تَجْلِسُ التِّلْمِيْذَاتُ (Murid Perempuan) فِي المَلْعَبِ؟",
      options: ["فِي الْيَمِيْنِ", "فِي الْجُزْءِ الْيَسَارِ", "فِي الْوَسَطِ", "خَلْفَ المَلْعَبِ"],
      correct: 1, explanation: "تَجْلِسُ التِّلْمِيْذَاتُ فِي 'الْجُزْءِ الْيَسَارِ'."
    },
    {
      id: 20, chapterId: 1, typeTag: "تَحْلِيْلُ حِفْظِ اللَّهِ",
      audioText: "وَلَكِنَّ اللَّهَ حَفِظَ النَّبِيَّ وَنَجَّاهُ",
      question: "مَنْ الَّذِي حَفِظَ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي الْهِجْرَةِ؟",
      options: ["مَلِكُ مَكَّةَ", "اللَّهُ سُبْحَانَهُ وَتَعَالَى", "أَهْلُ الطَّائِفِ", "جِيْرَانُهُ"],
      correct: 1, explanation: "اللَّهُ سُبْحَانَهُ وَتَعَالَى هُوَ الَّذِي حَفِظَهُ وَنَجَّاهُ."
    },

    // === BAB 2 ISTIMA' (SOAL 21 - 40) ===
    {
      id: 21, chapterId: 2, typeTag: "تَحْلِيْلُ سَبَبِ الْيُتْمِ",
      audioText: "وُلِدَ الرَّسُولُ يَتِيمًا فَقَدْ تُوُفِّيَ أَبُوهُ وَهُوَ فِي بَطْنِ أُمِّهِ",
      question: "لِمَاذَا وُلِدَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَتِيْمًا؟",
      options: ["لِأَنَّ أُمَّهُ تُوُفِّيَتْ حِيْنَ وِلَادَتِهِ", "لِأَنَّ أَبَاهُ عَبْدَ اللَّهِ تُوُفِّيَ وَهُوَ فِي بَطْنِ أُمِّهِ", "لِأَنَّ جَدَّهُ تَرَكَهُ فِي الصَّحْرَاءِ", "لِأَنَّ أَبَاهُ كَانَ مُسَافِرًا"],
      correct: 1, explanation: "تُوُفِّيَ أَبُوْهُ عَبْدُ اللَّهِ وَالنَّبِيُّ مَا زَالَ فِي بَطْنِ أُمِّهِ."
    },
    {
      id: 22, chapterId: 2, typeTag: "التَّرْتِيْبُ الزَّمَنِيُّ (HOTS)",
      audioText: "تُوُفِّيَتْ أُمُّهُ وَكَانَ عُمْرُهُ سِتَّ سِنِينَ فَرَبَّاهُ جَدُّهُ ثُمَّ عَمُّهُ أَبُو طَالِبٍ وَكَانَ عُمْرُهُ ثَمَانِيَ سِنِينَ",
      question: "مَا هُوَ التَّرْتِيْبُ الصَّحِيْحُ لِمَنْ رَبَّى النَّبِيَّ بَعْدَ وَفَاةِ أُمِّهِ آَمِنَةَ؟",
      options: ["رَبَّاهُ عَمُّهُ أَبُو طَالِبٍ أَوَّلًا ثُمَّ جَدُّهُ عَبْدُ الْمُطَّلِبِ", "رَبَّاهُ جَدُّهُ عَبْدُ الْمُطَّلِبِ (من 6-8 سِنِيْنَ) ثُمَّ عَمُّهُ أَبُو طَالِبٍ (من 8 سِنِيْنَ)", "رَبَّاهُ خَدِيْجَةُ رَضِيَ اللَّهُ عَنْهَا", "رَبَّاهُ أَبُو بَكْرٍ الصِّدِّيْقُ"],
      correct: 1, explanation: "رَبَّاهُ جَدُّهُ عَبْدُ الْمُطَّلِبِ ثُمَّ عَمُّهُ أَبُو طَالِبٍ."
    },
    {
      id: 23, chapterId: 2, typeTag: "تَحْلِيْلُ الْقُدْوَةِ فِي الْعَمَلِ",
      audioText: "فِي الصِّغَرِ عَمِلَ مُحَمَّدٌ فِي رِعَايَةِ الْغَنَمِ ثُمَّ ذَهَبَ إِلَى الشَّامِ لِلْتِّجَارَةِ",
      question: "مَا هِيَ الْحِكْمَةُ وَالأَخْلَاقُ المَأْخُوذَةُ مِنْ عَمَلِ النَّبِيِّ فِي رِعَايَةِ الْغَنَمِ وَالتِّجَارَةِ؟",
      options: ["تَعَلُّمُ الصَّبْرِ، وَالأَمَانَةِ، وَالْقِيَادَةِ، وَالاِعْتِمَادِ عَلَى النَّفْسِ", "جَمْعُ الأَمْوَالِ الْكَثِيْرَةِ فَقَطْ", "تَجَنُّبُ الِاعْتِمَادِ عَلَى الآخَرِيْنَ بِلا عَمَلٍ", "الْكَسَلُ عَنِ الْعَمَلِ"],
      correct: 0, explanation: "رِعَايَةُ الْغَنَمِ وَالتِّجَارَةُ تُمَرِّنُ عَلَى الصَّبْرِ وَالأَمَانَةِ وَالْقِيَادَةِ."
    },
    {
      id: 24, chapterId: 2, typeTag: "تَحْلِيْلُ الأَعْدَادِ وَالفَرْقِ",
      audioText: "تَزَوَّجَ خَدِيجَةَ وَكَانَ عُمْرُهُ خَمْسًا وَعِشْرِينَ سَنَةً وَعُمْرُهَا أَرْبَعِينَ سَنَةً",
      question: "كَمْ كَانَ الْفَرْقُ بَيْنَ عُمْرِ النَّبِيِّ وَعُمْرِ خَدِيْجَةَ عِنْدَ زَوَاجِهِمَا؟",
      options: ["5 سَنَوَاتٍ", "10 سَنَوَاتٍ", "15 سَنَةً (النَّبِيُّ 25 سَنَةً، خَدِيْجَةُ 40 سَنَةً)", "20 سَنَةً"],
      correct: 2, explanation: "40 سَنَةً - 25 سَنَةً = 15 سَنَةً."
    },
    {
      id: 25, chapterId: 2, typeTag: "نُقْطَةُ التَّحَوُّلِ فِي النُّبُوَّةِ",
      audioText: "وَلَمَّا بَلَغَ عُمْرُهُ أَرْبَعِينَ سَنَةً بَعَثَ اللَّهُ مُحَمَّدًا نَبِيًّا وَرَسُولًا",
      question: "مَا هُوَ الْحَدَثُ الْعَظِيْمُ الَّذِي حَدَثَ عِنْدَمَا بَلَغَ عُمْرُ النَّبِيِّ 40 سَنَةً؟",
      options: ["سَافَرَ إِلَى الشَّامِ لِلتِّجَارَةِ", "بَعَثَهُ اللَّهُ نَبِيًّا وَرَسُوْلًا", "هَاجَرَ إِلَى الْمَدِيْنَةِ", "تُوُفِّيَ جَدُّهُ عَبْدُ الْمُطَّلِبِ"],
      correct: 1, explanation: "فِي عُمْرِ 40 سَنَةً بَعَثَ اللَّهُ مُحَمَّدًا نَبِيًّا وَرَسُوْلًا."
    },
    {
      id: 26, chapterId: 2, typeTag: "تَحْلِيْلُ عَامِ الْحُزْنِ (HOTS)",
      audioText: "تُوُفِّيَ عَمُّهُ أَبُو طَالِبٍ وَكَانَ عُمْرُهُ خَمْسِينَ سَنَةً ثُمَّ تُوُفِّيَتْ مِنْ بَعْدِهِ زَوْجَتُهُ خَدِيجَةُ",
      question: "لِمَاذَا كَانَتْ وَفَاةُ أَبِي طَالِبٍ وَخَدِيْجَةَ رَضِيَ اللَّهُ عَنْهَا اِخْتِبَارًا شَدِيْدًا فِي الدَّعْوَةِ؟",
      options: ["لِأَنَّهُمَا كَانَا المَلْجَأَ وَالحَامِيَ وَالنَّاصِرَ الأَوَّلَ لِلدَّعْوَةِ فِي مَكَّةَ", "لِأَنَّ مَكَّةَ احْتَرَقَتْ", "لِأَنَّ الأَمْوَالَ انْتَهَتْ", "لِأَنَّ الْمُسْلِمِيْنَ تَرَكُوا الإِسْلَامَ"],
      correct: 0, explanation: "أَبُو طَالِبٍ كَانَ يَحْمِي النَّبِيَّ وَخَدِيْجَةُ كَانَتْ تُعِيْنُهُ بِنَفْسِهَا وَمَالِهَا."
    },
    {
      id: 27, chapterId: 2, typeTag: "تَقْيِيْمُ اسْتِجَابَةِ الدَّعْوَةِ",
      audioText: "خَرَجَ الرَّسُولُ مَعَ أَصْحَابِهِ إِلَى الطَّائِفِ يَدْعُو أَهْلَهَا إِلَى الْإِسْلَامِ فَلَمْ يُسْلِمُوا",
      question: "كَيْفَ كَانَتِ اسْتِجَابَةُ أَهْلِ الطَّائِفِ لِدَعْوَةِ الرَّسُوْلِ فِي ذَلِكَ الْوَقْتِ؟",
      options: ["أَسْلَمَ جَمِيْعُ أَهْلِ الطَّائِفِ فَوْرًا", "رَفَضُوا الدَّعْوَةَ وَلَمْ يُسْلِمُوا فِي ذَلِكَ الْوَقْتِ", "أَعْطَوْا النَّبِيَّ هَدَايَا كَثِيْرَةً", "هَاجَرُوا مَعَهُ إِلَى الْمَدِيْنَةِ"],
      correct: 1, explanation: "النَّصُّ الصَّوْتِيُّ يَقُوْلُ: 'فَلَمْ يُسْلِمُوا'."
    },
    {
      id: 28, chapterId: 2, typeTag: "تَحْلِيْلُ حَادِثَةِ الإِسْرَاءِ",
      audioText: "أَسْرَى اللَّهُ بِرَسُولِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى وَإِلَى السَّمَوَاتِ فِي الْمِعْرَاجِ",
      question: "مَا هُمَا الْمَسْجِدَانِ المَذْكُوْرَانِ فِي حَادِثَةِ الإِسْرَاءِ وَالْمِعْرَاجِ؟",
      options: ["الْمَسْجِدُ الْحَرَامُ (فِي مَكَّةَ) وَالْمَسْجِدُ الأَقْصَى (فِي فِلَسْطِيْنَ)", "الْمَسْجِدُ النَّبَوِيُّ وَمَسْجِدُ قُبَاءَ", "مَسْجِدُ القِبْلَتَيْنِ وَمَسْجِدُ التَّقْوَى", "الْمَسْجِدُ الْحَرَامُ وَالْمَسْجِدُ النَّبَوِيُّ"],
      correct: 0, explanation: "الإِسْرَاءُ كَانَ مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الأَقْصَى."
    },
    {
      id: 29, chapterId: 2, typeTag: "تَحْلِيْلُ الْعُمْرِ وَالتَّارِيْخِ",
      audioText: "وَوَفَاتُهُ فِي الثَّانِي عَشَرَ مِنْ شَهْرِ رَبِيعٍ الأَوَّلِ وَكَانَ عُمْرُهُ ثَلَاثًا وَسِتِّينَ سَنَةً",
      question: "كَمْ كَانَ عُمْرُ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عِنْدَ وَفَاتِهِ فِي 12 رَبِيْعِ الأَوَّلِ؟",
      options: ["50 سَنَةً", "53 سَنَةً", "60 سَنَةً", "63 سَنَةً (ثَلَاثًا وَسِتِّينَ سَنَةً)"],
      correct: 3, explanation: "تُوُفِّيَ النَّبِيُّ وَعُمْرُهُ 63 سَنَةً ('ثَلَاثًا وَسِتِّينَ سَنَةً')."
    },
    {
      id: 30, chapterId: 2, typeTag: "تَحْلِيْلُ الأخْلَاقِ النَّبَوِيَّةِ",
      audioText: "الْحِكَمُ الْمَأْخُوذَةُ مِنْ ذِكْرَى مَوْلِدِ النَّبِيِّ: التَّخَلُّقُ بِأَخْلَاقِ الرَّسُولِ وَاتِّبَاعُ سُنَنِهِ",
      question: "مَا هُوَ الدَّلِيْلُ الْحَقِيْقِيُّ عَلَى حُبِّ النَّبِيِّ فِي حَيَاتِنَا الْيَوْمِيَّةِ؟",
      options: ["التَّخَلُّقُ بِأَخْلَاقِ الرَّسُوْلِ وَاتِّبَاعُ سُنَنِهِ وَنَشْرُ الْخَيْرِ بَيْنَ النَّاسِ", "الاِحْتِفَالُ بِدُوْنِ تَغْيِيْرِ السُّلُوْكِ", "حِفْظُ الأَسْمَاءِ فَقَطْ", "قِرَاءَةُ الْكُتُبِ بِدُوْنِ الْعَمَلِ بِهَا"],
      correct: 0, explanation: "الْحِكْمَةُ الْحَقِيْقِيَّةُ هِيَ التَّخَلُّقُ بِأَخْلَاقِهِ وَاتِّبَاعُ سُنَنِهِ."
    },
    {
      id: 31, chapterId: 2, typeTag: "تَحْلِيْلُ يَوْمِ الْمَوْلِدِ",
      audioText: "قَدْ وُلِدَ فِي يَوْمِ الاثْنَيْنِ فِي عَامِ الْفِيلِ 12 رَبِيعِ الأَوَّلِ",
      question: "فِي أَيِّ يَوْمٍ وَشَهْرٍ وُلِدَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ؟",
      options: ["يَوْمِ الاثْنَيْنِ، 12 رَبِيْعِ الأَوَّلِ", "يَوْمِ الْجُمُعَةِ، 17 رَمَضَانَ", "يَوْمِ الأَحَدِ، 1 شَوَّالٍ", "يَوْمِ الثُّلَاثَاءِ، 10 ذِي الْحِجَّةِ"],
      correct: 0, explanation: "وُلِدَ فِي 'يَوْمِ الاثْنَيْنِ، 12 رَبِيْعِ الأَوَّلِ'."
    },
    {
      id: 32, chapterId: 2, typeTag: "تَحْلِيْلُ اسْمِ الأَبِ وَالأُمِّ",
      audioText: "اسْمُ أَبِيهِ عَبْدُ اللَّهِ بْنُ عَبْدِ الْمُطَّلِبِ وَأُمُّهُ آمِنَةُ بِنْتُ وَهْبٍ",
      question: "مَا اسْمُ أَبِي النَّبِيِّ وَأُمِّهِ؟",
      options: ["أَبُوْهُ عَبْدُ اللَّهِ وَأُمُّهُ آَمِنَةُ", "أَبُوْهُ أَبُو طَالِبٍ وَأُمُّهُ خَدِيْجَةُ", "أَبُوْهُ عَبْدُ الْمُطَّلِبِ وَأُمُّهُ حَلِيْمَةُ", "أَبُوْهُ حَمْزَةُ وَأُمُّهُ فَاطِمَةُ"],
      correct: 0, explanation: "أَبُوْهُ 'عَبْدُ اللَّهِ' وَأُمُّهُ 'آَمِنَةُ بِنْتُ وَهْبٍ'."
    },
    {
      id: 33, chapterId: 2, typeTag: "تَحْلِيْلُ عُمْرِ النَّبِيِّ حِيْنَ تُوُفِّيَتْ أُمُّهُ",
      audioText: "تُوُفِّيَتْ أُمُّهُ وَكَانَ عُمْرُهُ سِتَّ سِنِينَ",
      question: "كَمْ كَانَ عُمْرُ النَّبِيِّ عِنْدَمَا تُوُفِّيَتْ أُمُّهُ آَمِنَةُ؟",
      options: ["4 سِنِيْنَ", "6 سِنِيْنَ (سِتَّ سِنِينَ)", "8 سِنِيْنَ", "10 سِنِيْنَ"],
      correct: 1, explanation: "تُوُفِّيَتْ أُمُّهُ وَكَانَ عُمْرُهُ 'سِتَّ سِنِينَ'."
    },
    {
      id: 34, chapterId: 2, typeTag: "تَحْلِيْلُ عُمْرِ النَّبِيِّ حِيْنَ تُوُفِّيَ جَدُّهُ",
      audioText: "وَلَمَّا تُوُفِّيَ جَدُّهُ عَبْدُ الْمُطَّلِبِ رَبَّاهُ عَمُّهُ وَكَانَ عُمْرُهُ ثَمَانِيَ سِنِينَ",
      question: "كَمْ كَانَ عُمْرُ النَّبِيِّ حِيْنَ تُوُفِّيَ جَدُّهُ عَبْدُ الْمُطَّلِبِ؟",
      options: ["6 سِنِيْنَ", "8 سِنِيْنَ (ثَمَانِيَ سِنِينَ)", "12 سَنَةً", "25 سَنَةً"],
      correct: 1, explanation: "تُوُفِّيَ جَدُّهُ وَكَانَ عُمْرُهُ 'ثَمَانِيَ سِنِينَ'."
    },
    {
      id: 35, chapterId: 2, typeTag: "تَحْلِيْلُ عُمْرِ خَدِيْجَةَ عِنْدَ الزَّوَاجِ",
      audioText: "وَكَانَ عُمْرُهَا أَرْبَعِينَ سَنَةً",
      question: "كَمْ كَانَ عُمْرُ خَدِيْجَةَ رَضِيَ اللَّهُ عَنْهَا عِنْدَمَا تَزَوَّجَتْ بِالنَّبِيِّ؟",
      options: ["25 سَنَةً", "30 سَنَةً", "40 سَنَةً (أَرْبَعِينَ سَنَةً)", "50 سَنَةً"],
      correct: 2, explanation: "كَانَ عُمْرُ خَدِيْجَةَ 'أَرْبَعِينَ سَنَةً'."
    },
    {
      id: 36, chapterId: 2, typeTag: "تَحْلِيْلُ عُمْرِ أَبِي طَالِبٍ عِنْدَ وَفَاتِهِ",
      audioText: "تُوُفِّيَ عَمُّهُ أَبُو طَالِبٍ وَكَانَ عُمْرُهُ خَمْسِينَ سَنَةً",
      question: "كَمْ كَانَ عُمْرُ النَّبِيِّ عِنْدَمَا تُوُفِّيَ عَمُّهُ أَبُو طَالِبٍ؟",
      options: ["40 سَنَةً", "50 سَنَةً (خَمْسِينَ سَنَةً)", "53 سَنَةً", "63 سَنَةً"],
      correct: 1, explanation: "كَانَ عُمْرُ النَّبِيِّ عِنْدَ وَفَاةِ عَمِّهِ 'خَمْسِينَ سَنَةً'."
    },
    {
      id: 37, chapterId: 2, typeTag: "تَحْلِيْلُ عُمْرِ النَّبِيِّ عِنْدَ الْهِجْرَةِ",
      audioText: "وَكَانَتْ هِجْرَتُهُ فِي السَّنَةِ الثَّالِثَةِ وَالْخَمْسِينَ مِنْ عُمْرِهِ",
      question: "كَمْ كَانَ عُمْرُ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عِنْدَ الْهِجْرَةِ؟",
      options: ["40 سَنَةً", "50 سَنَةً", "53 سَنَةً (الثَّالِثَةِ وَالْخَمْسِينَ)", "63 سَنَةً"],
      correct: 2, explanation: "كَانَتْ هِجْرَتُهُ فِي السَّنَةِ 'الثَّالِثَةِ وَالْخَمْسِينَ مِنْ عُمْرِهِ'."
    },
    {
      id: 38, chapterId: 2, typeTag: "تَحْلِيْلُ سَنَةِ الْوَفَاةِ الْهِجْرِيَّةِ",
      audioText: "وَوَفَاتُهُ فِي السَّنَةِ الْحَادِيَةِ عَشْرَةَ لِلْهِجْرَةِ",
      question: "فِي أَيِّ سَنَةٍ هِجْرِيَّةٍ تُوُفِّيَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ؟",
      options: ["فِي السَّنَةِ 11 لِلْهِجْرَةِ", "فِي السَّنَةِ 1 لِلْهِجْرَةِ", "فِي السَّنَةِ 53 لِلْهِجْرَةِ", "فِي السَّنَةِ 100 لِلْهِجْرَةِ"],
      correct: 0, explanation: "تُوُفِّيَ فِي السَّنَةِ 'الْحَادِيَةِ عَشْرَةَ (11) لِلْهِجْرَةِ'."
    },
    {
      id: 39, chapterId: 2, typeTag: "تَحْلِيْلُ اسْمِ الْمُحَاضِرِ فِي الْبَابِ 2",
      audioText: "هُمْ يَسْتَمِعُونَ إِلَى مُحَاضَرَةٍ دِينِيَّةٍ أَلْقَاهَا الْأُسْتَاذُ مُحَمَّدُ إِدْرِيسُ",
      question: "مَنِ الَّذِي أَلْقَى الْمُحَاضَرَةَ فِي ذِكْرَى مَوْلِدِ الرَّسُوْلِ؟",
      options: ["الأُسْتَاذُ مُحَمَّدُ نَبِيْلُ", "الأُسْتَاذُ مُحَمَّدُ إِدْرِيسُ", "الأُسْتَاذُ عُمَرُ", "الأُسْتَاذُ عَلِيٌّ"],
      correct: 1, explanation: "أَلْقَى الْمُحَاضَرَةَ 'الأُسْتَاذُ مُحَمَّدُ إِدْرِيسُ'."
    },
    {
      id: 40, chapterId: 2, typeTag: "تَحْلِيْلُ عُنْوَانِ الْمُحَاضَرَةِ",
      audioText: "وَتَحَدَّثَ الْأُسْتَاذُ عَنْ سِيرَةِ النَّبِيِّ مُنْذُ وِلَادَتِهِ إِلَى وَفَاتِهِ",
      question: "مَا هُوَ عُنْوَانُ الْمُحَاضَرَةِ الدِّيْنِيَّةِ فِي الْبَابِ الثَّانِي؟",
      options: ["سِيْرَةُ النَّبِيِّ مُنْذُ وِلَادَتِهِ إِلَى وَفَاتِهِ", "الْهِجْرَةُ النَّبَوِيَّةُ", "نُزُوْلُ الْقُرْآنِ", "فَضْلُ عِيْدِ الْفِطْرِ"],
      correct: 0, explanation: "العُنْوَانُ هُوَ: 'سِيْرَةُ النَّبِيِّ مُنْذُ وِلَادَتِهِ إِلَى وَفَاتِهِ'."
    },

    // === BAB 3 ISTIMA' (SOAL 41 - 60) ===
    {
      id: 41, chapterId: 3, typeTag: "تَحْلِيْلُ الدَّوَافِعِ فِي غَارِ حِرَاءٍ (HOTS)",
      audioText: "كَانَ النَّبِيُّ مُحَمَّدٌ يَخْلُو بِنَفْسِهِ فِي غَارِ حِرَاءٍ وَيَتَعَبَّدُ اللَّهَ فِيهِ",
      question: "لِمَاذَا كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَخْلُو بِنَفْسِهِ فِي غَارِ حِرَاءٍ قَبْلَ النُّبُوَّةِ؟",
      options: ["لِلْعِبَادَةِ وَالتَّفَكُّرِ فِي خَلْقِ اللَّهِ وَالابْتِعَادِ عَنْ عِبَادَةِ الأَوْثَانِ فِي مَكَّةَ", "لِأَنَّهُ لَمْ يَكُنْ لَدَيْهِ بَيْتٌ فِي مَكَّةَ", "هَرَبًا مِنَ النَّاسِ بِسَبَبِ الدُّيُونِ", "لِلِاسْتِرَاحَةِ مِنَ التِّجَارَةِ"],
      correct: 0, explanation: "كَانَ النَّبِيُّ يَخْلُو فِي الْغَارِ لِيَتَعَبَّدَ اللَّهَ وَيَتَفَكَّرَ فِي مَلَكُوْتِ السَّمَاوَاتِ."
    },
    {
      id: 42, chapterId: 3, typeTag: "تَحْلِيْلُ أُمِّيَّةِ النَّبِيِّ",
      audioText: "قَالَ جِبْرِيلُ :اقْرَأْ، فَقَالَ مُحَمَّدٌ :مَا أَنَا بِقَارِئٍ لِأَنَّ مُحَمَّدًا كَانَ أُمِّيًّا",
      question: "مَا هِيَ الدَّلَالَةُ العَظِيْمَةُ عِنْدَمَا قَالَ النَّبِيُّ 'مَا أَنَا بِقَارِئٍ' لِأَنَّهُ كَانَ أُمِّيًّا؟",
      options: ["تَأْكِيْدُ أَنَّ الْقُرْآنَ مَوْحِيٌّ كَامِلًا مِنَ اللَّهِ، وَلَيْسَ مِنْ صُنْعِ أَوْ قِرَاءَةِ مُحَمَّدٍ", "أَنَّ النَّبِيَّ لَمْ يُرِدْ القِرَاءَةَ", "أَنَّ الظَّلَامَ كَانَ شَدِيْدًا فِي الْغَارِ", "أَنَّهُ لَمْ تَكُنْ هُنَاك كُتُبٌ فِي مَكَّةَ"],
      correct: 0, explanation: "أُمِّيَّةُ النَّبِيِّ دَلِيْلٌ قَاطِعٌ عَلَى أَنَّ الْقُرْآنَ وَحْيٌ مِنَ اللَّهِ."
    },
    {
      id: 43, chapterId: 3, typeTag: "تَحْلِيْلُ أَوَّلِ الْوَحْيِ",
      audioText: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ... الَّذِي عَلَّمَ بِالْقَلَمِ... عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ",
      question: "مَا هُوَ الأَمْرُ الأَوَّلُ وَالأَسَاسِيُّ الَّذِي نَزَلَ بِهِ الْوَحْيُ عَلَى النَّبِيِّ فِي سُوْرَةِ الْعَلَقِ؟",
      options: ["الأَمْرُ بِالْقِرَاءَةِ وَالتَّعَلُّمِ وَالْعِلْمِ بِاسْمِ اللَّهِ", "الأَمْرُ بِجَمْعِ الأَمْوَالِ", "الأَمْرُ بِالسَّفَرِ إِلَى الْمَدِيْنَةِ", "الأَمْرُ بِبِنَاءِ الْمَسَاجِدِ"],
      correct: 0, explanation: "أَوَّلُ أَمْرٍ نَزَلَ فِي الْقُرْآنِ هُوَ: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ'."
    },
    {
      id: 44, chapterId: 3, typeTag: "حِكْمَةُ نُزُوْلِ الْقُرْآنِ مَفْرُوقًا",
      audioText: "وَاسْتَمَرَّ نُزُولُ الْقُرْآنِ ثَلَاثًا وَعِشْرِينَ سَنَةً: ثَلَاثَ عَشْرَةَ سَنَةً فِي مَكَّةَ وَعَشْرَ سَنَوَاتٍ فِي الْمَدِينَةِ",
      question: "كَمْ سَنَةً اسْتَمَرَّ نُزُوْلُ الْقُرْآنِ الْكَرِيْمِ عَلَى النَّبِيِّ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ؟",
      options: ["10 سَنَوَاتٍ", "13 سَنَةً", "23 سَنَةً (13 فِي مَكَّةَ وَ10 فِي الْمَدِينَةِ)", "40 سَنَةً"],
      correct: 2, explanation: "اسْتَمَرَّ نُزُوْلُ الْقُرْآنِ 23 سَنَةً."
    },
    {
      id: 45, chapterId: 3, typeTag: "تَقْيِيْمُ مَوَاقِفِ الـمُسْلِمِيْنَ مِنَ الْقُرْآنِ",
      audioText: "الْقُرْآنُ لَيْسَ لِلْقِرَاءَةِ فَقَطْ بَلْ يُعْمَلُ بِهِ فِي الْحَيَاةِ الْيَوْمِيَّةِ",
      question: "مَا هُوَ المَوْقِفُ الصَّحِيْحُ الَّذِي يَجِبُ عَلَى الْمُسْلِمِ اتِّخَاذُهُ نَحْوَ الْقُرْآنِ الْكَرِيْمِ؟",
      options: ["قِرَاءَةُ حُرُوْفِهِ فَقَطْ دُوْنَ فَهْمِ الْمَعْنَى", "فَهْمُ مَعَانِيْهِ وَالْعَمَلُ بِهِ فِي الْحَيَاةِ الْيَوْمِيَّةِ فِي الْمُجْتَمَعِ وَالدَّوْلَةِ", "وَضْعُهُ فِي الرَّفِّ كَزِيْنَةٍ لِلْبَيْتِ", "قِرَاءَتُهُ فِي شَهْرِ رَمَضَانَ فَقَطْ"],
      correct: 1, explanation: "الْقُرْآنُ 'لَيْسَ لِلْقِرَاءَةِ فَقَطْ، بَلْ يُعْمَلُ بِهِ فِي الْحَيَاةِ الْيَوْمِيَّةِ'."
    },
    {
      id: 46, chapterId: 3, typeTag: "تَحْقِيْقُ مَوَاعِيْدِ الأَعْيَادِ",
      audioText: "لِلْمُسْلِمِينَ عِيدَانِ: عِيدُ الْفِطْرِ فِي الْأَوَّلِ مِنْ شَهْرِ شَوَّالٍ وَعِيدُ الْأَضْحَى فِي الْعَاشِرِ مِنْ شَهْرِ ذِي الْحِجَّةِ",
      question: "مَتَى يَكُوْنُ عِيْدُ الْفِطْرِ وَعِيْدُ الأَضْحَى فِي التَّقْوِيْمِ الْهِجْرِيِّ؟",
      options: ["عِيْدُ الْفِطْرِ فِي 10 ذِي الْحِجَّةِ، وَعِيْدُ الأَضْحَى فِي 1 شَوَّالٍ", "عِيْدُ الْفِطْرِ فِي 1 شَوَّالٍ، وَعِيْدُ الأَضْحَى فِي 10 ذِي الْحِجَّةِ", "كِلَا العِيْدَيْنِ فِي شَهْرِ رَمَضَانَ", "عِيْدُ الْفِطْرِ فِي 17 رَمَضَانَ"],
      correct: 1, explanation: "عِيْدُ الْفِطْرِ فِي 1 شَوَّالٍ وَعِيْدُ الأَضْحَى فِي 10 ذِي الْحِجَّةِ."
    },
    {
      id: 47, chapterId: 3, typeTag: "تَحْلِيْلُ صِلَةِ الرَّحِمِ",
      audioText: "بَعْدَ صَلَاةِ الْعِيدِ هُمْ يَزُورُونَ الْأَقَارِبَ وَالْجِيرَانَ لِيَصِلُوا الرَّحِمَ وَيَسْأَلُوا الْعَفْوَ",
      question: "مَاذَا يَفْعَلُ الْمُسْلِمُوْنَ بَعْدَ أَدَاءِ صَلَاةِ الْعِيْدِ فِي صَبَاحِ الْعِيْدِ؟",
      options: ["يَزُوْرُوْنَ الأَقَارِبَ وَالْجِيْرَانَ لِصِلَةِ الرَّحِمِ وَطَلَبِ الْعَفْوِ عَنِ الْأَخْطَاءِ", "يَرْجِعُوْنَ لِلنَّوْمِ فَوْرًا", "يُسَافِرُوْنَ لِلْعَمَلِ فِي الْمَكَاتِبِ", "يَتَشَاجَرُوْنَ مَعَ الْجِيْرَانِ"],
      correct: 0, explanation: "يَزُورُونَ الأَقَارِبَ لِيَصِلُوا الرَّحِمَ وَيَسْأَلُوا الْعَفْوَ."
    },
    {
      id: 48, chapterId: 3, typeTag: "تَحْلِيْلُ تَوْزِيْعِ الأُضْحِيَّةِ",
      audioText: "فَيَأْكُلُونَ مِنْ لَحْمِ الْأُضْحِيَّةِ وَيُهْدُونَ مِنْهَا لِلْأَقَارِبِ وَيَتَصَدَّقُونَ مِنْهَا عَلَى الْفُقَرَاءِ",
      question: "كَيْفَ يُوَزَّعُ لَحْمُ الأُضْحِيَّةِ فِي عِيْدِ الأَضْحَى كَمَا ذُكِرَ فِي الاِسْتِمَاعِ؟",
      options: ["يُبَاعُ كُلُّ اللَّحْمِ فِي السُّوْقِ", "يَأْكُلُوْنَ مِنْهُ، وَيُهْدُوْنَ لِلأَقَارِبِ، وَيَتَصَدَّقُوْنَ عَلَى الْفُقَرَاءِ وَالْمَسَاكِيْنِ", "يُحْفَظُ فِي الثَّلَّاجَةِ لِلْعَائِلَةِ فَقَطْ", "يُعْطَى لِلأَغْنِيَاءِ فَقَطْ"],
      correct: 1, explanation: "تَوْزِيْعُ الأُضْحِيَّةِ: لِلأَكْلِ، وَالإِهْدَاءِ لِلأَقَارِبِ، وَالصَّدَقَةِ عَلَى الفُقَرَاءِ."
    },
    {
      id: 49, chapterId: 3, typeTag: "تَفْكِيْرٌ نَاقِدٌ (المُسَاوَاةُ)",
      audioText: "فِي الْإِسْلَامِ مُسَاوَاةٌ بَيْنَ النَّاسِ لَا يَفْضُلُ أَحَدٌ عَلَى الْآخَرِ إِلَّا بِالتَّقْوَى",
      question: "مَا هُوَ الْمِقْيَاسُ الوَحِيْدُ لِلأَفْضَلِيَّةِ وَالْكَرَامَةِ بَيْنَ النَّاسِ فِي الإِسْلَامِ؟",
      options: ["الْكَثْرَةُ فِي الأَمْوَالِ وَالمَنَاصِبِ", "النَّسَبُ وَلَوْنُ الْبَشَرَةِ", "التَّقْوَى وَالْعَمَلُ الصَّالِحُ (التَّقْوَى)", "الْجَمَالُ وَالْقُوَّةُ الْبَدَنِيَّةُ"],
      correct: 2, explanation: "مِقْيَاسُ الأَفْضَلِيَّةِ فِي الإِسْلَامِ هُوَ: 'التَّقْوَى'."
    },
    {
      id: 50, chapterId: 3, typeTag: "تَحْلِيْلُ الأخْلَاقِ فِي الأُضْحِيَّةِ",
      audioText: "تُعَلِّمُنَا الْأُضْحِيَّةُ أَيْضًا الْإِخْلَاصَ فِي الْعِبَادَةِ وَالتَّعَاوُنَ وَالتَّقَاسُمَ",
      question: "مَا هِيَ الْقِيَمُ الأَخْلَاقِيَّةُ الَّتِي تُعَلِّمُنَا إِيَّاهَا عِبَادَةُ الأُضْحِيَّةِ؟",
      options: ["الإِخْلَاصُ فِي الْعِبَادَةِ، وَالتَّعَاوُنُ، وَالتَّقَاسُمُ بَيْنَ النَّاسِ", "التَّكَبُّرُ وَالرِّيَاءُ", "البُخْلُ وَالشُّحُّ", "المُنَافَسَةُ فِي الشُّهْرَةِ"],
      correct: 0, explanation: "تُعَلِّمُنَا الأُضْحِيَّةُ: 'الإِخْلَاصَ، وَالتَّعَاوُنَ، وَالتَّقَاسُمَ'."
    },
    {
      id: 51, chapterId: 3, typeTag: "تَحْلِيْلُ عُمْرِ النَّبِيِّ حِيْنَ نَزَلَ الْقُرْآنُ",
      audioText: "نَزَلَ الْقُرْآنُ عَلَى النَّبِيِّ فِي غَارِ حِرَاءٍ وَكَانَ عُمْرُهُ أَرْبَعِينَ سَنَةً",
      question: "كَمْ كَانَ عُمْرُ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عِنْدَمَا نَزَلَ عَلَيْهِ الْقُرْآنُ فِي غَارِ حِرَاءٍ؟",
      options: ["25 سَنَةً", "30 سَنَةً", "40 سَنَةً (أَرْبَعِينَ سَنَةً)", "50 سَنَةً"],
      correct: 2, explanation: "نَزَلَ الْقُرْآنُ وَكَانَ عُمْرُهُ 'أَرْبَعِينَ سَنَةً'."
    },
    {
      id: 52, chapterId: 3, typeTag: "تَحْلِيْلُ اسْمِ الْمَلَكِ المَوْحِيِّ",
      audioText: "ثُمَّ نَزَلَ عَلَيْهِ جِبْرِيلُ بِالْوَحْيِ وَأَمَرَهُ بِالْقِرَاءَةِ",
      question: "مَنِ الْمَلَكُ الَّذِي نَزَلَ بِالْوَحْيِ عَلَى النَّبِيِّ فِي غَارِ حِرَاءٍ؟",
      options: ["الْمَلَكُ مِيْكَائِيْلُ", "الْمَلَكُ جِبْرِيْلُ عَلَيْهِ السَّلَامُ", "الْمَلَكُ إِسْرَافِيْلُ", "الْمَلَكُ عِزْرَائِيْلُ"],
      correct: 1, explanation: "نَزَلَ عَلَيْهِ 'جِبْرِيلُ بِالْوَحْيِ'."
    },
    {
      id: 53, chapterId: 3, typeTag: "تَحْلِيْلُ عَدَدِ السَّنَوَاتِ فِي مَكَّةَ وَالْمَدِينَةِ",
      audioText: "ثَلَاثَ عَشْرَةَ سَنَةً فِي مَكَّةَ وَعَشْرَ سَنَوَاتٍ فِي الْمَدِينَةِ",
      question: "كَمْ سَنَةً نَزَلَ الْقُرْآنُ فِي مَكَّةَ وَكَمْ سَنَةً فِي الْمَدِيْنَةِ؟",
      options: ["13 فِي مَكَّةَ وَ10 فِي الْمَدِينَةِ", "10 فِي مَكَّةَ وَ13 فِي الْمَدِينَةِ", "20 فِي مَكَّةَ وَ3 فِي الْمَدِينَةِ", "5 فِي مَكَّةَ وَ5 فِي الْمَدِينَةِ"],
      correct: 0, explanation: "نَزَلَ '13 سَنَةً فِي مَكَّةَ وَ10 سَنَوَاتٍ فِي الْمَدِينَةِ'."
    },
    {
      id: 54, chapterId: 3, typeTag: "تَحْلِيْلُ الْقُرْآنِ كَدُسْتُوْرٍ",
      audioText: "صَارَ الْقُرْآنُ الْكَرِيمُ دُسْتُورًا لِلْمُسْلِمِينَ فِي حَيَاتِهِمْ",
      question: "مَاذَا صَارَ الْقُرْآنُ الْكَرِيْمُ لِلْمُسْلِمِيْنَ فِي حَيَاتِهِمْ؟",
      options: ["دُسْتُورًا وَمَنْهَجًا لِلْحَيَاةِ", "كِتَابَ قِصَصٍ قَدِيْمَةٍ", "كِتَابًا لِلْمَكْتَبَةِ فَقَطْ", "جَرِيْدَةً يَوْمِيَّةً"],
      correct: 0, explanation: "صَارَ الْقُرْآنُ 'دُسْتُورًا لِلْمُسْلِمِينَ فِي حَيَاتِهِمْ'."
    },
    {
      id: 55, chapterId: 3, typeTag: "تَحْلِيْلُ لَيْلَةِ الْعِيْدِ",
      audioText: "فِي لَيْلَةِ الْعِيدِ يَتَكَلَّمُونَ وَيُكَبِّرُونَ اللَّهَ فِي الْمَسَاجِدِ",
      question: "مَاذَا يَفْعَلُ الْمُسْلِمُوْنَ فِي لَيْلَةِ الْعِيْدِ فِي الْمَسَاجِدِ؟",
      options: ["يُكَبِّرُونَ اللَّهَ فِي الْمَسَاجِدِ (التَّكْبِيْرُ)", "يَنَامُوْنَ خَارِجَ الْمَسْجِدِ", "يَلْعَبُوْنَ كُرَةَ الْقَدَمِ", "يُغْلِقُوْنَ الْمَسَاجِدَ"],
      correct: 0, explanation: "يُكَبِّرُونَ اللَّهَ فِي الْمَسَاجِدِ فِي لَيْلَةِ الْعِيْدِ."
    },
    {
      id: 56, chapterId: 3, typeTag: "تَحْلِيْلُ مَكَانِ صَلَاةِ الْعِيْدِ",
      audioText: "هُمْ يَذْهَبُونَ إِلَى الْمَسَاجِدِ أَوْ فِي الْمَيَادِينِ لِصَلَاةِ الْعِيدِ",
      question: "أَيْنَ يُؤَدِّي الْمُسْلِمُوْنَ صَلَاةَ الْعِيْدِ فِي صَبَاحِ الْعِيْدِ؟",
      options: ["فِي الْمَسَاجِدِ أَوْ فِي الْمَيَادِينِ (الْمَلْعَبِ/الْمَيْدَانِ)", "فِي الْبُيُوْتِ فَقَطْ", "فِي الأَسْوَاقِ", "فِي الْمَكَاتِبِ"],
      correct: 0, explanation: "يُؤَدُّوْنَهَا 'فِي الْمَسَاجِدِ أَوْ فِي الْمَيَادِينِ'."
    },
    {
      id: 57, chapterId: 3, typeTag: "تَحْلِيْلُ مَنِ الَّذِي يَذْبَحُ الأُضْحِيَّةَ",
      audioText: "يَذْبَحُ الْمُسْلِمُونَ الْقَادِرُونَ الْأَضَاحِيَ",
      question: "مَنِ الَّذِي يَذْبَحُ الأُضْحِيَّةَ فِي عِيْدِ الأَضْحَى؟",
      options: ["الْمُسْلِمُونَ الْقَادِرُونَ", "الأَطْفَالُ الصِّغَارُ", "كُلُّ إِنسَانٍ وَلَوْ كَانَ فَقِيْرًا جِدًّا", "غَيْرُ الْمُسْلِمِيْنَ"],
      correct: 0, explanation: "يَذْبَحُ الأُضْحِيَّةَ 'الْمُسْلِمُونَ الْقَادِرُونَ'."
    },
    {
      id: 58, chapterId: 3, typeTag: "تَحْلِيْلُ شَهْرِ عِيْدِ الْفِطْرِ",
      audioText: "عِيدُ الْفِطْرِ فِي الْأَوَّلِ مِنْ شَهْرِ شَوَّالٍ",
      question: "مَا اسْمُ الشَّهْرِ الَّذِي يَقَعُ فِيْهِ عِيْدُ الْفِطْرِ؟",
      options: ["شَهْرُ رَمَضَانَ", "شَهْرُ شَوَّالٍ", "شَهْرُ مُحَرَّمٍ", "شَهْرُ رَبِيْعِ الأَوَّلِ"],
      correct: 1, explanation: "يَقَعُ عِيْدُ الْفِطْرِ فِي 'شَهْرِ شَوَّالٍ'."
    },
    {
      id: 59, chapterId: 3, typeTag: "تَحْلِيْلُ شَهْرِ عِيْدِ الأَضْحَى",
      audioText: "عِيدُ الْأَضْحَى فِي الْعَاشِرِ مِنْ شَهْرِ ذِي الْحِجَّةِ",
      question: "مَا اسْمُ الشَّهْرِ الَّذِي يَقَعُ فِيْهِ عِيْدُ الأَضْحَى؟",
      options: ["شَهْرُ ذِي الْحِجَّةِ", "شَهْرُ رَمَضَانَ", "شَهْرُ شَعْبَانَ", "شَهْرُ صَفَرٍ"],
      correct: 0, explanation: "يَقَعُ عِيْدُ الأَضْحَى فِي 'شَهْرِ ذِي الْحِجَّةِ'."
    },
    {
      id: 60, chapterId: 3, typeTag: "تَحْلِيْلُ شُعُوْرِ الْمُسْلِمِيْنَ بِالْعِيْدِ",
      audioText: "هُمْ مَسْرُورُونَ بِمَجِيءِ الْعِيدِ",
      question: "كَيْفَ يَكُوْنُ شُعُوْرُ الْمُسْلِمِيْنَ عِنْدَ مَجِيْءِ الْعِيْدِ؟",
      options: ["مَسْرُورُونَ وَسُعَدَاءُ (Bahagia/Gembira)", "حَزِيْنُوْنَ", "غَاضِبُوْنَ", "خَائِفُوْنَ"],
      correct: 0, explanation: "شُعُوْرُهُمْ: 'مَسْرُورُونَ بِمَجِيءِ الْعِيدِ'."
    }
  ],

  // Comprehensive Evaluation Quiz Questions (30 Questions Full Arabic)
  evaluationQuiz: [
    // --- BAB 1 QUESTIONS (1-10) ---
    {
      id: 1, chapterId: 1, skill: "المُفْرَدَاتُ",
      question: "مَا مَعْنَى كَلِمَةِ 'مَلْعَبُ الْمَدْرَسَةِ' فِي اللُّغَةِ الإِنْدُونِيْسِيَّةِ؟",
      options: ["Perpustakaan Sekolah", "Lapangan Sekolah", "Ruang Guru", "Laboratorium Sekolah"],
      correct: 1, explanation: "'مَلْعَبُ الْمَدْرَسَةِ' تَعْنِي Lapangan Sekolah."
    },
    {
      id: 2, chapterId: 1, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "مَنْ هُوَ الصَّحَابِيُّ الَّذِي وَضَعَ التَّقْوِيْمَ الْهِجْرِيَّ لأَوَّلِ مَرَّةٍ؟",
      options: ["أَبُو بَكْرٍ الصِّدِّيْقُ رَضِيَ اللَّهُ عَنْهُ", "عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ", "عُثْمَانُ بْنُ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ", "عَلِيُّ بْنُ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُ"],
      correct: 1, explanation: "أَوَّلُ مَنْ وَضَعَ التَّقْوِيْمَ الْهِجْرِيَّ هُوَ عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ."
    },
    {
      id: 3, chapterId: 1, skill: "مَهَارَةُ الْكِتَابَةِ (القَوَاعِدُ)",
      question: "اخْتَرِ الْفِعْلَ الْمُضَارِعَ الصَّحِيْحَ لِلضَّمِيْرِ 'التَّلَامِيْذُ' (هُمْ):",
      options: ["يَجْلِسُ", "يَجْلِسُوْنَ", "تَجْلِسْنَ", "جَلَسَ"],
      correct: 1, explanation: "لِلْجَمْعِ الْمُذَكَّرِ (التَّلَامِيْذُ) يَكُوْنُ الْفِعْلُ: 'يَجْلِسُوْنَ'."
    },
    {
      id: 4, chapterId: 1, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "كَيْفَ يَسْتَعْمِلُ التَّلَامِيْذُ التِّكْنُولُوجِيَا بِحِكْمَةٍ كَمَا فِي النَّصِّ؟",
      options: ["فِي التَّصْوِيْرِ الذَّاتِيِّ فَقَطْ", "فِي نَشْرِ الأخْبَارِ الكَاذِبَةِ (hoax)", "فِي الأَنْشِطَةِ النَّافِعَةِ مِثْلَ الدَّعْوَةِ وَالتَّعَلُّمِ", "فِي اللَّعِبِ كُلَّ الْوَقْتِ"],
      correct: 2, explanation: "يَجِبُ اسْتِعْمَالُ التِّكْنُولُوجِيَا فِي 'الأَنْشِطَةِ النَّافِعَةِ مِثْلَ الدَّعْوَةِ وَالتَّعَلُّمِ'."
    },
    {
      id: 5, chapterId: 1, skill: "مَهَارَةُ الْكَلَامِ",
      question: "أَكْمِلِ الْحِوَارَ: 'أَحْمَدُ: مَاذَا يَفْعَلُ التَّلَامِيْذُ؟ -- حَسَنٌ: هُمْ ... بِسَنَةٍ هِجْرِيَّةٍ جَدِيْدَةٍ'",
      options: ["يَأْكُلُوْنَ", "يَحْتَفِلُوْنَ", "يَنَامُوْنَ", "يَكْتُبُوْنَ"],
      correct: 1, explanation: "الْكَلِمَةُ الصَّحِيْحَةُ هِيَ: 'يَحْتَفِلُوْنَ'."
    },
    {
      id: 6, chapterId: 1, skill: "مَهَارَةُ الإِسْتِمَاعِ",
      question: "أَيْنَ يَحْتَفِلُ التَّلَامِيْذُ بِالسَّنَةِ الْهِجْرِيَّةِ الْجَدِيْدَةِ فِي الاِسْتِمَاعِ؟",
      options: ["فِي الْمَسْجِدِ", "فِي مَلْعَبِ الْمَدْرَسَةِ", "فِي الْفَصْلِ", "فِي الْبَيْتِ"],
      correct: 1, explanation: "يَحْتَفِلُ التَّلَامِيْذُ 'فِي مَلْعَبِ الْمَدْرَسَةِ'."
    },
    {
      id: 7, chapterId: 1, skill: "المُفْرَدَاتُ",
      question: "مَا هِيَ التَّرْجَمَةُ الْعَرَبِيَّةُ الصَّحِيْحَةُ لِكَلِمَةِ 'Media Sosial'؟",
      options: ["وَسَائِلُ التَّوَاصُلِ الاِجْتِمَاعِيِّ", "التَّصْوِيْرُ الذَّاتِيُّ", "تَقْوِيْمُ الْعَامِ", "الْمُحَاضَرَةُ الدِّيْنِيَّةُ"],
      correct: 0, explanation: "'وَسَائِلُ التَّوَاصُلِ الاِجْتِمَاعِيِّ' تَعْنِي Media Sosial."
    },
    {
      id: 8, chapterId: 1, skill: "مَهَارَةُ الْكِتَابَةِ (القَوَاعِدُ)",
      question: "حَوِّلِ الْفِعْلَ الْمَاضِيَ 'هَاجَرَ' لِلضَّمِيْرِ 'هُمْ':",
      options: ["هَاجَرَتْ", "هَاجَرُوا", "هَاجَرْنَ", "هَاجَرْتَ"],
      correct: 1, explanation: "لِلضَّمِيْرِ هُمْ يَكُوْنُ الْفِعْلُ: 'هَاجَرُوا'."
    },
    {
      id: 9, chapterId: 1, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "مَاذَا تَرَكَ الرَّسُوْلُ وَأَصْحَابُهُ فِي مَكَّةَ عِنْدَ الْهِجْرَةِ؟",
      options: ["بُيُوتَهُمْ فَقَطْ", "وَطَنَهُمْ وَبُيُوتَهُمْ وَأَمْوَالَهُمْ وَتِجَارَتَهُمْ", "مَلابِسَهُمْ وَأَكْلَهُمْ فَقَطْ", "لَمْ يَتْرُكُوا شَيْئًا"],
      correct: 1, explanation: "تَرَكُوا 'وَطَنَهُمْ وَبُيُوتَهُمْ وَأَمْوَالَهُمْ وَتِجَارَتَهُمْ فِي مَكَّةَ'."
    },
    {
      id: 10, chapterId: 1, skill: "مَهَارَةُ الْكِتَابَةِ",
      question: "اخْتَرِ التَّرْتِيْبَ الصَّحِيْحَ لِلْجُمْلَةِ: 'Muharram adalah bulan pertama'",
      options: ["شَهْرُ مُحَرَّمٍ هُوَ الشَّهْرُ الأَوَّلُ", "الأَوَّلُ شَهْرُ هُوَ مُحَرَّمٍ", "هُوَ مُحَرَّمٍ الشَّهْرُ الأَوَّلُ", "شَهْرُ الأَوَّلُ مُحَرَّمٍ هُوَ"],
      correct: 0, explanation: "التَّرْتِيْبُ الصَّحِيْحُ: 'شَهْرُ مُحَرَّمٍ هُوَ الشَّهْرُ الأَوَّلُ'."
    },

    // --- BAB 2 QUESTIONS (11-20) ---
    {
      id: 11, chapterId: 2, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "كَمْ كَانَ عُمْرُ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عِنْدَمَا بَعَثَهُ اللَّهُ نَبِيًّا وَرَسُولًا؟",
      options: ["25 سَنَةً", "40 سَنَةً", "50 سَنَةً", "63 سَنَةً"],
      correct: 1, explanation: "بَلَغَ عُمْرُهُ 'أَرْبَعِينَ سَنَةً' عِنْدَمَا بَعَثَهُ اللَّهُ نَبِيًّا."
    },
    {
      id: 12, chapterId: 2, skill: "مَهَارَةُ الْكَلَامِ",
      question: "أَكْمِلِ الْحِوَارَ: 'عُمَر: مَتَى وُلِدَ النَّبِيُّ؟ -- عَلِيّ: وُلِدَ فِي يَوْمِ ... فِي عَامِ الْفِيلِ'",
      options: ["الأَحَدِ", "الاثْنَيْنِ", "الْجُمُعَةِ", "الأَرْبِعَاءِ"],
      correct: 1, explanation: "وُلِدَ النَّبِيُّ فِي يَوْمِ 'الاثْنَيْنِ'."
    },
    {
      id: 13, chapterId: 2, skill: "المُفْرَدَاتُ",
      question: "مَا مَعْنَى كَلِمَةِ 'رِعَايَةُ الْغَنَمِ' فِي اللُّغَةِ الإِنْدُونِيْسِيَّةِ؟",
      options: ["Perdagangan", "Menggembala Kambing", "Berhijrah", "Ceramah Agama"],
      correct: 1, explanation: "'رِعَايَةُ الْغَنَمِ' تَعْنِي Menggembala Kambing."
    },
    {
      id: 14, chapterId: 2, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "مَنْ هِيَ أَوَّلُ امْرَأَةٍ آمَنَتْ بِاللَّهِ وَرَسُوْلِهِ وَصَدَّقَتْ نُبُوَّتَهُ؟",
      options: ["آَمِنَةُ بِنْتُ وَهْبٍ", "خَدِيْجَةُ بِنْتُ خُوَيْلِدٍ رَضِيَ اللَّهُ عَنْهَا", "عَائِشَةُ بِنْتُ أَبِي بَكْرٍ", "فَاطِمَةُ الزَّهْرَاءُ"],
      correct: 1, explanation: "أَوَّلُ امْرَأَةٍ آمَنَتْ بِاللَّهِ وَرَسُوْلِهِ هِيَ خَدِيْجَةُ رَضِيَ اللَّهُ عَنْهَا."
    },
    {
      id: 15, chapterId: 2, skill: "مَهَارَةُ الْكِتَابَةِ (القَوَاعِدُ)",
      question: "كَيْفَ نَكْتُبُ عُمْرَ وَفَاةِ النَّبِيِّ (63 سَنَةً) بِاللُّغَةِ الْعَرَبِيَّةِ؟",
      options: ["خَمْسًا وَعِشْرِينَ سَنَةً", "أَرْبَعِينَ سَنَةً", "ثَلَاثًا وَسِتِّينَ سَنَةً", "خَمْسِينَ سَنَةً"],
      correct: 2, explanation: "63 سَنَةً تُكْتَبُ: 'ثَلَاثًا وَسِتِّينَ سَنَةً'."
    },
    {
      id: 16, chapterId: 2, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "مَنْ رَبَّى النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بَعْدَ وَفَاةِ أُمِّهِ آَمِنَةَ؟",
      options: ["عَمُّهُ أَبُو طَالِبٍ", "جَدُّهُ عَبْدُ الْمُطَّلِبِ", "حَلِيْمَةُ السَّعْدِيَّةُ", "أَبُو بَكْرٍ الصِّدِّيْقُ"],
      correct: 1, explanation: "رَبَّاهُ 'جَدُّهُ عَبْدُ الْمُطَّلِبِ' عِنْدَمَا كَانَ عُمْرُهُ سِتَّ سِنِيْنَ."
    },
    {
      id: 17, chapterId: 2, skill: "مَهَارَةُ الإِسْتِمَاعِ",
      question: "إِلَى أَيْنَ ذَهَبَ مُحَمَّدٌ مَعَ عَمِّهِ أَبِي طَالِبٍ لِلتِّجَارَةِ فِي الصِّغَرِ؟",
      options: ["إِلَى الْمَدِيْنَةِ", "إِلَى الشَّامِ", "إِلَى الْيَمَنِ", "إِلَى مِصْرَ"],
      correct: 1, explanation: "ذَهَبَ 'إِلَى الشَّامِ' مَعَ عَمِّهِ أَبِي طَالِبٍ لِلتِّجَارَةِ."
    },
    {
      id: 18, chapterId: 2, skill: "المُفْرَدَاتُ",
      question: "مَا مَعْنَى مُصْطَلَحِ 'عَامُ الْفِيلِ' فِي التَّارِيْخِ؟",
      options: ["Tahun Hijrah", "Tahun Gajah", "Tahun Kesedihan", "Tahun Kemenangan"],
      correct: 1, explanation: "'عَامُ الْفِيلِ' يَعْنِي Tahun Gajah."
    },
    {
      id: 19, chapterId: 2, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "مَا اسْمُ الْحَادِثَةِ الَّتِي أَسْرَى اللَّهُ بِهَا بِرَسُوْلِهِ لَيْلًا إِلَى الْمَسْجِدِ الأَقْصَى وَالسَّمَاوَاتِ؟",
      options: ["الْهِجْرَةُ", "الإِسْرَاءُ وَالْمِعْرَاجُ", "نُزُولُ الْقُرْآنِ", "فَتْحُ مَكَّةَ"],
      correct: 1, explanation: "تِلْكُ الْحَادِثَةُ هِيَ: 'الإِسْرَاءُ وَالْمِعْرَاجُ'."
    },
    {
      id: 20, chapterId: 2, skill: "مَهَارَةُ الْكَلَامِ",
      question: "مَا هِيَ الْحِكْمَةُ المَأْخُوذَةُ مِنْ ذِكْرَى مَوْلِدِ النَّبِيِّ كَمَا فِي النَّصِّ؟",
      options: ["جَمْعُ الأَمْوَالِ", "تَزِيْدُ الْحُبَّ لِلنَّبِيِّ وَاتِّبَاعُ سُنَنِهِ وَالتَّخَلُّقُ بِأَخْلَاقِهِ", "اللَّعِبُ مَعَ الأَصْدِقَاءِ", "السَّفَرُ لِلْعُطْلَةِ"],
      correct: 1, explanation: "الْحِكْمَةُ هِيَ: 'تَزِيْدُ الْحُبَّ لِلنَّبِيِّ وَالتَّخَلُّقُ بِأَخْلَاقِ الرَّسُولِ'."
    },

    // --- BAB 3 QUESTIONS (21-30) ---
    {
      id: 21, chapterId: 3, skill: "مَهَارَةُ الإِسْتِمَاعِ",
      question: "أَيْنَ نَزَلَ الْقُرْآنُ الْكَرِيْمُ عَلَى النَّبِيِّ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لأَوَّلِ مَرَّةٍ؟",
      options: ["فِي الْمَسْجِدِ الْحَرَامِ", "فِي غَارِ حِرَاءٍ", "فِي الْمَسْجِدِ النَّبَوِيِّ", "فِي الطَّائِفِ"],
      correct: 1, explanation: "نَزَلَ الْقُرْآنُ 'فِي غَارِ حِرَاءٍ'."
    },
    {
      id: 22, chapterId: 3, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "فِي أَيِّ لَيْلَةٍ نَزَلَ الْقُرْآنُ عَلَى النَّبِيِّ فِي شَهْرِ رَمَضَانَ؟",
      options: ["فِي اللَّيْلَةِ الأُوْلَى", "فِي اللَّيْلَةِ السَّابِعَةِ عَشْرَةَ (17)", "فِي اللَّيْلَةِ العِشْرِيْنَ", "فِي اللَّيْلَةِ الثَّلَاثِيْنَ"],
      correct: 1, explanation: "نَزَلَ 'فِي اللَّيْلَةِ السَّابِعَةِ عَشْرَةَ مِنْ شَهْرِ رَمَضَانَ'."
    },
    {
      id: 23, chapterId: 3, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "مَتَى يَحْتَفِلُ الْمُسْلِمُوْنَ بِعِيْدِ الْفِطْرِ الْمُبَارَكِ؟",
      options: ["فِي 1 مُحَرَّمٍ", "فِي 17 رَمَضَانَ", "فِي الأَوَّلِ مِنْ شَهْرِ شَوَّالٍ", "فِي 10 ذِي الْحِجَّةِ"],
      correct: 2, explanation: "عِيْدُ الْفِطْرِ فِي 'الأَوَّلِ مِنْ شَهْرِ شَوَّالٍ'."
    },
    {
      id: 24, chapterId: 3, skill: "مَهَارَةُ الْكِتَابَةِ (القَوَاعِدُ)",
      question: "مَا هِيَ الآيَةُ الأُوْلَى مِنْ سُوْرَةِ الْعَلَقِ الَّتِي نَزَلَتْ فِي غَارِ حِرَاءٍ؟",
      options: ["اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ", "خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ", "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ", "الَّذِي عَلَّمَ بِالْقَلَمِ"],
      correct: 0, explanation: "الآيَةُ الأُوْلَى هِيَ: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ'."
    },
    {
      id: 25, chapterId: 3, skill: "المُفْرَدَاتُ",
      question: "مَا مَعْنَى كَلِمَةِ 'الأُضْحِيَّةُ' فِي الْعِيْدِ؟",
      options: ["Pakaian Idul Fitri", "Hewan Kurban", "Zakat Fitrah", "Makanan Manis"],
      correct: 1, explanation: "'الأُضْحِيَّةُ' تَعْنِي Hewan Kurban."
    },
    {
      id: 26, chapterId: 3, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "كَمْ سَنَةً اسْتَمَرَّ نُزُوْلُ الْقُرْآنِ الْكَرِيْمِ عَلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ؟",
      options: ["10 سَنَوَاتٍ", "13 سَنَةً", "23 سَنَةً (13 فِي مَكَّةَ وَ10 فِي الْمَدِينَةِ)", "40 سَنَةً"],
      correct: 2, explanation: "اسْتَمَرَّ نُزُوْلُ الْقُرْآنِ 'ثَلَاثًا وَعِشْرِينَ سَنَةً'."
    },
    {
      id: 27, chapterId: 3, skill: "مَهَارَةُ الْكَلَامِ",
      question: "مَاذَا يَفْعَلُ الْمُسْلِمُوْنَ بَعْدَ صَلَاةِ عِيْدِ الْفِطْرِ كَمَا فِي النَّصِّ؟",
      options: ["يَنَامُوْنَ كُلَّ النَّهَارِ", "يَزُورُونَ الْأَقَارِبَ وَالْجِيرَانَ لِيَصِلُوا الرَّحِمَ وَيَسْأَلُوا الْعَفْوَ", "يُسَافِرُوْنَ لِلْعَمَلِ", "يَبْقَوْنَ بِمُفْرَدِهِمْ"],
      correct: 1, explanation: "يَزُورُونَ 'الْأَقَارِبَ وَالْجِيرَانَ لِيَصِلُوا الرَّحِمَ'."
    },
    {
      id: 28, chapterId: 3, skill: "مَهَارَةُ الْكِتَابَةِ (القَوَاعِدُ)",
      question: "مَا هُوَ فِعْلُ الأَمْرِ الصَّحِيْحُ فِي بِدَايَةِ سُوْرَةِ الْعَلَقِ؟",
      options: ["خَلَقَ", "عَلَّمَ", "اقْرَأْ", "نَزَلَ"],
      correct: 2, explanation: "'اقْرَأْ' هُوَ فِعْلُ أَمْرٍ."
    },
    {
      id: 29, chapterId: 3, skill: "مَهَارَةُ الإِسْتِمَاعِ",
      question: "فِي أَيِّ يَوْمٍ يَكُوْنُ عِيْدُ الأَضْحَى الْمُبَارَكُ؟",
      options: ["فِي 1 شَوَّالٍ", "فِي الْعَاشِرِ مِنْ شَهْرِ ذِي الْحِجَّةِ (10)", "فِي 17 رَمَضَانَ", "فِي 12 رَبِيْعِ الأَوَّلِ"],
      correct: 1, explanation: "عِيْدُ الأَضْحَى فِي 'الْعَاشِرِ مِنْ شَهْرِ ذِي الْحِجَّةِ'."
    },
    {
      id: 30, chapterId: 3, skill: "مَهَارَةُ الْقِرَاءَةِ",
      question: "مَا هِيَ الْحِكْمَةُ الرَّئِيْسِيَّةُ مِنْ عِبَادَةِ الأُضْحِيَّةِ كَمَا فِي النَّصِّ؟",
      options: ["التَّفَاخُرُ بِالأَمْوَالِ", "الإِخْلَاصُ فِي الْعِبَادَةِ وَالتَّعَاوُنُ وَالتَّقَاسُمُ بَيْنَ النَّاسِ", "طَلَبُ الثَّنَاءِ مِنَ النَّاسِ", "جَمْعُ اللُّحُوْمِ فِي الْبَيْتِ"],
      correct: 1, explanation: "تُعَلِّمُنَا الأُضْحِيَّةُ: 'الْإِخْلَاصَ فِي الْعِبَادَةِ وَالتَّعَاوُنَ وَالتَّقَاسُمَ'."
    }
  ]
};
