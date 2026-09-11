/* ==========================================================================
   KRONIK NUSANTARA - KURIKULUM SEJARAH INDONESIA SMK LENGKAP
   Sesuai Capaian Pembelajaran (CP) Kemendikdasmen / Kurikulum Merdeka
   Kelas X (Fase E) & Kelas XI (Fase F)
   ========================================================================== */

export const CURRICULUM_DATA = {
  'kelas-x': {
    grade: 'Kelas X SMK',
    phase: 'Fase E',
    cpHeader: 'Capaian Pembelajaran (CP) Fase E: Peserta didik mampu memahami konsep dasar ilmu sejarah, menganalisis asal-usul nenek moyang bangsa Indonesia, jalur perdagangan rempah Nusantara, corak peradaban kerajaan Hindu-Buddha dan Islam; menghubungkannya secara spasial dan temporal; serta menumbuhkan kesadaran sejarah dan nilai-nilai kebanggaan maritim yang relevan dengan profil lulusan SMK.',
    modules: [
      {
        id: 'smk-x-1',
        title: 'Konsep Asal-Usul Nenek Moyang Bangsa Indonesia & Budaya Praaksara',
        phase: 'Fase E',
        grade: 'Kelas X',
        icon: '🦴',
        period: 'Zaman Praaksara - Holosen (± 4.500 SM - Abad 4 M)',
        cpSummary: 'Menganalisis teori-teori migrasi nenek moyang, pembentukan geologis kepulauan, corak kehidupan berburu hingga perundagian, serta kearifan lokal tradisi megalitikum.',
        syllabus: {
          atp: [
            '10.1.1 Mengidentifikasi dan membandingkan 4 teori utama asal-usul nenek moyang bangsa Indonesia berdasarkan bukti linguistik, arkeologis, dan genetika.',
            '10.1.2 Menganalisis pengaruh perubahan geologis (Paparan Sunda & Sahul) terhadap pola migrasi fauna, flora, dan kelompok manusia purba di Nusantara.',
            '10.1.3 Menguraikan proses evolusi sosial-ekonomi dari food gathering (nomaden) menuju food producing (sedenter) dan spesialisasi kerja masa perundagian.',
            '10.1.4 Mengevaluasi teknologi metalurgi purba (bivalve & a cire perdue) serta nilai-nilai gotong royong dalam kebudayaan megalitikum.'
          ],
          meaningfulUnderstanding: 'Keberagaman suku bangsa dan budaya di Indonesia bukanlah pemisah, melainkan hasil dari gelombang migrasi maritim ribuan tahun yang beradaptasi dengan bentang alam kepulauan dan melahirkan kearifan lokal yang tangguh.',
          essentialQuestions: [
            'Mengapa teori Out of Taiwan dianggap memiliki bukti paling kokoh dibandingkan teori lainnya?',
            'Bagaimana penemuan teknologi pengolahan logam pada masa perundagian mengubah struktur sosial masyarakat praaksara?'
          ]
        },
        subtopics: [
          {
            heading: '1. Historiografi & 4 Teori Utama Migrasi Nenek Moyang',
            content: `Kajian ilmiah modern mengenai asal-usul manusia di kepulauan Indonesia didasarkan pada perpaduan tiga disiplin ilmu: arkeologi (temuan fosil dan artefak), linguistik historis komparatif (rumpun bahasa), dan genetika molekuler (analisis DNA mitokondria dan kromosom Y). Terdapat empat teori utama yang mendasari pemahaman sejarah ini:

1. **Teori Out of Taiwan (Didukung Riset Linguistik Robert Blust & Genetika Peter Bellwood)**:
Menyatakan bahwa nenek moyang penutur rumpun bahasa Austronesia bermigrasi dari Formosa (Taiwan) sekitar 4.500–3.000 SM. Migrasi maritim menggunakan perahu cadik ini bergerak ke selatan menuju Filipina, lalu bercabang dua:
- Jalur barat: Menuju Kalimantan, Sumatra, Jawa, hingga ke Semenanjung Malaya dan menyeberangi Samudra Hindia ke Pulau Madagaskar di lepas pantai timur Afrika.
- Jalur timur: Menuju Sulawesi, Maluku, Nusa Tenggara, Papua bagian pesisir, hingga menyebar ke Kepulauan Oseania (Mikronesia, Melanesia, dan Polinesia).
Bukti terkuat teori ini adalah 90% bahasa daerah di Indonesia berakar dari rumpun Austronesia dan adanya kesamaan teknik pertanian menanam padi, jelai, serta pembiakan babi dan anjing.

2. **Teori Out of Africa (Didukung Riset Genetika Modern)**:
Menyatakan bahwa seluruh manusia modern (*Homo sapiens*) berakar dari satu populasi di Afrika Timur sekitar 100.000–150.000 tahun lalu. Sekitar 60.000–70.000 tahun lalu, gelombang manusia bermigrasi menyusuri pesisir Samudra Hindia (*Coastal Migration Route*) menuju Asia Selatan, Asia Tenggara, dan tiba di Paparan Sahul (kawasan timur Indonesia dan Australia), yang menjadi leluhur kelompok ras Australomelanesoid/Papuan.

3. **Teori Yunnan (Gelombang Proto Melayu & Deutro Melayu)**:
Menyatakan bahwa gelombang manusia purba datang dari lembah Sungai Mekong dan Sungai Salween di Yunnan, Tiongkok Selatan. Teori ini membagi migrasi ke dalam dua gelombang:
- *Proto Melayu (Melayu Tua, ± 1.500 SM)*: Datang membawa kebudayaan Neolitikum tingkat tinggi berupa beliung persegi (jalur barat) dan kapak lonjong (jalur timur). Keturunannya saat ini antara lain suku Batak, Dayak, Toraja, Nias, dan Sasak.
- *Deutro Melayu (Melayu Muda, ± 500 SM)*: Datang membawa kebudayaan logam perunggu dari peradaban Dongson (Vietnam Utara). Keturunannya antara lain suku Jawa, Melayu, Sunda, Bugis, Bali, dan Minangkabau.

4. **Teori Nusantara (Prof. Mohammad Yamin, J. Crawford, & Sutan Takdir Alisjahbana)**:
Menyatakan bahwa bangsa Indonesia tidak bermigrasi dari wilayah luar, melainkan berkembang secara mandiri di wilayah kepulauan Indonesia sendiri. Teori ini didukung oleh banyaknya temuan fosil manusia purba tertua di dunia di lembah Sungai Bengawan Solo, seperti *Meganthropus palaeojavanicus*, *Pithecanthropus erectus* (Trinil, Ngawi), serta *Homo soloensis* dan *Homo wajakensis* yang menunjukkan kesinambungan biologis di tanah Jawa.`
          },
          {
            heading: '2. Paleogeografi Kepulauan Nusantara: Paparan Sunda & Paparan Sahul',
            content: `Kondisi geologis Indonesia pada masa Glasial (Zaman Es) sekitar 20.000 tahun lalu sangat berbeda dengan kondisi saat ini. Penurunan permukaan air laut global hingga 120 meter di bawah permukaan laut modern menyebabkan terbentuknya dua daratan benua raksasa:

• **Paparan Sunda (Sunda Shelf)**: Wilayah barat Indonesia (Sumatra, Jawa, Kalimantan, Semenanjung Malaya, dan Laut Jawa) menyatu menjadi satu daratan besar yang terhubung langsung dengan daratan utama Benua Asia (*Asia Daratan*). Hal ini menjelaskan mengapa fauna di wilayah barat Indonesia bersifat Asiatis (gajah, harimau, badak, orangutan).
• **Paparan Sahul (Sahul Shelf)**: Wilayah timur Indonesia (Papua dan Laut Arafura) menyatu langsung dengan Benua Australia. Hal ini menjelaskan mengapa fauna di wilayah timur bersifat Australis (kanguru pohon, burung cendrawasih, kasuari).
• **Zona Peralihan Wallacea**: Wilayah kepulauan di antara kedua paparan tersebut (Sulawesi, Maluku, Nusa Tenggara) terpisahkan oleh palung laut dalam yang tidak pernah surut meskipun pada puncak Zaman Es. Dibatasi oleh *Garis Wallace* dan *Garis Weber*, kawasan Wallacea ini menjadi surga endemisme satwa unik (anoa, babirusa, komodo) dan menuntut manusia purba memiliki keahlian navigasi maritim tingkat lanjut untuk menyeberanginya menggunakan rakit bambu atau perahu kayu purba.`
          },
          {
            heading: '3. Evolusi Corak Kehidupan Sosial-Ekonomi & Kebudayaan',
            content: `Perkembangan corak hidup masyarakat praaksara mengalami evolusi revolusioner dari ketergantungan pasif pada alam menuju pencipta peradaban mandiri:

1. **Masa Berburu dan Mengumpulkan Makanan Tingkat Sederhana (Paleolitikum)**:
- Pola Hidup: Nomaden (berpindah-pindah mengikuti kawanan hewan buruan dan sumber air) dalam kelompok kecil 10–15 orang.
- Teknologi: Perkakas batu kasar tanpa diasah, seperti kapak perimbas (*chopper*) dan kapak genggam dari tradisi Pacitan, serta alat serpih (*flakes*) dan sudip tulang dari tradisi Ngandong.

2. **Masa Berburu dan Mengumpulkan Makanan Tingkat Lanjut (Mesolitikum)**:
- Pola Hidup: Semisedenter (mulai tinggal sementara di gua-gua karang atau pesisir pantai).
- Bukti Arkeologis Monumental:
  * *Kjokkenmoddinger*: Timbunan fosil sampah dapur berupa cangkang kerang dan siput yang mengeras dan menggunung hingga ketinggian 7 meter di sepanjang pesisir timur Sumatra (Medan hingga Aceh). Di dalamnya ditemukan kapak genggam Sumatra (*pebble*).
  * *Abris Sous Roche*: Ceruk payung batu karang tempat tinggal manusia purba. Ditemukan lukisan dinding gua (*rock art*) tertua di dunia di Leang-Leang (Maros-Pangkep, Sulawesi Selatan) dan Sangkulirang (Kalimantan Timur) berupa cap telapak tangan stensil merah dan lukisan babi rusa yang berkaitan erat dengan upacara ritual perburuan dan penghormatan arwah leluhur.

3. **Masa Bercocok Tanam (Neolitikum - Revolusi Peradaban)**:
- Terjadi lompatan peradaban (*Neolithic Revolution*): beralih dari *food gathering* (konsumen pasif) menjadi *food producing* (produsen aktif melalui budidaya tanaman padi gaga, keladi, dan sukun).
- Pola Hidup: Menetap (*sedenter*) dalam perkampungan permanen yang dipimpin seorang kepala suku dengan sistem pemilihan *Primus Inter Pares* (yang terkemuka di antara sesamanya).
- Teknologi: Perkakas batu telah diasah halus sempurna di kedua sisinya, seperti beliung persegi (*square adze*) untuk mencangkul tanah dan membuat perahu lesung, serta kapak lonjong (*oval adze*). Mulai berkembang teknologi pembuatan tembikar (gerabah) dan anyaman serat kayu.`
          },
          {
            heading: '4. Metalurgi Masa Perundagian & Tradisi Megalitikum',
            content: `Puncak pencapaian teknologi praaksara tercermin pada penguasaan ilmu metalurgi (teknik pengecoran logam) dan arsitektur batu besar:

1. **Teknologi Metalurgi Perundagian**:
Istilah *undagi* berarti golongan masyarakat yang memiliki keterampilan kerja pertukangan khusus. Logam perunggu (campuran tembaga 80% dan timah 20%) dibuat menggunakan dua teknik cetak canggih:
- *Teknik Bivalve (Setangkup)*: Menggunakan dua keping cetakan batu yang diukir negatif di bagian dalam, kemudian ditangkupkan dan diikat. Logam cair dituangkan melalui lubang atas. Keunggulannya: cetakan batu ini dapat digunakan berulang-ulang untuk memproduksi alat kerja massal (seperti kapak corong/kapak sepatu).
- *Teknik A Cire Perdue (Lilin Terbuang)*: Membuat model benda kerja dari lilin lebah, dilapisi tanah liat tahan panas, dipanaskan hingga lilin meleleh keluar meninggalkan rongga cetak, lalu diisi logam perunggu cair. Cetakan tanah liat harus dipecahkan untuk mengambil hasilnya. Teknik ini digunakan untuk menghasilkan karya seni bernilai tinggi dengan ornamen detail yang rumit, seperti Nekara Perunggu (genderang perang dan pemanggil hujan bermotif bintang dan katak) serta Moko di Pulau Alor.

2. **Tradisi Megalitikum (Batu Besar) & Sistem Nilai**:
Struktur megalitikum dibangun sebagai wujud penghormatan sakral kepada arwah leluhur yang diyakini tetap memengaruhi keselamatan masyarakat:
- *Menhir*: Tugu batu tunggal yang ditegakkan untuk memuja roh nenek moyang atau tempat mengikat hewan kurban.
- *Dolmen*: Meja batu berkaki batu tegak yang berfungsi sebagai altar sesaji atau penutup kubur batu.
- *Sarkofagus*: Keranda atau peti mati batu berbentuk lesung bertangkup penutup, banyak ditemukan di Bali dan Sumatra.
- *Waruga*: Kubur batu khas Minahasa berbentuk kubus dengan penutup menyerupai atap rumah adat, di mana jenazah diposisikan meringkuk seperti bayi dalam rahim.
- *Punden Berundak*: Struktur batu bertingkat yang berfungsi sebagai tempat pemujaan roh leluhur di dataran tinggi. Konsep arsitektur bertingkat ini merupakan cikal bakal asli arsitektur candi Hindu-Buddha di Indonesia (seperti Candi Borobudur dan Candi Sukuh).`
          }
        ],
        glossary: [
          { term: 'Austronesia', def: 'Rumpun keluarga bahasa kepulauan terbesar di dunia yang mencakup wilayah dari Madagaskar di barat hingga Pulau Paskah di timur.' },
          { term: 'Paparan Sunda', def: 'Daratan benua pada Zaman Es yang menyatukan Pulau Sumatra, Jawa, Kalimantan, dan Semenanjung Malaya dengan Asia Daratan.' },
          { term: 'Kjokkenmoddinger', def: 'Fosil bukit sampah dapur sisa konsumsi kerang dan siput laut setinggi 7 meter yang menjadi ciri khas kebudayaan Mesolitikum pesisir.' },
          { term: 'Abris Sous Roche', def: 'Gua ceruk payung batu karang yang dijadikan tempat tinggal dan tempat melukis dinding oleh manusia praaksara.' },
          { term: 'A Cire Perdue', def: 'Metode pengecoran logam menggunakan model lilin lebah yang meleleh saat dipanaskan (Lost Wax Casting).' },
          { term: 'Bivalve', def: 'Metode pengecoran logam menggunakan dua bilah cetakan batu setangkup yang dapat dipakai berulang-ulang.' },
          { term: 'Primus Inter Pares', def: 'Sistem suksesi kepemimpinan tradisional berdasarkan keunggulan fisik, kewibawaan spiritual, dan kecakapan berburu.' },
          { term: 'Punden Berundak', def: 'Bangunan megalitikum bertingkat-tingkat yang menjadi basis arsitektur lokal asli candi di Indonesia.' }
        ],
        reflectionQuestions: [
          'Bagaimana bukti bahwa nenek moyang bangsa Indonesia adalah pelaut-pelaut ulung yang memiliki jiwa inovasi teknologi tinggi?',
          'Nilai gotong royong dan penghormatan kepada orang tua/leluhur sangat kental dalam budaya praaksara. Bagaimana nilai tersebut relevan untuk membentuk etos kerja profesional di industri modern?'
        ]
      },
      {
        id: 'smk-x-2',
        title: 'Jalur Rempah di Indonesia (The Global Spice Route)',
        phase: 'Fase E',
        grade: 'Kelas X',
        icon: '🌿',
        period: 'Abad ke-1 M - Abad ke-18 M',
        cpSummary: 'Menganalisis peranan strategis Nusantara sebagai episentrum jalur maritim rempah dunia, diplomasi maritim, komoditas unggulan endemik, dan teknologi perkapalan tradisional.',
        syllabus: {
          atp: [
            '10.2.1 Menganalisis letak geografis silang Nusantara dan sistem sirkulasi angin muson dalam pembentukan jalur pelayaran niaga maritim internasional.',
            '10.2.2 Mengidentifikasi sebaran biogeografis rempah endemik (pala, fuli, cengkeh, lada, kapur barus) dan signifikansi ekonominya dalam perdagangan global kuno.',
            '10.2.3 Mengevaluasi keunggulan teknologi rancang bangun kapal tradisional pribumi (perahu cadik, jung Jawa, Phinisi) dalam melintasi samudra bebas.',
            '10.2.4 Menghubungkan jalur rempah masa lampau dengan visi poros maritim dan ketahanan logistik Indonesia pada abad ke-21.'
          ],
          meaningfulUnderstanding: 'Jalur Rempah bukan sekadar rute dagang komoditas bumbu, melainkan jalur pertukaran ilmu pengetahuan, teknologi perkapalan, asimilasi budaya, dan diplomasi antarbangsa yang menempatkan Nusantara sebagai pemain kunci peradaban dunia.',
          essentialQuestions: [
            'Mengapa rempah-rempah Maluku memiliki nilai setara emas batangan di pasar Eropa pada abad pertengahan?',
            'Apa keunggulan teknologi kapal layar tradisional Nusantara sehingga mampu berlayar melintasi Samudra Hindia hingga pesisir Afrika Timur?'
          ]
        },
        subtopics: [
          {
            heading: '1. Oseanografi Nusantara & Dinamika Sirkulasi Angin Muson',
            content: `Posisi geografis kepulauan Indonesia berada tepat di titik temu dua benua (Asia dan Australia) serta dua samudra (Hindia dan Pasifik). Letak ini melahirkan fenomena klimatologi musiman yang dikenal sebagai sistem **Angin Muson (Monsoon)**:

• **Angin Muson Barat (Oktober – April)**:
Massa udara bertekanan tinggi di Benua Asia bergerak menuju Benua Australia yang bertekanan rendah. Angin ini berhembus melintasi Laut Tiongkok Selatan membawa curah hujan tinggi dan mendorong kapal-kapal layar saudagar dari Tiongkok, India, dan Timur Tengah meluncur cepat menuju pelabuhan-pelabuhan Nusantara (seperti Barus, Sriwijaya di Palembang, Sunda Kelapa, dan Tuban).
• **Angin Muson Timur (April – Oktober)**:
Massa udara bertekanan tinggi di Benua Australia yang kering bergerak menuju Benua Asia. Angin ini dimanfaatkan oleh para pelaut untuk kembali pulang ke India, Tiongkok, dan Jazirah Arab dengan membawa muatan penuh rempah-rempah, emas, dan kayu gaharu dari Nusantara.

Dua selat utama di Indonesia berfungsi sebagai gerbang leher botol (*choke points*) perdagangan dunia:
- *Selat Malaka*: Jalur terpendek yang menghubungkan Samudra Hindia dengan Laut Tiongkok Selatan.
- *Selat Sunda*: Jalur alternatif penghubung Samudra Hindia menuju Laut Jawa dan Kepulauan Rempah di Indonesia Timur.`
          },
          {
            heading: '2. Emas Hijau: Biogeografi Komoditas Rempah Endemik',
            content: `Pada masa sebelum revolusi industri, rempah-rempah adalah komoditas termahal di dunia karena mutlak dibutuhkan masyarakat Eropa untuk: (1) Mengawetkan daging ternak yang disembelih massal menjelang musim dingin, (2) Memberi cita rasa hangat dan menutupi bau anyir makanan, (3) Bahan baku obat farmasi, antiseptik, parfum keagamaan, dan upacara pembalseman jenazah bangsawan.

Nusantara dianugerahi tanah vulkanik subur yang melahirkan tanaman endemik bernilai tinggi:
1. **Pala dan Fuli (Myristica fragrans)**:
Hanya tumbuh alami di gugusan kepulauan kecil **Banda** (Neira, Run, Ai, Lontor, Gunung Api) di Maluku Tengah. Tanaman pala menghasilkan dua produk sekaligus: biji bagian dalam (*nutmeg*) dan selaput renda merah menyala pembungkus biji (*mace* atau fuli). Nilai ekonomis pala Banda sangat dahsyat hingga pada abad ke-17 Belanda rela menukar Pulau Manhattan (New York, AS) kepada Inggris demi menguasai Pulau Run di Banda (Perjanjian Breda 1667).
2. **Cengkeh (Syzygium aromaticum)**:
Tumbuh endemik asli hanya di lima pulau vulkanik kecil di Maluku Utara: **Ternate, Tidore, Motir, Makian, dan Bacan**. Bunga kuncup cengkeh kering memiliki kandungan minyak asiri *eugenol* yang sangat tinggi, berfungsi sebagai pereda nyeri dan pengawet alami.
3. **Lada Hitam & Putih (Piper nigrum)**:
Dibudidayakan secara masif di pesisir Sumatra (Aceh, Minangkabau, Lampung) dan Banten. Lada menjadi komoditas volume terbesar dalam pelayaran niaga Selat Malaka.
4. **Kapur Barus (Camphor) & Kemenyan**:
Dihasilkan dari pohon kamper pedalaman Barus (Tapanuli, Sumatra Utara). Catatan Mesir Kuno, Yunani (Ptolemaeus), dan naskah medis Arab mencatat kapur barus dari pelabuhan *Fansur/Barus* sebagai bahan pengawet mumi dan obat terapeutik terbaik di dunia.`
          },
          {
            heading: '3. Jalur Maritim Global & Poros Pelabuhan Transito Internasional',
            content: `Jalur Rempah Nusantara terhubung ke dalam jejaring perdagangan maritim lintas benua yang membentang lebih dari 15.000 kilometer:

• **Segmen Timur (Nusantara Timur - Jawa/Sumatra)**:
Rempah-rempah dari Maluku dan Banda diangkut oleh pelaut Bugis, Makassar, Maluku, dan Jawa menggunakan kapal jung melintasi Laut Flores dan Laut Jawa menuju pelabuhan transito (*entrepôt*) di Gresik, Tuban, Jepara, Sunda Kelapa, Banten, dan Palembang.
• **Segmen Barat (Selat Malaka - Samudra Hindia - Timur Tengah & Eropa)**:
Dari pelabuhan di Selat Malaka (Sriwijaya/Kesultanan Malaka), kapal-kapal saudagar melintasi Teluk Benggala menuju pelabuhan Calicut di India Selatan. Dari sana, muatan rempah diteruskan ke Teluk Persia (menuju Basra dan Baghdad) atau melintasi Laut Merah menuju Aleksandria (Mesir). Saudagar Venesia dan Genoa (Italia) kemudian membeli rempah tersebut di Aleksandria untuk didistribusikan ke seluruh istana dan kota di benua Eropa dengan harga melambung hingga 1.000 kali lipat dari harga aslinya di Maluku.`
          },
          {
            heading: '4. Mahakarya Rancang Bangun Kapal Tradisional Pribumi',
            content: `Keberhasilan menaklukkan samudra luas dimungkinkan oleh kemajuan teknologi perkapalan nenek moyang bangsa Indonesia:

1. **Perahu Bercadik Samudra**:
Memanfaatkan batang bambu penyeimbang di sisi lambung kanan dan kiri kapal. Cadik berfungsi mencegah kapal terbalik saat dihantam ombak besar samudra terbuka. Bukti ketangguhan perahu cadik terpahat jelas pada relief Candi Borobudur (abad ke-8 Masehi). Pelaut Nusantara tercatat telah mencapai Pulau Madagaskar (Afrika Timur) pada abad ke-7 Masehi, terbukti dari kesamaan bahasa Malagasi yang serumpun dengan bahasa Ma'anyan di Barito, Kalimantan.

2. **Kapal Jung Jawa (Javanese Jong)**:
Kapal layar niaga raksasa yang dibuat dari kayu jati dan ulin solid berbobot mati 400 hingga 1.000 ton. Kapal jung Jawa memiliki ciri khas unik:
- Dibuat tanpa menggunakan satu pun paku besi. Seluruh papan lambung dihubungkan menggunakan pasak kayu (*wooden dowels*) dengan teknik sambungan pasak (*mortise-and-tenon*).
- Lambung kapal dibuat berlapis ganda (hingga 3–4 lapis papan) sehingga sangat kuat menahan benturan karang laut dan tembakan meriam Portugis pada pertempuran Malaka 1513.

3. **Perahu Phinisi Nusantara**:
Mahakarya perkapalan suku Bugis-Makassar-Konjo dari Bulukumba, Sulawesi Selatan, yang kini diakui UNESCO sebagai Warisan Budaya Takbenda Dunia. Phinisi menggunakan sistem layar sekunar (*ketch-rigged*) dengan dua tiang utama dan tujuh helai layar yang melambangkan filosofi kesiapan mengarungi tujuh samudra besar dunia.`
          }
        ],
        glossary: [
          { term: 'Angin Muson', def: 'Pola sirkulasi angin musiman yang berganti arah setiap enam bulan sekali akibat perbedaan tekanan udara antara Benua Asia dan Benua Australia.' },
          { term: 'Entrepôt', def: 'Kota pelabuhan bebas tempat barang dagangan dari berbagai penjuru dikumpulkan, ditimbun di gudang, dan diperdagangkan kembali tanpa dikenakan bea impor penuh.' },
          { term: 'Fuli (Mace)', def: 'Selaput merah beraroma tajam yang menyelimuti cangkang keras biji buah pala, bernilai sangat tinggi sebagai bahan obat dan bumbu.' },
          { term: 'Choke Point', def: 'Jalur perairan sempit strategis yang mengendalikan kelancaran arus transportasi laut dan pelayaran niaga internasional.' },
          { term: 'Jung Jawa', def: 'Kapal layar niaga berukuran raksasa buatan galangan kapal pesisir Jawa yang mendominasi pelayaran samudra sebelum abad ke-17.' },
          { term: 'Mortise-and-Tenon', def: 'Teknik sambungan pertukangan kayu sistem lubang dan lidah pasak yang digunakan dalam pembuatan kapal tradisional tanpa paku besi.' },
          { term: 'Phinisi', def: 'Perahu layar tradisional kebanggaan suku Bugis-Makassar berlayar tujuh helai yang diakui UNESCO sebagai Warisan Budaya Dunia.' }
        ],
        reflectionQuestions: [
          'Bagaimana posisi geografis Indonesia sebagai poros maritim dunia masa lampau dapat menjadi modal geopolitik bangsa dalam persaingan ekonomi global saat ini?',
          'Mengapa penguasaan jalur rempah oleh bangsa Eropa menjadi awal mula lahirnya praktik kolonialisme dan imperialisme yang menindas di Nusantara?'
        ]
      },
      {
        id: 'smk-x-3',
        title: 'Kerajaan-Kerajaan Hindu-Buddha di Indonesia',
        phase: 'Fase E',
        grade: 'Kelas X',
        icon: '👑',
        period: 'Abad ke-4 M - Abad ke-15 M',
        cpSummary: 'Menganalisis teori masuknya Hindu-Buddha, kerajaan maritim dan agraris, sistem kenegaraan mandala, akulturasi arsitektur candi, serta warisan nilai Bhinneka Tunggal Ika.',
        syllabus: {
          atp: [
            '10.3.1 Menganalisis perdebatan ilmiah 5 teori masuknya agama dan kebudayaan Hindu-Buddha ke Nusantara secara kritis.',
            '10.3.2 Membandingkan karakteristik sosio-ekonomi dan politik antara kerajaan berbasis maritim (Sriwijaya, Majapahit) dengan kerajaan agraris (Tarumanegara, Mataram Kuno).',
            '10.3.3 Mengevaluasi mahakarya arsitektur candi (Borobudur, Prambanan) dari perspektif teknik rekayasa sipil kuncian batu interlock kuno.',
            '10.3.4 Mengaitkan konsep geopolitik Sumpah Palapa dan falsafah Bhinneka Tunggal Ika dengan integrasi Negara Kesatuan Republik Indonesia modern.'
          ],
          meaningfulUnderstanding: 'Proses masuknya pengaruh Hindu-Buddha ke Indonesia membuktikan kecerdasan lokal (*Local Genius*) bangsa Indonesia yang mampu menyaring, memodifikasi, dan memadukan kebudayaan asing tanpa menghilangkan kepribadian asli bangsa.',
          essentialQuestions: [
            'Mengapa teori Arus Balik dianggap paling menghargai peran aktif masyarakat pribumi dalam proses indianisasi Nusantara?',
            'Bagaimana kerajaan Majapahit dapat mengelola wilayah kekuasaan yang sedemikian luas dengan teknologi komunikasi abad ke-14?'
          ]
        },
        subtopics: [
          {
            heading: '1. Historiografi Kritis: Lima Teori Masuknya Hindu-Buddha',
            content: `Masuknya kebudayaan Hindu-Buddha ke Nusantara merupakan proses akulturasi damai yang berlangsung selama berabad-abad. Sejarawan mengemukakan lima teori utama:

1. **Teori Brahmana (J.C. van Leur)**:
Menyatakan bahwa kaum pendeta Brahmana diundang langsung oleh para kepala suku lokal Nusantara. Para kepala suku yang telah makmur dari perdagangan maritim membutuhkan legitimasi keagamaan untuk mengubah status kesukuan mereka menjadi monarki setingkat maharaja. Kaum Brahmana datang memimpin upacara *Vratyastoma* (penyucian kasta) dan merintis penulisan prasasti berbahasa Sanskerta dengan aksara Pallawa. Kelemahan teori ini: ajaran Hindu kuno melarang kaum Brahmana menyeberangi samudra (*pantangan laut*).

2. **Teori Ksatria (F.D.K. Bosch, C.C. Berg, & Mookerji)**:
Menyatakan bahwa prajurit atau bangsawan kasta Ksatria yang kalah dalam perang perebutan tahta di India melarikan diri ke Nusantara, menaklukkan penguasa lokal secara militer, dan mendirikan dinasti baru. Kelemahannya: tidak pernah ditemukan bukti prasasti atau catatan militer di Indonesia yang mencatat adanya invasi penaklukan bersenjata oleh kerajaan India.

3. **Teori Waisya (N.J. Krom)**:
Menyatakan bahwa para pedagang India berkasta Waisya menetap di pesisir Nusantara mengikuti arah angin muson. Selama berbulan-bulan menunggu angin muson berganti arah, mereka berbaur, menikah dengan wanita bangsawan lokal, dan menyebarkan ajaran agama Hindu-Buddha.

4. **Teori Sudra (van Faber)**:
Menyatakan bahwa kaum kasta terendah (Sudra) dan kaum buangan yang tertindas di India mencari kehidupan yang lebih merdeka dan layak dengan cara bermigrasi ke kepulauan Nusantara.

5. **Teori Arus Balik (Nationalistic Theory - F.D.K. Bosch)**:
Teori yang paling logis dan menjunjung peran aktif bangsa Indonesia. Bosch menegaskan bahwa pemuda dan intelektual pribumi Nusantara berlayar langsung ke India untuk belajar di pusat universitas agama Buddha Nalanda dan kuil-kuil Hindu. Setelah bertahun-tahun menguasai kitab suci, filsafat, dan tata hukum kenegaraan, mereka kembali ke tanah air sebagai biksu dan cendekiawan untuk menyebarkan ilmu tersebut kepada kaum bangsawan lokal. Bukti otentiknya adalah *Prasasti Nalanda (860 M)* di India yang mencatat bahwa Raja Balaputradewa dari Sriwijaya membangun asrama dan biara megah khusus bagi para pelajar asal Sriwijaya yang menuntut ilmu di Nalanda.`
          },
          {
            heading: '2. Kerajaan Pionir: Kutai Martadipura & Tarumanegara',
            content: `Babak awal sejarah tertulis kepulauan Indonesia ditandai oleh dua kerajaan agraris dan maritim pionir:

• **Kerajaan Kutai Martadipura (Kalimantan Timur, Abad 4 M)**:
Terletak di hulu Sungai Mahakam (Muara Kaman). Bukti sejarahnya berupa tujuh buah tiang batu bertulis (*Yupa*) beraksara Pallawa dan berbahasa Sanskerta. Yupa mencatat silsilah dinasti: pendiri keluarga adalah Kudungga (nama asli Nusantara yang belum terpengaruh India), putranya bernama Aswawarman (*Dewa Matahari*), dan cucunya adalah **Maharaja Mulawarman**. Mulawarman tercatat sebagai raja yang sangat berwibawa, adil, dan dermawan yang mempersembahkan 20.000 ekor sapi kepada para Brahmana di tanah suci *Waprakeswara* (tempat suci pemujaan Dewa Siwa).

• **Kerajaan Tarumanegara (Jawa Barat, Abad 5 M)**:
Berpusat di wilayah antara Sungai Citarum dan Cisadane di bawah pemerintahan **Raja Purnawarman**. Purnawarman meninggalkan tujuh buah prasasti batu andesit (Prasasti Ciaruteun, Kebon Kopi, Tugu, Jambu, Cidanghiang, Muara Cianten, dan Pasir Awi).
Mahakarya terbesarnya tercatat dalam **Prasasti Tugu**: Purnawarman memimpin proyek teknik rekayasa hidrologi raksasa berupa penggalian kanal *Sungai Candrabhaga* (Bekasi) dan *Sungai Gomati* sepanjang 6.122 busur panah (± 11 kilometer) yang diselesaikan hanya dalam waktu 21 hari. Kanal Gomati ini berfungsi ganda: menampung banjir bandang luapan sungai saat musim hujan dan mengairi lahan pertanian sawah ribuan hektar saat musim kemarau.`
          },
          {
            heading: '3. Kemaharajaan Maritim Sriwijaya: Mercusuar Bahari & Pusat Studi Buddha',
            content: `Berpusat di tepian Sungai Musi, Palembang (Sumatra Selatan), Sriwijaya (abad ke-7 hingga ke-11 M) tumbuh menjadi imperium maritim terbesar di Asia Tenggara:

1. **Hegemoni Pengendalian Selat Malaka**:
Sriwijaya menerapkan doktrin maritim yang tegas. Prasasti Kedukan Bukit (682 M) mencatat perjalanan suci *Siddhayatra* Dapunta Hyang memimpin 20.000 tentara dengan 200 perahu menaklukkan wilayah-wilayah strategis. Sriwijaya menempatkan pos-pos armada laut bersenjata panah api di muara sungai untuk menumpas bajak laut dan mewajibkan setiap kapal asing yang melintasi Selat Malaka untuk singgah, membayar cukai, dan menggunakan jasa syahbandar Sriwijaya.

2. **Pusat Pendidikan Buddha Mahayana Internasional**:
Pendeta Tiongkok **I-Tsing (I-Ching)** yang tinggal di Sriwijaya selama bertahun-tahun mencatat bahwa terdapat lebih dari seribu biksu yang belajar di Sriwijaya di bawah bimbingan guru agung dunia **Sakyakirti**. I-Tsing menganjurkan para biksu dari Tiongkok yang hendak pergi ke Nalanda di India untuk singgah dan belajar tata bahasa Sanskerta terlebih dahulu di Sriwijaya selama satu hingga dua tahun. Kompleks percandian bata merah **Muaro Jambi** seluas 3.988 hektar di tepi Sungai Batanghari membuktikan keberadaan universitas kampus biara terbesar di Asia Tenggara pada zamannya.`
          },
          {
            heading: '4. Mataram Kuno & Kemaharajaan Majapahit',
            content: `Dinamika politik di Pulau Jawa melahirkan kerajaan agraris-maritim dengan peradaban kebudayaan paling megah:

1. **Kerajaan Mataram Kuno (Abad 8–10 M)**:
Diperintah oleh dua wangsa besar yang hidup berdampingan secara toleran: Dinasti Sanjaya (beragama Hindu Siwa) dan Dinasti Syailendra (beragama Buddha Mahayana). Toleransi ini terbukti dari pernikahan politik antara Rakai Pikatan (Sanjaya) dan Pramodawardhani (Syailendra), serta berdirinya dua mahakarya arsitektur dunia secara berdampingan:
- *Candi Borobudur (Wangsa Syailendra)*: Stupa Buddha terbesar di dunia yang dibangun dari 55.000 meter kubik batu andesit dengan sistem kuncian interlock tanpa semen perekat. Reliefnya menggambarkan perjalanan hidup Buddha Gautama melalui tiga tingkatan spiritual: Kamadhatu (dunia nafsu), Rupadhatu (dunia berwujud), dan Arupadhatu (dunia tanpa wujud).
- *Candi Prambanan (Wangsa Sanjaya)*: Candi Trimurti Hindu tercantik di Asia Tenggara yang menjulang setinggi 47 meter untuk memuliakan Dewa Siwa, Wisnu, dan Brahma.

2. **Kemaharajaan Majapahit (1293–1527 M)**:
Didirikan oleh **Raden Wijaya** setelah dengan cerdik memanfaatkan pasukan tentara Mongol Tartar kiriman Kubilai Khan untuk menghancurkan Jayakatwang di Kediri, lalu berbalik memukul mundur tentara Mongol kembali ke laut.
Majapahit mencapai puncak kejayaan keemasannya pada masa pemerintahan **Prabu Hayam Wuruk** (1350–1389) didampingi **Mahapatih Gajah Mada**:
- *Ikrar Sumpah Palapa (1336 M)*: Diikrarkan oleh Gajah Mada di depan Ratu Tribhuwana Tunggadewi, bersumpah pantang menikmati kesenangan duniawi (*amukti palapa*) sebelum berhasil menyatukan pulau-pulau di Nusantara (dari Gurun, Seram, Tanjungpura, Haru, Pahang, Dompo, Bali, Sunda, Palembang, hingga Tumasik/Singapura).
- *Konsep Kenegaraan Mitreka Satata*: Majapahit membagi hubungan luar negeri menjadi dua: wilayah kedaulatan Nusantara yang dipersatukan di bawah panji Majapahit, dan negara-negara sahabat (*Mitreka Satata*) seperti Siam (Thailand), Kamboja, Champa, dan Tiongkok yang kedudukannya setara.
- *Kitab Sutasoma & Nagarakretagama*: Mpu Tantular menuliskan mahakarya kalimat suci: *"Rwaneka dhatu winuwus Buddha Wiswa, bhinneki rakwa ring apan kena parwanosen, mangka ng Jinatwa kalawan Siwatatwa tunggal, bhinneka tunggal ika tan hana dharma mangrwa"* yang menjadi sumber semboyan resmi Republik Indonesia: **Bhinneka Tunggal Ika**.`
          }
        ],
        glossary: [
          { term: 'Vratyastoma', def: 'Upacara penyucian diri dalam agama Hindu kuno untuk mengangkat status seseorang menjadi anggota kasta tertentu.' },
          { term: 'Yupa', def: 'Prasasti berbentuk tiang batu bersegi tujuh peninggalan Kerajaan Kutai yang berfungsi sebagai tugu peringatan korban persembahan raja.' },
          { term: 'Local Genius', def: 'Kemampuan kepribadian budaya suatu bangsa untuk menyaring, mengolah, dan memodifikasi kebudayaan asing sesuai watak asli bangsa.' },
          { term: 'Mitreka Satata', def: 'Doktrin politik luar negeri Majapahit yang menganggap negara-negara tetangga sebagai sahabat yang berkedudukan setara.' },
          { term: 'Sumpah Palapa', def: 'Ikrar geopolitik Mahapatih Gajah Mada tahun 1336 untuk mempersatukan kepulauan Nusantara di bawah naungan Majapahit.' },
          { term: 'Interlock Joint', def: 'Teknik penyambungan balok batu pahat menggunakan pola kuncian pasak lidah tanpa adukan semen perekat.' },
          { term: 'Kamadhatu', def: 'Tingkatan relief terbawah pada Candi Borobudur yang menggambarkan alam kehidupan manusia yang masih dikuasai oleh hawa nafsu rendah.' }
        ],
        reflectionQuestions: [
          'Bagaimana pelajaran dari toleransi beragama antara Wangsa Sanjaya dan Wangsa Syailendra di Mataram Kuno dapat kita terapkan dalam menjaga kerukunan antarumat beragama di Indonesia masa kini?',
          'Mengapa keruntuhan imperium sebesar Majapahit dapat terjadi akibat perang saudara (Perang Paregreg)? Apa bahaya polarisasi internal bagi masa depan sebuah bangsa?'
        ]
      },
      {
        id: 'smk-x-4',
        title: 'Kerajaan-Kerajaan Islam di Indonesia',
        phase: 'Fase E',
        grade: 'Kelas X',
        icon: '🕌',
        period: 'Abad ke-13 M - Abad ke-18 M',
        cpSummary: 'Menganalisis saluran islamisasi Nusantara, peranan kesultanan maritim dari Aceh hingga Maluku, akulturasi arsitektur masjid kuno, serta transformasi hukum dan aksara.',
        syllabus: {
          atp: [
            '10.4.1 Mengidentifikasi dan menganalisis 4 teori masuknya agama Islam ke kepulauan Nusantara beserta bukti-bukti prasasti dan catatan sejarah asing.',
            '10.4.2 Menganalisis 5 saluran islamisasi kultural dan damai (perdagangan, perkawinan, tasawuf, pendidikan pesantren, dan kesenian dakwah).',
            '10.4.3 Mengevaluasi peran geopolitik dan maritim kesultanan-kesultanan Islam utama (Samudera Pasai, Demak, Mataram Islam, Aceh, Banten, Ternate-Tidore, Gowa-Tallo).',
            '10.4.4 Mengidentifikasi wujud akulturasi seni arsitektur masjid atap tumpang, aksara Pegon, dan tradisi sosial perayaan Maulid/Sekaten.'
          ],
          meaningfulUnderstanding: 'Penyebaran Islam di Indonesia berlangsung secara damai melalui akulturasi budaya yang luwes (*Islam Nusantara*), menghargai kearifan tradisi lokal, serta menumbuhkan etos perlawanan maritim terhadap monopoli kolonial Barat.',
          essentialQuestions: [
            'Mengapa pendekatan kultural yang diterapkan Wali Songo (seperti wayang kulit dan tembang) sangat efektif dalam proses islamisasi di Pulau Jawa?',
            'Bagaimana Kesultanan Gowa-Tallo mempertahankan prinsip kebebasan bernavigasi di laut (Mare Liberum) melawan hegemoni monopoli VOC?'
          ]
        },
        subtopics: [
          {
            heading: '1. Historiografi Teori Masuknya Islam & Saluran Islamisasi',
            content: `Masuknya Islam ke Nusantara tidak melalui ekspansi militer, melainkan melalui penetrasi kultural damai (*penetration pacifique*). Para pakar mengemukakan empat teori utama:

1. **Teori Gujarat/India (Snouck Hurgronje, J. Pijnappel, W.F. Stutterheim)**:
Menyatakan bahwa Islam masuk ke Indonesia pada abad ke-13 Masehi dibawa oleh para pedagang muslim dari Gujarat dan Cambay, India Barat. Bukti utamanya adalah batu nisan makam Sultan Malik As-Saleh (raja pertama Samudera Pasai wafat 1297 M) dan makam Maulana Malik Ibrahim di Gresik (wafat 1419 M) yang bentuk ornamen pahatannya memiliki kemiripan identik dengan batu nisan di Cambay, Gujarat.

2. **Teori Makkah/Arab (Prof. Dr. Buya Hamka, J.C. van Leur, T.W. Arnold)**:
Menyatakan bahwa Islam masuk ke Indonesia langsung dari jazirah Arab (Makkah dan Madinah) sejak abad ke-7 Masehi (abad ke-1 Hijriah) pada masa pemerintahan Khalifah Rasyidin dan Bani Umayyah. Bukti historisnya:
- Catatan Dinasti Tang di Tiongkok mencatat keberadaan perkampungan saudagar Arab muslim (*Po-ssu/Ta-shih*) di pesisir barat Sumatra (Barus) pada tahun 674 Masehi.
- Gelar penguasa Samudera Pasai menggunakan gelar kebangsawanan Arab (*Al-Malik*) mengikuti tradisi kesultanan di Mesir, bukan gelar kebangsawanan India.

3. **Teori Persia/Iran (Prof. Dr. Hoesein Djajadiningrat & Umar Amir Husen)**:
Menyoroti kesamaan kebudayaan dan tradisi sufi Islam di Indonesia dengan tradisi Syiah/Persia:
- Peringatan 10 Muharram (Hari Asyura) atas gugurnya Sayyidina Husein bin Ali yang dirayakan melalui upacara *Tabuik* di Pariaman (Sumatra Barat) dan *Tabot* di Bengkulu.
- Kesamaan sistem tanda harakat fonem Arab dalam pembelajaran mengeja membaca Al-Qur'an (istilah *jabar* untuk fathah, *jer* untuk kasrah, *pes* untuk dhammah).
- Ajaran mistik tasawuf manunggaling kawula gusti Syekh Siti Jenar yang memiliki kemiripan dengan ajaran sufi Al-Hallaj dari Persia.

4. **Teori Tiongkok (Slamet Muljana, Denys Lombard, H.J. de Graaf)**:
Menyatakan bahwa komunitas muslim Tionghoa memiliki peranan besar dalam penyebaran Islam di pesisir utara Jawa. Laksamana Cheng Ho (seorang kasim muslim utusan Kaisar Dinasti Ming) memimpin ekspedisi armada raksasa ke Nusantara pada awal abad ke-15 M dan mendirikan pangkalan serta komunitas muslim Tionghoa di Palembang, Tuban, Gresik, dan Semarang. Catatan *Kronik Klenteng Sam Po Kong* mencatat tokoh-tokoh awal Wali Songo memiliki nama Tionghoa (misal: Raden Patah disebut Jin Bun).

**Enam Saluran Utama Islamisasi**:
- *Saluran Perdagangan*: Interaksi langsung pedagang muslim di pelabuhan pesisir.
- *Saluran Perkawinan*: Pernikahan pedagang/saudagar muslim kaya dengan putri bangsawan dan adipati lokal.
- *Saluran Pendidikan Pesantren*: Sistem asrama mandiri tempat santri dari berbagai pulau belajar kitab kuning, lalu pulang ke kampung halaman mendirikan pesantren baru.
- *Saluran Tasawuf*: Pendekatan mistik ketuhanan yang mudah dipahami oleh masyarakat yang sebelumnya akrab dengan dunia kebatinan Hindu-Buddha.
- *Saluran Kesenian*: Penggunaan wayang kulit, gending gamelan (Gamelan Sekaten), dan tembang dolanan (seperti *Lir-Ilir* dan *Gundul Pacul* oleh Sunan Kalijaga).
- *Saluran Politik*: Ketika seorang raja/sultan memeluk Islam, seluruh rakyat jelata secara sukarela ikut memeluk agama Islam demi loyalitas kepada pemimpinnya.`
          },
          {
            heading: '2. Poros Kesultanan Maritim: Samudera Pasai, Demak, & Mataram Islam',
            content: `Kesultanan Islam tumbuh menjadi benteng kedaulatan maritim dan ekonomi moneter yang kuat:

• **Kesultanan Samudera Pasai (Aceh Utara, Abad 13–16 M)**:
Didirikan oleh Meurah Silu yang bergelar **Sultan Malik As-Saleh**. Pasai menjadi pusat pelabuhan internasional dan kerajaan Islam pertama yang mencetak mata uang koin emas murni bernama **Deureuham (Dirham Pasai)** dengan kadar emas 70% berukir kaligrafi nama sultan. Penjelajah dunia Ibnu Batutah (1345 M) mencatat kekagumannya terhadap kemakmuran Pasai, armada lautnya yang kuat, serta kerendahan hati rajanya yang alim.

• **Kesultanan Demak Bintoro (Pesisir Jawa Tengah, Abad 15–16 M)**:
Didirikan oleh **Raden Patah** dengan dukungan Dewan Wali Songo sebagai kesultanan Islam pertama di Pulau Jawa. Demak menjadi pusat jihad maritim menentang kolonialisme Portugis:
- *Pati Unus (Pangeran Sabrang Lor)*: Pada tahun 1513 memimpin armada laut gabungan 100 kapal perang membawa 10.000 laskar menyerang markas benteng Portugis di Malaka. Keberaniannya menyeberangi Laut Jawa membuatnya digelari "Pangeran yang menyeberang ke utara".
- *Panglima Fatahillah (Faletehan)*: Pada tahun 1527 diutus Sultan Trenggana memimpin ekspedisi militer gabungan Demak-Cirebon merebut pelabuhan Sunda Kelapa dari Portugis dan Kerajaan Pajajaran. Kemenangan mutlak pada 22 Juni 1527 dirayakan dengan mengganti nama pelabuhan menjadi **Jayakarta** (*Kemenangan Gemilang*), yang kini diperingati sebagai hari lahir Jakarta.

• **Kesultanan Mataram Islam (Yogyakarta, Abad 16–18 M)**:
Mencapai masa keemasan di bawah **Sultan Agung Hanyokrokusumo** (1613–1645):
- Mengobarkan perlawanan militer total terhadap markas besar kongsi dagang VOC di Batavia melalui dua kali ekspedisi pengepungan akbar pada tahun 1628 dan 1629.
- Menciptakan karya akulturasi monumental berupa **Kalender Jawa Islam (Tahun Saka Jawa)** pada tahun 1633 M yang memadukan perhitungan kalender lunar Hijriah (peredaran bulan) dengan tahun Saka Hindu Jawa.`
          },
          {
            heading: '3. Kesultanan Luar Jawa: Aceh Darussalam & Gowa-Tallo Makassar',
            content: `Kekuatan maritim kesultanan di luar Jawa menunjukkan ketangguhan geopolitik yang disegani bangsa-bangsa Eropa:

• **Kesultanan Aceh Darussalam (Abad 16–17 M)**:
Mencapai puncak kejayaan di bawah **Sultan Iskandar Muda** (1607–1636). Aceh membangun armada laut perkasa berisikan kapal perang raksasa *Espelho do Mundo* (Cermin Dunia) yang mampu mengangkut 800 prajurit bersenjatakan meriam perunggu. Aceh menjalin hubungan diplomatik langsung dengan Kekhalifahan Turki Utsmani (Khilafah Ottoman), Dinasti Safawi di Persia, serta Kerajaan Inggris di bawah Ratu Elizabeth I. Aceh diakui sebagai *Serambi Makkah* karena menjadi pelabuhan embarkasi utama jemaah haji dari seluruh kepulauan Nusantara.

• **Kesultanan Gowa-Tallo (Makassar, Sulawesi Selatan, Abad 16–17 M)**:
Berpusat di Benteng Somba Opu. Di bawah kepemimpinan **Sultan Hasanuddin**, Kesultanan Gowa-Tallo menjadi penguasa jalur perdagangan maritim di kawasan Indonesia Timur. Sultan Hasanuddin dijuluki oleh penjajah Belanda sebagai *"De Haantjes van Het Oosten"* (Ayam Jantan dari Timur) karena keberanian dan keteguhan sikapnya. Gowa-Tallo menolak monopoli rempah-rempah yang dipaksakan oleh VOC dan dengan tegas memegang doktrin hukum laut internasional **Mare Liberum** (Lautan adalah milik bersama anugerah Tuhan, setiap kapal berhak berlayar dan berniaga dengan bebas).`
          },
          {
            heading: '4. Akulturasi Budaya & Transformasi Sosial Kultural',
            content: `Kehadiran Islam tidak memusnahkan kebudayaan masa lalu, melainkan melahirkan akulturasi budaya yang sangat kaya dan harmonis:

1. **Arsitektur Masjid Kuno Nusantara**:
- *Atap Tumpang Bersusun*: Atap masjid kuno (seperti Masjid Agung Demak, Masjid Banten, Masjid Jepara) tidak menggunakan kubah bulat gaya Timur Tengah, melainkan menggunakan konstruksi atap tumpang bersusun ganjil tiga tingkatan. Secara filosofis, tiga tingkatan atap ini melambangkan trilogi ajaran Islam: *Iman, Islam, dan Ihsan*.
- *Menara Masjid Kudus*: Dibangun oleh Sunan Kudus dengan bentuk arsitektur menyerupai candi langgam Jawa Timur yang terbuat dari susunan batu bata merah tanpa semen, mencerminkan kearifan dakwah yang menghormati umat Hindu-Buddha di sekitarnya.

2. **Aksara Pegon & Tradisi Literasi**:
Penggunaan huruf Arab yang dimodifikasi dengan menambahkan tanda titik untuk melafalkan fonem-fonem asli bahasa Nusantara yang tidak ada dalam bahasa Arab (seperti huruf *ca, nga, ga, pa, nya*). Aksara Pegon digunakan untuk menuliskan kitab-kitab fikih, tasawuf, babad sejarah, naskah sastra Melayu, serta surat-surat diplomatik para sultan kepada raja-raja Eropa.

3. **Perayaan Kultural Sekaten**:
Upacara peringatan hari kelahiran Nabi Muhammad SAW (Maulid) yang diinisiasi oleh para wali di Alun-Alun Keraton Surakarta dan Yogyakarta. Masyarakat ditarik berkumpul mendengarkan alunan gamelan pusaka Kyai Gunturmadu dan Kyai Nagawilaga, lalu diajak mengucapkan kalimat *Syahadatain* (dua kalimat syahadat, yang dilafalkan lidah Jawa menjadi istilah *Sekaten*).`
          }
        ],
        glossary: [
          { term: 'Penetration Pacifique', def: 'Proses masuk dan tersebarnya kebudayaan asing secara damai tanpa paksaan militer.' },
          { term: 'Aksara Pegon', def: 'Abjad Arab yang dimodifikasi dengan penambahan tanda baca vokal untuk menuliskan bahasa Jawa, Sunda, dan Madura.' },
          { term: 'Deureuham', def: 'Mata uang koin emas murni dengan tulisan kaligrafi Arab yang diterbitkan oleh Kesultanan Samudera Pasai.' },
          { term: 'Atap Tumpang', def: 'Atap bersusun bertingkat ganjil pada arsitektur masjid tradisional Nusantara yang mengadopsi struktur Meru pra-Islam.' },
          { term: 'Mare Liberum', def: 'Prinsip hukum laut internasional yang menyatakan bahwa laut terbuka untuk pelayaran bebas bagi semua bangsa.' },
          { term: 'Sekaten', def: 'Tradisi perayaan Maulid Nabi Muhammad SAW di keraton Jawa yang menggunakan media gamelan untuk syiar syahadatain.' },
          { term: 'Wali Songo', def: 'Sembilan ulama penyebar agama Islam terkemuka di Pulau Jawa pada abad ke-15 hingga ke-16 Masehi.' }
        ],
        reflectionQuestions: [
          'Bagaimana kearifan lokal para Wali Songo dalam mengemas dakwah lewat media kesenian wayang kulit dapat menjadi inspirasi metode komunikasi publik yang santun di media sosial masa kini?',
          'Pangeran Sabrang Lor dari Demak dan Sultan Hasanuddin dari Makassar gigih melawan monopoli dagang asing. Apa makna kedaulatan ekonomi bagi generasi muda Indonesia di era perdagangan bebas saat ini?'
        ]
      }
    ]
  },
  'kelas-xi': {
    grade: 'Kelas XI SMK',
    phase: 'Fase F',
    cpHeader: 'Capaian Pembelajaran (CP) Fase F: Peserta didik mampu memahami pendudukan Jepang, proklamasi kemerdekaan Indonesia, mempertahankan kemerdekaan Indonesia, pemerintahan Sukarno, pemerintahan Suharto, dan reformasi menggunakan konsep dasar ilmu sejarah.',
    modules: [
      {
        id: 'smk-xi-1',
        title: 'Pendudukan Militer Jepang di Indonesia (1942–1945)',
        phase: 'Fase F',
        grade: 'Kelas XI',
        icon: '⚔️',
        period: '1942 - 1945',
        cpSummary: 'Menganalisis geopolitik Perang Pasifik, invasi kilat dan Perjanjian Kalijati, sistem birokrasi Gunsei & Tonarigumi, ekonomi autarki, tragedi Romusha, respon pergerakan kooperatif/klandestin/bersenjata, militerisasi PETA, sidang BPUPK-PPKI, hingga komparasi kolonialisme dan warisan struktural bagi Indonesia modern.',
        syllabus: {
          atp: [
            '11.1.1 Menganalisis geopolitik Perang Pasifik, modernisasi Restorasi Meiji, embargo minyak koalisi ABCD, doktrin Hakko Ichi-u, propaganda Gerakan Tiga A, serta kapitulasi Perjanjian Kalijati 1942.',
            '11.1.2 Mengevaluasi struktur birokrasi pemerintahan militer (Gunsei), pembagian tiga mandala administrasi pertahanan, dan sistem pengawasan sosial teritorial Tonarigumi (cikal bakal RT/RW).',
            '11.1.3 Menguraikan dampak sistem ekonomi autarki regional, perampasan beras via Kumiai, penanaman paksa pohon jarak, tragedi kerja paksa Romusha lintas benua, serta bencana kelaparan dan perbudakan seksual Jugun Ianfu.',
            '11.1.4 Menganalisis spektrum respons pergerakan kebangsaan melalui jalur kooperatif resmi (Poetra, Jawa Hokokai), jalur klandestin bawah tanah (Sutan Sjahrir, Amir Sjarifuddin, Menteng 31), dan perlawanan bersenjata rakyat (Cot Plieng, Singaparna, PETA Blitar).',
            '11.1.5 Mengevaluasi proses militerisasi pemuda melalui organisasi Heiho dan PETA, Janji Koiso 1944, serta dinamika perumusan dasar negara Pancasila dan konstitusi dalam sidang BPUPK dan PPKI.',
            '11.1.6 Melakukan analisis komparatif kritis antara kolonialisme Hindia Belanda versus pendudukan militer Jepang serta mengevaluasi warisan strukturalnya bagi Indonesia modern.'
          ],
          meaningfulUnderstanding: 'Masa pendudukan fasisme militer Jepang selama 3,5 tahun merupakan babak paling paradoksal dalam sejarah Indonesia: di satu sisi melahirkan bencana kemanusiaan dan penindasan ekonomi luar biasa, namun di sisi lain berhasil meruntuhkan mitos superioritas kulit putih bangsa Barat, mematangkan bahasa Indonesia sebagai bahasa resmi pemersatu bangsa, serta menggembleng fisik dan taktik tempur pemuda bumiputera yang melahirkan cikal bakal Tentara Nasional Indonesia (TNI).',
          essentialQuestions: [
            'Mengapa embargo minyak bumi oleh koalisi ABCD menjadi pemicu utama serbuan kilat militer Jepang ke kepulauan Indonesia?',
            'Bagaimana para tokoh pergerakan nasional secara cerdik memanfaatkan organisasi resmi bentukan Jepang untuk mengonsolidasikan kekuatan pergerakan kebangsaan?',
            'Apa saja warisan struktural dari masa pendudukan militer Jepang yang masih bertahan dan menjadi pilar penting tata kelola Indonesia modern hingga hari ini?'
          ]
        },
        subtopics: [
          {
            heading: "1. PENDAHULUAN",
            content: "Pendudukan Jepang di Indonesia merupakan salah satu periode penting dalam sejarah Indonesia karena berlangsung dalam situasi **Perang Dunia II** dan secara langsung memengaruhi perjalanan bangsa Indonesia menuju kemerdekaan.\n\nJepang menduduki Indonesia setelah berhasil mengalahkan kekuatan Belanda pada tahun 1942. Kedatangan Jepang pada awalnya disambut oleh sebagian masyarakat karena Jepang membawa propaganda sebagai **\"saudara tua\" bangsa-bangsa Asia** yang akan membebaskan Asia dari penjajahan Barat.\n\nNamun, harapan tersebut segera berubah. Pemerintahan Jepang menerapkan sistem pendudukan militer yang sangat ketat. Rakyat diarahkan untuk mendukung kepentingan perang Jepang. Berbagai sumber daya alam dieksploitasi, tenaga rakyat dimobilisasi, dan kebebasan politik dibatasi.\n\nSalah satu bentuk eksploitasi yang paling dikenal adalah **romusha**, yaitu pengerahan tenaga kerja untuk berbagai proyek yang mendukung kepentingan Jepang. Di sisi lain, Jepang juga membentuk berbagai organisasi sosial, pemuda, dan militer seperti **Seinendan, Keibodan, Heiho, dan PETA**.\n\nMenariknya, pendudukan Jepang memiliki sebuah paradoks sejarah. Di satu sisi, Jepang menyebabkan penderitaan besar bagi masyarakat Indonesia. Namun di sisi lain, masa pendudukan memberikan pengalaman organisasi, politik, bahasa, dan militer kepada sebagian masyarakat Indonesia yang kemudian menjadi modal penting dalam perjuangan mempertahankan kemerdekaan.\n\nOleh karena itu, pendudukan Jepang tidak cukup dipahami hanya sebagai cerita mengenai penjajahan. Periode ini perlu dikaji sebagai **proses sejarah yang kompleks**, ketika bangsa Indonesia menghadapi penindasan sekaligus mencari berbagai strategi untuk mempertahankan kepentingannya dan memanfaatkan ruang yang tersedia untuk mempersiapkan masa depan."
          },
          {
            heading: "2. JEPANG SEBELUM MENDUDUKI INDONESIA",
            content: "## 1. Restorasi Meiji dan Modernisasi Jepang\n\nUntuk memahami mengapa Jepang mampu menduduki Indonesia, terlebih dahulu perlu melihat perubahan Jepang sejak abad ke-19.\n\nPada tahun 1868 terjadi **Restorasi Meiji**. Restorasi ini menandai perubahan besar dalam kehidupan politik, ekonomi, militer, dan sosial Jepang.\n\nSebelumnya, Jepang berada dalam sistem pemerintahan feodal yang dipimpin oleh shogun. Setelah Restorasi Meiji, kekuasaan politik dikonsolidasikan di bawah Kaisar.\n\nPemerintah Jepang kemudian melakukan modernisasi dalam berbagai bidang.\n\n### Bidang pendidikan\n\nJepang mengembangkan sistem pendidikan modern untuk menghasilkan masyarakat yang terdidik dan mendukung pembangunan negara.\n\n### Bidang ekonomi\n\nJepang mengembangkan:\n\n* industri,\n* perdagangan,\n* perbankan,\n* transportasi,\n* pertambangan,\n* teknologi.\n\n### Bidang militer\n\nJepang membangun angkatan bersenjata modern dengan mempelajari teknologi dan sistem militer negara-negara Barat.\n\nModernisasi tersebut menjadikan Jepang berbeda dari banyak negara Asia lainnya yang saat itu sedang berada di bawah kolonialisme Barat."
          },
          {
            heading: "3. MUNCULNYA IMPERIALISME JEPANG",
            content: "Modernisasi membuat Jepang menjadi negara kuat. Namun, perkembangan industri membutuhkan bahan mentah, pasar, dan sumber energi.\n\nKarena itu, Jepang mulai melakukan ekspansi wilayah.\n\n### Beberapa peristiwa penting:\n\n**Perang Jepang–Tiongkok (1894–1895)**\nJepang berhasil mengalahkan Tiongkok dan memperkuat kedudukannya di Asia Timur.\n\n**Perang Jepang–Rusia (1904–1905)**\nJepang kembali menunjukkan kekuatannya dengan mengalahkan Rusia.\n\nKemenangan tersebut sangat penting karena Jepang menjadi salah satu negara Asia pertama yang berhasil mengalahkan kekuatan besar Eropa dalam perang modern.\n\nSelanjutnya Jepang memperluas pengaruhnya ke:\n\n* Korea,\n* Manchuria,\n* Tiongkok,\n* dan wilayah Asia lainnya.\n\nDengan demikian, Jepang secara bertahap berubah dari negara yang melakukan modernisasi menjadi **kekuatan imperialisme baru di Asia**."
          },
          {
            heading: "4. JEPANG DAN PERANG DUNIA II",
            content: "## 1. Ekspansi Jepang\n\nPada awal abad ke-20, Jepang semakin aktif memperluas wilayahnya.\n\nSalah satu faktor pendorongnya adalah kebutuhan terhadap:\n\n* bahan baku industri,\n* minyak bumi,\n* karet,\n* mineral,\n* pangan,\n* wilayah strategis,\n* pasar.\n\nKetika Perang Dunia II berkembang, Jepang melihat Asia Tenggara sebagai wilayah yang sangat penting.\n\n---\n\n## 2. Konflik Jepang dengan Amerika Serikat\n\nAmerika Serikat dan negara-negara Barat berusaha membatasi ekspansi Jepang.\n\nSalah satu tekanan terpenting adalah pembatasan pasokan bahan bakar dan sumber daya strategis kepada Jepang.\n\nJepang kemudian mengambil keputusan untuk melakukan serangan terhadap pangkalan Amerika Serikat di **Pearl Harbor, Hawaii, pada 7 Desember 1941**.\n\nSerangan tersebut menyebabkan Amerika Serikat masuk secara langsung ke dalam Perang Dunia II.\n\nPerang kemudian berkembang menjadi konflik besar di kawasan Asia-Pasifik."
          },
          {
            heading: "5. MENGAPA JEPANG MENDUDUKI INDONESIA?",
            content: "Indonesia merupakan wilayah yang sangat penting bagi Jepang.\n\nAda beberapa alasan utama.\n\n## 1. Minyak bumi\n\nMinyak merupakan sumber energi yang sangat penting bagi mesin perang.\n\nIndonesia memiliki sumber minyak yang penting, antara lain di:\n\n* Sumatra,\n* Kalimantan,\n* Jawa.\n\nPenguasaan minyak Indonesia dapat membantu Jepang memenuhi kebutuhan militernya.\n\n---\n\n## 2. Kekayaan alam\n\nSelain minyak, Indonesia memiliki:\n\n* karet,\n* timah,\n* batu bara,\n* hasil perkebunan,\n* hasil pertanian,\n* berbagai bahan tambang.\n\nSumber daya tersebut diperlukan untuk mendukung industri dan peperangan Jepang.\n\n---\n\n## 3. Letak geografis\n\nIndonesia berada pada posisi strategis di antara:\n\n**Asia Timur — Asia Tenggara — Samudra Hindia — Australia**\n\nDengan menguasai Indonesia, Jepang dapat memperkuat pertahanannya dan memperluas jangkauan militernya.\n\n---\n\n## 4. Kepentingan pangan\n\nPerang membutuhkan persediaan makanan dalam jumlah besar.\n\nIndonesia merupakan wilayah agraris dengan produksi:\n\n* beras,\n* jagung,\n* hasil perkebunan,\n* dan berbagai komoditas lainnya.\n\nKarena itu, Jepang berusaha mengendalikan produksi pertanian Indonesia."
          },
          {
            heading: "6. MASUKNYA JEPANG KE INDONESIA",
            content: "Setelah melakukan serangan di berbagai wilayah Asia Tenggara, Jepang bergerak menuju Indonesia.\n\nPasukan Jepang memasuki wilayah Indonesia melalui beberapa daerah.\n\n### Kalimantan\n\nJepang menguasai wilayah penghasil minyak dan sumber daya lainnya.\n\n### Sumatra\n\nJepang menguasai wilayah strategis dan sumber daya ekonomi.\n\n### Sulawesi\n\nJepang menguasai sejumlah wilayah penting untuk kepentingan militer.\n\n### Jawa\n\nJawa merupakan pusat pemerintahan Hindia Belanda sehingga menjadi target penting."
          },
          {
            heading: "7. JATUHNYA KEKUASAAN BELANDA",
            content: "Belanda dan Sekutu berusaha mempertahankan Hindia Belanda.\n\nNamun, kekuatan Jepang berkembang sangat cepat.\n\nPasukan Belanda mengalami kekalahan di berbagai wilayah.\n\nPuncaknya terjadi pada:\n\n## Kapitulasi Kalijati — 8 Maret 1942\n\nDi **Kalijati, Subang, Jawa Barat**, Belanda menyerahkan kekuasaannya kepada Jepang.\n\nPeristiwa tersebut menandai:\n\n> **berakhirnya kekuasaan kolonial Belanda di Indonesia dan dimulainya pendudukan Jepang.**\n\nPerubahan tersebut berlangsung sangat cepat. Pemerintahan kolonial Belanda yang telah berlangsung selama berabad-abad runtuh dalam waktu relatif singkat."
          },
          {
            heading: "8. RESPONS AWAL MASYARAKAT INDONESIA",
            content: "Kedatangan Jepang pada awalnya tidak selalu mendapatkan penolakan.\n\nSebagian masyarakat bahkan menyambut Jepang.\n\nMengapa?\n\nKarena masyarakat telah mengalami penjajahan Belanda dalam waktu lama.\n\nJepang kemudian melakukan propaganda bahwa mereka adalah:\n\n> **saudara tua bangsa Indonesia.**\n\nJepang juga menyebarkan slogan:\n\n* Jepang Pemimpin Asia.\n* Jepang Pelindung Asia.\n* Jepang Cahaya Asia.\n\nPropaganda tersebut menciptakan harapan bahwa Jepang akan membebaskan Indonesia dari kolonialisme Barat.\n\nNamun, kenyataan segera berbeda."
          },
          {
            heading: "9. PEMERINTAHAN MILITER JEPANG DI INDONESIA",
            content: "Jepang tidak menjadikan Indonesia sebagai negara merdeka. Indonesia berada di bawah **pemerintahan militer Jepang**.\n\nWilayah Indonesia dibagi menjadi beberapa daerah pemerintahan militer.\n\nSecara umum terdapat:\n\n### 1. Jawa dan Madura\n\nDikuasai oleh Angkatan Darat Jepang.\n\n### 2. Sumatra\n\nDikuasai oleh Angkatan Darat Jepang.\n\n### 3. Indonesia bagian timur\n\nDikuasai oleh Angkatan Laut Jepang.\n\nPembagian tersebut menunjukkan bahwa Indonesia memiliki arti strategis yang sangat besar bagi Jepang."
          },
          {
            heading: "10. KARAKTER PEMERINTAHAN JEPANG",
            content: "Pemerintahan Jepang memiliki beberapa karakteristik.\n\n## 1. Militeristik\n\nKekuasaan utama berada di tangan militer.\n\n## 2. Otoriter\n\nKebebasan masyarakat sangat dibatasi.\n\n## 3. Mobilisasi\n\nMasyarakat diarahkan untuk mendukung kepentingan perang Jepang.\n\n## 4. Eksploitatif\n\nSumber daya alam dan tenaga manusia dimanfaatkan untuk kepentingan Jepang.\n\n## 5. Propaganda\n\nJepang menggunakan propaganda untuk mendapatkan dukungan masyarakat."
          },
          {
            heading: "11. PROPAGANDA JEPANG",
            content: "Propaganda merupakan alat penting dalam pemerintahan pendudukan.\n\nJepang berusaha menciptakan citra bahwa mereka datang untuk membangun Asia.\n\nKonsep tersebut dikenal dengan:\n\n## Kemakmuran Bersama Asia Timur Raya\n\nSecara propaganda, Jepang menyatakan bahwa bangsa-bangsa Asia akan bekerja sama dan hidup sejahtera tanpa dominasi Barat.\n\nNamun kenyataannya, Jepang tetap menempatkan dirinya sebagai kekuatan utama.\n\nDengan kata lain:\n\n> **Propaganda mengenai persatuan Asia tidak sama dengan praktik pemerintahan Jepang di wilayah pendudukannya.**\n\nHal ini menjadi contoh penting bahwa dalam sejarah, **narasi resmi pemerintah perlu dibandingkan dengan pengalaman masyarakat dan sumber sejarah lainnya.**"
          },
          {
            heading: "12. KEBIJAKAN POLITIK JEPANG",
            content: "Pada awal pendudukan, Jepang berusaha menghapus pengaruh Belanda.\n\nBeberapa organisasi politik dibubarkan.\n\nAktivitas politik diawasi dengan ketat.\n\nPers juga berada di bawah pengawasan pemerintah Jepang.\n\nTokoh-tokoh Indonesia yang dianggap berbahaya dapat ditangkap atau diawasi.\n\nJepang juga membatasi:\n\n* kebebasan berbicara,\n* kebebasan berkumpul,\n* kebebasan pers,\n* aktivitas politik.\n\nNamun, Jepang menyadari bahwa tokoh nasional Indonesia memiliki pengaruh besar terhadap masyarakat.\n\nKarena itu, Jepang kemudian memanfaatkan sejumlah tokoh Indonesia untuk membantu mobilisasi rakyat.\n\nDi sinilah muncul strategi **kooperasi** dari beberapa tokoh Indonesia."
          },
          {
            heading: "13. KEBIJAKAN EKONOMI JEPANG",
            content: "## 1. Ekonomi perang\n\nPerekonomian Indonesia diubah untuk mendukung kebutuhan perang Jepang.\n\nProduksi diarahkan pada komoditas yang dibutuhkan Jepang.\n\nTujuan utamanya bukan meningkatkan kesejahteraan masyarakat Indonesia, melainkan:\n\n> **memenuhi kebutuhan militer dan ekonomi Jepang.**\n\n---\n\n## 2. Penguasaan sumber daya alam\n\nJepang mengambil alih berbagai perusahaan dan fasilitas ekonomi peninggalan Belanda.\n\nSumber daya seperti:\n\n* minyak,\n* batu bara,\n* hasil perkebunan,\n* bahan tambang,\n\ndiarahkan untuk kepentingan Jepang.\n\n---\n\n## 3. Pengendalian produksi pertanian\n\nPetani diwajibkan memenuhi kebutuhan tertentu yang ditetapkan pemerintah.\n\nAkibatnya, sebagian hasil pertanian tidak dapat sepenuhnya dinikmati oleh masyarakat.\n\nHal ini berkontribusi terhadap:\n\n* kekurangan pangan,\n* kemiskinan,\n* kelaparan,\n* menurunnya kesejahteraan."
          },
          {
            heading: "14. ROMUSHA",
            content: "## 1. Pengertian Romusha\n\n**Romusha** merupakan istilah yang digunakan untuk menyebut tenaga kerja yang dikerahkan Jepang untuk berbagai pekerjaan yang mendukung kepentingan perang.\n\nMereka digunakan untuk:\n\n* membangun jalan,\n* membangun rel,\n* membangun lapangan terbang,\n* membangun benteng,\n* mengangkut material,\n* pekerjaan konstruksi lainnya.\n\n---\n\n## 2. Perekrutan Romusha\n\nPada awalnya, Jepang menggunakan propaganda bahwa pekerjaan tersebut merupakan bentuk pengabdian kepada bangsa dan negara.\n\nNamun, dalam praktiknya pengerahan tenaga kerja semakin bersifat memaksa.\n\nBanyak rakyat dari desa-desa direkrut.\n\n---\n\n## 3. Kondisi Romusha\n\nPara pekerja sering menghadapi:\n\n* makanan yang tidak mencukupi,\n* kondisi kerja berat,\n* tempat tinggal yang buruk,\n* penyakit,\n* kurangnya perawatan,\n* jauh dari keluarga.\n\nSebagian tenaga kerja bahkan dikirim keluar wilayah tempat tinggal mereka.\n\n---\n\n## 4. Dampak Romusha\n\nRomusha menimbulkan dampak besar:\n\n### Dampak ekonomi\n\nKeluarga kehilangan anggota yang menjadi sumber penghasilan.\n\n### Dampak sosial\n\nBanyak keluarga mengalami perubahan struktur dan kehilangan anggota keluarga.\n\n### Dampak demografis\n\nTerjadi perpindahan tenaga kerja ke berbagai wilayah.\n\n### Dampak psikologis\n\nMuncul ketakutan dan trauma terhadap pemerintah Jepang.\n\n### Dampak politik\n\nKepercayaan masyarakat terhadap propaganda Jepang semakin menurun."
          },
          {
            heading: "15. KEBIJAKAN SOSIAL",
            content: "Jepang melakukan pengawasan terhadap kehidupan masyarakat sampai tingkat lokal.\n\nSalah satunya melalui pembentukan **tonarigumi**, yaitu kelompok masyarakat dalam lingkungan tempat tinggal yang bertujuan membantu pengawasan dan mobilisasi.\n\nMasyarakat diarahkan untuk:\n\n* menghemat,\n* memenuhi kewajiban tertentu,\n* mengikuti kegiatan pemerintah,\n* membantu kebutuhan perang.\n\nDengan demikian, kehidupan masyarakat menjadi sangat terkontrol."
          },
          {
            heading: "16. KEHIDUPAN MASYARAKAT",
            content: "Kehidupan sehari-hari mengalami perubahan besar.\n\nMasyarakat menghadapi:\n\n* kelangkaan barang,\n* kekurangan makanan,\n* kenaikan tekanan ekonomi,\n* keterbatasan pakaian,\n* pengawasan pemerintah,\n* kewajiban kerja,\n* mobilisasi pemuda.\n\nSituasi tersebut menunjukkan bahwa perang tidak hanya terjadi di medan pertempuran.\n\n> **Perang juga mengubah kehidupan masyarakat biasa.**"
          },
          {
            heading: "17. KEBIJAKAN PENDIDIKAN",
            content: "Jepang mengurangi pengaruh Belanda dalam sistem pendidikan.\n\nBahasa Belanda tidak lagi memiliki kedudukan seperti sebelumnya.\n\nBahasa Indonesia justru memperoleh ruang yang lebih luas sebagai bahasa komunikasi dan pengantar.\n\nBahasa Jepang juga diajarkan.\n\nPendidikan diarahkan untuk:\n\n* menanamkan loyalitas kepada Jepang,\n* membentuk disiplin,\n* mendukung kepentingan perang,\n* menyebarkan propaganda."
          },
          {
            heading: "18. DAMPAK PENDIDIKAN JEPANG",
            content: "Dampaknya bersifat kompleks.\n\n### Dampak negatif\n\n* pendidikan dikontrol pemerintah,\n* materi pelajaran digunakan untuk propaganda,\n* kebebasan akademik terbatas,\n* fasilitas pendidikan mengalami berbagai keterbatasan.\n\n### Dampak yang kemudian memiliki arti penting bagi Indonesia\n\n* penggunaan bahasa Indonesia semakin luas,\n* pengalaman organisasi meningkat,\n* hubungan antardaerah semakin berkembang,\n* sebagian pemuda memperoleh pengalaman kepemimpinan dan kedisiplinan.\n\nIni merupakan contoh **paradoks sejarah**.\n\nSebuah kebijakan yang dibuat untuk kepentingan penjajah dapat menghasilkan konsekuensi yang kemudian dimanfaatkan oleh bangsa yang dijajah."
          },
          {
            heading: "19. ORGANISASI BENTUKAN JEPANG",
            content: "Jepang membentuk berbagai organisasi untuk mengendalikan dan memobilisasi masyarakat.\n\n---\n\n## 1. Gerakan Tiga A\n\nGerakan ini menggunakan slogan yang menampilkan Jepang sebagai pemimpin, pelindung, dan cahaya Asia.\n\nNamun, organisasi tersebut tidak mendapatkan dukungan masyarakat seperti yang diharapkan Jepang.\n\nAkibatnya, Gerakan Tiga A akhirnya dibubarkan."
          },
          {
            heading: "20. PUTERA",
            content: "Pada tahun 1943 Jepang membentuk **Pusat Tenaga Rakyat (Putera)**.\n\nTokoh utama yang memimpin Putera dikenal sebagai **Empat Serangkai**:\n\n* Soekarno,\n* Mohammad Hatta,\n* Ki Hadjar Dewantara,\n* K.H. Mas Mansyur.\n\nTujuan Jepang adalah menggunakan pengaruh tokoh tersebut untuk menggerakkan rakyat mendukung perang.\n\nNamun, tokoh Indonesia melihat organisasi tersebut sebagai kesempatan untuk:\n\n* membangun kesadaran nasional,\n* berkomunikasi dengan masyarakat,\n* mengembangkan jaringan,\n* memperkuat persatuan.\n\nDengan demikian terdapat perbedaan kepentingan:\n\n**Jepang:** memobilisasi rakyat untuk perang.\n\n**Tokoh Indonesia:** memanfaatkan ruang tersebut untuk kepentingan bangsa."
          },
          {
            heading: "21. JAWA HOKOKAI",
            content: "Karena Putera dianggap kurang efektif bagi kepentingan perang Jepang, Jepang kemudian membentuk **Jawa Hokokai**.\n\nOrganisasi ini lebih langsung berada di bawah kontrol Jepang.\n\nTujuannya adalah mengerahkan masyarakat untuk:\n\n* bekerja,\n* mengumpulkan hasil produksi,\n* menghemat,\n* menyumbang,\n* mendukung perang."
          },
          {
            heading: "22. ORGANISASI PEMUDA",
            content: "Jepang juga membentuk organisasi pemuda.\n\n## 1. Seinendan\n\nSeinendan merupakan organisasi pemuda yang diberikan latihan kedisiplinan dan dasar-dasar kemiliteran.\n\nTujuannya adalah mempersiapkan pemuda untuk membantu pertahanan Jepang.\n\nNamun, pengalaman tersebut kemudian memberikan sebagian pemuda Indonesia keterampilan:\n\n* disiplin,\n* organisasi,\n* kepemimpinan,\n* dasar kemiliteran.\n\n---\n\n## 2. Keibodan\n\nKeibodan merupakan organisasi pembantu polisi.\n\nAnggotanya diberi tugas membantu menjaga:\n\n* keamanan,\n* ketertiban,\n* pengawasan masyarakat."
          },
          {
            heading: "23. HEIHO",
            content: "**Heiho** merupakan pasukan pembantu yang direkrut dari penduduk Indonesia untuk membantu tentara Jepang.\n\nAnggotanya mendapatkan pelatihan militer dan digunakan dalam kepentingan perang Jepang.\n\nPengalaman tersebut menjadi salah satu bentuk pengalaman militer yang diperoleh sebagian pemuda Indonesia selama pendudukan."
          },
          {
            heading: "24. PEMBENTUKAN PETA",
            content: "## Pembela Tanah Air\n\n**PETA** dibentuk pada tahun 1943.\n\nBerbeda dengan Heiho yang lebih langsung menjadi pembantu tentara Jepang, PETA dibentuk untuk membantu pertahanan wilayah Indonesia dari ancaman Sekutu.\n\nPETA memberikan pengalaman militer kepada pemuda Indonesia.\n\nDari pengalaman tersebut kemudian muncul sejumlah tokoh militer Indonesia yang memiliki peranan setelah kemerdekaan."
          },
          {
            heading: "25. PEMBERONTAKAN PETA BLITAR",
            content: "Salah satu perlawanan penting terjadi di Blitar pada Februari 1945.\n\nDipimpin oleh **Supriyadi**, sejumlah anggota PETA melakukan pemberontakan terhadap Jepang.\n\nFaktor pendorongnya antara lain:\n\n* penderitaan rakyat,\n* eksploitasi,\n* perlakuan terhadap rakyat,\n* ketidakpuasan terhadap Jepang.\n\nPemberontakan tersebut menunjukkan bahwa bahkan organisasi yang dibentuk Jepang untuk kepentingan pertahanan mereka dapat menjadi tempat tumbuhnya perlawanan terhadap Jepang."
          },
          {
            heading: "26. PERLAWANAN RAKYAT TERHADAP JEPANG",
            content: "Perlawanan terhadap Jepang terjadi di berbagai daerah.\n\n## 1. Perlawanan di Aceh\n\nMasyarakat Aceh melakukan perlawanan terhadap kebijakan Jepang dan tekanan terhadap kehidupan masyarakat.\n\n## 2. Perlawanan di Singaparna\n\nPerlawanan dipimpin oleh **K.H. Zainal Mustafa**.\n\nSalah satu faktor pentingnya adalah penolakan terhadap kebijakan Jepang yang bertentangan dengan keyakinan dan kehidupan masyarakat.\n\n## 3. Perlawanan di Indramayu\n\nPenderitaan ekonomi dan kebijakan penyerahan hasil pertanian menjadi salah satu faktor munculnya perlawanan.\n\n## 4. Pemberontakan PETA Blitar\n\nPerlawanan dari kalangan militer lokal menunjukkan bahwa ketidakpuasan terhadap Jepang juga muncul di kalangan pemuda yang telah mendapatkan pelatihan militer."
          },
          {
            heading: "27. GERAKAN BAWAH TANAH",
            content: "Tidak semua perjuangan dilakukan melalui pemberontakan terbuka.\n\nSebagian tokoh menggunakan gerakan bawah tanah.\n\nStrategi tersebut dilakukan karena pemerintahan Jepang sangat ketat dalam mengawasi aktivitas politik.\n\nGerakan bawah tanah bertujuan antara lain:\n\n* menyebarkan informasi,\n* membangun jaringan,\n* menjaga semangat nasionalisme,\n* memantau perkembangan perang,\n* mempersiapkan kemerdekaan.\n\nSalah satu tokoh penting adalah **Sutan Sjahrir**."
          },
          {
            heading: "28. STRATEGI KOOPERASI DAN NONKOOPERASI",
            content: "Pada masa pendudukan Jepang terdapat berbagai strategi perjuangan.\n\n### Kooperasi\n\nTokoh Indonesia bekerja dalam organisasi yang dibentuk Jepang.\n\nTujuannya dapat berupa:\n\n* memperoleh ruang bergerak,\n* memanfaatkan organisasi,\n* membangun jaringan,\n* memengaruhi masyarakat.\n\n### Nonkooperasi\n\nSebagian tokoh menolak bekerja sama dengan pemerintah Jepang dan memilih bergerak secara rahasia.\n\n### Perlawanan terbuka\n\nSebagian masyarakat melakukan pemberontakan bersenjata.\n\nDengan demikian, bangsa Indonesia tidak menggunakan satu strategi saja."
          },
          {
            heading: "29. MENGAPA TOKOH INDONESIA MAU BEKERJA SAMA DENGAN JEPANG?",
            content: "Ini merupakan salah satu bagian penting untuk membangun kemampuan berpikir kritis.\n\nJika seorang tokoh Indonesia bekerja sama dengan Jepang, belum tentu berarti tokoh tersebut mendukung penjajahan Jepang.\n\nDalam kondisi pendudukan, kerja sama dapat digunakan sebagai **strategi politik**.\n\nMisalnya:\n\n**Jepang memberikan ruang organisasi**\n↓\nTokoh Indonesia masuk ke organisasi\n↓\nTokoh mendapatkan akses kepada masyarakat\n↓\nTokoh membangun jaringan dan kesadaran nasional\n↓\nPengalaman tersebut dapat dimanfaatkan untuk kepentingan Indonesia.\n\nNamun, strategi tersebut tetap memiliki risiko.\n\nTokoh yang bekerja sama dengan Jepang harus menghadapi dilema:\n\n> **Apakah mereka sedang membantu penjajah atau sedang memanfaatkan penjajah untuk kepentingan bangsa?**\n\nJawabannya harus dilihat berdasarkan konteks, tindakan, tujuan, dan bukti sejarah."
          },
          {
            heading: "30. KEHIDUPAN TOKOH NASIONAL PADA MASA JEPANG",
            content: "## Soekarno\n\nSoekarno menggunakan organisasi bentukan Jepang sebagai ruang untuk berkomunikasi dengan rakyat dan membangun kesadaran nasional.\n\n## Mohammad Hatta\n\nHatta terlibat dalam aktivitas politik dan organisasi pada masa Jepang sambil mempertahankan tujuan nasional Indonesia.\n\n## Sutan Sjahrir\n\nSjahrir memilih jalur gerakan bawah tanah dan menolak kerja sama dengan Jepang.\n\n## Ki Hadjar Dewantara\n\nTerlibat dalam Putera dan aktivitas pendidikan serta pergerakan nasional.\n\n## K.H. Mas Mansyur\n\nTerlibat dalam Putera dan menjadi salah satu tokoh yang memanfaatkan ruang organisasi pada masa Jepang."
          },
          {
            heading: "31. AKHIR KEKUASAAN JEPANG",
            content: "Pada tahun 1944–1945, posisi Jepang dalam Perang Dunia II semakin melemah.\n\nSekutu berhasil merebut banyak wilayah yang sebelumnya dikuasai Jepang.\n\nJepang semakin terdesak.\n\nKondisi tersebut membuat pemerintah Jepang berusaha mendapatkan dukungan penduduk Indonesia."
          },
          {
            heading: "32. JANJI KEMERDEKAAN",
            content: "Pada tahun 1944, Perdana Menteri Jepang **Kuniaki Koiso** menyampaikan janji mengenai kemerdekaan bagi Indonesia pada masa depan.\n\nJanji tersebut merupakan bagian dari strategi politik Jepang untuk mempertahankan dukungan masyarakat Indonesia ketika posisi Jepang semakin terdesak.\n\nNamun, janji tersebut tidak langsung berarti Indonesia merdeka."
          },
          {
            heading: "33. BPUPKI",
            content: "Jepang kemudian membentuk **Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia (BPUPKI)**.\n\nPembentukan BPUPKI menjadi perkembangan politik yang sangat penting.\n\nWalaupun dibentuk dalam konteks kepentingan Jepang, badan ini menjadi ruang bagi tokoh Indonesia untuk membahas:\n\n* dasar negara,\n* bentuk negara,\n* wilayah negara,\n* konstitusi,\n* pemerintahan Indonesia."
          },
          {
            heading: "34. SIDANG PERTAMA BPUPKI",
            content: "Sidang pertama BPUPKI membahas dasar negara.\n\nDalam sidang tersebut muncul berbagai gagasan dari tokoh-tokoh Indonesia.\n\nSalah satu pidato yang sangat penting disampaikan oleh **Soekarno pada 1 Juni 1945**.\n\nDalam pidato tersebut Soekarno menyampaikan gagasan mengenai dasar negara yang kemudian dikenal sebagai **Pancasila**."
          },
          {
            heading: "35. SIDANG KEDUA BPUPKI",
            content: "Sidang kedua membahas berbagai hal berkaitan dengan persiapan negara Indonesia.\n\nPembahasan meliputi:\n\n* rancangan Undang-Undang Dasar,\n* wilayah negara,\n* kewarganegaraan,\n* pemerintahan,\n* perekonomian,\n* pertahanan.\n\nPerkembangan ini menunjukkan bahwa perjuangan menuju kemerdekaan semakin memasuki tahap yang konkret."
          },
          {
            heading: "36. PPKI",
            content: "Setelah BPUPKI dibubarkan, Jepang membentuk **Panitia Persiapan Kemerdekaan Indonesia (PPKI)**.\n\nPPKI memiliki tugas yang berkaitan dengan persiapan pembentukan negara Indonesia.\n\nNamun, perkembangan Perang Dunia II mengubah situasi secara drastis."
          },
          {
            heading: "37. JEPANG MENYERAH",
            content: "Pada Agustus 1945, Jepang mengalami kehancuran besar akibat serangan bom atom di:\n\n* Hiroshima — 6 Agustus 1945.\n* Nagasaki — 9 Agustus 1945.\n\nUni Soviet juga menyatakan perang terhadap Jepang dan menyerang wilayah pendudukan Jepang di Asia.\n\nAkhirnya Jepang menyerah kepada Sekutu pada **15 Agustus 1945**.\n\nBerita tersebut menjadi titik penting bagi perjuangan kemerdekaan Indonesia."
          },
          {
            heading: "38. KEKOSONGAN KEKUASAAN",
            content: "Ketika Jepang menyerah, terjadi situasi yang sering disebut sebagai **kekosongan kekuasaan (vacuum of power)** dalam konteks politik Indonesia.\n\nJepang masih berada di Indonesia, tetapi mereka telah menyerah dan diperintahkan mempertahankan status quo sampai kedatangan Sekutu.\n\nDi sisi lain, bangsa Indonesia melihat kesempatan untuk segera memproklamasikan kemerdekaan.\n\nTerjadi perbedaan pandangan antara golongan muda dan golongan tua."
          },
          {
            heading: "39. PERISTIWA RENGASDENGKLOK",
            content: "Golongan muda mendesak Soekarno dan Hatta agar segera memproklamasikan kemerdekaan tanpa menunggu keputusan Jepang.\n\nPerbedaan pandangan tersebut kemudian menyebabkan terjadinya **Peristiwa Rengasdengklok pada 16 Agustus 1945**.\n\nPeristiwa tersebut menjadi salah satu rangkaian penting menuju Proklamasi."
          },
          {
            heading: "40. PROKLAMASI KEMERDEKAAN",
            content: "Pada tanggal:\n\n## **17 AGUSTUS 1945**\n\nIndonesia memproklamasikan kemerdekaannya.\n\nProklamasi menjadi titik balik sejarah Indonesia.\n\nNamun, penting dipahami:\n\n> **Pendudukan Jepang bukanlah penyebab tunggal lahirnya kemerdekaan Indonesia.**\n\nKemerdekaan merupakan hasil dari proses panjang:\n\n* pergerakan nasional,\n* pengalaman kolonialisme,\n* perjuangan tokoh,\n* organisasi,\n* pendidikan,\n* perkembangan internasional,\n* pengalaman selama pendudukan Jepang,\n* serta keputusan bangsa Indonesia sendiri untuk memproklamasikan kemerdekaan."
          },
          {
            heading: "41. DAMPAK PENDUDUKAN JEPANG",
            content: "## 1. Dampak politik\n\n* Berakhirnya kekuasaan Belanda.\n* Pengalaman politik tokoh Indonesia.\n* Berkembangnya organisasi.\n* Terbentuknya BPUPKI dan PPKI.\n* Meningkatnya aktivitas politik menjelang kemerdekaan.\n\n---\n\n## 2. Dampak ekonomi\n\nSebagian besar bersifat negatif:\n\n* eksploitasi sumber daya,\n* kekurangan pangan,\n* kemiskinan,\n* inflasi,\n* kerusakan ekonomi,\n* pengerahan tenaga kerja.\n\n---\n\n## 3. Dampak sosial\n\n* Perubahan struktur masyarakat.\n* Mobilisasi masyarakat.\n* Penderitaan rakyat.\n* Perpindahan tenaga kerja.\n* Meningkatnya kontrol pemerintah terhadap kehidupan masyarakat.\n\n---\n\n## 4. Dampak pendidikan\n\n* Berkurangnya pengaruh Belanda.\n* Bahasa Indonesia semakin luas.\n* Bahasa Jepang diperkenalkan.\n* Pendidikan diarahkan untuk kepentingan Jepang.\n* Muncul pengalaman organisasi dan kepemimpinan.\n\n---\n\n## 5. Dampak militer\n\nIni merupakan salah satu dampak jangka panjang yang penting.\n\nPemuda Indonesia memperoleh pengalaman:\n\n* disiplin,\n* strategi dasar,\n* organisasi,\n* kepemimpinan,\n* penggunaan senjata,\n* latihan militer.\n\nPengalaman tersebut kemudian berguna dalam perjuangan mempertahankan kemerdekaan."
          },
          {
            heading: "42. PARADOKS PENDUDUKAN JEPANG",
            content: "Pendudukan Jepang memberikan dua wajah yang perlu dipahami secara bersamaan.\n\n### Sisi pertama: penderitaan\n\nRakyat mengalami:\n\n* romusha,\n* kekurangan pangan,\n* eksploitasi,\n* kekerasan,\n* pembatasan kebebasan.\n\n### Sisi kedua: munculnya pengalaman baru\n\nSebagian masyarakat memperoleh:\n\n* pengalaman organisasi,\n* pengalaman politik,\n* pengalaman militer,\n* penggunaan bahasa Indonesia yang semakin luas,\n* jaringan antardaerah,\n* pengalaman pemerintahan.\n\nOleh karena itu, kesimpulan yang terlalu sederhana seperti:\n\n> \"Pendudukan Jepang hanya membawa penderitaan\"\n\natau:\n\n> \"Jepang membantu Indonesia merdeka\"\n\nkeduanya kurang tepat.\n\nSejarah harus melihat **kompleksitas dan hubungan sebab-akibat**."
          },
          {
            heading: "43. KESIMPULAN MATERI",
            content: "Pendudukan Jepang di Indonesia berlangsung antara **1942–1945** dalam konteks Perang Dunia II.\n\nJepang menduduki Indonesia karena memiliki kepentingan strategis dan ekonomi, terutama terhadap sumber daya alam, minyak bumi, pangan, tenaga kerja, dan posisi geografis Indonesia.\n\nSetelah mengalahkan Belanda pada 1942, Jepang membangun pemerintahan militer dan menerapkan berbagai kebijakan untuk mendukung kepentingan perang.\n\nRakyat mengalami penderitaan akibat:\n\n* eksploitasi ekonomi,\n* romusha,\n* kekurangan pangan,\n* pembatasan kebebasan,\n* mobilisasi,\n* serta kontrol politik.\n\nNamun bangsa Indonesia tidak hanya menjadi korban pasif. Mereka menggunakan berbagai strategi:\n\n**bekerja sama → memanfaatkan organisasi → membangun jaringan → bergerak di bawah tanah → melakukan perlawanan.**\n\nJepang kemudian semakin terdesak dalam Perang Dunia II. Untuk mempertahankan dukungan rakyat Indonesia, Jepang memberikan ruang politik yang akhirnya menghasilkan BPUPKI dan PPKI.\n\nKetika Jepang menyerah pada Agustus 1945, bangsa Indonesia memanfaatkan situasi tersebut untuk mempercepat proses kemerdekaan.\n\nAkhirnya, pada **17 Agustus 1945**, Indonesia memproklamasikan kemerdekaannya.\n\nDengan demikian, pendudukan Jepang merupakan periode yang penuh paradoks: **sangat menindas dalam kehidupan rakyat, tetapi pada saat yang sama memberikan sejumlah pengalaman politik, organisasi, dan militer yang kemudian menjadi bagian dari modal perjuangan Indonesia.**"
          },
          {
            heading: "44. INTI PEMAHAMAN PESERTA DIDIK",
            content: "Setelah menyelesaikan bab ini, peserta didik idealnya tidak hanya mampu menjawab:\n\n> **\"Kapan Jepang datang ke Indonesia?\"**\n\ntetapi mampu menjelaskan:\n\n> **\"Mengapa Jepang datang?\"**\n\n> **\"Bagaimana Jepang mempertahankan kekuasaannya?\"**\n\n> **\"Mengapa rakyat Indonesia akhirnya menolak Jepang?\"**\n\n> **\"Mengapa sebagian tokoh memilih bekerja sama?\"**\n\n> **\"Bagaimana rakyat melakukan perlawanan?\"**\n\n> **\"Mengapa pengalaman masa Jepang penting bagi Indonesia setelah 1945?\"**\n\nDan pertanyaan paling penting:\n\n> ### **\"Sejauh mana pendudukan Jepang berpengaruh terhadap lahirnya Indonesia merdeka?\"**\n\nPertanyaan terakhir dapat menjadi **benang merah pembelajaran** sekaligus dasar untuk asesmen HOTS karena siswa harus menghubungkan **sebab, proses, strategi, dampak, dan perubahan sejarah**, bukan sekadar menghafalkan tanggal dan nama tokoh."
          }
        ],
        glossary: [
          { term: 'Koalisi ABCD', def: 'Aliansi Amerika, British (Inggris), China, dan Dutch (Belanda) yang memberlakukan embargo minyak dan bahan mentah total terhadap Jepang pada Juli 1941.' },
          { term: 'Hakko Ichi-u', def: 'Doktrin religius Shinto yang bermakna delapan penjuru dunia di bawah satu atap, dijadikan legitimasi imperialisme Jepang di Asia.' },
          { term: 'Nanshin-ron', def: 'Doktrin geopolitik Kekaisaran Jepang untuk berekspansi ke arah selatan guna menguasai sumber daya alam dan minyak bumi di Asia Tenggara.' },
          { term: 'Kapitulasi Kalijati', def: 'Perjanjian penyerahan kekuasaan tanpa syarat dari Hindia Belanda kepada tentara Jepang pada 8 Maret 1942 di Lanud Kalijati, Subang, Jawa Barat.' },
          { term: 'Gunsei', def: 'Sistem pemerintahan pendudukan militer darurat perang yang diberlakukan tentara Jepang di Indonesia.' },
          { term: 'Tonarigumi', def: 'Organisasi rukun tetangga yang beranggotakan 10–20 kepala keluarga yang dibentuk Jepang untuk pengawasan sosial dan distribusi beras, cikal bakal RT/RW.' },
          { term: 'Seikerei', def: 'Kewajiban membungkukkan tubuh 90 derajat menghadap arah Istana Kaisar di Tokyo (Tenno Heika) sebagai lambang pemuliaan keturunan Dewa Matahari.' },
          { term: 'Autarki Regional', def: 'Sistem ekonomi tertutup di mana setiap daerah karesidenan diwajibkan memenuhi kebutuhan pangan dan perangnya sendiri tanpa pasokan luar.' },
          { term: 'Romusha', def: 'Pengerahan jutaan tenaga kerja paksa rakyat bumiputera yang dibingkai sebagai "Prajurit Ekonomi" untuk membangun instalasi militer dan jalur kereta api maut.' },
          { term: 'Jugun Ianfu', def: 'Praktik perbudakan seksual terorganisir di mana ribuan perempuan muda dipaksa melayani serdadu militer Jepang di rumah bordil militer (Ianjo).' },
          { term: 'Poetra', def: 'Poesat Tenaga Rakjat, wadah persatuan rakyat bentukan militer Jepang yang dipimpin Empat Serangkai (Sukarno, Hatta, Ki Hajar Dewantara, Mas Mansyur).' },
          { term: 'Jawa Hokokai', def: 'Himpunan Kebaktian Jawa yang dibentuk pada 1944 dan dipimpin langsung oleh Gunseikan untuk memperketat mobilisasi beras dan Romusha.' },
          { term: 'PETA', def: 'Tentara Sukarela Pembela Tanah Air, militer teritorial pribumi bentukan Jepang (1943) yang melahirkan korps perwira pendiri TNI seperti Soedirman dan Yani.' },
          { term: 'Janji Koiso', def: 'Pernyataan resmi PM Kuniaki Koiso pada 7 September 1944 yang menjanjikan kemerdekaan bagi Hindia Timur (Indonesia) di kelak kemudian hari.' },
          { term: 'BPUPK & PPKI', def: 'Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan dan Panitia Persiapan Kemerdekaan Indonesia yang merumuskan Pancasila dan UUD 1945.' },
          { term: 'Sishankamrata', def: 'Sistem Pertahanan Keamanan Rakyat Semesta yang berakar dari pengalaman perang rakyat semesta pada masa PETA dan Revolusi Kemerdekaan.' }
        ],
        reflectionQuestions: [
          'Bagaimana pelajaran kepemimpinan taktis para tokoh Empat Serangkai yang secara cerdik memanfaatkan mimbar Poetra dan radio resmi Jepang untuk mengonsolidasikan nasionalisme rakyat tanpa memicu kecurigaan fasis militer?',
          'Penolakan K.H. Zaenal Mustafa dan Teungku Abdul Djalil terhadap upacara Seikerei membuktikan keteguhan memegang prinsip tauhid di atas ancaman kekerasan. Bagaimana keteguhan integritas moral serupa diterapkan dalam menolak korupsi dan ketidakjujuran di dunia kerja modern?',
          'Krisis embargo minyak bumi oleh koalisi ABCD menjadi pemicu Perang Pasifik. Apa pelajaran krusial bagi generasi muda Indonesia dalam membangun ketahanan energi mandiri berbasis energi terbarukan di era transisi hijau saat ini?'
        ]
      },
      {
        id: 'smk-xi-2',
        title: 'Proklamasi Kemerdekaan Republik Indonesia',
        phase: 'Fase F',
        grade: 'Kelas XI',
        icon: '🇮🇩',
        period: 'Agustus 1945',
        cpSummary: 'Menganalisis kekosongan kekuasaan pasca-Hiroshima, peristiwa Rengasdengklok, perumusan teks proklamasi di rumah Maeda, pembacaan 17 Agustus 1945, serta peletakan fondasi konstitusi dalam sidang PPKI.',
        syllabus: {
          atp: [
            '11.2.1 Merekonstruksi dinamika kekosongan kekuasaan (vacuum of power) pasca pengeboman atom Hiroshima-Nagasaki dan kapitulasi Jepang.',
            '11.2.2 Menganalisis perbedaan strategi antara golongan pemuda radikal dengan golongan tua dalam Peristiwa Rengasdengklok 16 Agustus 1945.',
            '11.2.3 Menguraikan proses diplomasi dan perumusan kalimat demi kalimat naskah proklamasi di kediaman Laksamana Tadashi Maeda.',
            '11.2.4 Mengevaluasi signifikansi historis keputusan Sidang PPKI tanggal 18, 19, dan 22 Agustus 1945 dalam meletakkan tatanan konstitusional dan administrasi negara.'
          ],
          meaningfulUnderstanding: 'Proklamasi Kemerdekaan Indonesia bukanlah hadiah dari penguasa asing, melainkan buah dari keberanian moral, ketajaman membaca momentum geopolitik, dan kebersamaan tekad seluruh elemen bangsa yang mengesampingkan segala perbedaan demi lahirnya kedaulatan NKRI.',
          essentialQuestions: [
            'Mengapa golongan pemuda bersikukuh menolak jika proklamasi dibacakan melalui wadah rapat Panitia Persiapan Kemerdekaan Indonesia (PPKI)?',
            'Bagaimana sidang PPKI 18 Agustus 1945 berhasil menetapkan Undang-Undang Dasar dan memilih presiden-wapres hanya dalam tempo satu hari?'
          ]
        },
        subtopics: [
          {
            heading: "1. PENDAHULUAN",
            content: "Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945 merupakan salah satu peristiwa paling penting dalam sejarah bangsa Indonesia. Pada hari tersebut, bangsa Indonesia menyatakan kepada dunia bahwa dirinya telah merdeka dan berhak menentukan masa depannya sendiri.\n\nBagi peserta didik, Proklamasi sering kali dikenal melalui tiga hal utama: tanggal 17 Agustus 1945, pembacaan teks Proklamasi oleh Soekarno, dan pengibaran bendera Merah Putih. Namun, Proklamasi sebenarnya jauh lebih kompleks daripada sebuah upacara yang berlangsung dalam waktu singkat.\n\nProklamasi merupakan hasil dari proses sejarah yang panjang. Di dalamnya terdapat pengaruh penjajahan Belanda, pendudukan Jepang, perkembangan Perang Dunia II, munculnya gerakan nasional, pembentukan BPUPKI dan PPKI, perbedaan pandangan antara golongan muda dan golongan tua, peristiwa Rengasdengklok, perumusan teks Proklamasi, serta keberanian bangsa Indonesia dalam mengambil keputusan politik.\n\nDengan demikian, Proklamasi tidak boleh dipahami sebagai peristiwa yang muncul secara tiba-tiba. Proklamasi merupakan puncak dari berbagai proses sejarah sekaligus awal dari perjuangan membangun negara Indonesia."
          },
          {
            heading: "2. PERTANYAAN BESAR PEMBELAJARAN",
            content: "Sepanjang mempelajari materi ini, peserta didik diarahkan untuk menjawab pertanyaan:\n\n> **\"Apakah Proklamasi Kemerdekaan Indonesia merupakan peristiwa yang terjadi secara tiba-tiba, atau merupakan hasil dari proses panjang perjuangan dan keputusan politik bangsa Indonesia?\"**\n\nPertanyaan tersebut menjadi benang merah dari seluruh materi."
          },
          {
            heading: "3. KONDISI INDONESIA MENJELANG PROKLAMASI",
            content: "### 1. Indonesia di Bawah Pendudukan Jepang\n\nSebelum membicarakan Proklamasi, kita perlu memahami keadaan Indonesia pada masa pendudukan Jepang.\n\nJepang mulai menduduki Indonesia pada tahun 1942 setelah berhasil mengalahkan pemerintahan kolonial Belanda. Kedatangan Jepang pada awalnya disambut oleh sebagian masyarakat karena propaganda Jepang menyebut dirinya sebagai pembebas bangsa-bangsa Asia dari penjajahan Barat.\n\nJepang menggunakan slogan seperti:\n> “Jepang Pemimpin Asia, Jepang Pelindung Asia, Jepang Cahaya Asia.”\n\nNamun, dalam praktiknya, Jepang bukanlah pembebas Indonesia. Jepang menjalankan pemerintahan militer dan mengeksploitasi sumber daya Indonesia untuk kepentingan perang.\n\nRakyat mengalami berbagai penderitaan, seperti:\n* kekurangan bahan pangan,\n* kerja paksa,\n* pengambilan hasil pertanian,\n* pengawasan ketat,\n* pembatasan kebebasan,\n* penindasan politik,\n* dan tekanan sosial.\n\nSalah satu kebijakan paling dikenal adalah **romusha**, yaitu pengerahan tenaga kerja untuk berbagai proyek yang mendukung kepentingan Jepang.\n\nMeskipun demikian, pendudukan Jepang menghasilkan situasi yang kemudian mempunyai pengaruh terhadap perjalanan menuju kemerdekaan. Jepang membentuk berbagai organisasi, melatih pemuda dalam kegiatan semi-militer, memberi ruang terbatas bagi beberapa tokoh nasional untuk tampil di depan umum, dan pada masa akhir pendudukannya membentuk BPUPKI serta PPKI.\n\nDi sinilah muncul sebuah kenyataan sejarah yang tampak paradoks:\n> **Pendudukan Jepang menyebabkan penderitaan besar, tetapi situasi yang diciptakannya juga memberikan pengalaman politik, organisasi, dan militer yang kemudian dimanfaatkan bangsa Indonesia.**\n\n---\n\n### 2. Perang Dunia II dan Perubahan Posisi Jepang\n\nPeristiwa Proklamasi Indonesia tidak dapat dipisahkan dari situasi dunia, khususnya Perang Dunia II.\n\nJepang bergabung dalam kekuatan Blok Poros bersama Jerman dan Italia. Jepang kemudian memperluas wilayah kekuasaannya di Asia dan Pasifik.\n\nPada akhir 1941, Jepang menyerang Pearl Harbor di Hawaii. Serangan tersebut membawa Amerika Serikat secara langsung ke dalam Perang Dunia II.\n\nSetelah memperoleh kemenangan di berbagai wilayah pada awal perang, Jepang mulai mengalami kemunduran. Amerika Serikat dan negara-negara Sekutu secara bertahap berhasil menghentikan ekspansi Jepang.\n\nKekalahan Jepang semakin jelas pada 1944–1945.\n\nSituasi Jepang semakin terdesak karena:\n* kekuatan militernya melemah,\n* banyak wilayah kekuasaannya direbut Sekutu,\n* jalur pasokan terganggu,\n* industri perang mengalami kesulitan,\n* dan kota-kota Jepang menjadi sasaran serangan.\n\nPada 6 Agustus 1945, Amerika Serikat menjatuhkan bom atom di Hiroshima. Tiga hari kemudian, pada 9 Agustus 1945, bom atom dijatuhkan di Nagasaki.\n\nDi tengah situasi tersebut, Uni Soviet juga menyatakan perang terhadap Jepang pada 8 Agustus 1945.\n\nAkhirnya Jepang menyerah kepada Sekutu pada **15 Agustus 1945**.\n\nKabar menyerahnya Jepang inilah yang menjadi titik penting dalam sejarah Indonesia."
          },
          {
            heading: "4. KEKALAHAN JEPANG DAN MUNCULNYA PELUANG KEMERDEKAAN",
            content: "### 1. Mengapa Kekalahan Jepang Penting bagi Indonesia?\n\nKetika Jepang menyerah, muncul persoalan besar: **Siapa yang menguasai Indonesia?**\n\nSecara militer, Jepang masih berada di wilayah Indonesia. Namun, Jepang telah menerima perintah untuk mempertahankan keadaan seperti sebelumnya sampai kedatangan Sekutu.\n\nPada saat yang sama, kekuasaan Jepang sebenarnya telah kehilangan legitimasi politik.\n\nSituasi tersebut menciptakan sebuah kondisi yang sering disebut sebagai **kekosongan kekuasaan (vacuum of power)**.\n\nIstilah ini perlu dipahami secara hati-hati. Kekosongan kekuasaan bukan berarti tidak ada aparat bersenjata sama sekali. Tentara Jepang masih ada. Yang terjadi adalah adanya kekosongan legitimasi dan kesempatan politik karena Jepang telah menyerah, sementara kekuasaan baru dari Sekutu belum sepenuhnya mengambil alih pemerintahan Indonesia.\n\nKeadaan inilah yang dimanfaatkan oleh para pemimpin bangsa.\n\n---\n\n### 2. Berita Kekalahan Jepang\n\nBerita tentang kekalahan Jepang tidak langsung diketahui secara seragam oleh seluruh rakyat.\n\nPara pemuda memperoleh informasi melalui berbagai saluran, termasuk radio dan jaringan komunikasi antartokoh.\n\n**Sutan Sjahrir** menjadi salah satu tokoh yang mengetahui informasi mengenai menyerahnya Jepang dan mendorong agar kemerdekaan segera diproklamasikan.\n\nMenurut golongan muda, kesempatan seperti ini tidak boleh dilewatkan.\n\nMereka khawatir apabila Proklamasi terlalu lama ditunda, bangsa Indonesia akan dianggap memperoleh kemerdekaan sebagai hadiah atau pemberian dari Jepang.\n\nKarena itu muncul tuntutan:\n> **Kemerdekaan harus dinyatakan atas kehendak bangsa Indonesia sendiri.**"
          },
          {
            heading: "5. BPUPKI DAN PERSIAPAN MENUJU KEMERDEKAAN",
            content: "### 1. Latar Belakang Pembentukan BPUPKI\n\nMenjelang akhir pendudukannya, posisi Jepang di Indonesia semakin lemah.\n\nPemerintah Jepang kemudian mengumumkan pembentukan suatu badan yang bertugas mempelajari hal-hal penting berkaitan dengan persiapan kemerdekaan Indonesia.\n\nBadan tersebut dikenal dengan nama:\n**Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia (BPUPKI)**, atau dalam bahasa Jepang dikenal sebagai *Dokuritsu Junbi Chōsakai*.\n\nBPUPKI diumumkan pada 1 Maret 1945 dan dilantik pada 28 Mei 1945.\nKetua BPUPKI adalah **Dr. Radjiman Wedyodiningrat**.\n\n---\n\n### 2. Tujuan BPUPKI\n\nBPUPKI secara resmi bertugas menyelidiki dan mempelajari hal-hal penting mengenai persiapan pembentukan negara Indonesia.\n\nNamun, bagi tokoh-tokoh Indonesia, forum ini menjadi kesempatan penting untuk membicarakan masa depan bangsa.\n\nUntuk pertama kalinya dalam situasi pendudukan Jepang, para tokoh dapat membahas secara terbuka sejumlah persoalan mendasar:\n* dasar negara,\n* bentuk negara,\n* wilayah negara,\n* kewarganegaraan,\n* konstitusi,\n* dan sistem pemerintahan.\n\n---\n\n### 3. Sidang Pertama BPUPKI\n\nSidang pertama berlangsung pada **29 Mei–1 Juni 1945**.\n\nPokok persoalan utama yang dibicarakan adalah:\n> **Apa dasar negara Indonesia yang akan merdeka?**\n\nBeberapa tokoh menyampaikan gagasan mereka:\n\n**Mohammad Yamin**\nMenyampaikan gagasan mengenai dasar negara yang menekankan unsur:\n* kebangsaan,\n* kemanusiaan,\n* ketuhanan,\n* kerakyatan,\n* dan kesejahteraan rakyat.\n\n**Soepomo**\nMembahas gagasan mengenai negara integralistik serta hubungan antara negara dan masyarakat. Ia menekankan pentingnya persatuan antara individu, masyarakat, dan negara.\n\n**Soekarno**\nPada **1 Juni 1945**, Soekarno menyampaikan pidato yang kemudian sangat penting dalam sejarah lahirnya Pancasila. Ia mengemukakan lima dasar:\n1. Kebangsaan Indonesia.\n2. Internasionalisme atau perikemanusiaan.\n3. Mufakat atau demokrasi.\n4. Kesejahteraan sosial.\n5. Ketuhanan yang berkebudayaan.\n\nKelima gagasan tersebut kemudian dikenal sebagai **Pancasila**.\n\n---\n\n### 4. Panitia Sembilan dan Piagam Jakarta\n\nSetelah sidang pertama BPUPKI, dibentuk **Panitia Sembilan**. Panitia ini berusaha menemukan rumusan yang dapat diterima oleh berbagai kelompok dalam masyarakat Indonesia.\n\nPada **22 Juni 1945**, Panitia Sembilan menghasilkan naskah yang dikenal sebagai **Piagam Jakarta**.\n\nPiagam Jakarta memiliki arti penting karena menjadi salah satu tahap dalam proses perumusan Pembukaan UUD 1945. Namun, rumusan tersebut kemudian mengalami perubahan sebelum akhirnya disahkan.\n\nPerubahan tersebut menunjukkan bahwa pembentukan negara Indonesia dilakukan melalui proses kompromi dan pertimbangan terhadap keberagaman masyarakat.\n\n---\n\n### 5. Sidang Kedua BPUPKI\n\nSidang kedua BPUPKI berlangsung pada **10–17 Juli 1945**.\n\nPembahasan berfokus pada persoalan:\n* rancangan Undang-Undang Dasar,\n* wilayah negara,\n* kewarganegaraan,\n* bentuk negara,\n* dan berbagai perangkat penting negara.\n\nDengan demikian, BPUPKI tidak hanya membahas gagasan kemerdekaan, tetapi mulai memikirkan: *\"Jika Indonesia merdeka, negara seperti apa yang akan dibentuk?\"*\n\nPertanyaan inilah yang membuat proses menuju kemerdekaan tidak hanya bersifat emosional, tetapi juga bersifat konstitusional dan politik."
          },
          {
            heading: "6. PPKI DAN PERSIAPAN PEMBENTUKAN NEGARA",
            content: "### 1. Pembentukan PPKI\n\nSetelah BPUPKI dibubarkan, Jepang membentuk **Panitia Persiapan Kemerdekaan Indonesia (PPKI)** atau *Dokuritsu Junbi Iinkai*.\n\nPPKI dibentuk pada **7 Agustus 1945**. Tokoh yang ditunjuk sebagai ketua adalah **Soekarno**, sedangkan **Mohammad Hatta** menjadi wakil ketua.\n\nSemula PPKI dibentuk oleh pemerintah Jepang. Namun, para pemimpin Indonesia kemudian mengembangkan PPKI menjadi forum yang digunakan untuk kepentingan bangsa Indonesia sendiri.\n\nSetelah Jepang menyerah, kedudukan PPKI semakin penting karena dapat digunakan untuk menyusun langkah-langkah awal negara Indonesia.\n\n---\n\n### 2. Hubungan BPUPKI dan PPKI\n\nBPUPKI dan PPKI memiliki fungsi berbeda tetapi saling berkaitan:\n\n* **BPUPKI** lebih banyak membahas dasar negara, konstitusi, bentuk negara, wilayah negara, dan berbagai persiapan politik.\n* **PPKI** melanjutkan proses tersebut menuju pembentukan negara.\n\nDengan demikian:\n> **BPUPKI mempersiapkan gagasan dan perangkat dasar negara, sedangkan PPKI mengambil langkah konkret untuk membentuk negara Indonesia setelah Proklamasi.**"
          },
          {
            heading: "7. GOLONGAN MUDA DAN GOLONGAN TUA",
            content: "### 1. Mengapa Muncul Perbedaan Pendapat?\n\nSetelah Jepang menyerah, terjadi perbedaan pandangan mengenai waktu dan cara Proklamasi.\n\nPerbedaan ini bukan berarti kedua kelompok berbeda dalam tujuan. Baik golongan muda maupun golongan tua pada dasarnya menginginkan Indonesia merdeka.\n\nPerbedaannya terletak pada:\n> **kapan kemerdekaan harus diproklamasikan dan bagaimana Proklamasi dilaksanakan.**\n\n---\n\n### 2. Pandangan Golongan Tua\n\nTokoh yang sering dikaitkan dengan golongan tua antara lain **Soekarno**, **Mohammad Hatta**, dan **Ahmad Soebardjo**.\n\nMereka mempertimbangkan berbagai faktor:\n* kemungkinan tindakan militer Jepang,\n* situasi politik,\n* kesiapan rakyat,\n* kondisi keamanan,\n* serta hubungan dengan PPKI.\n\nMereka tidak berarti menolak kemerdekaan. Mereka justru mempertimbangkan agar keputusan yang diambil mempunyai landasan kuat dan dapat dilaksanakan dengan sebaik-baiknya demi keselamatan bangsa.\n\n---\n\n### 3. Pandangan Golongan Muda\n\nTokoh golongan muda antara lain **Sukarni**, **Wikana**, **Chaerul Saleh**, dan kawan-kawannya.\n\nMereka berpendapat bahwa Proklamasi harus segera dilakukan tanpa bergantung pada Jepang. Bagi mereka, kemerdekaan merupakan hak mutlak bangsa Indonesia.\n\nGolongan muda juga melihat bahwa menunggu terlalu lama dapat memberikan kesempatan kepada Jepang atau pihak Sekutu untuk memengaruhi dan menghalangi proses kemerdekaan.\n\n---\n\n### 4. Perbedaan yang Harus Dipahami Peserta Didik\n\nPerbedaan pendapat antara golongan muda dan golongan tua tidak tepat apabila disederhanakan menjadi: *\"Golongan muda ingin merdeka, golongan tua tidak.\"*\n\nPernyataan tersebut keliru. Yang sebenarnya terjadi adalah:\n* kedua kelompok sama-sama ingin Indonesia merdeka;\n* keduanya memiliki cara berbeda;\n* golongan muda lebih menekankan kecepatan dan kemandirian;\n* golongan tua lebih menekankan perhitungan politik dan keselamatan rakyat.\n\nInilah salah satu contoh penting bahwa sejarah sering kali tidak sesederhana *\"siapa yang benar dan siapa yang salah\"*."
          },
          {
            heading: "8. PERISTIWA RENGASDENGKLOK",
            content: "### 1. Latar Belakang\n\nSetelah mendengar berita kekalahan Jepang, golongan muda semakin mendesak agar Proklamasi segera dilakukan.\n\nPada **16 Agustus 1945**, Soekarno dan Mohammad Hatta dibawa ke Rengasdengklok, Karawang, oleh kelompok pemuda. Peristiwa ini kemudian dikenal sebagai **Peristiwa Rengasdengklok**.\n\n---\n\n### 2. Tujuan Rengasdengklok\n\nTindakan tersebut dilakukan untuk:\n* menjauhkan Soekarno-Hatta dari pengaruh Jepang,\n* mendesak agar Proklamasi segera dilaksanakan,\n* meyakinkan mereka bahwa situasi telah berubah drastis setelah Jepang menyerah.\n\nPara pemuda ingin memastikan bahwa Proklamasi benar-benar dilakukan atas kekuatan bangsa Indonesia sendiri.\n\n---\n\n### 3. Perdebatan di Rengasdengklok\n\nDi Rengasdengklok terjadi perbedaan pendapat yang intens. Golongan muda mendesak agar Proklamasi dilakukan secepat mungkin. Sementara Soekarno dan Hatta tetap mempertimbangkan situasi politik dan keselamatan rakyat.\n\nPerdebatan ini menunjukkan bahwa dalam sejarah, keputusan besar sering lahir dari konflik gagasan.\n\n---\n\n### 4. Peran Ahmad Soebardjo\n\n**Ahmad Soebardjo** menjadi salah satu tokoh penting dalam penyelesaian ketegangan. Ia berusaha meyakinkan golongan muda bahwa Soekarno-Hatta akan memproklamasikan kemerdekaan setelah kembali ke Jakarta.\n\nSetelah terdapat kesepakatan dan jaminan, Soekarno dan Hatta dibawa kembali ke Jakarta pada malam harinya.\n\n---\n\n### 5. Makna Rengasdengklok\n\nRengasdengklok dapat dilihat sebagai titik penting karena:\n* mempercepat proses Proklamasi,\n* menunjukkan kuatnya tekanan golongan muda,\n* mendorong lahirnya kompromi historis,\n* menunjukkan bahwa keputusan politik tidak selalu berlangsung tanpa konflik.\n\nPeristiwa ini juga menunjukkan pentingnya dialog dan negosiasi dalam penyelesaian konflik kebangsaan."
          },
          {
            heading: "9. PERUMUSAN TEKS PROKLAMASI",
            content: "### 1. Tempat Perumusan\n\nSetelah kembali ke Jakarta, para tokoh berkumpul di kediaman **Laksamana Tadashi Maeda** (Jalan Imam Bonjol No. 1, Jakarta).\n\nRumah tersebut menjadi tempat aman untuk membicarakan Proklamasi karena memiliki imunitas Angkatan Laut Jepang (*Kaigun*). Perumusan berlangsung pada dini hari menjelang 17 Agustus 1945.\n\n---\n\n### 2. Tokoh Utama Perumus\n\nTiga tokoh yang memainkan peran utama dalam perumusan teks Proklamasi adalah:\n* **Soekarno** (menuliskan konsep teks dengan pena),\n* **Mohammad Hatta** (merumuskan kalimat kedua mengenai pengalihan kekuasaan),\n* **Ahmad Soebardjo** (merumuskan kalimat pertama deklarasi kemerdekaan).\n\n---\n\n### 3. Teks Proklamasi\n\nSetelah dirumuskan, teks tersebut kemudian diketik rapi oleh **Sayuti Melik**.\n\nSalah satu perubahan penting dilakukan pada bagian penutup mengenai penandatanganan atas usulan Sukarni:\n> **“Atas nama bangsa Indonesia, Soekarno/Hatta.”**\n\nRumusan tersebut menunjukkan bahwa kemerdekaan dinyatakan atas nama seluruh bangsa Indonesia, bukan atas nama pribadi atau kelompok tertentu.\n\n---\n\n### 4. Mengapa Teks Proklamasi Sangat Singkat?\n\nTeks Proklamasi hanya terdiri dari dua alinea kalimat, tetapi maknanya sangat besar.\n\nHal tersebut karena teks Proklamasi tidak dimaksudkan sebagai konstitusi lengkap. Proklamasi merupakan pernyataan politik resmi bahwa bangsa Indonesia menyatakan kemerdekaannya.\n\nSetelah pernyataan itu, negara membutuhkan konstitusi, pemerintahan, wilayah, lembaga negara, dan rakyat yang menjalankan kehidupan bernegara. Karena itu, Proklamasi merupakan titik awal berdirinya negara Indonesia."
          },
          {
            heading: "10. PROKLAMASI KEMERDEKAAN 17 AGUSTUS 1945",
            content: "### 1. Persiapan Pembacaan Proklamasi\n\nPada pagi hari 17 Agustus 1945, persiapan dilakukan di kediaman Soekarno di **Jalan Pegangsaan Timur No. 56, Jakarta**.\n\nSemula terdapat rencana pelaksanaan di Lapangan Ikada, tetapi dialihkan ke Pegangsaan Timur demi menghindari bentrokan bersenjata dengan pasukan militer Jepang yang menjaga lapangan.\n\n---\n\n### 2. Pembacaan Proklamasi\n\nTepat pukul 10.00 pagi hari Jumat, 17 Agustus 1945 (bulan suci Ramadan), Soekarno membacakan teks Proklamasi didampingi Mohammad Hatta.\n\nSetelah pembacaan teks, dilakukan pengibaran bendera Merah Putih yang dijahit tangan oleh **Fatmawati**. Tokoh pejuang seperti **Latief Hendraningrat** dan **Suhud** bertugas mengibarkan bendera diiringi lagu kebangsaan *Indonesia Raya*.\n\n---\n\n### 3. Suasana Proklamasi\n\nPelaksanaan Proklamasi tidak berlangsung seperti upacara kenegaraan modern yang megah. Fasilitas sangat sederhana, tiang bendera dari batang bambu, dan pengeras suara mikrofon sederhana.\n\nNamun, justru di tengah kesederhanaan tersebut berlangsung peristiwa agung yang mengubah nasib seluruh bangsa Indonesia.\n\n---\n\n### 4. Mengapa Proklamasi Dilakukan pada 17 Agustus?\n\nTanggal 17 Agustus memiliki makna simbolis tertentu bagi para pemimpin bangsa dan momentum situasi politik saat itu.\n\nYang terpenting, momentum tersebut menunjukkan keberanian para pemimpin Indonesia untuk mengambil keputusan tepat pada celah waktu yang sangat sempit setelah Jepang menyerah.\n\n> **Proklamasi = Momentum + Keberanian + Keputusan Politik + Kesiapan Perjuangan.**"
          },
          {
            heading: "11. TOKOH-TOKOH DALAM PROKLAMASI",
            content: "Proklamasi bukan karya satu orang. Berbagai tokoh berkontribusi dengan peranan yang berbeda-beda:\n\n### 1. Soekarno\nTokoh utama pergerakan nasional, perumus konsep teks, pembaca teks Proklamasi, dan Presiden pertama Republik Indonesia.\n\n### 2. Mohammad Hatta\nMemainkan peran krusial dalam perumusan teks Proklamasi, peletakan dasar konstitusi, pemikiran diplomasi, dan menjadi Wakil Presiden pertama Indonesia.\n\n### 3. Ahmad Soebardjo\nPenghubung diplomatik antara golongan muda dan golongan tua, perumus kalimat pertama naskah Proklamasi, dan Menteri Luar Negeri pertama RI.\n\n### 4. Sukarni\nTokoh pemuda Rengasdengklok yang mengusulkan agar teks Proklamasi ditandatangani oleh Soekarno-Hatta atas nama bangsa Indonesia.\n\n### 5. Wikana\nTokoh pemuda dari Menteng 31 yang gigih mendesak dwitunggal agar memproklamasikan kemerdekaan di Jakarta.\n\n### 6. Sayuti Melik\nTokoh pemuda yang mengetik naskah otentik Proklamasi dengan beberapa perubahan ejaan kata yang cermat.\n\n### 7. Fatmawati\nMenjahit Bendera Pusaka Sang Saka Merah Putih yang dikibarkan saat detik-detik Proklamasi.\n\n### 8. Laksamana Tadashi Maeda\nMenyediakan kediaman pribadinya sebagai tempat aman perumusan naskah Proklamasi di bawah jaminan keselamatannya."
          },
          {
            heading: "12. PENYEBARAN BERITA PROKLAMASI",
            content: "### 1. Proklamasi Tidak Berhenti di Pegangsaan Timur\n\nSetelah dibacakan, tantangan besar berikutnya adalah menyebarluaskan berita kemerdekaan ke seluruh penjuru pelosok kepulauan Indonesia dan dunia internasional.\n\n---\n\n### 2. Berbagai Saluran Penyebaran:\n\n* **Radio:** Wartawan kantor berita Domei (B.M. Diah, Waidan B. Palenewen, dan F. Wuz) menyiarkan teks Proklamasi melalui pemancar radio rahasia.\n* **Surat Kabar:** Surat kabar *Soeara Asia* di Surabaya dan harian lainnya segera mencetak berita kemerdekaan keesokan harinya.\n* **Pamflet dan Grafiti:** Pemuda mencetak selebaran, menempelkan plakat, dan menuliskan semboyan kemerdekaan di gerbong kereta api dan dinding kota.\n* **Kurir dan Tokoh:** Para utusan daerah yang menghadiri rapat PPKI menyebarkan berita langsung ke daerah masing-masing (Sumatra, Sulawesi, Maluku, Kalimantan, Nusa Tenggara).\n\n---\n\n### 3. Perbandingan dengan Era Digital\n\n| Tahun 1945 | Era Modern (Masa Kini) |\n| --- | --- |\n| Media: Radio pemancar rahasia, pamflet cetak, telegram, kurir darat | Media: Internet, media sosial, portal berita digital, siaran langsung streaming |\n| Penyebaran berita memakan waktu berhari-hari hingga berminggu-minggu | Penyebaran berita terjadi secara *real-time* dalam hitungan detik |\n| Penuh sensor militer dan risiko ancaman penangkapan senjata | Terbuka luas, tantangan bergeser pada verifikasi fakta dan hoaks |"
          },
          {
            heading: "13. SIDANG PPKI DAN PEMBENTUKAN PEMERINTAHAN INDONESIA",
            content: "Proklamasi menyatakan bahwa Indonesia merdeka. Namun, sebuah negara tidak dapat berdiri hanya dengan pernyataan. Diperlukan konstitusi, pemerintahan, dan perangkat negara.\n\n### 1. Sidang PPKI 18 Agustus 1945\n* Mengesahkan dan menetapkan **Undang-Undang Dasar 1945** sebagai hukum dasar negara.\n* Memilih **Ir. Soekarno** sebagai Presiden dan **Drs. Mohammad Hatta** sebagai Wakil Presiden Republik Indonesia.\n* Membentuk **Komite Nasional Indonesia Pusat (KNIP)** untuk membantu presiden sebelum terbentuknya MPR/DPR.\n\n---\n\n### 2. Perubahan Rumusan Pembukaan UUD 1945\nSebelum pengesahan, terjadi kesepakatan negarawan untuk mengubah rumusan sila pertama Piagam Jakarta (*\"Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya\"*) menjadi **\"Ketuhanan Yang Maha Esa\"**.\n\nPerubahan ini diprakarsai oleh Mohammad Hatta demi merangkul saudara-saudara sebangsa di Indonesia bagian timur dan menegaskan persatuan nasional.\n\n---\n\n### 3. Sidang PPKI 19 Agustus 1945\n* Menetapkan pembagian wilayah Indonesia menjadi **8 Provinsi**: Sumatra, Jawa Barat, Jawa Tengah, Jawa Timur, Sunda Kecil, Maluku, Sulawesi, dan Kalimantan.\n* Membentuk **12 Kementerian Departemen Negara** dan 4 Menteri Negara.\n\n---\n\n### 4. Sidang PPKI 22 Agustus 1945\n* Membentuk Komite Nasional Indonesia (KNI) di seluruh daerah.\n* Merencanakan pembentukan Partai Nasional Indonesia (PNI).\n* Membentuk **Badan Keamanan Rakyat (BKR)** sebagai wadah penjaga keamanan yang kelak bertransformasi menjadi TNI."
          },
          {
            heading: "14. MAKNA PROKLAMASI KEMERDEKAAN",
            content: "Proklamasi memiliki dimensi makna yang multidimensional:\n\n* **Makna Politik:** Bangsa Indonesia melepaskan diri dari belenggu penjajahan dan berdaulat penuh menentukan nasib pemerintahannya sendiri.\n* **Makna Hukum:** Lahirnya tertib hukum nasional Indonesia yang menggantikan hukum kolonial Hindia Belanda.\n* **Makna Sosial:** Menghapus kasta stratifikasi sosial kolonial dan mengangkat seluruh rakyat menjadi warga negara yang setara.\n* **Makna Psikologis:** Membangkitkan rasa percaya diri, martabat, dan harga diri bangsa yang terbebas dari inferioritas penjajahan.\n* **Makna Internasional:** Menyatakan kepada komunitas internasional bahwa Indonesia hadir sebagai entitas negara yang merdeka dan sederajat dengan bangsa-bangsa lain di dunia."
          },
          {
            heading: "15. PROKLAMASI BUKAN AKHIR PERJUANGAN",
            content: "Salah satu kesalahpahaman umum adalah menganggap perjuangan bangsa telah selesai pada 17 Agustus 1945.\n\nSebaliknya, Proklamasi justru menjadi pintu gerbang menuju fase perjuangan yang jauh lebih berat:\n* serdadu militer Jepang masih bersenjata lengkap,\n* pasukan Sekutu (AFNEI) tiba untuk melucuti Jepang,\n* tentara NICA Belanda membonceng Sekutu untuk menjajah kembali,\n* meletus perang revolusi fisik di berbagai daerah (Surabaya, Ambarawa, Bandung, Medan, Bali).\n\n> **17 Agustus 1945 merupakan awal kehidupan Indonesia sebagai negara merdeka, bukan akhir dari perjuangan.**"
          },
          {
            heading: "16. RESPONS MASYARAKAT TERHADAP PROKLAMASI",
            content: "Berita Proklamasi disambut gegap gempita oleh segenap rakyat Indonesia melalui:\n* pengibaran serentak bendera Merah Putih di pemukiman dan gedung pemerintahan,\n* pelucutan senjata tentara Jepang oleh barisan pemuda,\n* pengambilalihan stasiun kereta api, kantor pos, dan percetakan,\n* pembentukan laskar-laskar perjuangan rakyat di berbagai pelosok nusantara,\n* Rapat Raksasa Lapangan Ikada pada 19 September 1945 yang mempertemukan ratusan ribu rakyat dengan Bung Karno."
          },
          {
            heading: "17. PROKLAMASI DAN PERJUANGAN MEMPERTAHANKAN KEMERDEKAAN",
            content: "Kemerdekaan yang diproklamasikan harus dipertahankan lewat dua sayap perjuangan:\n1. **Perjuangan Bersenjata (Revolusi Fisik):** Pertempuran mempertahankan kedaulatan di Surabaya, Palagan Ambarawa, Bandung Lautan Api, Puputan Margarana, dan Serangan Umum 1 Maret 1949.\n2. **Perjuangan Diplomasi:** Perundingan Linggarjati, Perjanjian Renville, Perjanjian Roem-Royen, hingga Konferensi Meja Bundar (KMB) Den Haag 1949.\n\nProklamasi memberi landasan moral dan hukum yang kokoh bahwa bangsa Indonesia bukan sedang memberontak, melainkan sedang mempertahankan hak kedaulatan tanah airnya."
          },
          {
            heading: "18. PROKLAMASI DILIHAT DARI PERSPEKTIF BERPIKIR HISTORIS",
            content: "Keterampilan berpikir historis yang dapat dikembangkan:\n\n### 1. Kronologi\nPendudukan Jepang ➔ Kekalahan Jepang ➔ Informasi Menyerah ➔ Desakan Pemuda ➔ Rengasdengklok ➔ Perumusan Naskah ➔ Proklamasi ➔ Sidang PPKI.\n\n### 2. Sebab dan Akibat\nPerang Pasifik melemahkan kedudukan Jepang di Asia, menciptakan peluang *vacuum of power* yang dimanfaatkan secara berani oleh dwitunggal Soekarno-Hatta dan pemuda.\n\n### 3. Perubahan dan Keberlanjutan\n* **Yang Berubah:** Kedaulatan politik, bendera negara, kepala negara, sistem konstitusi.\n* **Yang Berkelanjutan:** Tantangan pemulihan ekonomi pascaperang, penataan birokrasi, dan menjaga keutuhan wilayah kepulauan.\n\n### 4. Multiperspektif Sejarah\nMemahami sudut pandang golongan muda (menuntut kecepatan), golongan tua (memperhitungkan kehati-hatian), serta rakyat jelata (kerinduan akan kebebasan)."
          },
          {
            heading: "19. PARADOKS DALAM PROSES KEMERDEKAAN INDONESIA",
            content: "Sejarah kemerdekaan Indonesia memuat sejumlah paradoks menarik:\n* **Paradoks 1:** Jepang adalah penjajah militer, namun lembaga bentukan Jepang (BPUPKI & PPKI) berhasil ditransformasikan menjadi wadah sah kemerdekaan Indonesia.\n* **Paradoks 2:** Perdebatan sengit antara pemuda dan golongan tua yang awalnya menegangkan justru menjadi motor percepatan deklarasi proklamasi.\n* **Paradoks 3:** Naskah Proklamasi yang hanya terdiri dari dua kalimat singkat mampu mengguncang tatanan geopolitik dunia dan melahirkan negara kepulauan terbesar di dunia."
          },
          {
            heading: "20. NILAI-NILAI YANG DAPAT DITELADANI",
            content: "1. **Keberanian Moral:** Mengambil keputusan berani di tengah ketidakpastian situasi perang.\n2. **Semangat Persatuan:** Mengutamakan kepentingan bangsa di atas egoisme suku, agama, dan golongan.\n3. **Musyawarah Mufakat:** Mengedepankan dialog dalam memecahkan perbedaan rumusan dasar negara.\n4. **Tanggung Jawab:** Kesiapan memikul risiko pascadeklarasi kemerdekaan.\n5. **Kemandirian Berdikari:** Menolak kemerdekaan sebagai hadiah dari bangsa asing.\n6. **Rela Berkorban:** Pengorbanan jiwa, raga, dan harta rakyat demi kemerdekaan bersama."
          },
          {
            heading: "21. RELEVANSI PROKLAMASI BAGI GENERASI MUDA",
            content: "Di era abad ke-21, nilai Proklamasi diterjemahkan ke dalam perjuangan baru:\n* memperdalam ilmu pengetahuan dan kompetensi keahlian vokasi,\n* berinovasi menciptakan teknologi tepat guna dan lapangan kerja,\n* bersikap kritis dalam menyaring hoaks dan ujaran kebencian di media sosial,\n* menjaga toleransi dan kebhinekaan dalam kehidupan bermasyarakat.\n\nBagi peserta didik SMK, mengisi kemerdekaan dapat diwujudkan melalui kemandirian ekonomi, etos kerja profesional, dan karya nyata di dunia industri."
          },
          {
            heading: "22. PERBANDINGAN “MERDEKA” TAHUN 1945 DAN MASA KINI",
            content: "| Indikator Perjuangan | Tahun 1945 | Masa Kini (Era Digital) |\n| --- | --- | --- |\n| **Tujuan Utama** | Bebas dari penjajahan fisik bangsa asing | Bebas menentukan masa depan dan mandiri secara ekonomi |\n| **Fokus Pembangunan** | Membangun fondasi negara dan konstitusi | Mengembangkan kualitas SDM, teknologi, dan industri |\n| **Tantangan Integrasi** | Menyatukan suku bangsa ke dalam satu Republik | Menjaga persatuan di tengah polarisasi dan globalisasi |\n| **Tata Kelola** | Membentuk struktur birokrasi pemerintahan awal | Memperbaiki transparansi, integritas, dan pelayanan publik |\n| **Media Komunikasi** | Radio bawah tanah, pamflet cetak, kurir rahasia | Internet, media sosial, kecerdasan buatan (AI) |\n| **Bentuk Perjuangan** | Berjuang dengan bambu runcing dan taktik gerilya | Berjuang dengan inovasi, riset, dan kompetensi keahlian |"
          },
          {
            heading: "23. PROKLAMASI SEBAGAI TITIK AWAL PEMBENTUKAN IDENTITAS INDONESIA",
            content: "Proklamasi melahirkan identitas dan simbol kebangsaan bersama:\n* nama resmi negara: **Negara Kesatuan Republik Indonesia**,\n* bendera kebangsaan: **Sang Saka Merah Putih**,\n* bahasa persatuan: **Bahasa Indonesia**,\n* konstitusi negara: **Undang-Undang Dasar 1945**,\n* lambang dan dasar negara: **Garuda Pancasila**,\n* identitas kedaulatan: **Warga Negara Indonesia**."
          },
          {
            heading: "24. KESALAHPAHAMAN YANG PERLU DILURUSKAN",
            content: "### 1. \"Indonesia Merdeka karena Hadiah Jepang\"\n*Fakta:* Jepang menyerah pada 15 Agustus 1945 dan diperintahkan menjaga status quo Sekutu. Proklamasi dideklarasikan secara mandiri oleh bangsa Indonesia pada 17 Agustus 1945 di luar rencana resmi pemerintah Jepang.\n\n### 2. \"Golongan Tua Menolak Kemerdekaan\"\n*Fakta:* Golongan tua sama-sama menginginkan kemerdekaan penuh, namun mempertimbangkan kehati-hatian agar tidak memicu pembantaian massal rakyat oleh serdadu Jepang yang masih memegang senjata.\n\n### 3. \"Peristiwa Rengasdengklok adalah Tindakan Kriminal\"\n*Fakta:* Aksi pengamanan ke Rengasdengklok adalah tindakan taktis pemuda di situasi darurat perang guna mengamankan dwitunggal dari intaian polisi rahasia Kempeitai.\n\n### 4. \"Setelah Proklamasi, Tugas Berakhir\"\n*Fakta:* Proklamasi baru merupakan langkah awal. Setelah itu bangsa Indonesia harus bertempur selama 4 tahun dalam Revolusi Kemerdekaan mempertahankan kedaulatan."
          },
          {
            heading: "25. RANGKAIAN KRONOLOGIS PROKLAMASI",
            content: "* **1 Maret 1945:** Pengumuman rencana pembentukan BPUPKI oleh Panglima Letjen Kumakichi Harada.\n* **28 Mei 1945:** Pelantikan anggota BPUPKI di Gedung Chuo Sangi In Jakarta.\n* **29 Mei–1 Juni 1945:** Sidang Pertama BPUPKI (Pidato Lahirnya Pancasila oleh Bung Karno pada 1 Juni).\n* **22 Juni 1945:** Panitia Sembilan merumuskan naskah Piagam Jakarta (*Jakarta Charter*).\n* **10–17 Juli 1945:** Sidang Kedua BPUPKI (perumusan rancangan UUD dan bentuk republik).\n* **7 Agustus 1945:** Pembentukan PPKI dipimpin Ir. Soekarno dan Drs. Mohammad Hatta.\n* **6 & 9 Agustus 1945:** Pengeboman atom kota Hiroshima dan Nagasaki oleh Sekutu.\n* **15 Agustus 1945:** Kaisar Hirohito mengumumkan kapitulasi penyerahan Jepang tanpa syarat.\n* **16 Agustus 1945 (Dini Hari):** Golongan pemuda membawa Soekarno-Hatta ke Rengasdengklok.\n* **16 Agustus 1945 (Malam):** Perumusan naskah teks Proklamasi di kediaman Laksamana Tadashi Maeda.\n* **17 Agustus 1945 (10.00 WIB):** Pembacaan Teks Proklamasi di Jalan Pegangsaan Timur No. 56 Jakarta.\n* **18 Agustus 1945:** Sidang PPKI mengesahkan UUD 1945 serta memilih Presiden dan Wakil Presiden RI.\n* **19 Agustus 1945:** Sidang PPKI membagi wilayah RI menjadi 8 provinsi dan membentuk kementerian.\n* **22 Agustus 1945:** Sidang PPKI membentuk Komite Nasional dan Badan Keamanan Rakyat (BKR)."
          },
          {
            heading: "26. ANALISIS SEBAB UTAMA PROKLAMASI",
            content: "Proklamasi lahir dari perpaduan dua faktor utama:\n\n**Faktor Internal:**\n* Kematangan pergerakan nasionalisme sejak Budi Utomo 1908 dan Sumpah Pemuda 1928.\n* Pengalaman kepemimpinan dan organisasi politik para tokoh bumiputera.\n* Keberanian taktis barisan pemuda dalam mendesak percepatan deklarasi kemerdekaan.\n* Persiapan konseptual dasar negara dan konstitusi dalam sidang BPUPKI dan PPKI.\n\n**Faktor Eksternal:**\n* Kekalahan telak Blok Poros dalam Perang Dunia II.\n* Kehancuran infrastruktur militer Jepang pasca bom atom Hiroshima-Nagasaki.\n* Terjadinya *vacuum of power* sebelum pasukan tentara Sekutu mendarat di Indonesia."
          },
          {
            heading: "27. MENGAPA PROKLAMASI BERHASIL DILAKSANAKAN?",
            content: "1. **Kecepatan Memanfaatkan Momentum Geopolitik:** Kepekaan menangkap momentum kekalahan Jepang.\n2. **Kekuatan Kepemimpinan Dwitunggal:** Kemampuan Soekarno-Hatta menyatukan berbagai fraksi bangsa.\n3. **Dukungan Militan Barisan Pemuda:** Keberanian kaum muda mengawal proses politik tanpa rasa gentar.\n4. **Soliditas Jaringan Komunikasi:** Kecepatan kurir, wartawan, dan operator radio menyebarkan warta.\n5. **Kematangan Konsep Bernegara:** Dokumen dasar negara dan rancangan UUD telah rampung dipersiapkan.\n6. **Dukungan Spontan Rakyat Semesta:** Kesiapan seluruh elemen rakyat mengorbankan segalanya demi Republik."
          },
          {
            heading: "28. PROKLAMASI DALAM PERSPEKTIF GENERASI SEKARANG",
            content: "Tiga pertanyaan reflektif untuk generasi muda masa kini:\n\n1. **Apa yang diperjuangkan generasi 1945?**\n   Kedaulatan martabat bangsa, kebebasan dari penindasan kolonial, dan persatuan kepulauan nusantara.\n2. **Apa yang harus diperjuangkan generasi sekarang?**\n   Kemajuan peradaban, penguasaan sains dan teknologi, integritas etika publik, keadilan sosial, dan kemandirian ekonomi bangsa.\n3. **Apakah kita telah mengisi kemerdekaan dengan semestinya?**\n   Pertanyaan yang menuntut refleksi diri setiap warga negara untuk memberikan sumbangsih terbaik bagi kemajuan ibu pertiwi."
          },
          {
            heading: "29. PEMBELAJARAN NILAI MELALUI PROKLAMASI",
            content: "* **Perbedaan Pendapat Bukan Perpecahan:** Dialektika pemuda dan golongan tua membuktikan bahwa perbedaan strategi dapat berujung pada harmoni keputusan terbaik.\n* **Keputusan Melahirkan Tanggung Jawab:** Memproklamasikan kemerdekaan menuntut kesiapan mempertahankan kedaulatan dengan segala konsekuensinya.\n* **Persatuan Menuntut Kebijaksanaan Kompromi:** Penghapusan tujuh kata dalam Piagam Jakarta membuktikan kematangan jiwa kenegarawanan para tokoh Islam demi keutuhan NKRI.\n* **Kemerdekaan Milik Seluruh Rakyat:** Perjuangan ditopang oleh jutaan rakyat biasa yang tak tercatat dalam buku sejarah namun ikhlas berkorban demi merah putih."
          },
          {
            heading: "30. RANGKUMAN MATERI",
            content: "Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945 merupakan puncak dialektika sejarah pergerakan kebangsaan Indonesia.\n\nMasa pendudukan Jepang dan kancah Perang Dunia II membuka peluang emas ketika kekaisaran Jepang menyerah tanpa syarat kepada Sekutu pada 15 Agustus 1945, menciptakan kondisi kekosongan kekuasaan (*vacuum of power*).\n\nKetegangan taktis antara golongan pemuda radikal dan golongan tua melahirkan peristiwa monumental di Rengasdengklok yang mempercepat perumusan naskah teks Proklamasi di kediaman Laksamana Tadashi Maeda pada dini hari 17 Agustus 1945.\n\nNaskah yang dirumuskan oleh Soekarno, Mohammad Hatta, dan Ahmad Soebardjo serta diketik oleh Sayuti Melik tersebut dibacakan tepat pukul 10.00 pagi di Jalan Pegangsaan Timur No. 56 Jakarta, disusul pengibaran Sang Saka Merah Putih oleh Latief Hendraningrat dan Suhud.\n\nMelalui Sidang PPKI tanggal 18, 19, dan 22 Agustus 1945, fondasi konstitusional UUD 1945 disahkan, presiden-wakil presiden dipilih, kementerian dibentuk, serta Badan Keamanan Rakyat didirikan.\n\nProklamasi bukan akhir dari perjuangan bangsa, melainkan tonggak awal dari perjuangan panjang mempertahankan dan mengisi kedaulatan Indonesia menuju cita-cita kemakmuran dan keadilan sosial bagi seluruh rakyat Indonesia."
          }
        ],
        glossary: [
          { term: 'Vacuum of Power', def: 'Keadaan kekosongan kekuasaan politik yang terjadi di Indonesia antara tanggal 15–17 Agustus 1945.' },
          { term: 'Rengasdengklok', def: 'Kota kecamatan di Karawang tempat pengamanan Soekarno-Hatta oleh pemuda pada 16 Agustus 1945.' },
          { term: 'Sayuti Melik', def: 'Tokoh pejuang golongan muda yang mengetik naskah proklamasi kemerdekaan otentik dengan mesin ketik beraksara latin.' },
          { term: 'B.M. Diah', def: 'Wartawan pejuang yang menyelamatkan naskah draf asli tulisan tangan Bung Karno dari tempat sampah.' },
          { term: 'Latief Hendraningrat', def: 'Perwira PETA berpangkat Chudancho yang memimpin pengibaran Bendera Merah Putih pada 17 Agustus 1945.' },
          { term: 'KNIP', def: 'Komite Nasional Indonesia Pusat yang berfungsi sebagai parlemen legislatif darurat Republik Indonesia pada awal kemerdekaan.' },
          { term: 'BKR', def: 'Badan Keamanan Rakyat yang dibentuk 22 Agustus 1945 sebagai cikal bakal kekuatan bersenjata resmi TNI.' }
        ],
        reflectionQuestions: [
          'Bagaimana kematangan sikap negarawan Bung Hatta dan para pendiri bangsa dalam Sidang PPKI 18 Agustus 1945 yang menyepakati penghapusan tujuh kata dalam Piagam Jakarta demi keutuhan wilayah Indonesia dari Sabang sampai Merauke?',
          'Peristiwa proklamasi membuktikan peran strategis pemuda sebagai motor penggerak perubahan bangsa. Apa bentuk "proklamasi kemandirian" yang dapat diperjuangkan oleh lulusan SMK di era digital saat ini?'
        ]
      },
      {
        id: 'smk-xi-3',
        title: 'Mempertahankan Kemerdekaan Indonesia: Revolusi Fisik & Diplomasi (1945–1949)',
        phase: 'Fase F',
        grade: 'Kelas XI',
        icon: '🛡️',
        period: '1945 - 1949',
        cpSummary: 'Menganalisis perjuangan bersenjata revolusi fisik rakyat semesta, agresi militer Belanda I & II, kepemimpinan darurat PDRI, serta kepiawaian meja diplomasi hingga Konferensi Meja Bundar (KMB).',
        syllabus: {
          atp: [
            '11.3.1 Menganalisis latar belakang kedatangan pasukan Sekutu (AFNEI) dan tentara NICA Belanda yang memicu letusan pertempuran bersenjata di berbagai daerah.',
            '11.3.2 Membandingkan taktik militer dalam pertempuran Surabaya, Palagan Ambarawa, Bandung Lautan Api, Puputan Margarana, dan Serangan Umum 1 Maret 1949.',
            '11.3.3 Mengevaluasi penyelamatan eksistensi kedaulatan negara melalui pembentukan Pemerintah Darurat Republik Indonesia (PDRI) di Bukittinggi.',
            '11.3.4 Menganalisis dinamika perundingan diplomasi dari Linggarjati, Renville, Roem-Royen, hingga penyerahan kedaulatan pada Konferensi Meja Bundar (KMB) Den Haag 1949.'
          ],
          meaningfulUnderstanding: 'Kedaulatan bangsa Indonesia tegak karena dwitunggal strategi: senjata rakyat yang menggetarkan medan tempur dan pena diplomasi para diplomat yang meyakinkan hukum internasional bahwa Indonesia berhak merdeka mutlak.',
          essentialQuestions: [
            'Mengapa taktik perang gerilya yang dipimpin Panglima Besar Jenderal Soedirman mampu mengimbangi peralatan perang modern tentara Belanda?',
            'Apa dampak keputusan Belanda menyerang ibu kota Yogyakarta pada Agresi Militer II terhadap simpati dan opini Dewan Keamanan PBB?'
          ]
        },
        subtopics: [
          {
            heading: "1. PENDAHULUAN",
            content: "Pada 17 Agustus 1945, bangsa Indonesia memproklamasikan kemerdekaannya. Proklamasi menjadi pernyataan resmi bahwa bangsa Indonesia berhak menentukan nasibnya sendiri dan membentuk negara yang merdeka.\n\nNamun, kemerdekaan yang telah diproklamasikan tidak serta-merta membuat Indonesia aman dan terbebas dari ancaman. Setelah Proklamasi, Indonesia justru memasuki periode yang sangat menentukan. Negara yang baru berdiri harus membangun pemerintahan, menjaga keamanan, mengatur wilayah, menyediakan kebutuhan rakyat, sekaligus menghadapi kekuatan asing yang ingin menguasai kembali Indonesia.\n\nKedatangan Sekutu setelah Jepang menyerah kepada Sekutu menimbulkan persoalan baru. Secara resmi, pasukan Sekutu datang untuk melucuti tentara Jepang, membebaskan tawanan perang, dan memulangkan tentara Jepang. Akan tetapi, kedatangan mereka diikuti oleh orang-orang Belanda yang tergabung dalam Netherlands Indies Civil Administration atau NICA. Kehadiran NICA membuat rakyat Indonesia khawatir bahwa Belanda akan menghidupkan kembali kekuasaan kolonialnya.\n\nAkibatnya, terjadi bentrokan di berbagai daerah. Perjuangan mempertahankan kemerdekaan berlangsung dalam dua jalur utama:\n\n* **Pertama, perjuangan fisik**, yaitu perjuangan melalui kekuatan bersenjata.\n* **Kedua, perjuangan diplomasi**, yaitu perjuangan melalui perundingan dan hubungan internasional.\n\nKedua bentuk perjuangan tersebut saling berkaitan. Ketika perjuangan bersenjata mempertahankan eksistensi Republik di lapangan, diplomasi berusaha memperoleh pengakuan serta dukungan internasional.\n\nOleh karena itu, mempertahankan kemerdekaan bukan hanya cerita mengenai perang. Periode ini merupakan cerita tentang bagaimana sebuah bangsa mempertahankan negara yang baru lahir melalui keberanian, organisasi, diplomasi, pengorbanan, dan persatuan."
          },
          {
            heading: "2. PERTANYAAN BESAR",
            content: "Sepanjang pembelajaran, peserta didik diarahkan untuk menjawab pertanyaan:\n\n> **“Mengapa Indonesia yang telah memproklamasikan kemerdekaan masih harus berjuang melawan Belanda dan melalui perjuangan panjang akhirnya berhasil mempertahankan kedaulatannya?”**\n\nPertanyaan tersebut dapat digunakan sebagai benang merah seluruh materi."
          },
          {
            heading: "3. KONDISI INDONESIA SETELAH PROKLAMASI",
            content: "### 1. Indonesia Menjadi Negara Baru\n\nProklamasi 17 Agustus 1945 menandai lahirnya Indonesia sebagai negara yang merdeka.\n\nTetapi sebuah negara tidak cukup hanya menyatakan dirinya merdeka. Negara membutuhkan:\n* pemerintahan,\n* wilayah,\n* rakyat,\n* hukum,\n* lembaga negara,\n* alat keamanan,\n* dan kemampuan menjalankan pemerintahan.\n\nKarena itu, setelah Proklamasi, pemerintah Indonesia segera melakukan berbagai langkah untuk membangun negara.\n\nPada 18 Agustus 1945, PPKI mengesahkan UUD 1945 dan memilih Soekarno sebagai Presiden serta Mohammad Hatta sebagai Wakil Presiden.\n\nLangkah tersebut menjadi dasar pembentukan pemerintahan Republik Indonesia.\n\n---\n\n### 2. Persoalan yang Dihadapi Pemerintah Baru\n\nIndonesia menghadapi berbagai persoalan besar:\n\n**a. Persoalan keamanan**\nPasukan Jepang masih berada di berbagai wilayah Indonesia. Di sisi lain, kekuatan bersenjata Republik masih dalam proses pembentukan awal.\n\n**b. Persoalan administrasi**\nPemerintah belum memiliki perangkat birokrasi yang sepenuhnya stabil di seluruh penjuru daerah.\n\n**c. Persoalan ekonomi**\nPerang menyebabkan produksi terganggu, distribusi barang tidak lancar, inflasi meningkat, dan kebutuhan pokok masyarakat sulit dipenuhi.\n\n**d. Persoalan politik**\nIndonesia harus mempertahankan keberadaan Republik di tengah ketidakpastian mengenai kedatangan Sekutu dan ambisi Belanda.\n\n**e. Persoalan komunikasi**\nPada masa itu belum tersedia teknologi komunikasi modern. Komunikasi antardaerah masih sangat bergantung pada surat, radio, kurir darat, surat kabar, dan komunikasi langsung."
          },
          {
            heading: "4. KEDATANGAN SEKUTU KE INDONESIA",
            content: "### 1. Siapa Sekutu?\n\nSekutu merupakan kelompok negara (Inggris, Amerika Serikat, Belanda, dll.) yang memenangkan Perang Dunia II melawan Blok Poros.\n\nSetelah Jepang menyerah, pasukan Sekutu (melalui komando AFNEI) mendapat mandat untuk datang ke wilayah-wilayah yang sebelumnya diduduki militer Jepang, termasuk Indonesia.\n\n---\n\n### 2. Tugas Sekutu di Indonesia\n\nSecara umum tugas resmi Sekutu adalah:\n1. Melucuti tentara Jepang.\n2. Membebaskan tawanan perang Eropa (*APWI*).\n3. Mengurus pemulangan serdadu Jepang ke negaranya.\n4. Menjaga keamanan dan ketertiban selama proses transisi.\n\nSecara formal, Sekutu tidak datang dengan tujuan langsung menguasai Indonesia. Namun, masalah besar muncul karena kedatangan Sekutu diboncengi oleh unsur kekuatan militer dan birokrasi Belanda."
          },
          {
            heading: "5. KEMBALINYA BELANDA DAN NICA",
            content: "### 1. Apa Itu NICA?\n\n**NICA** adalah *Netherlands Indies Civil Administration*, yaitu organisasi pemerintahan sipil Belanda yang dipersiapkan untuk memulihkan kekuasaan kolonial Belanda di Indonesia.\n\nBagi pemerintah dan rakyat Indonesia, kehadiran NICA merupakan ancaman nyata. Bangsa Indonesia baru saja memproklamasikan kemerdekaan. Jika Belanda kembali berkuasa, kemerdekaan yang diraih dengan pengorbanan terancam hilang.\n\n---\n\n### 2. Penyebab Konflik Indonesia dan Belanda\n\nKonflik muncul karena terdapat dua kepentingan yang bertolak belakang secara mutlak:\n\n* **Pihak Indonesia:** Menghendaki kemerdekaan penuh, kedaulatan mutlak, pemerintahan mandiri, dan terbebas selamanya dari belenggu kolonialisme.\n* **Pihak Belanda:** Berusaha memulihkan kekuasaan kolonial Hindia Belanda, menguasai kembali kekayaan alam Indonesia, dan mempertahankan hegemoni politik serta ekonominya.\n\nPersoalan inilah yang berkembang menjadi letusan konflik bersenjata dan perundingan diplomasi yang sengit."
          },
          {
            heading: "6. PERJUANGAN FISIK MEMPERTAHANKAN KEMERDEKAAN",
            content: "### 1. Pengertian Perjuangan Fisik\n\nPerjuangan fisik merupakan usaha mempertahankan kemerdekaan melalui kekuatan bersenjata dan perlawanan rakyat.\n\nPelakunya bukan hanya tentara reguler (TKR/TNI), melainkan gabungan dari tentara Republik, laskar rakyat, barisan pemuda, pelajar pejuang, tokoh ulama/agama, dan rakyat jelata.\n\n---\n\n### 2. Mengapa Perjuangan Fisik Diperlukan?\n\nPada tahap awal, Belanda berusaha merebut kota-kota dan instalasi penting di Indonesia.\n\nJika rakyat tidak melakukan perlawanan bersenjata, daerah-daerah strategis akan dengan mudah dikuasai lawan. Perjuangan fisik menjadi sarana:\n* mempertahankan wilayah kedaulatan,\n* melindungi keselamatan rakyat,\n* mempertahankan simbol-simbol Republik Indonesia,\n* dan membuktikan kepada dunia internasional bahwa rakyat Indonesia menolak tegas kembalinya penjajahan Belanda."
          },
          {
            heading: "7. PERTEMPURAN SURABAYA",
            content: "### 1. Surabaya sebagai Kota Perlawanan\n\nSurabaya menjadi salah satu pusat konsentrasi pemuda dan pejuang kemerdekaan paling militan. Sejak kedatangan Sekutu, hubungan antara pihak pejuang Indonesia dan kekuatan asing semakin tegang.\n\n---\n\n### 2. Insiden Hotel Yamato\n\nPada September 1945, sekelompok orang Belanda mengibarkan bendera Belanda (Merah-Putih-Biru) di tiang Hotel Yamato, Jl. Tunjungan Surabaya tanpa izin pemerintah Republik.\n\nRakyat dan pemuda Surabaya marah melihat simbol kolonialisme tersebut. Terjadilah bentrokan fisik di mana pemuda memanjat tiang, merobek bagian warna biru bendera Belanda, dan mengibarkan kembali warna Merah Putih diiringi sorak gegap gempita.\n\n---\n\n### 3. Ketegangan Semakin Meningkat\n\nSituasi kota Surabaya semakin memanas. Terjadi berbagai pertempuran jalanan antara pejuang dan tentara Inggris.\n\nPuncaknya terjadi pada 30 Oktober 1945, ketika komandan pasukan Sekutu di Jawa Timur, **Brigadir Jenderal A.W.S. Mallaby**, tewas dalam insiden tembak-menembak di dekat Jembatan Merah.\n\n---\n\n### 4. Pertempuran Akbar 10 November 1945\n\nKematian Mallaby membuat pihak Inggris marah dan mengeluarkan ultimatum keras: menuntut seluruh pimpinan dan rakyat Surabaya menyerahkan senjata paling lambat pukul 06.00 pagi tanggal 10 November 1945.\n\nRakyat Surabaya menolak tunduk. Melalui siaran radio pemancar, **Bung Tomo** membakar gelora perlawanan rakyat:\n> *“Lebih baik kita hancur lebur daripada tidak merdeka! Semboyan kita tetap: Merdeka atau Mati!”*\n\nDidukung fatwa Resolusi Jihad dari para ulama santri pimpinan KH Hasyim Asy'ari, arek-arek Suroboyo bertempur heroik melawan armada tempur darat, laut, dan udara Sekutu selama berminggu-minggu.\n\n---\n\n### 5. Makna Pertempuran Surabaya\n\nPertempuran Surabaya menunjukkan keberanian luar biasa, pengorbanan tanpa pamrih, dan soliditas perlawanan rakyat. Peristiwa bersejarah ini diabadikan secara nasional sebagai **Hari Pahlawan** setiap tanggal 10 November."
          },
          {
            heading: "8. PERTEMPURAN AMBARAWA",
            content: "### 1. Latar Belakang\n\nDi Jawa Tengah, ketegangan pecah ketika pasukan Sekutu dan NICA yang datang dengan dalih mengurus tawanan perang justru mempersenjatai bekas tawanan Belanda di Magelang dan Ambarawa.\n\nGugurnya Letkol Isdiman dalam pertempuran memicu kemarahan pasukan pejuang Republik.\n\n---\n\n### 2. Peran Jenderal Soedirman & Strategi Supit Urang\n\nKomando pertempuran kemudian dipimpin langsung oleh **Kolonel Soedirman**.\n\nSoedirman menerapkan strategi pengepungan legendaris yang dikenal sebagai **Supit Urang** (taktik jepit ganda dari dua sayap untuk mengepung dan memutus jalur suplai logistik musuh).\n\n---\n\n### 3. Kemenangan Gemilang\n\nPada 15 Desember 1945, pasukan Republik berhasil memukul mundur pasukan Sekutu dari Ambarawa menuju Semarang.\n\nKeberhasilan ini membuktikan bahwa strategi taktis dan kepemimpinan yang solid mampu mengalahkan kekuatan persenjataan modern lawan. Tanggal 15 Desember kemudian diperingati sebagai **Hari Juang Kartika TNI AD**."
          },
          {
            heading: "9. MEDAN AREA",
            content: "### 1. Latar Belakang\n\nDi Sumatra Utara, kedatangan pasukan Sekutu yang diboncengi NICA pada Oktober 1945 segera memicu perlawanan rakyat. Insiden bermula ketika seorang perwira NICA menginjak-injak lencana Merah Putih milik pemuda pejuang di sebuah hotel di Medan.\n\n---\n\n### 2. Perlawanan Sengit Rakyat Sumatra\n\nRakyat dan laskar pemuda bersatu melawan Sekutu dan NICA. Pihak Sekutu secara sepihak memasang papan-papan pembatas bertuliskan *\"Fixed Boundaries Medan Area\"* untuk membatasi ruang gerak pejuang.\n\nIstilah **Medan Area** kemudian menjadi simbol perjuangan bersenjata rakyat di Sumatra Utara dalam mempertahankan kemerdekaan.\n\n---\n\n### 3. Makna Sejarah\n\nMedan Area membuktikan bahwa perjuangan mempertahankan kemerdekaan terjadi serentak di seluruh penjuru tanah air, membentang dari Sumatra hingga ke pulau-pulau lainnya."
          },
          {
            heading: "10. BANDUNG LAUTAN API",
            content: "### 1. Latar Belakang\n\nPada Maret 1946, pasukan Sekutu mengeluarkan ultimatum agar tentara Republik dan rakyat mengosongkan wilayah Bandung bagian selatan paling lambat tanggal 24 Maret 1946.\n\n---\n\n### 2. Keputusan Membumihanguskan Bandung Selatan\n\nPara pejuang menghadapi dilema berat. Mematuhi ultimatum berarti menyerahkan kota secara utuh kepada musuh, sementara bertahan secara frontal dapat memicu kehancuran warga sipil.\n\nAtas musyawarah pejuang dan pimpinan militer, diambil keputusan dramatis: **membumihanguskan Bandung Selatan**. Sekitar 200.000 warga membakar rumah mereka sendiri sebelum mengungsi ke pegunungan selatan agar gedung-gedung dan fasilitas strategis tidak dapat dimanfaatkan Sekutu.\n\nPejuang muda **Mohammad Toha** dan Ramdan gugur sebagai pahlawan meledakkan gudang mesiu Sekutu di Dayeuhkolot.\n\n---\n\n### 3. Makna Bandung Lautan Api\n\nPeristiwa ini menjadi simbol pengorbanan tertinggi rakyat dan strategi bumi hangus yang membakar semangat patriotisme di seluruh Indonesia."
          },
          {
            heading: "11. PUPUTAN MARGARANA",
            content: "### 1. Perjuangan di Bali\n\nDi Pulau Bali, Belanda berupaya memisahkan Bali dari Republik Indonesia dengan membujuk pembentukan Negara Indonesia Timur (NIT).\n\nPimpinan pejuang Bali, **Letkol I Gusti Ngurah Rai**, menolak mentah-mentah ajakan kompromi Belanda dan memimpin perlawanan bersenjata bersama pasukan Ciung Wanara.\n\n---\n\n### 2. Perang Puputan 20 November 1946\n\nDalam pertempuran sengit di Desa Marga, Tabanan pada 20 November 1946, pasukan Ngurah Rai melancarkan perang **Puputan** (perang habis-habisan sampai titik darah penghabisan demi kehormatan bangsa).\n\nI Gusti Ngurah Rai bersama seluruh anggota pasukannya gugur sebagai kusuma bangsa. Peristiwa ini menjadi simbol abadi keberanian dan keteguhan rakyat Bali mempertahankan kedaulatan NKRI."
          },
          {
            heading: "12. PERJUANGAN DI BERBAGAI DAERAH",
            content: "Perjuangan mempertahankan kemerdekaan berkobar di seluruh Nusantara:\n* **Sulawesi:** Perlawanan rakyat di bawah pimpinan Robert Wolter Mongisidi dan pejuang lainnya melawan kebrutalan tentara Belanda pimpinan Raymond Westerling.\n* **Kalimantan:** Pertempuran rakyat di bawah pimpinan Pangeran Antasari muda dan laskar pejuang pedalaman.\n* **Maluku & Nusa Tenggara:** Penolakan rakyat kepulauan terhadap upaya Belanda mendirikan negara-negara boneka federal.\n\nKemerdekaan Indonesia ditegakkan bukan oleh satu daerah saja, melainkan oleh persembahan jiwa dan raga rakyat dari Sabang sampai Merauke."
          },
          {
            heading: "13. PERAN RAKYAT DALAM PERJUANGAN",
            content: "Perjuangan kemerdekaan merupakan perang rakyat semesta:\n\n* **Tentara Republik:** Mengatur taktik militer, pertahanan garis depan, dan perang terbuka.\n* **Pemuda & Pelajar:** Menjadi barisan laskar berani mati, kurir penghubung, dan penyebar informasi rahasia.\n* **Masyarakat Jelata:** Menyediakan logistik pangan, tempat persembunyian pejuang, dan memata-matai posisi musuh.\n* **Kaum Perempuan:** Mengelola dapur umum, menjadi perawat dan tenaga medis lapangan darurat, menyelundupkan senjata dan dokumen, serta menjaga ketahanan keluarga pejuang."
          },
          {
            heading: "14. PERALIHAN DARI PERJUANGAN FISIK KE DIPLOMASI",
            content: "Perjuangan senjata berhasil membuktikan eksistensi Republik. Namun, para pemimpin bangsa menyadari bahwa perang terbuka yang berkepanjangan tanpa penyelesaian diplomatik akan memakan korban jiwa dan kehancuran ekonomi yang tak terhitung.\n\nKarena itu, pemerintah Republik Indonesia menempuh strategi ganda: **memadukan perlawanan fisik di medan tempur dengan diplomasi di meja perundingan**.\n\nTujuan utama diplomasi adalah:\n1. Memperoleh pengakuan kedaulatan *de jure* dan *de facto* dari dunia internasional.\n2. Membawa sengketa agresi Belanda ke forum Dewan Keamanan PBB.\n3. Menghentikan pertumpahan darah dan memulihkan pemerintahan yang sah."
          },
          {
            heading: "15. PERUNDINGAN LINGGARJATI",
            content: "### 1. Latar Belakang & Pelaksanaan\n\nDiselenggarakan pada November 1946 di Linggarjati, Jawa Barat. Delegasi Indonesia dipimpin oleh **Sutan Sjahrir**, sedangkan delegasi Belanda dipimpin oleh Prof. Schermerhorn.\n\n---\n\n### 2. Pokok Hasil Perundingan Linggarjati\n* Belanda mengakui kedaulatan Republik Indonesia secara *de facto* atas wilayah **Jawa, Madura, dan Sumatra**.\n* Indonesia dan Belanda sepakat membentuk negara federal **Republik Indonesia Serikat (RIS)**.\n* RIS bersama Kerajaan Belanda akan membentuk Uni Indonesia-Belanda yang dikepalai Ratu Belanda.\n\n---\n\n### 3. Dampak & Perdebatan\n\nMeskipun wilayah kedaulatan yang diakui menyempit, Linggarjati memberi keuntungan politis besar: untuk pertama kalinya negara asing mengakui eksistensi pemerintahan Republik Indonesia secara formal."
          },
          {
            heading: "16. AGRESI MILITER BELANDA I",
            content: "### 1. Pelanggaran Perjanjian oleh Belanda\n\nPada **21 Juli 1947**, Belanda secara sepihak melanggar Perjanjian Linggarjati dengan melancarkan invasi militer berskala besar yang dinamai *Operatie Product* (Agresi Militer Belanda I).\n\n---\n\n### 2. Sasaran Utama\n\nBelanda menyerbu daerah-daerah perkebunan, pertambangan minyak, dan pelabuhan strategis di Jawa dan Sumatra guna menguasai sumber daya ekonomi penopang Republik.\n\n---\n\n### 3. Reaksi Internasional\n\nTindakan agresi Belanda memicu kecaman keras dari negara-negara sahabat seperti India dan Australia, yang membawa masalah agresi ini ke meja **Dewan Keamanan PBB**."
          },
          {
            heading: "17. PERAN PBB",
            content: "Keterlibatan PBB mengubah sengketa Indonesia-Belanda dari persoalan internal kolonial menjadi isu hukum internasional.\n\nPBB mengeluarkan resolusi gencatan senjata dan membentuk **Komisi Tiga Negara (KTN)** untuk menengahi konflik:\n* Australia (dipilih Indonesia): Richard Kirby\n* Belgia (dipilih Belanda): Paul van Zeeland\n* Amerika Serikat (sebagai penengah netral): Frank Graham"
          },
          {
            heading: "18. PERUNDINGAN RENVILLE",
            content: "### 1. Pelaksanaan\n\nPerundingan digelar pada Desember 1947 di atas kapal perang angkatan laut AS, **USS Renville**, yang berlabuh di Teluk Jakarta. Delegasi Indonesia dipimpin oleh **Amir Sjarifuddin**.\n\n---\n\n### 2. Hasil & Dampak Garis Van Mook\n\nBelanda memaksakan garis demarkasi sepihak (**Garis Van Mook**) yang memotong wilayah Republik menjadi kantong-kantong kecil. Pasukan TNI terpaksa harus *\"hijrah\"* (mundur) meninggalkan daerah gerilya di Jawa Barat dan Jawa Timur menuju wilayah pedalaman Yogyakarta.\n\nMeskipun perjanjian ini sangat merugikan wilayah Republik, keberadaan KTN PBB memastikan kedaulatan Indonesia tetap diawasi oleh hukum dunia internasional."
          },
          {
            heading: "19. PERANG GERILYA",
            content: "### 1. Pengertian & Konsep Taktik\n\nPerang gerilya adalah strategi militer dinamis yang mengandalkan mobilitas cepat, serangan mendadak, dan penguasaan medan untuk mengimbangi persenjataan modern musuh yang lebih lengkap.\n\n---\n\n### 2. Prinsip Utama Perang Gerilya\n* Menghindari bentrokan frontal terbuka melawan tank dan artileri berat musuh.\n* Memukul pos-pos patroli musuh saat lengah, lalu menghilang ke tengah hutan dan pemukiman warga.\n* Mengandalkan dukungan penuh rakyat jelata untuk suplai logistik dan informasi intelijen."
          },
          {
            heading: "20. AGRESI MILITER BELANDA II",
            content: "### 1. Serbuan Kilat ke Ibu Kota Yogyakarta\n\nPada **19 Desember 1948**, Belanda kembali mengingkari perjanjian gencatan senjata dengan melancarkan Agresi Militer Belanda II (*Operatie Kraai*).\n\nPasukan penerjun payung Belanda menyerbu Pangkalan Udara Maguwo dan menduduki ibu kota Republik di Yogyakarta.\n\n---\n\n### 2. Penangkapan Pimpinan Nasional\n\nPresiden Soekarno, Wakil Presiden Mohammad Hatta, Sutan Sjahrir, dan sejumlah pejabat tinggi kabinet ditangkap dan diasingkan ke Bangka dan Berastagi.\n\nBelanda secara arogan menyiarkan ke seluruh dunia bahwa Republik Indonesia telah musnah."
          },
          {
            heading: "21. PEMERINTAHAN DARURAT REPUBLIK INDONESIA (PDRI)",
            content: "### 1. Mandat Bersejarah Sjafruddin Prawiranegara\n\nSebelum ditangkap, Bung Karno dan Bung Hatta sempat mengirimkan radiogram kawat darurat kepada Menteri Kemakmuran **Mr. Sjafruddin Prawiranegara** yang sedang berada di Sumatra Barat untuk membentuk **Pemerintahan Darurat Republik Indonesia (PDRI)**.\n\nPDRI dideklarasikan di Halaban/Bukittinggi pada **22 Desember 1948**.\n\n---\n\n### 2. Penyelamat Eksistensi Negara\n\nSelama berbulan-bulan, Sjafruddin Prawiranegara memimpin kabinet darurat bergerilya dari satu rimba belantara ke rimba lain di Sumatra Barat.\n\nKeberadaan PDRI mematahkan klaim propaganda Belanda: Republik Indonesia tidak pernah runtuh dan roda pemerintahan sah masih tetap beroperasi."
          },
          {
            heading: "22. JENDERAL SOEDIRMAN DAN PERANG GERILYA",
            content: "Di Pulau Jawa, Panglima Besar **Jenderal Soedirman** menolak menyerahkan diri kepada Belanda.\n\nMeskipun kondisi kesehatannya sedang menderita sakit paru-paru berat (harus ditandu oleh prajurit setianya), Soedirman memimpin perang gerilya semesta selama 7 bulan menembus ratusan kilometer hutan belantara, bukit, dan lembah Jawa Tengah hingga Jawa Timur.\n\nKepemimpinan moral Soedirman menjadi simbol abadi bahwa nyawa Republik Indonesia tidak pernah padam."
          },
          {
            heading: "23. SERANGAN UMUM 1 MARET 1949",
            content: "### 1. Latar Belakang & Tujuan\n\nBelanda mengklaim kepada PBB bahwa TNI sudah musnah dan keamanan sudah pulih. Pimpinan militer dan Sri Sultan Hamengkubuwono IX merancang serangan kejutan siang bolong ke jantung ibu kota Yogyakarta.\n\n---\n\n### 2. Pelaksanaan di Bawah Letkol Soeharto\n\nTepat pada **1 Maret 1949 pukul 06.00 pagi** saat sirine tanda jam malam berbunyi, pasukan TNI melancarkan serangan serentak dari segala penjuru dan berhasil menguasai kota Yogyakarta selama **6 jam penuh**.\n\n---\n\n### 3. Dampak Monumental\n\nWarta pendudukan 6 jam ini berhasil dikirim via radio darurat PC-2 AURI ke Sumatra, New Delhi, dan markas PBB di New York.\n\nSerangan ini membalikkan opini dunia: terbukti nyata bahwa TNI dan Republik Indonesia masih sangat kuat dan berdaulat."
          },
          {
            heading: "24. PERUNDINGAN ROEM–ROIJEN",
            content: "Ditekan oleh resolusi PBB dan ancaman Amerika Serikat yang akan menghentikan dana bantuan *Marshall Plan*, Belanda akhirnya bersedia kembali ke meja perundingan.\n\nPada **7 Mei 1949**, ditandatangani perjanjian antara delegasi Indonesia yang dipimpin **Mr. Mohammad Roem** dan delegasi Belanda dipimpin **Dr. J.H. van Royen**.\n\nHasil utama:\n* Pemerintah Republik Indonesia dipulihkan kembali ke Yogyakarta.\n* Soekarno-Hatta dan pimpinan Republik dibebaskan dari pengasingan.\n* Pasukan Belanda ditarik mundur dari Yogyakarta.\n* Disepakati penyelenggaraan Konferensi Meja Bundar (KMB) di Den Haag."
          },
          {
            heading: "25. KONFERENSI INTER-INDONESIA",
            content: "Sebelum menghadapi Belanda di forum internasional KMB, para pemimpin Republik Indonesia mengadakan **Konferensi Inter-Indonesia** (Juli–Agustus 1949) bersama para pimpinan negara-negara bagian bentukan Belanda yang tergabung dalam **BFO** (*Bijeenkomst voor Federaal Overleg*) pimpinan Sultan Hamid II.\n\nHasil konferensi ini sangat penting: BFO sepakat bersatu dan mendukung penuh Republik Indonesia dalam memperjuangkan pengakuan kedaulatan mutlak dari Belanda."
          },
          {
            heading: "26. KONFERENSI MEJA BUNDAR (KMB)",
            content: "### 1. Pelaksanaan di Den Haag\n\nKMB berlangsung dari **23 Agustus hingga 2 November 1949** di Den Haag, Belanda. Delegasi Indonesia dipimpin langsung oleh Wakil Presiden **Drs. Mohammad Hatta**.\n\n---\n\n### 2. Keputusan Pokok KMB\n1. Belanda secara resmi mengakui kedaulatan Republik Indonesia Serikat (RIS) sebagai negara merdeka dan berdaulat penuh pada **27 Desember 1949**.\n2. Pembentukan Uni Indonesia-Belanda yang bersifat simbolis.\n3. Penyelesaian status wilayah **Irian Barat** ditunda dan akan dirundingkan kembali dalam tempo satu tahun.\n4. Indonesia bersedia menanggung pengalihan sejumlah utang Hindia Belanda.\n\n---\n\n### 3. Penandatanganan Pengakuan Kedaulatan\n\nPada **27 Desember 1949**, naskah pengakuan kedaulatan ditandatangani secara serentak di dua tempat:\n* Di Istana Dam Amsterdam oleh Ratu Juliana dan Drs. Mohammad Hatta.\n* Di Jakarta oleh Sri Sultan Hamengkubuwono IX dan Wakil Mahkota Belanda Lovink."
          },
          {
            heading: "27. KEMBALI KE NEGARA KESATUAN (NKRI)",
            content: "Bentuk federal RIS tidak bertahan lama karena rakyat di berbagai negara bagian menuntut pembubaran negara boneka dan ingin kembali melebur ke dalam Republik.\n\nTepat pada **17 Agustus 1950**, Presiden Soekarno mengumumkan pembubaran RIS dan Indonesia resmi kembali menjadi **Negara Kesatuan Republik Indonesia (NKRI)** berdasarkan UUDS 1950."
          },
          {
            heading: "28. MENGAPA INDONESIA BERHASIL MEMPERTAHANKAN KEMERDEKAAN?",
            content: "Tujuh pilar utama keberhasilan bangsa:\n1. **Persatuan Rakyat Semesta:** Dukungan lahir batin rakyat jelata terhadap kemerdekaan.\n2. **Keuletan Perang Gerilya:** Taktik perang yang membuat tentara modern Belanda frustrasi dan kehabisan biaya.\n3. **Kepiawaian Diplomasi:** Kemampuan para diplomat berargumen di forum PBB.\n4. **Kepemimpinan Kuat & Bermoral:** Teladan ketabahan dari dwitunggal Soekarno-Hatta dan Jenderal Soedirman.\n5. **Dukungan Solid Negara Sahabat:** Pengakuan diplomatik awal dari Mesir, India, Suriah, dan Australia.\n6. **Peran Komunikasi Radio Darurat:** Kecepatan menyebarkan informasi penentang sensor kolonial.\n7. **Penyelamatan Lembaga Melalui PDRI:** Kelincahan menjaga mandat kedaulatan negara saat pusat diserang."
          },
          {
            heading: "29. HUBUNGAN PERJUANGAN FISIK DAN DIPLOMASI",
            content: "Perjuangan fisik dan diplomasi laksana dua sisi mata uang yang tidak terpisahkan:\n\n> **Perjuangan Bersenjata di Lapangan ➔ Mempertahankan Posisi Teritorial ➔ Memperkuat Nilai Tawar di Meja Diplomasi ➔ Tekanan Politik Internasional PBB ➔ Pengakuan Kedaulatan Resmi.**\n\nTanpa perjuangan bersenjata, diplomasi tidak memiliki daya tawar taring politik. Sebaliknya, tanpa diplomasi, pertempuran senjata tidak akan diakui dalam tatanan hukum internasional."
          },
          {
            heading: "30. PERAN PERS DAN KOMUNIKASI",
            content: "Pers pejuang (radio gelap morse, kurir pos darurat, dan koran perjuangan) menjadi senjata informasi ampuh dalam membongkar kebohongan propaganda Belanda dan menggalang solidaritas antarpulau.\n\nPelajaran penting bagi generasi digital: di era mana pun, penguasaan komunikasi dan integritas informasi merupakan pilar penentu kemenangan bangsa."
          },
          {
            heading: "31. PERAN PEREMPUAN",
            content: "Perempuan Indonesia memainkan peranan krusial yang setara:\n* Mengelola jaringan dapur umum yang menyuplai ribuan pejuang garis depan.\n* Menjadi palang merah darurat yang merawat korban pertempuran di tengah desingan peluru.\n* Berani menjadi kurir rahasia yang menyelundupkan dokumen instruksi perang dan amunisi melewati pos penjagaan musuh."
          },
          {
            heading: "32. DAMPAK PERJUANGAN MEMPERTAHANKAN KEMERDEKAAN",
            content: "* **Politik:** Pengakuan kedaulatan de jure internasional atas kemerdekaan Republik Indonesia.\n* **Militer:** Lahirnya tradisi korps militer Tentara Nasional Indonesia (TNI) berbasis pertahanan rakyat semesta (*Sishankamrata*).\n* **Sosial:** Terjalinnya ikatan batin dan persaudaraan lintas suku antardaerah yang diuji oleh penderitaan perang.\n* **Ekonomi:** Terjadinya kerusakan sarana prasarana fisik yang menuntut kerja keras pembangunan pada masa pascakemerdekaan."
          },
          {
            heading: "33. TANTANGAN SETELAH PENGAKUAN KEDAULATAN",
            content: "Pasca-1950, Indonesia langsung dihadapkan pada babak ujian baru:\n* Masalah integrasi wilayah dan pembebasan Irian Barat yang masih ditunda Belanda.\n* Rekonstruksi ekonomi nasional yang porak-poranda akibat perang.\n* Pergantian kabinet yang sangat cepat pada era Demokrasi Parlementer.\n* Pemberontakan bersenjata bernuansa kedaerahan dan ideologis (DI/TII, PRRI/Permesta)."
          },
          {
            heading: "34. MEMBACA PERIODE 1945–1949 DENGAN CARA BERPIKIR HISTORIS",
            content: "1. **Kronologi Kausalitas:** Memahami rentetan sebab-akibat dari proklamasi ➔ invasi Sekutu/NICA ➔ revolusi fisik ➔ perundingan ➔ agresi militer ➔ pengakuan kedaulatan.\n2. **Konteks Multiperspektif:** Menimbang sudut pandang pejuang, kaum sipil, serdadu lawan, dan penengah PBB untuk melihat sejarah secara obyektif dan arif.\n3. **Perubahan & Kesinambungan:** Membedakan apa yang berubah (status hukum kemerdekaan) dan apa yang berkesinambungan (semangat gotong royong dan kewaspadaan nasional)."
          },
          {
            heading: "35. NILAI-NILAI PERJUANGAN",
            content: "Tujuh nilai utama yang wajib diwarisi generasi muda:\n1. **Rela Berkorban:** Mengutamakan kepentingan bangsa di atas kepentingan pribadi.\n2. **Ketabahan Pantang Menyerah:** Belajar dari teladan Jenderal Soedirman yang pantang menyerah meski dalam kondisi sakit.\n3. **Persatuan Dalam Kebhinnekaan:** Meleburnya seluruh suku dan golongan demi satu panji Merah Putih.\n4. **Kecerdasan Diplomasi:** Mengutamakan akal sehat dan musyawarah dalam menyelesaikan pertikaian.\n5. **Kemandirian Berdikari:** Percaya pada kekuatan sendiri tanpa menggantungkan nasib pada bangsa lain.\n6. **Kepemimpinan Teladan:** Pemimpin yang berada di garis depan bersama rakyatnya.\n7. **Integritas Moral Kebangsaan:** Menjunjung tinggi kebenaran dan keadilan bagi sesama warga negara."
          },
          {
            heading: "36. RELEVANSI BAGI GENERASI MUDA",
            content: "Di abad ke-21, perang bukan lagi mengangkat bambu runcing melawan tentara penjajah. Bentuk perjuangan generasi muda saat ini adalah:\n* Memperangi kebodohan dengan literasi dan kompetensi kejuruan vokasi yang unggul.\n* Melawan hoaks, ujaran kebencian, dan polarisasi sosial di dunia digital.\n* Berinovasi menciptakan teknologi mandiri dan memajukan perekonomian nasional.\n* Menjaga integritas diri dari korupsi dan kemalasan demi kehormatan bangsa di pentas global."
          }
        ],
        glossary: [
          { term: 'AFNEI', def: 'Allied Forces Netherlands East Indies, komando tentara Sekutu yang ditugaskan melucuti tentara Jepang pasca-Perang Pasifik.' },
          { term: 'NICA', def: 'Netherlands Indies Civil Administration, tentara sipil kolonial Belanda yang membonceng pasukan Sekutu untuk menjajah kembali Indonesia.' },
          { term: 'Supit Urang', def: 'Taktik militer kepungan jepit dua sayap yang dipimpin Kolonel Soedirman dalam pertempuran Palagan Ambarawa.' },
          { term: 'PDRI', def: 'Pemerintah Darurat Republik Indonesia yang dibentuk di Bukittinggi oleh Sjafruddin Prawiranegara untuk menyelamatkan eksistensi negara.' },
          { term: 'Serangan Umum 1 Maret', def: 'Serangan mendadak TNI menduduki ibu kota Yogyakarta selama 6 jam yang menghentak dunia internasional dan forum PBB.' },
          { term: 'Garis Van Mook', def: 'Garis batas demarkasi khayalan buatan Belanda yang memotong wilayah kedaulatan Republik Indonesia dalam Perjanjian Renville.' },
          { term: 'KMB', def: 'Konferensi Meja Bundar di Den Haag, Belanda, yang menghasilkan pengakuan kedaulatan resmi Indonesia pada 27 Desember 1949.' }
        ],
        reflectionQuestions: [
          'Mengapa para pejuang kemerdekaan memilih membumihanguskan kota Bandung mereka sendiri (Bandung Lautan Api) daripada menyerahkannya kepada Sekutu? Nilai pengorbanan apa yang dapat kita teladani?',
          'Kedaulatan Indonesia diraih melalui kombinasi revolusi fisik dan diplomasi. Di masa damai sekarang, apa yang harus dipersiapkan oleh siswa SMK agar kedaulatan ekonomi dan teknologi Indonesia tidak dijajah oleh produk asing?'
        ]
      },
      {
        id: 'smk-xi-4',
        title: 'Masa Pemerintahan Presiden Sukarno (1950–1966)',
        phase: 'Fase F',
        grade: 'Kelas XI',
        icon: '📢',
        period: '1950 - 1966',
        cpSummary: 'Menganalisis instabilitas Demokrasi Parlementer, keberhasilan KAA Bandung 1955, Deklarasi Djuanda 1957, Dekrit Presiden 5 Juli 1959, Demokrasi Terpimpin, pembebasan Irian Barat (Trikora), dan Politik Mercusuar.',
        syllabus: {
          atp: [
            '11.4.1 Menganalisis dinamika sistem multipartai dan instabilitas jatuh-bangunnya 7 kabinet pada masa Demokrasi Parlementer (1950–1959).',
            '11.4.2 Mengevaluasi keberhasilan monumental penyelenggaraan Konferensi Asia-Afrika (KAA) Bandung 1955 dan pelaksanaan Pemilu pertama tahun 1955.',
            '11.4.3 Menganalisis signifikansi hukum Deklarasi Djuanda 13 Desember 1957 terhadap integrasi kedaulatan wilayah laut kepulauan Nusantara.',
            '11.4.4 Menguraikan latar belakang dan dampak Dekrit Presiden 5 Juli 1959 serta pelaksanaan Demokrasi Terpimpin (Nasakom, Trikora, Dwikora, Politik Mercusuar, dan G30S/PKI).'
          ],
          meaningfulUnderstanding: 'Peralihan sistem politik dari Demokrasi Parlementer ke Demokrasi Terpimpin mencerminkan pergulatan sengit para pendiri bangsa dalam mencari model ketatanegaraan yang sesuai dengan kepribadian bangsa Indonesia, di mana stabilitas politik dan kedaulatan ekonomi menjadi syarat mutlak pembangunan nasional.',
          essentialQuestions: [
            'Mengapa sistem kabinet parlementer yang meniru model demokrasi Barat mengalami kegagalan dan instabilitas kronis di Indonesia pada era 1950-an?',
            'Bagaimana Deklarasi Djuanda 1957 berhasil melipatgandakan luas wilayah laut Indonesia dan diakui secara resmi oleh konvensi hukum laut PBB (UNCLOS)?'
          ]
        },
        subtopics: [
          {
            heading: "1. PENDAHULUAN",
            content: "Setelah Indonesia berhasil mempertahankan kemerdekaan dan memperoleh pengakuan kedaulatan pada akhir 1949, bangsa Indonesia memasuki babak baru. Tantangan Indonesia tidak lagi hanya bagaimana mengusir penjajah, tetapi bagaimana menjalankan sebuah negara merdeka.\n\nIndonesia harus menjawab berbagai pertanyaan penting:\n* Sistem pemerintahan seperti apa yang akan digunakan?\n* Bagaimana hubungan Presiden dengan parlemen?\n* Bagaimana partai politik berperan dalam pemerintahan?\n* Bagaimana negara menangani perbedaan ideologi?\n* Bagaimana ekonomi yang rusak akibat perang dapat dipulihkan?\n* Bagaimana hubungan Indonesia dengan negara-negara lain?\n* Bagaimana negara menjaga persatuan ketika kepentingan politik semakin beragam?\n\nPertanyaan-pertanyaan tersebut membuat periode pemerintahan Sukarno menjadi salah satu periode paling penting dalam sejarah Indonesia.\n\nPada masa ini Indonesia mengalami dua model politik yang berbeda:\n1. **Demokrasi Liberal atau Demokrasi Parlementer**, yang berlangsung terutama pada 1950–1959.\n2. **Demokrasi Terpimpin**, yang dimulai setelah Dekret Presiden 5 Juli 1959 dan berlangsung sampai masa peralihan kekuasaan pada pertengahan 1960-an.\n\nPerubahan dari Demokrasi Liberal ke Demokrasi Terpimpin menunjukkan bahwa perjalanan demokrasi Indonesia tidak berjalan lurus. Sistem politik berubah karena kondisi sosial, ekonomi, keamanan, konflik ideologi, serta dinamika hubungan antara lembaga negara.\n\nKarena itu, masa Sukarno perlu dipahami bukan hanya sebagai daftar kabinet atau tokoh, melainkan sebagai proses pencarian bentuk pemerintahan yang dianggap sesuai dengan keadaan Indonesia."
          },
          {
            heading: "2. KONSEP DASAR",
            content: "### 1. Apa yang Dimaksud Demokrasi?\n\nDemokrasi secara sederhana berarti pemerintahan yang menempatkan rakyat sebagai sumber legitimasi kekuasaan.\n\nDalam praktiknya, demokrasi membutuhkan:\n* partisipasi masyarakat,\n* lembaga perwakilan,\n* aturan hukum,\n* kebebasan berpendapat,\n* pemilu,\n* mekanisme pergantian kekuasaan,\n* dan pengawasan terhadap pemerintah.\n\nNamun, setiap negara dapat mengembangkan praktik demokrasi yang berbeda sesuai dengan kondisi sejarahnya."
          },
          {
            heading: "3. KONDISI INDONESIA SETELAH PENGAKUAN KEDAULATAN",
            content: "### 1. Dari RIS Menuju Negara Kesatuan\n\nSetelah Konferensi Meja Bundar, Indonesia secara resmi memasuki bentuk **Republik Indonesia Serikat (RIS)**.\n\nNamun, bentuk negara federal tersebut tidak berlangsung lama. Sebagian besar kekuatan politik dan masyarakat menghendaki negara kesatuan.\n\nAkhirnya pada **17 Agustus 1950**, Indonesia kembali menjadi:\n> **Negara Kesatuan Republik Indonesia (NKRI).**\n\nSebagai dasar konstitusional digunakan **Undang-Undang Dasar Sementara 1950 (UUDS 1950)**.\n\n---\n\n### 2. Mengapa Indonesia Menggunakan Sistem Parlementer?\n\nUUDS 1950 mengatur sistem pemerintahan parlementer. Dalam sistem ini:\n* Presiden merupakan kepala negara.\n* Perdana Menteri menjadi kepala pemerintahan.\n* Kabinet bertanggung jawab kepada parlemen.\n* Parlemen memiliki kekuatan politik yang besar.\n* Pemerintah harus mendapatkan dukungan mayoritas di parlemen.\n\nSistem seperti ini dianggap dapat memberikan ruang bagi partai politik dan parlemen untuk menjalankan fungsi demokrasi.\n\nNamun, sistem parlementer juga memiliki risiko. Apabila koalisi politik tidak stabil, kabinet dapat jatuh. Inilah yang kemudian menjadi salah satu karakter utama politik Indonesia pada masa Demokrasi Liberal."
          },
          {
            heading: "4. DEMOKRASI LIBERAL",
            content: "### 1. Pengertian Demokrasi Liberal\n\nIstilah Demokrasi Liberal digunakan untuk menggambarkan sistem politik Indonesia pada periode 1950–1959.\n\nSistem ini sering juga disebut **Demokrasi Parlementer**, karena kehidupan pemerintahan sangat dipengaruhi oleh parlemen.\n\nDalam praktiknya, pemerintah dibentuk berdasarkan dukungan partai politik. Karena tidak ada satu partai yang memperoleh mayoritas mutlak, kabinet harus dibentuk melalui koalisi. Akibatnya, pemerintah sangat bergantung pada kemampuan mempertahankan dukungan politik.\n\n---\n\n### 2. Ciri-Ciri Demokrasi Liberal\n* **Peran Parlemen Besar:** Parlemen memiliki kekuasaan untuk mengawasi pemerintah.\n* **Partai Politik Berkembang:** Berbagai partai dengan ideologi berbeda aktif dalam politik.\n* **Pemerintah Berbasis Koalisi:** Kabinet dibentuk melalui kerja sama beberapa partai.\n* **Perdana Menteri Memegang Pemerintahan:** Presiden lebih banyak menjalankan fungsi kepala negara.\n* **Kabinet Dapat Jatuh:** Apabila kehilangan dukungan parlemen, kabinet dapat mengundurkan diri atau digantikan.\n\n---\n\n### 3. Kelebihan Demokrasi Liberal\n* **Kebebasan politik:** Partai politik dapat berkembang dan menyampaikan gagasan.\n* **Parlemen aktif:** Pemerintah mendapatkan pengawasan.\n* **Pers relatif berkembang:** Media dapat mengkritik kebijakan pemerintah.\n* **Pemilu dapat dilaksanakan:** Masyarakat memperoleh kesempatan menentukan wakil politik.\n\n---\n\n### 4. Kelemahan Demokrasi Liberal\n* **Kabinet sering berganti:** Pergantian pemerintah menyebabkan kesinambungan program terganggu.\n* **Koalisi rapuh:** Partai dapat menarik dukungan ketika kepentingannya tidak terpenuhi.\n* **Konflik politik tinggi:** Perbedaan ideologi membuat proses pengambilan keputusan sulit.\n* **Pemerintahan sulit menjalankan program jangka panjang:** Kabinet yang tidak bertahan lama kesulitan melaksanakan rencana pembangunan."
          },
          {
            heading: "5. PERGANTIAN KABINET PADA MASA DEMOKRASI LIBERAL",
            content: "Pergantian kabinet merupakan ciri yang sangat menonjol. Namun, yang lebih penting adalah memahami:\n> **Mengapa sebuah kabinet dapat bertahan atau jatuh?**\n\n---\n\n### 1. Kabinet Natsir (1950–1951)\nDipimpin oleh **Mohammad Natsir**. Kabinet ini menghadapi tugas besar: membangun stabilitas pemerintahan, memperkuat keamanan, menyelesaikan masalah Irian Barat, serta memperbaiki kondisi ekonomi (Program Sumitro). Namun, kabinet berakhir setelah mosi tidak percaya dari oposisi di parlemen.\n\n> *Pelajaran sejarah:* Dalam sistem parlementer, pemerintah tidak cukup hanya mempunyai program; pemerintah juga harus mampu mempertahankan dukungan politik.\n\n---\n\n### 2. Kabinet Sukiman-Suwirjo (1951–1952)\nDipimpin oleh Sukiman Wirjosandjojo. Masalah penting adalah kesepakatan bantuan **Mutual Security Act (MSA)** dengan Amerika Serikat yang menimbulkan kritik keras karena dianggap melanggar prinsip politik luar negeri bebas dan aktif.\n\n---\n\n### 3. Kabinet Wilopo (1952–1953)\nMenghadapi persoalan ekonomi, keamanan, dan agraria. Salah satu peristiwa penting adalah **Peristiwa Tanjung Morawa** (sengketa tanah di Sumatra Timur), yang memperlihatkan bahwa masalah agraria dapat berkembang menjadi krisis politik yang menjatuhkan kabinet.\n\n---\n\n### 4. Kabinet Ali Sastroamidjojo I (1953–1955)\nMempunyai pencapaian internasional monumental: sukses menyelenggarakan **Konferensi Asia-Afrika 1955** di Bandung. Namun, kabinet jatuh akibat perselisihan internal dengan pimpinan Angkatan Darat mengenai pergantian KSAD.\n\n---\n\n### 5. Kabinet Burhanuddin Harahap (1955–1956)\nBerhasil menyelenggarakan salah satu agenda politik terbesar dan paling demokratis dalam sejarah Indonesia: **Pemilihan Umum 1955**.\n\n---\n\n### 6. Kabinet Ali Sastroamidjojo II (1956–1957)\nDibentuk pasca-Pemilu 1955. Menghadapi pergolakan daerah yang meluas di Sumatra dan Sulawesi, pembatalan sepihak utang KMB, serta perpecahan koalisi politik yang berujung pada pengunduran diri kabinet.\n\n---\n\n### 7. Kabinet Djuanda (1957–1959)\nSering disebut sebagai **Kabinet Karya** (*Zaken Kabinet*). Program kerjanya dikenal sebagai **Pancakarya**. Kabinet ini melahirkan prestasi hukum maritim dunia: **Deklarasi Djuanda 13 Desember 1957** yang menyatukan laut kepulauan Indonesia."
          },
          {
            heading: "6. PEMILU 1955",
            content: "### 1. Mengapa Pemilu 1955 Penting?\nPemilu 1955 merupakan tonggak penting demokrasi Indonesia. Pemilu menjadi sarana rakyat menentukan wakilnya secara langsung, bebas, rahasia, jujur, dan adil.\n\n---\n\n### 2. Dua Tahap Pemungutan Suara\n* **Pemilu DPR (29 September 1955):** Memilih anggota Dewan Perwakilan Rakyat.\n* **Pemilu Konstituante (15 Desember 1955):** Memilih anggota Dewan Konstituante yang bertugas menyusun undang-undang dasar tetap pengganti UUDS 1950.\n\n---\n\n### 3. Empat Kekuatan Politik Utama (*The Big Four*)\nHasil Pemilu 1955 menunjukkan empat kekuatan besar yang mendominasi perolehan suara:\n1. **PNI** (Partai Nasional Indonesia)\n2. **Masyumi** (Majelis Syuro Muslimin Indonesia)\n3. **Nahdlatul Ulama** (NU)\n4. **PKI** (Partai Komunis Indonesia)\n\nKarena tidak ada satu partai yang memperoleh mayoritas mutlak (>50%), pemerintahan tetap harus dibangun melalui koalisi yang rumit."
          },
          {
            heading: "7. KONFERENSI ASIA-AFRIKA 1955",
            content: "### 1. Latar Belakang & Pelaksanaan\nSetelah Perang Dunia II, negara-negara di Asia dan Afrika menghadapi ancaman sisa kolonialisme serta tarikan polarisasi Perang Dingin antara Blok Barat (AS) dan Blok Timur (Uni Soviet).\n\nKonferensi Asia-Afrika (KAA) diselenggarakan di Gedung Merdeka Bandung pada **18–24 April 1955**, dihadiri oleh 29 negara yang mewakili lebih dari separuh penduduk bumi.\n\n---\n\n### 2. Dasasila Bandung\nKAA menghasilkan deklarasi bersejarah yang dikenal sebagai **Dasasila Bandung**, yang memuat prinsip:\n* Penghormatan terhadap hak-hak dasar manusia dan piagam PBB.\n* Penghormatan terhadap kedaulatan dan integritas teritorial semua bangsa.\n* Pengakuan persamaan semua ras dan bangsa.\n* Tidak melakukan intervensi atau campur tangan urusan dalam negeri negara lain.\n* Penyelesaian perselisihan internasional secara damai.\n\nKAA menginspirasi gelombang dekolonisasi di Afrika dan membidani lahirnya **Gerakan Non-Blok (GNB)** tahun 1961."
          },
          {
            heading: "8. KONSTITUANTE DAN KRISIS DEMOKRASI LIBERAL",
            content: "### 1. Tugas & Perdebatan Konstituante\nDewan Konstituante bertugas menyusun konstitusi baru pengganti UUDS 1950. Namun, persidangan di Bandung mengalami kebuntuan (*deadlock*) berkepanjangan akibat perselisihan sengit mengenai dasar negara:\n* Blok Pancasila (didukung PNI, PKI, partai Kristen, dll.)\n* Blok Islam (didukung Masyumi, NU, PSII, Perti yang menghendaki Piagam Jakarta/dasar Islam).\n\n---\n\n### 2. Kebuntuan Politik\nVoting berulang kali gagal mencapai batas mayoritas dua pertiga (2/3) suara yang dipersyaratkan. Ketidakmampuan membangun konsensus konstitusi di tengah maraknya pergolakan daerah mendorong situasi ke arah krisis ketatanegaraan yang darurat."
          },
          {
            heading: "9. PERGOLAKAN DAERAH",
            content: "### 1. Hubungan Pusat dan Daerah\nSetelah kemerdekaan, muncul ketimpangan hubungan antara pusat dan daerah. Daerah penghasil komoditas ekspor merasa hasil buminya dikuras ke pusat sementara alokasi anggaran pembangunan daerah sangat minim.\n\n---\n\n### 2. Gerakan Pemberontakan\n* **DI/TII:** Muncul di Jawa Barat (Kartosoewirjo), Jawa Tengah, Aceh (Daud Beureueh), dan Sulawesi Selatan (Kahar Muzakkar) dengan motif pendirian Negara Islam Indonesia.\n* **PRRI dan Permesta:** Pada 1958 berdiri Pemerintahan Revolusioner Republik Indonesia (PRRI) di Sumatra Barat dan Perjuangan Rakyat Semesta (Permesta) di Manado/Sulawesi Utara.\n\nPemerintah pusat akhirnya menggelar operasi militer gabungan berskala besar untuk memadamkan pergolakan tersebut demi menjaga keutuhan NKRI."
          },
          {
            heading: "10. BERAKHIRNYA DEMOKRASI LIBERAL",
            content: "Demokrasi Liberal runtuh akibat akumulasi krisis multidimensi:\n1. Ketidakstabilan kabinet (7 kabinet jatuh dalam 9 tahun).\n2. Rapuhnya koalisi antarpartai di parlemen.\n3. Kebuntuan total Sidang Konstituante dalam menetapkan UUD baru.\n4. Pergolakan daerah bersenjata yang mengancam disintegrasi bangsa.\n5. Memburuknya perekonomian nasional.\n\nDalam situasi krisis eksistensial ini, Presiden Sukarno bersama pimpinan militer (KSAD Jenderal A.H. Nasution) mengambil inisiatif darurat untuk merombak sistem ketatanegaraan."
          },
          {
            heading: "11. LAHIRNYA DEMOKRASI TERPIMPIN",
            content: "### 1. Gagasan Sukarno\nSukarno menilai demokrasi liberal ala Barat yang mengandalkan \"voting 50% plus satu\" memecah belah bangsa. Sukarno menawarkan konsep **Demokrasi Terpimpin** yang berpijak pada sila ke-4 Pancasila: musyawarah untuk mufakat di bawah bimbingan kepemimpinan yang arif demi revolusi nasional.\n\n---\n\n### 2. Dekret Presiden 5 Juli 1959\nPada Minggu sore, **5 Juli 1959**, di depan Istana Merdeka Jakarta, Presiden Sukarno mengumumkan dekret darurat:\n1. **Membubarkan Konstituante.**\n2. **Memberlakukan kembali UUD 1945** dan menyatakan UUDS 1950 tidak berlaku lagi.\n3. **Membentuk MPRS dan DPAS** dalam waktu sesingkat-singkatnya.\n\nDekret ini mengakhiri era Demokrasi Liberal dan membuka babak baru **Demokrasi Terpimpin**."
          },
          {
            heading: "12. DEMOKRASI TERPIMPIN",
            content: "### 1. Karakteristik Utama\n* **Sentralisasi Kekuasaan:** Presiden Sukarno menjadi figur sentral penentu seluruh garis haluan negara (*Pemimpin Besar Revolusi*).\n* **Perubahan Peran Lembaga Negara:** DPR hasil Pemilu 1955 dibubarkan pada 1960 setelah menolak RAPBN, lalu digantikan oleh DPR-Gotong Royong (DPR-GR) yang anggotanya ditunjuk langsung oleh Presiden.\n* **Menguatnya Peran Militer:** Angkatan Bersenjata (ABRI) memegang peran ganda (*Dwifungsi*) di ranah pertahanan dan birokrasi sipil.\n* **Pesatnya Pengaruh PKI:** Partai Komunis Indonesia menjadi organisasi massa politik terbesar yang getol mendukung retorika revolusioner Sukarno."
          },
          {
            heading: "13. PEMBENTUKAN LEMBAGA POLITIK BARU",
            content: "Pemerintah membentuk lembaga-lembaga baru yang bertumpu pada asas gotong royong revolusioner:\n* **MPRS (Majelis Permusyawaratan Rakyat Sementara):** Mengangkat Sukarno sebagai Presiden Seumur Hidup melalui Ketetapan MPRS No. III/MPRS/1963.\n* **DPAS (Dewan Pertimbangan Agung Sementara):** Diketuai langsung oleh Presiden Sukarno dengan Roeslan Abdulgani sebagai wakil ketua.\n* **Front Nasional:** Wadah penggalangan ormas dan kekuatan rakyat untuk menopang agenda revolusi."
          },
          {
            heading: "14. NASAKOM",
            content: "### 1. Konsep Pemikiran\nSukarno memformulasikan doktrin politik **Nasakom** (**Nasionalisme, Agama, dan Komunisme**). Doktrin ini berambisi menyatukan tiga arus ideologi utama pergerakan Indonesia: kaum nasionalis (PNI), kaum santri/agama (NU), dan kaum komunis (PKI) ke dalam satu tarikan napas revolusi nasional.\n\n---\n\n### 2. Realitas & Polarisasi\nDalam praktiknya, ketiga kekuatan ini memiliki friksi mendasar yang tidak dapat dijembatani. PKI memanfaatkan payung Nasakom untuk memperluas penetrasi ke ormas buruh (SOBSI), petani (BTI), dan aparat negara, yang memicu kecurigaan mendalam dari kalangan militer dan ormas Islam."
          },
          {
            heading: "15. MANIPOL USDEK",
            content: "Pidato kenegaraan Presiden Sukarno pada 17 Agustus 1959 berjudul *\"Penemuan Kembali Revolusi Kita\"* ditetapkan oleh DPAS dan MPRS sebagai **Manifesto Politik (Manipol)** Republik Indonesia.\n\nIntisari Manipol dirangkum dalam akronim **USDEK**:\n* **U** – Undang-Undang Dasar 1945\n* **S** – Sosialisme Indonesia\n* **D** – Demokrasi Terpimpin\n* **E** – Ekonomi Terpimpin\n* **K** – Kepribadian Indonesia\n\nManipol USDEK dijadikan doktrin wajib yang diajarkan di birokrasi, sekolah, universitas, dan media massa."
          },
          {
            heading: "16. POLITIK LUAR NEGERI PADA MASA SUKARNO",
            content: "Politik luar negeri Indonesia bertransformasi menjadi sangat aktif, militan, dan berani menentang kekuatan imperialisme Barat:\n* **Membagi Dunia Menjadi Dua Poros:** Sukarno membagi tatanan global menjadi **Oldefos** (*Old Established Forces* – negara imperialis Barat kapitalis) dan **Nefos** (*New Emerging Forces* – bangsa-bangsa merdeka baru dan blok sosialis).\n* **Poros Jakarta-Peking-Pyongyang:** Indonesia menjalin hubungan diplomatik dan kerja sama strategis yang sangat erat dengan Republik Rakyat Tiongkok dan Blok Timur."
          },
          {
            heading: "17. PERJUANGAN IRIAN BARAT",
            content: "### 1. Operasi Trikora\nSetelah jalur perundingan diplomasi menemui jalan buntu akibat keras kepalanya Belanda, Presiden Sukarno mengumandangkan **Tri Komando Rakyat (Trikora)** di Yogyakarta pada **19 Desember 1961**:\n1. Gagalkan pembentukan negara boneka Papua buatan Belanda.\n2. Kibarkan Sang Merah Putih di Irian Barat tanah air Indonesia.\n3. Bersiaplah untuk mobilisasi umum guna mempertahankan kemerdekaan dan kesatuan tanah air dan bangsa.\n\n---\n\n### 2. Komando Mandala & Perjanjian New York\nDibentuk Komando Mandala Pembebasan Irian Barat di Makassar yang dipimpin Mayjen Soeharto. Pertempuran heroik meletus, termasuk gugurnya Komodor Yos Sudarso dalam pertempuran Laut Aru (15 Januari 1962).\n\nTekanan militer Indonesia serta ancaman perang terbuka memaksa Belanda menandatangani **Persetujuan New York (15 Agustus 1962)** yang dimediasi oleh Amerika Serikat dan PBB. Pada 1 Mei 1963, otoritas PBB (UNTEA) secara resmi menyerahkan wilayah Irian Barat kembali ke pangkuan Ibu Pertiwi."
          },
          {
            heading: "18. KONFRONTASI INDONESIA-MALAYSIA",
            content: "### 1. Penentangan Pembentukan Federasi Malaysia\nPada 1963, Sukarno menentang keras pembentukan Federasi Malaysia (menggabungkan Malaya, Singapura, Sabah, dan Sarawak) yang dinilai sebagai proyek neokolonialisme Inggris (*Nekolim*) yang mengepung Indonesia dari utara.\n\n---\n\n### 2. Dwikora & Slogan Ganyang Malaysia\nPada **3 Mei 1964**, Presiden Sukarno mencetuskan **Dwi Komando Rakyat (Dwikora)** dengan slogan legendaris:\n> **“Ganyang Malaysia!”**\n\nSukarno mengerahkan sukarelawan dan pasukan militer melakukan penyusupan gerilya ke wilayah perbatasan Kalimantan Utara dan Semenanjung Malaya."
          },
          {
            heading: "19. INDONESIA KELUAR DARI PBB",
            content: "Pada **7 Januari 1965**, Presiden Sukarno mengambil keputusan radikal mengumumkan penarikan diri Indonesia dari keanggotaan **Perserikatan Bangsa-Bangsa (PBB)**.\n\nKeputusan ini diambil sebagai bentuk protes keras atas diterimanya Federasi Malaysia sebagai anggota tidak tetap Dewan Keamanan PBB. Indonesia menjadi satu-satunya negara di dunia pada masa itu yang berani keluar dari PBB dan kemudian memprakarsai pembentukan forum tandingan bernama **CONEFO** (*Conference of the New Emerging Forces*)."
          },
          {
            heading: "20. EKONOMI MASA DEMOKRASI LIBERAL",
            content: "Perekonomian pascaperang menghadapi tantangan berat: defisit neraca pembayaran, minimnya industri manufaktur, dan ketergantungan pada modal asing.\n\nPemerintah mencoba berbagai terobosan:\n* **Gunting Sjafruddin (1950):** Pemotongan nilai uang kertas bernilai 2,50 gulden ke atas menjadi separuh nilainya guna menekan jumlah uang beredar.\n* **Program Benteng (1950–1953):** Pemberian lisensi impor khusus untuk membina kaum pengusaha pribumi agar mampu bersaing dengan pengusaha non-pribumi dan asing. Namun, program ini gagal karena banyak pengusaha pribumi yang menyalahgunakan lisensi dengan menjualnya ke pihak lain (*fenomena Ali-Baba*)."
          },
          {
            heading: "21. NASIONALISASI PERUSAHAAN BELANDA",
            content: "Sebagai respon atas penolakan Belanda mengembalikan Irian Barat, pemerintah dan serikat buruh Indonesia melakukan aksi sepihak mengambil alih (*nasionalisasi*) ratusan perusahaan vital milik Belanda pada akhir 1957.\n\nPerusahaan-perusahaan perkebunan, bank (*De Javasche Bank* menjadi Bank Indonesia), perkapalan (*KPM* digantikan PELNI), dan maskapai penerbangan (*KLM* dinasionalisasi menjadi Garuda Indonesia) dialihkan menjadi Badan Usaha Milik Negara (BUMN) yang dikelola oleh perwira militer dan birokrat negara."
          },
          {
            heading: "22. EKONOMI TERPIMPIN",
            content: "Pada era Demokrasi Terpimpin, perekonomian diatur secara terpusat oleh negara (*Etatisme*). Dibentuk Badan Perancang Pembangunan Nasional (Bappenas) yang dipimpin Mohammad Yamin untuk menyusun Rencana Pembangunan Nasional Semesta Berencana Delapan Tahun (1961–1969).\n\nNamun, pelaksanaan ekonomi terpimpin terhambat oleh besarnya pengeluaran militer untuk operasi Trikora, Dwikora, serta minimnya tenaga ahli manajemen profesional."
          },
          {
            heading: "23. INFLASI DAN KRISIS EKONOMI",
            content: "Menjelang tahun 1965, perekonomian Indonesia terjerumus ke dalam krisis hiperinflasi terdahsyat dalam sejarah:\n* **Tingkat Hiperinflasi Mencapai 600%:** Harga kebutuhan pokok melonjak tajam dalam hitungan hari.\n* **Kebijakan Sanering (Desember 1965):** Pemerintah memotong nilai nominal uang rupiah dari Rp 1.000 (uang lama) menjadi Rp 1 (uang baru), namun gagal meredam kepanikan pasar.\n* **Antrean Kebutuhan Pokok:** Terjadi kelangkaan minyak tanah, beras, gula, dan kain. Rakyat harus antre berjam-jam demi mendapatkan kebutuhan dasar."
          },
          {
            heading: "24. PROYEK-PROYEK MERCUSUAR",
            content: "Di tengah krisis ekonomi, Presiden Sukarno gigih merealisasikan pembangunan proyek-proyek prestise berskala megah kelas dunia (*Politik Mercusuar*):\n* **Kompleks Stadion Utama Senayan (Gelora Bung Karno):** Dibangun untuk perhelatan Asian Games IV (1962) dan pesta olahraga tandingan Olimpiade Ganefo (1963).\n* **Monumen Nasional (Monas):** Tugu setinggi 132 meter berlapis emas sebagai simbol keagungan perjuangan kemerdekaan.\n* **Hotel Indonesia, Jembatan Ampera, Masjid Istiqlal, dan Gedung Conefo (kini Gedung DPR/MPR RI).**\n\nPembangunan ini memicu perdebatan sengit antara pengorbanan fiskal jangka pendek versus warisan monumen identitas kebanggaan bangsa jangka panjang."
          },
          {
            heading: "25. KEHIDUPAN POLITIK MENJELANG 1965",
            content: "Situasi politik tanah air menjelang pertengahan 1965 berada di titik didih yang sangat rawan (*keseimbangan rapuh*):\n* Presiden Sukarno menderita gangguan kesehatan, memicu kasak-kusuk suksesi kekuasaan.\n* Persaingan sengit antara Markas Besar Angkatan Darat (yang anti-komunis) dengan CC PKI (yang menuntut pembentukan *\"Angkatan Kelima\"* yaitu buruh dan tani yang dipersenjatai).\n* Gesekan tajam di pedesaan Jawa dan Bali akibat aksi sepihak pelaksanaan undang-undang pokok agraria oleh barisan BTI/PKI."
          },
          {
            heading: "26. HUBUNGAN SUKARNO, MILITER, DAN PKI",
            content: "Politik Indonesia dikendalikan oleh segitiga kekuasaan:\n> **Bung Karno sebagai Poros Penengah ↔ Angkatan Darat sebagai Pilar Keamanan ↔ PKI sebagai Mesin Massa.**\n\nBung Karno memanfaatkan PKI untuk mengimbangi pengaruh politik para jenderal Angkatan Darat, sementara Angkatan Darat mewaspadai infiltrasi ideologi komunis ke dalam institusi negara. Ketika keseimbangan poros ini terganggu, letusan konflik politik tak terelakkan lagi."
          },
          {
            heading: "27. KETEGANGAN IDEOLOGI",
            content: "Polarisasi merembet ke ranah kebudayaan dan pers:\n* Pertarungan antara **Lekra** (Lembaga Kebudayaan Rakyat binaan PKI yang mengusung doktrin realisme sosialis *\"politik adalah panglima\"*) melawan kelompok sastrawan penandatangan **Manikebu** (Manifesto Kebudayaan) yang memperjuangkan kebebasan humanisme universal.\n* Penutupan sejumlah surat kabar oposisi dan pembubaran partai-partai penentang (seperti Masyumi dan PSI pada 1960)."
          },
          {
            heading: "28. PERISTIWA G30S 1965",
            content: "### 1. Tragedi Dini Hari 1 Oktober 1965\nPada malam 30 September menuju dini hari 1 Oktober 1965, sekelompok pasukan militer di bawah pimpinan Letkol Untung Syamsuri (Komandan Batalyon I Kawal Kehormatan Cakrabirawa) menculik dan membunuh enam perwira tinggi dan satu perwira pertama TNI Angkatan Darat di Jakarta.\n\nJenazah para pahlawan revolusi (Letjen Ahmad Yani, Mayjen R. Soeprapto, Mayjen M.T. Haryono, Mayjen S. Parman, Brigjen D.I. Panjaitan, Brigjen Sutoyo Siswomiharjo, dan Lettu Pierre Tendean) dimasukkan ke dalam sumur tua di kawasan Lubang Buaya.\n\n---\n\n### 2. Penumpasan Gerakan\nPanglima Komando Cadangan Strategis Angkatan Darat (Pangkostrad) **Mayor Jenderal Soeharto** segera mengambil alih kendali pimpinan militer. Dalam tempo kurang dari 24 jam, pangkalan udara Halim Perdanakusuma dan stasiun RRI berhasil diamankan dan gerakan pemberontakan dipatahkan."
          },
          {
            heading: "29. DAMPAK POLITIK G30S",
            content: "Dampak peristiwa ini mengubah lanskap politik Indonesia secara fundamental:\n1. **Kehancuran PKI:** PKI dinyatakan sebagai dalang gerakan, dinyatakan sebagai partai terlarang, dan jaringan kepengurusannya dibubarkan di seluruh wilayah Indonesia.\n2. **Krisis Kepemimpinan Sukarno:** Wibawa politik Bung Karno merosot tajam karena penolakannya membubarkan PKI secara formal.\n3. **Naiknya Pamor Mayjen Soeharto:** Menjadi figur sentral pemulih keamanan dan ketertiban nasional."
          },
          {
            heading: "30. SUPERSEMAR",
            content: "### 1. Gelombang Aksi Tritura\nMahasiswa yang tergabung dalam KAMI melancarkan gelombang demonstrasi menuntut **Tritura (Tri Tuntutan Rakyat)**:\n1. Bubarkan PKI beserta ormas-ormasnya.\n2. Bersihkan Kabinet Dwikora dari unsur-unsur G30S.\n3. Turunkan harga barang dan perbaiki ekonomi.\n\n---\n\n### 2. Mandat 11 Maret 1966\nPada **11 Maret 1966**, Presiden Sukarno menandatangani **Surat Perintah Sebelas Maret (Supersemar)** di Istana Bogor kepada Letjen Soeharto untuk mengambil segala tindakan yang dianggap perlu demi terjaminnya keamanan, ketenangan, dan kestabilan jalannya pemerintahan.\n\nBerbekal Supersemar, keesokan harinya (12 Maret 1966), Letjen Soeharto resmi membubarkan PKI dan ormas-ormasnya di seluruh Indonesia."
          },
          {
            heading: "31. BERAKHIRNYA KEKUASAAN SUKARNO",
            content: "Peralihan kepemimpinan nasional berlangsung melalui mekanisme konstitusional MPRS:\n* **Sidang Umum MPRS 1966:** Menolak pidato pertanggungjawaban Presiden Sukarno yang berjudul *\"Nawaksara\"*.\n* **Sidang Istimewa MPRS Maret 1967:** Mengeluarkan Ketetapan MPRS No. XXXIII/MPRS/1967 yang mencabut kekuasaan pemerintahan negara dari Presiden Sukarno dan mengangkat **Jenderal Soeharto sebagai Pejabat Presiden RI**.\n* **Maret 1968:** Soeharto resmi dilantik sebagai Presiden Republik Indonesia kedua, menandai berdirinya rezim **Orde Baru**."
          },
          {
            heading: "32. MENGAPA DEMOKRASI LIBERAL BERAKHIR?",
            content: "Demokrasi Parlementer berakhir bukan karena faktor tunggal, melainkan pertemuan aneka krisis:\n* **Faktor Politik:** Tingginya fragmentasi multipartai dan ketiadaan mayoritas tunggal.\n* **Faktor Konstitusional:** Kegagalan Konstituante menghasilkan konsensus dasar negara.\n* **Faktor Keamanan:** Letusan pemberontakan daerah PRRI/Permesta dan DI/TII.\n* **Faktor Kepemimpinan:** Ketegasan Bung Karno dan pimpinan militer mengembalikan hukum ke UUD 1945."
          },
          {
            heading: "33. MENGAPA DEMOKRASI TERPIMPIN JUGA MENGALAMI KRISIS?",
            content: "Sistem Demokrasi Terpimpin mengalami keruntuhan karena kontradiksi internal:\n1. **Konsentrasi Kekuasaan Mutlak:** Lemahnya pengawasan terhadap kebijakan eksekutif kepresidenan.\n2. **Kerapuhan Koalisi Nasakom:** Ketidakmungkinan mempertemukan doktrin ateisme komunis dengan agama dan militer.\n3. **Kolapsnya Perekonomian:** Hiperinflasi 600% melumpuhkan daya beli dan memicu amarah rakyat.\n4. **Konfrontasi Militer yang Mahal:** Biaya perang Dwikora menguras perbendaharaan negara."
          },
          {
            heading: "34. PERBANDINGAN DEMOKRASI LIBERAL DAN DEMOKRASI TERPIMPIN",
            content: "| Aspek Indikator | Demokrasi Liberal (1950–1959) | Demokrasi Terpimpin (1959–1966) |\n| --- | --- | --- |\n| **Landasan Konstitusi** | UUDS 1950 | UUD 1945 (pasca Dekret) |\n| **Sistem Pemerintahan** | Parlementer (Kepala Pemerintahan: PM) | Presidensial Eksekutif Kuat (Presiden) |\n| **Peran Parlemen** | Sangat dominan mengontrol kabinet | Mengalami pelemahan (DPR-GR ditunjuk) |\n| **Iklim Partai Politik** | Multipartai bebas dan sangat kompetitif | Restriksi partai, dominasi Nasakom |\n| **Kedudukan Militer** | Di bawah kontrol menteri pertahanan sipil | Memiliki peran ganda politik-keamanan |\n| **Arah Politik Luar Negeri** | Cenderung pro-Barat, bebas aktif normatif | Anti-imperialis militan, poros kiri |\n| **Tantangan Puncak** | Kabinet jatuh bangun, mosi tidak percaya | Hiperinflasi 600% & letusan G30S 1965 |"
          },
          {
            heading: "35. KELEBIHAN DAN KELEMAHAN DUA SISTEM",
            content: "### A. Demokrasi Liberal\n* **Kelebihan:** Kebebasan berekspresi pers terjamin, pemilu pertama berlangsung jujur dan adil, supremasi hukum sipil dihormati.\n* **Kelemahan:** Program pembangunan jangka panjang terbengkalai akibat kabinet yang kerap dijatuhkan di parlemen.\n\n### B. Demokrasi Terpimpin\n* **Kelebihan:** Pengambilan keputusan politik luar negeri sangat tegas dan cepat, kedaulatan Irian Barat berhasil direbut kembali, pembangunan monumen simbol kebangsaan megah.\n* **Kelemahan:** Tergerusnya hak asasi dan kemerdekaan pers, polarisasi ideologi mematikan, serta kehancuran moneter akibat salah kelola ekonomi."
          },
          {
            heading: "36. BERPIKIR HISTORIS: SEBAB DAN AKIBAT",
            content: "Masa pemerintahan Sukarno menunjukkan rantai kausalitas sejarah yang erat:\n* Fragmentasi multipartai ➔ Kebuntuan Konstituante ➔ Dekret Presiden 5 Juli 1959.\n* Sentralisasi kekuasaan ➔ Dominasi politik Nasakom ➔ Polarisasi tajam AD vs PKI ➔ Tragedi G30S 1965 ➔ Supersemar 1966 ➔ Lahirnya Orde Baru."
          },
          {
            heading: "37. PERSPEKTIF MULTIPERSEKTIF",
            content: "Sejarah masa Sukarno harus dibaca dari beragam kacamata:\n* **Perspektif Kaum Diplomat:** Memuji Sukarno atas keberanian menempatkan Indonesia sejajar dengan negara adidaya dunia di KAA dan PBB.\n* **Perspektif Pengusaha & Ekonom:** Mengkritisi kebijakan nasionalisasi dan cetak uang yang memicu malapetaka inflasi.\n* **Perspektif Warga Pedesaan:** Mengalami derita antrean pangan dan kecemasan konflik tanah horizontal."
          },
          {
            heading: "38. KEHIDUPAN MASYARAKAT PADA MASA SUKARNO",
            content: "Dinamika kehidupan rakyat jelata diwarnai dialektika antara kebanggaan nasionalisme yang meluap-luap saat menyaksikan pawai atlet Ganefo dan parade militer, diimbangi oleh perjuangan keras mengantre beras, minyak tanah, dan tekstil dengan kupon jatah sandang pangan."
          },
          {
            heading: "39. PERAN PEMUDA",
            content: "Pemuda dan mahasiswa tampil sebagai kompas moral perubahan:\n* Angkatan 1955: Memelopori pergerakan pemikiran politik melalui pers mahasiswa.\n* Angkatan 1966 (KAMI/KAPPI): Turun ke jalan mengorganisasi aksi massa menuntut pemulihan ekonomi dan pembubaran PKI, membuktikan peran pemuda sebagai katalisator suksesi kekuasaan."
          },
          {
            heading: "40. RELEVANSI DENGAN KEHIDUPAN DEMOKRASI MASA KINI",
            content: "Empat fondasi penting bagi peradaban demokrasi modern:\n1. **Pentingnya Budaya Kompromi:** Kebebasan politik tanpa etika kompromi hanya akan melahirkan anarki parlemen.\n2. **Urgensi Sistem Pengawasan (*Checks and Balances*):** Pemimpin terhebat sekalipun harus memiliki mekanisme pengawasan independen agar tidak tergelincir pada kesewenang-wenangan.\n3. **Kesehatan Ekonomi Syarat Stabilitas Politik:** Demokrasi tidak akan mampu bertahan di atas penderitaan ekonomi rakyat jelata.\n4. **Toleransi Kemajemukan Ideologi:** Menjaga perbedaan pendapat agar tidak berubah menjadi ujaran permusuhan."
          },
          {
            heading: "41. KONTEKSTUALISASI DI LINGKUNGAN SEKOLAH",
            content: "Dalam organisasi OSIS atau pemilihan ketua kelas:\n* Model Liberal: Terlalu banyak kubu yang saling jegal hingga program kerja kelas macet.\n* Model Terpimpin: Ketua mengambil keputusan sepihak tanpa meminta masukan anggota kelas.\n* Keseimbangan Ideal: Memadukan ketegasan kepemimpinan dengan musyawarah mufakat yang partisipatif."
          },
          {
            heading: "42. KONTEKSTUALISASI UNTUK DUNIA KERJA",
            content: "Di dunia industri dan perusahaan vokasi:\n* Manajemen membutuhkan eksekusi cepat dari pimpinan, namun wajib membuka ruang ide dan masukan teknis dari para teknisi di lapangan.\n* Integritas tata kelola keuangan profesional menjadi benteng pencegah kebangkrutan operasional industri."
          },
          {
            heading: "43. PERTANYAAN PEMANTIK",
            content: "1. Mengapa sistem kabinet parlementer di Indonesia mengalami jatuh bangun berkali-kali pada periode 1950–1959?\n2. Bagaimana perhelatan KAA 1955 di Bandung mampu mengubah tatanan politik negara-negara berkembang di dunia?\n3. Mengapa Dekret Presiden 5 Juli 1959 dianggap sebagai pedang bermata dua dalam sejarah ketatanegaraan kita?\n4. Apakah doktrin Nasakom realistis untuk menyatukan elemen politik yang saling bertolak belakang?\n5. Mengapa krisis ekonomi dan inflasi selalu menjadi pemicu utama keruntuhan stabilitas sebuah pemerintahan?"
          },
          {
            heading: "44. PERTANYAAN HOTS",
            content: "1. Analisislah mengapa sistem multipartai tanpa partai mayoritas mutlak pada era Demokrasi Liberal justru memicu instabilitas kabinet berkepanjangan!\n2. Evaluasilah dampak Deklarasi Djuanda 1957 terhadap integritas kedaulatan batas laut maritim Indonesia di kancah hukum internasional!\n3. Bandingkan efektivitas strategi diplomasi multilateral pada era KAA 1955 dengan strategi konfrontasi militer bilateral pada era Dwikora 1964!\n4. Telaah bagaimana segitiga relasi Bung Karno, Angkatan Darat, dan PKI menciptakan ilusi keseimbangan politik yang berujung pada letusan tragedi 1965!\n5. Tariklah benang merah antara krisis moneter dan hiperinflasi 1965 dengan tumbuhnya gelombang protes mahasiswa Tritura 1966!"
          },
          {
            heading: "45. AKTIVITAS PEMBELAJARAN",
            content: "* **Aktivitas 1: Simulasi Debat Sidang Konstituante:** Bermain peran sebagai delegasi blok Pancasila dan blok Islam membahas dasar negara.\n* **Aktivitas 2: Sidang Kabinet Zaken:** Siswa merancang solusi atas krisis pangan darurat dengan pendekatan keahlian vokasi.\n* **Aktivitas 3: Peta Tematik Deklarasi Djuanda:** Menggambar perbandingan batas teritorial laut 3 mil laut versus 12 mil laut Nusantara."
          },
          {
            heading: "46. PROYEK AKHIR",
            content: "Siswa menyusun produk mini riset atau infografis digital bertema:\n> **“Belajar dari Sejarah: Membangun Demokrasi yang Kuat, Berkeadilan, dan Makmur di Era Indonesia Emas 2045.”**"
          },
          {
            heading: "47. RANGKUMAN BESAR",
            content: "Masa pemerintahan Presiden Sukarno (1950–1966) terbagi dalam dua babak besar: Demokrasi Liberal (1950–1959) yang mengutamakan supremasi parlemen multipartai namun berujung pada instabilitas kabinet, dan Demokrasi Terpimpin (1959–1966) yang memusatkan kekuasaan pada figur Presiden namun tersandung hiperinflasi serta konflik ideologis puncak tahun 1965.\n\nMelalui Dekret Presiden 5 Juli 1959, Manipol USDEK, pembebasan Irian Barat, dan Politik Mercusuar, Indonesia tampil berani di pentas internasional, sebelum akhirnya krisis politik pasca-G30S 1965 dan Supersemar 1966 mengantarkan transisi kepemimpinan menuju era Orde Baru."
          },
          {
            heading: "48. INTI PEMAHAMAN PESERTA DIDIK",
            content: "1. Demokrasi merupakan proses berkesinambungan mencari bentuk terbaik yang selaras dengan nilai Pancasila.\n2. Kepemimpinan visioner harus diimbangi oleh kehati-hatian tata kelola ekonomi dan mekanisme pengawasan hukum.\n3. Persatuan bangsa adalah modal termahal yang tidak boleh dikorbankan demi egoisme ideologi kelompok atau partai politik."
          },
          {
            heading: "49. REFLEKSI PESERTA DIDIK",
            content: "1. Nilai kepemimpinan apa dari Bung Karno yang paling menginspirasi caramu memimpin?\n2. Jika kamu hidup di era 1965, bagaimana caramu menyikapi perbedaan pandangan politik di tengah masyarakat?\n3. Komitmen nyata apa yang akan kamu sumbangkan sebagai lulusan SMK untuk memajukan perekonomian bangsa hari ini?"
          },
          {
            heading: "50. PENUTUP",
            content: "Masa pemerintahan Presiden Sukarno memberikan pelajaran sejarah berharga bagi seluruh anak bangsa: demokrasi bukanlah tujuan akhir yang instan, melainkan ikhtiar kebangsaan yang menuntut kematangan akal budi, keberanian moral, dan kebijaksanaan merajut persatuan di tengah kebhinekaan."
          }
        ],
        glossary: [
          { term: 'Zaken Kabinet', def: 'Kabinet pemerintahan yang menteri-menterinya dipilih berdasarkan keahlian profesional di bidangnya, bukan dari representasi partai politik.' },
          { term: 'Dasasila Bandung', def: 'Sepuluh prinsip pedoman perdamaian dunia dan kemerdekaan bangsa yang dihasilkan Konferensi Asia-Afrika 1955 di Bandung.' },
          { term: 'Deklarasi Djuanda', def: 'Deklarasi kedaulatan maritim 13 Desember 1957 yang menyatukan laut antar pulau menjadi wilayah teritorial mutlak NKRI.' },
          { term: 'Dekrit Presiden 5 Juli 1959', def: 'Keputusan darurat Presiden Soekarno membubarkan Konstituante dan memberlakukan kembali UUD 1945.' },
          { term: 'Nasakom', def: 'Doktrin politik era Demokrasi Terpimpin yang menggabungkan tiga pilar ideologi: Nasionalis, Agama, dan Komunis.' },
          { term: 'Trikora', def: 'Tri Komando Rakyat yang dikumandangkan Bung Karno pada 19 Desember 1961 untuk membebaskan Irian Barat dari penjajahan Belanda.' },
          { term: 'Politik Mercusuar', def: 'Kebijakan pembangunan monumen megah kelas dunia untuk membangkitkan kebanggaan bangsa di panggung internasional.' }
        ],
        reflectionQuestions: [
          'Bagaimana kita menyeimbangkan antara membangun citra kebanggaan bangsa di mata dunia (seperti proyek mercusuar) dengan prioritas pemenuhan kesejahteraan ekonomi rakyat jelata?',
          'Deklarasi Djuanda berhasil menyatukan daratan dan lautan kepulauan Nusantara. Bagaimana generasi muda SMK dapat memanfaatkan potensi kekayaan maritim ini demi kemajuan ekonomi Indonesia?'
        ]
      },
      {
        id: 'smk-xi-5',
        title: 'Masa Pemerintahan Presiden Soeharto (Orde Baru 1966–1998)',
        phase: 'Fase F',
        grade: 'Kelas XI',
        icon: '🌾',
        period: '1966 - 1998',
        cpSummary: 'Mengevaluasi transisi Tritura dan Supersemar, stabilitas politik dan Dwifungsi ABRI, pembangunan ekonomi Repelita, keberhasilan Swasembada Pangan 1984, serta kerapuhan struktural yang berujung pada krisis multidimensional 1998.',
        syllabus: {
          atp: [
            '11.5.1 Menganalisis proses peralihan kekuasaan dari Orde Lama ke Orde Baru melalui aksi Tritura mahasiswa dan keluarnya Surat Perintah 11 Maret (Supersemar) 1966.',
            '11.5.2 Mengevaluasi strategi stabilitas politik Orde Baru melalui fusi partai politik 1973, penerapan Asas Tunggal Pancasila, dan doktrin Dwifungsi ABRI.',
            '11.5.3 Menganalisis implementasi program Rencana Pembangunan Lima Tahun (Repelita), Trilogi Pembangunan, serta pencapaian gemilang Swasembada Pangan 1984 (FAO).',
            '11.5.4 Mengidentifikasi faktor-faktor struktural penyebab keruntuhan rezim Orde Baru akibat sentralisasi kekuasaan, KKN, krisis moneter Asia 1997, dan Tragedi Trisakti 1998.'
          ],
          meaningfulUnderstanding: 'Pembangunan ekonomi yang pesat dan stabilitas nasional tidak akan mampu bertahan lama jika tidak diimbangi oleh tata kelola pemerintahan yang transparan, penegakan hukum yang adil, pemberantasan korupsi, serta perlindungan terhadap hak asasi manusia dan kebebasan berekspresi.',
          essentialQuestions: [
            'Bagaimana program Revolusi Hijau (Panca Usaha Tani) berhasil mengubah Indonesia dari pengimpor beras terbesar di dunia menjadi negara swasembada beras pada tahun 1984?',
            'Mengapa krisis nilai tukar mata uang bath di Thailand pada tahun 1997 dapat dengan cepat merembet menjadi krisis multidimensional (moneter, politik, sosial) yang menumbangkan rezim Orde Baru di Indonesia?'
          ]
        },
        subtopics: [
          {
            heading: "1. PENDAHULUAN",
            content: "Setelah mengalami gejolak politik dan ekonomi pada pertengahan 1960-an, Indonesia memasuki babak baru dalam sejarahnya. Pemerintahan Soekarno secara bertahap berakhir dan kekuasaan beralih kepada Soeharto.\n\nPeriode pemerintahan Soeharto dikenal sebagai **Orde Baru**.\n\nOrde Baru hadir dengan janji untuk melakukan koreksi terhadap berbagai persoalan masa sebelumnya. Pemerintah menekankan tiga hal yang kemudian menjadi ciri utama pemerintahannya, yaitu:\n> **stabilitas politik, pembangunan ekonomi, dan pelaksanaan Pancasila serta UUD 1945 secara “murni dan konsekuen”.**\n\nSelama lebih dari tiga dekade, Indonesia mengalami perubahan besar. Pembangunan jalan, sekolah, bendungan, fasilitas kesehatan, industri, listrik, dan berbagai infrastruktur berkembang. Produksi pangan meningkat. Program pendidikan diperluas. Pertumbuhan ekonomi menjadi salah satu prioritas utama.\n\nAkan tetapi, pembangunan tersebut berlangsung dalam sistem politik yang sangat terpusat. Kekuasaan Presiden sangat kuat. Militer mempunyai peran politik melalui konsep Dwifungsi ABRI. Golkar menjadi kekuatan politik dominan. Partai politik dan pers berada dalam ruang yang sangat dikendalikan pemerintah.\n\nDi sisi lain, muncul berbagai persoalan seperti:\n* pembatasan kebebasan politik,\n* kontrol terhadap media,\n* pelanggaran HAM,\n* konflik agraria,\n* ketimpangan sosial-ekonomi,\n* korupsi, kolusi, nepotisme (KKN),\n* dan ketergantungan pada struktur ekonomi tertentu.\n\nPada 1997–1998, krisis ekonomi Asia menghantam Indonesia. Krisis tersebut kemudian berkembang menjadi krisis sosial dan politik. Gerakan Reformasi semakin kuat dan pada 21 Mei 1998 Soeharto mengundurkan diri.\n\nKarena itu, mempelajari Orde Baru berarti mempelajari dua sisi sejarah sekaligus: bagaimana sebuah pemerintahan dapat membangun stabilitas dan pembangunan selama puluhan tahun, tetapi pada saat yang sama mengembangkan sistem kekuasaan yang akhirnya menghadapi krisis legitimasi."
          },
          {
            heading: "2. PERTANYAAN BESAR PEMBELAJARAN",
            content: "Sepanjang mempelajari materi, peserta didik diarahkan menjawab:\n\n> **“Mengapa Orde Baru mampu bertahan selama lebih dari tiga dekade, dan mengapa akhirnya runtuh pada tahun 1998?”**\n\nPertanyaan tersebut dapat dianalisis melalui empat kata kunci:\n* **Kekuasaan**\n* **Stabilitas**\n* **Pembangunan**\n* **Reformasi**"
          },
          {
            heading: "3. TUJUAN PEMBELAJARAN",
            content: "Setelah mempelajari materi, peserta didik diharapkan mampu:\n* Menjelaskan kondisi Indonesia menjelang lahirnya Orde Baru.\n* Menjelaskan proses peralihan kekuasaan dari Soekarno kepada Soeharto.\n* Menjelaskan latar belakang lahirnya Orde Baru.\n* Menganalisis karakteristik pemerintahan Orde Baru.\n* Menjelaskan kebijakan politik Orde Baru.\n* Menganalisis peran ABRI dan Golkar.\n* Menjelaskan penyederhanaan partai politik.\n* Menjelaskan pelaksanaan pemilu masa Orde Baru.\n* Menjelaskan kebijakan pembangunan ekonomi.\n* Menganalisis Repelita dan Trilogi Pembangunan.\n* Menjelaskan pembangunan pertanian dan Revolusi Hijau.\n* Menganalisis industrialisasi dan investasi.\n* Menjelaskan perkembangan pendidikan dan kehidupan sosial.\n* Menjelaskan hubungan Indonesia dengan negara lain.\n* Menganalisis peran Indonesia dalam ASEAN.\n* Menjelaskan persoalan Timor Timur.\n* Menganalisis kritik terhadap Orde Baru.\n* Menjelaskan KKN dan berbagai persoalan demokrasi.\n* Menganalisis krisis moneter 1997–1998.\n* Menjelaskan perkembangan gerakan Reformasi.\n* Menjelaskan faktor yang menyebabkan berakhirnya pemerintahan Soeharto.\n* Mengevaluasi warisan Orde Baru bagi Indonesia masa kini."
          },
          {
            heading: "4. KONDISI INDONESIA MENJELANG LAHIRNYA ORDE BARU",
            content: "### 1. Situasi Politik\nMenjelang lahirnya Orde Baru, Indonesia mengalami konflik politik yang sangat tajam pasca-peristiwa G30S 1965. PKI dibubarkan dan kehilangan posisi politiknya. Militer, khususnya Angkatan Darat, semakin kuat, sementara posisi Presiden Soekarno semakin melemah. Muncul tuntutan dari masyarakat, mahasiswa, dan berbagai kelompok politik agar pemerintah memulihkan keamanan dan ketertiban.\n\n---\n\n### 2. Kondisi Ekonomi\nKrisis politik berjalan bersamaan dengan krisis ekonomi: lonjakan harga pangan, hiperinflasi mencapai 600%, kelangkaan barang pokok, menurunnya daya beli, dan kesulitan hidup rakyat sehari-hari.\n\n---\n\n### 3. Tritura\nDalam situasi tersebut, mahasiswa yang tergabung dalam KAMI/KAPPI mengumandangkan **Tritura (Tri Tuntutan Rakyat)** pada 10 Januari 1966:\n1. Pembubaran PKI beserta ormas-ormasnya.\n2. Pembersihan Kabinet Dwikora dari unsur-unsur G30S.\n3. Penurunan harga dan perbaikan ekonomi."
          },
          {
            heading: "5. SUPERSEMAR DAN PERALIHAN KEKUASAAN",
            content: "### 1. Latar Belakang\nPada awal 1966, situasi politik dan keamanan semakin genting. Presiden Soekarno kemudian menerbitkan **Surat Perintah Sebelas Maret (Supersemar)** pada 11 Maret 1966 di Istana Bogor kepada Menteri/Panglima Angkatan Darat Letjen Soeharto.\n\n---\n\n### 2. Isi dan Pelaksanaan Supersemar\nSurat tersebut memberi kewenangan kepada Soeharto untuk mengambil segala langkah yang dianggap perlu guna memulihkan keamanan, ketenangan, dan kestabilan jalannya pemerintahan. Letjen Soeharto segera membubarkan PKI pada 12 Maret 1966 dan mengamankan 15 menteri kabinet yang terindikasi terlibat G30S.\n\n---\n\n### 3. Makna & Kontroversi Supersemar\nSupersemar menjadi salah satu dokumen penting penentu transisi kekuasaan dalam sejarah modern Indonesia yang mengantarkan Soeharto ke puncak pimpinan nasional."
          },
          {
            heading: "6. LAHIRNYA ORDE BARU",
            content: "### 1. Apa Itu Orde Baru?\nOrde Baru adalah tatanan kehidupan berbangsa dan bernegara di bawah kepemimpinan Presiden Soeharto yang bertujuan mengoreksi penyimpangan masa Orde Lama dan melaksanakan Pancasila serta UUD 1945 secara murni dan konsekuen.\n\n---\n\n### 2. Rangkaian Transisi Kepemimpinan\n* **11 Maret 1966:** Penyerahan mandat Supersemar.\n* **1966:** Sidang Umum MPRS mengukuhkan Supersemar.\n* **1967:** MPRS menolak pidato pertanggungjawaban Nawaksara dan mencabut mandat kepresidenan Soekarno; Soeharto diangkat sebagai Pejabat Presiden.\n* **27 Maret 1968:** Soeharto resmi dilantik oleh MPRS sebagai Presiden Republik Indonesia kedua."
          },
          {
            heading: "7. KARAKTERISTIK ORDE BARU",
            content: "Pemerintahan Orde Baru bertumpu pada karakteristik:\n* **Stabilitas:** Menempatkan stabilitas keamanan sebagai syarat mutlak pembangunan.\n* **Sentralisasi:** Kekuasaan politik, administrasi, dan fiskal berpusat di Jakarta.\n* **Dominasi Eksekutif:** Lembaga kepresidenan menjadi pusat pengendali kekuasaan negara.\n* **Peran Ganda Militer:** ABRI memegang peran pertahanan sekaligus sosial-politik (Dwifungsi ABRI).\n* **Dominasi Golkar:** Golongan Karya menjadi mesin politik tunggal pendukung pemerintah.\n* **Kontrol Politik:** Restriksi terhadap kebebasan berserikat, oposisi, dan media.\n* **Orientasi Pembangunan:** Pertumbuhan ekonomi teknokratis menjadi sumber utama legitimasi kekuasaan."
          },
          {
            heading: "8. STABILITAS POLITIK",
            content: "Pemerintah Orde Baru menerapkan pendekatan keamanan (*security approach*) untuk mencegah instabilitas politik seperti era Demokrasi Liberal. Dilakukan pengendalian partai politik, pembatasan gerakan oposisi, dan pembinaan ideologi masyarakat.\n\nNamun, hal ini memicu perdebatan: *Apakah stabilitas yang dicapai melalui pembatasan kebebasan sipil merupakan stabilitas yang sehat dan berkelanjutan?*"
          },
          {
            heading: "9. DWIFUNGSI ABRI",
            content: "### 1. Konsep & Pengertian\nABRI memiliki dua fungsi sekaligus:\n1. **Fungsi Pertahanan & Keamanan:** Menjaga kedaulatan negara dari ancaman luar dan dalam.\n2. **Fungsi Sosial-Politik:** Ikut menentukan arah kebijakan negara dan pembangunan nasional.\n\n---\n\n### 2. Implementasi di Lapangan\nPerwira militer aktif ditempatkan di berbagai posisi sipil strategis: menteri, gubernur, bupati, duta besar, direksi BUMN, serta menduduki kursi fraksi ABRI di DPR/MPR tanpa melalui pemilu.\n\n---\n\n### 3. Kritik terhadap Dwifungsi\nMembatasi supremasi sipil, memicu militerisasi birokrasi pemerintahan, dan mempersempit ruang partisipasi masyarakat."
          },
          {
            heading: "10. GOLKAR DAN POLITIK ORDE BARU",
            content: "### 1. Peran Sentral Golkar\nGolongan Karya (Golkar) ditopang oleh tiga pilar utama (*Jalur ABG*):\n* **Jalur A (ABRI):** Perlindungan stabilitas dan keamanan.\n* **Jalur B (Birokrasi/KORPRI):** Seluruh aparatur sipil negara diwajibkan memberikan loyalitas tunggal (*monoloyalitas*).\n* **Jalur G (Golkar):** Mesin organisasi kader di tengah masyarakat.\n\nDukungan struktural negara ini menjadikan Golkar selalu memenangkan setiap pemilu selama lebih dari 30 tahun."
          },
          {
            heading: "11. PENYEDERHANAAN PARTAI POLITIK",
            content: "Pada tahun 1973, pemerintah melakukan kebijakan fusi partai politik menjadi tiga kekuatan:\n* **PPP (Partai Persatuan Pembangunan):** Fusi dari 4 partai Islam (NU, Parmusi, PSII, Perti).\n* **PDI (Partai Demokrasi Indonesia):** Fusi dari 5 partai nasionalis dan non-Islam (PNI, Murba, IPKI, Partai Katolik, Parkindo).\n* **Golkar:** Golongan Karya.\n\nPemerintah juga menerapkan kebijakan massa mengambang (*floating mass*), di mana partai politik dilarang memiliki kepengurusan di tingkat desa/kelurahan agar masyarakat desa berkonsentrasi pada pembangunan ekonomi."
          },
          {
            heading: "12. PEMILU MASA ORDE BARU",
            content: "Pemilu diselenggarakan secara periodik setiap lima tahun (1971, 1977, 1982, 1987, 1992, dan 1997) dengan asas Luber (Langsung, Umum, Bebas, dan Rahasia). \n\nMeskipun berlangsung teratur dan aman, pemilu lebih berfungsi sebagai ritual pengesahan kekuasaan karena Golkar selalu mendominasi perolehan suara secara mutlak."
          },
          {
            heading: "13. PENGASASAN PANCASILA",
            content: "Pemerintah Orde Baru memosisikan Pancasila sebagai ideologi mutlak negara:\n* Menyelenggarakan penataran **P4 (Pedoman Penghayatan dan Pengamalan Pancasila)** secara massal bagi pelajar, mahasiswa, pegawai negeri, dan masyarakat.\n* Memberlakukan kebijakan **Asas Tunggal Pancasila (1985)** yang mewajibkan seluruh partai politik dan ormas kemasyarakatan menjadikan Pancasila sebagai satu-satunya asas organisasi."
          },
          {
            heading: "14. PEMBATASAN KEBEBASAN PERS",
            content: "Media massa berada dalam pengawasan ketat melalui izin Surat Izin Usaha Penerbitan Pers (SIUPP). \n\nPemerintah memberlakukan pembredelan terhadap surat kabar dan majalah yang memuat laporan kritis terhadap keluarga penguasa atau pejabat militer (seperti pembredelan majalah *Tempo*, *Editor*, dan tabloid *Detik* pada 1994)."
          },
          {
            heading: "15. PERISTIWA MALARI 1974",
            content: "Pada **15 Januari 1974**, ribuan mahasiswa berdemonstrasi di Jakarta memprotes dominasi modal asing bertepatan dengan kunjungan Perdana Menteri Jepang Kakuei Tanaka.\n\nAksi damai berubah menjadi kerusuhan massal pembakaran mobil dan toko produk Jepang (**Peristiwa Malari**). Pasca-Malari, pemerintah memperketat kontrol terhadap kegiatan politik kampus melalui kebijakan Normalisasi Kehidupan Kampus/Badan Koordinasi Kemahasiswaan (NKK/BKK)."
          },
          {
            heading: "16. KRITIK TERHADAP ORDE BARU",
            content: "Kritik terhadap rezim Orde Baru terus bergulir dari kalangan intelektual, mahasiswa, aktivis LSM, tokoh agama, dan pejuang HAM:\n* Kritik atas praktik korupsi, kolusi, dan nepotisme (KKN).\n* Ketimpangan sosial-ekonomi antara konglomerat dan rakyat kecil.\n* Pembungkaman hak berserikat dan kebebasan berekspresi.\n* Tindakan represif aparat dalam menangani konflik tanah dan perburuhan."
          },
          {
            heading: "17. PETISI 50",
            content: "Pada 5 Mei 1980, sebanyak 50 tokoh nasional terkemuka (mantan Perdana Menteri Mohammad Natsir, Kasman Singodimedjo, mantan Kapolri Hoegeng Imam Santoso, dan purnawirawan jenderal AD H.R. Dharsono) menandatangani pernyataan keprihatinan **Petisi 50**.\n\nMereka mengkritik pidato Presiden Soeharto yang mempersonifikasikan dirinya sebagai Pancasila dan menggunakan Pancasila untuk memojokkan lawan-lawan politik. Para penandatangan Petisi 50 dikenai sanksi pencekalan ke luar negeri dan pembatasan usaha bisnis."
          },
          {
            heading: "18. PEMBANGUNAN EKONOMI ORDE BARU",
            content: "Di bidang ekonomi, pemerintah Orde Baru menerapkan strategi teknokratis di bawah bimbingan para ekonom Universitas Indonesia lulusan University of California, Berkeley (*Teknokrat Berkeley*).\n\nFokus awal difokuskan pada penjinakan hiperinflasi (turun dari 650% pada 1966 menjadi di bawah 10% pada 1970), penjadwalan ulang utang luar negeri melalui IGGI, dan pembukaan keran investasi."
          },
          {
            heading: "19. TRILOGI PEMBANGUNAN",
            content: "Pondasi pembangunan nasional diarahkan oleh **Trilogi Pembangunan**:\n1. **Stabilitas Nasional yang Dinamis dan Sehat.**\n2. **Pertumbuhan Ekonomi yang Cukup Tinggi.**\n3. **Pemerataan Pembangunan dan Hasil-hasilnya Menuju Keadilan Sosial.**\n\nDalam pelaksanaannya, target pertumbuhan dan stabilitas sering kali lebih diprioritaskan dibanding aspek pemerataan."
          },
          {
            heading: "20. REPELITA",
            content: "Pembangunan dilaksanakan secara berencana melalui **Rencana Pembangunan Lima Tahun (Repelita)**:\n* **Repelita I (1969–1974):** Penekanan pada sektor pertanian dan sandang-pangan.\n* **Repelita II (1974–1979):** Memperluas industri pengolah bahan mentah dan infrastruktur.\n* **Repelita III (1979–1984):** Penekanan pada asas pemerataan (Delapan Jalur Pemerataan).\n* **Repelita IV (1984–1989):** Mencapai swasembada pangan dan peningkatan ekspor non-migas.\n* **Repelita V (1989–1994):** Memperkuat sektor industri manufaktur dan peningkatan SDM.\n* **Repelita VI (1994–1998):** Menghadapi globalisasi ekonomi, namun terhenti akibat krisis moneter 1997."
          },
          {
            heading: "21. REVOLUSI HIJAU",
            content: "Modernisasi sektor pertanian dilakukan secara besar-besaran melalui program **Revolusi Hijau** dengan mengimplementasikan **Panca Usaha Tani**:\n1. Pemilihan bibit padi unggul tahan wereng (PB-5, PB-8, IR-64).\n2. Pemupukan kimiawi teratur (Urea, TSP, ZA).\n3. Irigasi teknis melalui pembangunan waduk dan saluran bendungan.\n4. Pemberantasan hama dan penyakit tanaman.\n5. Penyuluhan dan bimbingan massal (Bimas/Inmas) bagi kelompok tani."
          },
          {
            heading: "22. SWASEMBADA BERAS",
            content: "Pada tahun 1984, produksi beras nasional melonjak mencapai 27 juta ton, mengubah Indonesia dari negara pengimpor beras terbesar di dunia menjadi negara yang berswasembada pangan mandiri.\n\nPencapaian bersejarah ini mendapat apresiasi dunia ketika Presiden Soeharto diundang berpidato pada peringatan HUT ke-40 Organisasi Pangan dan Pertanian PBB (FAO) di Roma pada **14 November 1985** dan dianugerahi Medali Emas FAO."
          },
          {
            heading: "23. INDUSTRIALISASI",
            content: "Indonesia beralih dari ekonomi agraris tradisional menuju industrialisasi manufaktur:\n* Berkembangnya industri pengolahan tekstil, kayu lapis, semen, pupuk, dan baja (PT Krakatau Steel).\n* Pembangunan industri strategis berteknologi tinggi di bawah pimpinan Menristek B.J. Habibie (PT IPTN pembuat pesawat N-250 Gatotkaca, PT PAL Surabaya, dan PT Pindad)."
          },
          {
            heading: "24. INVESTASI ASING",
            content: "Melalui penerbitan UU No. 1 Tahun 1967 tentang Penanaman Modal Asing (PMA), modal multinasional masuk ke sektor minyak bumi (Caltex), gas alam (Arun dan Bontang), pertambangan tembaga dan emas (Freeport di Papua), serta industri perakitan otomotif dan elektronik."
          },
          {
            heading: "25. PEMBANGUNAN INFRASTRUKTUR",
            content: "Pembangunan fisik berlangsung masif: jalan raya, Jalan Tol Jagorawi (tol pertama di Indonesia, 1978), bandara modern Soekarno-Hatta, bendungan serbaguna (Jatiluhur, Gajah Mungkur, Karangkates), elektrifikasi pedesaan (Listrik Masuk Desa), serta peluncuran Satelit Komunikasi Domestik **Palapa A1** pada 1976."
          },
          {
            heading: "26. PENDIDIKAN",
            content: "* **SD Inpres:** Pembangunan lebih dari 100.000 gedung sekolah dasar di pelosok nusantara melalui Instruksi Presiden (Inpres), yang membawa Prof. Esther Duflo meraih Nobel Ekonomi atas riset dampak program ini.\n* **Wajib Belajar:** Pemberlakuan program Wajib Belajar 6 Tahun (1984) dan 9 Tahun (1994) yang sukses menekan angka buta huruf nasional dari 40% menjadi di bawah 10%."
          },
          {
            heading: "27. PROGRAM KELUARGA BERENCANA",
            content: "Program Keluarga Berencana (KB) dengan slogan *\"Dua Anak Cukup, Laki-Laki Perempuan Sama Saja\"* dikelola oleh BKKBN secara terpadu melalui Posyandu di setiap RW/desa.\n\nProgram ini sukses menekan laju pertambahan penduduk dari 2,3% per tahun menjadi 1,5%, dan Presiden Soeharto dianugerahi penghargaan *UN Population Award* oleh PBB pada tahun 1989."
          },
          {
            heading: "28. URBANISASI DAN PERUBAHAN SOSIAL",
            content: "Industrialisasi di kota-kota besar (Jabotabek, Surabaya, Bandung, Medan) memicu gelombang urbanisasi jutaan penduduk pedesaan menuju kota. Kota-kota metropolitan tumbuh pesat dengan permukiman industri, namun di sisi lain menimbulkan masalah kemacetan dan kawasan permukiman kumuh (*slums*)."
          },
          {
            heading: "29. KELAS MENENGAH DAN PERUBAHAN POLA HIDUP",
            content: "Tumbuhnya perekonomian melahirkan kelas menengah baru (*new middle class*) di perkotaan: profesional kantor, pengusaha swasta, dosen, dan birokrat. Gaya hidup modern berkembang ditandai oleh menjamurnya pusat perbelanjaan (mall), kepemilikan mobil pribadi, perumahan real estate, dan siaran televisi swasta."
          },
          {
            heading: "30. PERAN PEREMPUAN",
            content: "Pemerintah memformalkan peran perempuan melalui organisasi Dharma Wanita (istri pegawai negeri) dan PKK (Pemberdayaan Kesejahteraan Keluarga) dengan doktrin *\"Panca Dharma Wanita\"*. Perempuan diposisikan sebagai pendamping suami dan pengelola rumah tangga, di samping kesempatan bekerja di sektor publik."
          },
          {
            heading: "31. POLITIK LUAR NEGERI ORDE BARU",
            content: "Orde Baru menghentikan konfrontasi *\"Ganyang Malaysia\"*, memulihkan hubungan diplomatik dengan Kuala Lumpur dan Singapura, serta kembali masuk menjadi anggota resmi Perserikatan Bangsa-Bangsa (PBB) pada 28 September 1966.\n\nPendekatan diplomasi bergeser dari retorika anti-imperialis agresif menjadi kerja sama ekonomi pragmatis dengan negara-negara donor Barat dan Asia."
          },
          {
            heading: "32. ASEAN",
            content: "Indonesia bersama Malaysia, Filipina, Singapura, dan Thailand mendandatangani Deklarasi Bangkok pada **8 Agustus 1967** yang meresmikan berdirinya **ASEAN (Association of Southeast Asian Nations)**.\n\nMenteri Luar Negeri Adam Malik memainkan peran kunci menjadikan Indonesia sebagai poros stabilitas dan perdamaian di kawasan Asia Tenggara."
          },
          {
            heading: "33. HUBUNGAN INDONESIA DENGAN DUNIA INTERNASIONAL",
            content: "Indonesia menjadi tuan rumah berbagai forum dunia penting:\n* Memimpin **Gerakan Non-Blok (GNB)** periode 1992–1995 dan menggelar KTT GNB X di Jakarta (1992).\n* Menjadi tuan rumah KTT APEC di Bogor (1994) yang menghasilkan *Bogor Goals* (perdagangan bebas Asia-Pasifik)."
          },
          {
            heading: "34. TIMOR TIMUR",
            content: "### 1. Integrasi 1975–1976\nSetelah revolusi bunga di Portugal, terjadi perang saudara di Timor Timur antara kelompok pro-kemerdekaan (Fretilin), pro-integrasi (Apodeti/UDT), dan pro-Portugal. Pasukan Indonesia melancarkan Operasi Seroja (Desember 1975) dan secara sepihak menetapkan Timor Timur sebagai provinsi ke-27 Indonesia pada Juli 1976.\n\n---\n\n### 2. Isu Internasional\nPBB tidak mengakui integrasi sepihak tersebut. Terjadi perlawanan gerilya bersenjata Falintil di bawah pimpinan Xanana Gusmao serta kampanye diplomatik internasional José Ramos-Horta dan Uskup Belo (peraih Nobel Perdamaian 1996), hingga berpuncak pada referendum 1999 pasca-Orde Baru."
          },
          {
            heading: "35. PERSOALAN HAM",
            content: "Sejumlah peristiwa kekerasan aparat negara menjadi sorotan sejarah:\n* Tragedi Tanjung Priok (1984).\n* Operasi Penembakan Misterius / Petrus (1982–1985) terhadap ribuan residivis/preman tanpa proses peradilan.\n* Penerapan Daerah Operasi Militer (DOM) di Aceh dan Irian Jaya/Papua.\n* Tragedi Santa Cruz di Dili, Timor Timur (1991).\n* Kasus hilangnya aktivis buruh Marsinah (1993) dan wartawan Udin (1996)."
          },
          {
            heading: "36. KORUPSI, KOLUSI, DAN NEPOTISME (KKN)",
            content: "Rezim Orde Baru dikritisi atas maraknya praktik KKN:\n* **Korupsi:** Pengalihan dana yayasan sosial dan pajak non-anggaran ke rekening tertentu.\n* **Kolusi:** Kongkalikong pemberian tender proyek negara kepada kelompok konglomerat tertentu tanpa persaingan terbuka.\n* **Nepotisme:** Pemberian hak monopoli impor cengkeh (BPPC), proyek Mobil Nasional Timor, serta konsesi jalan tol kepada putra-putri presiden dan kerabat dekat."
          },
          {
            heading: "37. SENTRALISASI KEKUASAAN",
            content: "Seluruh keputusan pembangunan, keuangan daerah, pengangkatan pejabat bupati/gubernur, hingga kurikulum pendidikan dikendalikan langsung oleh pemerintah pusat di Jakarta. Daerah-daerah penghasil kekayaan alam melimpah (Aceh, Riau, Kalimantan Timur, Papua) merasa dieksploitasi karena hasil royalti ditarik ke pusat."
          },
          {
            heading: "38. MASALAH PEMBANGUNAN DAN KETIMPANGAN",
            content: "Pertumbuhan ekonomi tinggi melahirkan jurang kesenjangan (*gap*) ekonomi:\n* Segelintir konglomerat menguasai sebagian besar aset perbankan dan perputaran uang nasional.\n* Kesenjangan pendapatan antara kaum elit perkotaan dan petani miskin pedesaan.\n* Kesenjangan pembangunan antara Pulau Jawa dan Luar Jawa."
          },
          {
            heading: "39. LINGKUNGAN DAN PEMBANGUNAN",
            content: "Penebangan hutan tropis secara masif melalui Hak Pengusahaan Hutan (HPH), alih fungsi lahan gambut (Proyek Lahan Gambut Sejuta Hektar di Kalimantan Tengah), pencemaran limbah industri, dan erosi tanah menjadi ongkos ekologis berat dari laju industrialisasi."
          },
          {
            heading: "40. KRISIS EKONOMI 1997",
            content: "Pada Juli 1997, krisis nilai tukar mata uang baht di Thailand merembet cepat menjadi krisis moneter kawasan Asia Tenggara.\n\nNilai tukar rupiah terhadap dolar AS mengalami depresi dahsyat: dari semula **Rp 2.500 per USD** pada pertengahan 1997 anjlok terpuruk hingga menembus **Rp 16.000 per USD** pada awal 1998. Korporasi dan perbankan swasta yang menumpuk utang valas jangka pendek tanpa lindung nilai mengalami kebangkrutan massal."
          },
          {
            heading: "41. DAMPAK KRISIS 1997–1998",
            content: "* **Inflasi Mencapai 77%:** Harga sembako melonjak gila-gilaan.\n* **Kebangkrutan Bank:** Likuidasi belasan bank swasta dan pembentukan BPPN.\n* **Gelombang PHK Massal:** Jutaan buruh pabrik kehilangan mata pencaharian.\n* **Kemiskinan Melejit:** Angka kemiskinan melonjak kembali ke angka di atas 24%."
          },
          {
            heading: "42. KRISIS KEPERCAYAAN",
            content: "Penandatanganan nota kesepakatan pinjaman dana talangan dengan IMF (*Letter of Intent*) yang diteken Presiden Soeharto di depan Direktur Pelaksana IMF Michel Camdessus pada Januari 1998 tidak mampu meredam kepanikan pasar.\n\nMasyarakat kehilangan kepercayaan total terhadap kemampuan pemerintah dalam mengendalikan krisis. Krisis moneter bertransformasi menjadi krisis politik dan krisis legitimasi kepemimpinan."
          },
          {
            heading: "43. GERAKAN REFORMASI 1998",
            content: "Mahasiswa di seluruh pelosok Indonesia turun ke jalan menggelar unjuk rasa besar-besaran mengusung **Enam Agenda Reformasi**:\n1. Adili Soeharto dan kroni-kroninya.\n2. Amandemen UUD 1945.\n3. Hapus Dwifungsi ABRI.\n4. Tegakkan supremasi hukum dan HAM.\n5. Laksanakan otonomi daerah seluas-luasnya.\n6. Ciptakan pemerintahan yang bersih dari KKN."
          },
          {
            heading: "44. TRAGEDI TRISAKTI",
            content: "Pada **12 Mei 1998**, aksi damai ribuan mahasiswa di depan kampus Universitas Trisakti Grogol Jakarta dihadang aparat keamanan.\n\nTembakan peluru tajam menewaskan empat mahasiswa Trisakti: **Elang Mulia Lesmana, Hafidin Royan, Heri Hertanto, dan Hendriawan Sie**. Keempatnya gugur sebagai **Pahlawan Reformasi**, menyulut ledakan amarah rakyat di seantero negeri."
          },
          {
            heading: "45. KERUSUHAN MEI 1998",
            content: "Pada **13–15 Mei 1998**, kerusuhan massal, pembakaran gedung, penjarahan toko, dan aksi kekerasan pecah di Jakarta, Solo, Surabaya, dan Medan. Situasi ibukota lumpuh total dan jatuh ke dalam kondisi darurat keamanan nasional."
          },
          {
            heading: "46. SOEHARTO MENGUNDURKAN DIRI",
            content: "* **18 Mei 1998:** Puluhan ribu mahasiswa menduduki atap Gedung DPR/MPR RI di Senayan. Ketua DPR/MPR Harmoko meminta Presiden Soeharto mengundurkan diri secara arif dan bijaksana.\n* **20 Mei 1998:** Empat belas menteri bidang ekonomi di bawah pimpinan Ginandjar Kartasasmita menolak masuk ke dalam Kabinet Reformasi usulan Soeharto.\n* **Kamis, 21 Mei 1998 Pukul 09.00 WIB:** Di Credential Room Istana Merdeka Jakarta, Presiden Soeharto membacakan naskah pengunduran dirinya setelah 32 tahun berkuasa. Berdasarkan Pasal 8 UUD 1945, Wakil Presiden **Prof. Dr. Ing. B.J. Habibie** langsung diambil sumpah jabatannya sebagai Presiden RI ke-3 di hadapan Ketua Mahkamah Agung.\n\nPeristiwa ini menandai berakhirnya era Orde Baru dan dimulainya **Era Reformasi**."
          },
          {
            heading: "47. MENGAPA ORDE BARU DAPAT BERTAHAN LAMA?",
            content: "Rezim Orde Baru mampu bertahan selama 32 tahun berkat kombinasi:\n1. **Pondasi Keberhasilan Pembangunan Ekonomi Nyata:** Swasembada beras, penurunan inflasi, dan sekolah gratis SD Inpres.\n2. **Kekuatan Doktrin Dwifungsi ABRI:** Kontrol keamanan teritorial hingga tingkat desa melalui Babinsa.\n3. **Mesin Politik Golkar & Birokrasi Monoloyalitas:** Menjamin kemenangan mutlak di setiap pemilu.\n4. **Sentralisasi Finansial & Hukum:** Otoritas mutlak presiden dalam mengontrol sumber daya ekonomi negara.\n5. **Kelemahan Oposisi Sipil:** Sistem politik massa mengambang dan pembatasan media massa."
          },
          {
            heading: "48. MENGAPA ORDE BARU RUNTUH?",
            content: "Kausalitas keruntuhan Orde Baru:\n\n> **Krisis Moneter Asia 1997 ➔ Depresiasi Kurs Rupiah ➔ Kebangkrutan Korporasi Berutang Valas ➔ Hiperinflasi & PHK Massal ➔ Krisis Kepercayaan terhadap KKN ➔ Gerakan Aksi Mahasiswa Nasional ➔ Tragedi Trisakti ➔ Kerusuhan Mei 1998 ➔ Boikot 14 Menteri ➔ Pengunduran Diri Soeharto 21 Mei 1998.**"
          },
          {
            heading: "49. KEBERHASILAN ORDE BARU",
            content: "* **Ekonomi:** Pertumbuhan ekonomi rata-rata 7% per tahun selama dua dekade, penurunan angka kemiskinan absolut.\n* **Pangan:** Swasembada beras nasional (1984) dan penghargaan FAO.\n* **Infrastruktur:** Jaringan jalan tol, elektrifikasi desa, bendungan irigasi teknis, dan satelit Palapa.\n* **Pendidikan:** SD Inpres dan program Wajib Belajar 6 dan 9 tahun.\n* **Kesehatan & Kependudukan:** Keberhasilan KB dan Posyandu menurunkan angka kematian bayi.\n* **Stabilitas Kawasan:** Memelopori pendirian ASEAN dan menjaga stabilitas Asia Tenggara."
          },
          {
            heading: "50. MASALAH ORDE BARU",
            content: "* **Politik:** Otoritarianisme, dominasi mutlak presiden, ketiadaan suksesi kepemimpinan demokratis.\n* **Hukum:** Intervensi eksekutif terhadap lembaga peradilan, maraknya praktik korupsi, kolusi, dan nepotisme (KKN).\n* **Demokrasi:** Pembredelan media pers, represi terhadap aktivis kritis, serta pemilu tanpa kompetisi adil.\n* **HAM:** Pelanggaran HAM berat di berbagai daerah konflik tanpa penyelesaian hukum transparan.\n* **Ekonomi:** Rapuhnya fondasi moneter akibat ketergantungan utang luar negeri swasta jangka pendek."
          },
          {
            heading: "51. PERBANDINGAN PEMBANGUNAN DAN DEMOKRASI",
            content: "| Aspek Dimensi | Pencapaian Orde Baru | Persoalan Kritis yang Ditimbulkan |\n| --- | --- | --- |\n| **Ekonomi** | Pertumbuhan ekonomi rata-rata 7% per tahun | Kerapuhan moneter utang valas & kesenjangan KKN |\n| **Pertanian** | Swasembada beras 1984 (FAO) | Ketergantungan pupuk kimiawi & alih fungsi lahan |\n| **Infrastruktur** | Pembangunan jalan, bendungan, dan tol Jagorawi | Konflik sengketa penggusuran lahan warga sipil |\n| **Pendidikan** | SD Inpres & Wajib Belajar menekan buta huruf | Doktrinisasi politik ideologis melalui kurikulum P4 |\n| **Politik** | Stabilitas pemerintahan selama 32 tahun | Otoritarianisme & pembatasan kebebasan oposisi |\n| **Keamanan** | Ketertiban sosial bebas dari konflik partai | Penerapan represi militer & pelanggaran HAM |\n| **Media Pers** | Pertumbuhan stasiun TV dan industri surat kabar | Pembredelan SIUPP terhadap media yang kritis |\n| **Internasional** | Kepemimpinan aktif di ASEAN, GNB, dan APEC | Sorotan dunia internasional atas isu Timor Timur |\n| **Pemerintahan** | Birokrasi efisien dan terkoordinasi | Sentralisasi mutlak Jakarta & ketidakpuasan daerah |\n| **Elektoral** | Pemilu rutin periodik 5 tahunan | Kompetisi tidak seimbang akibat dominasi Golkar |"
          },
          {
            heading: "52. BERPIKIR HISTORIS",
            content: "### 1. Kronologi Runtun\n1965 (G30S) ➔ 1966 (Supersemar) ➔ 1968 (Pelantikan Presiden Soeharto) ➔ 1971 (Pemilu I Orba) ➔ 1973 (Fusi Partai) ➔ 1974 (Malari) ➔ 1976 (Integrasi Timor Timur) ➔ 1984 (Swasembada Beras) ➔ 1997 (Krisis Moneter) ➔ 12 Mei 1998 (Tragedi Trisakti) ➔ 21 Mei 1998 (Soeharto Mundur).\n\n---\n\n### 2. Kausalitas Multidimensi\nStabilitas semu yang dibangun di atas pembungkaman suara kritis dan monopoli ekonomi kroni tidak mampu bertahan saat fondasi makroekonomi diguncang krisis moneter eksternal.\n\n---\n\n### 3. Perubahan dan Keberlanjutan\n* **Yang Berubah:** Runtuhnya sistem sentralistik, pembubaran Dwifungsi ABRI, kebebasan pers, dan pemilu demokratis multipartai.\n* **Yang Berkelanjutan:** Pembangunan infrastruktur konektivitas, program jaminan kesehatan/KB, serta tantangan pemberantasan KKN yang bertransformasi ke tingkat daerah."
          },
          {
            heading: "53. KONTEKSTUALISASI DENGAN KEHIDUPAN SEKARANG",
            content: "1. **Pengawasan Kekuasaan (*Checks and Balances*):** Tidak boleh ada kekuasaan eksekutif yang dibiarkan tanpa pengawasan lembaga legislatif dan yudikatif independen.\n2. **Kemandirian Pers dan Literasi Publik:** Menjaga kebebasan pers sekaligus membentengi diri dengan etika menyaring hoaks di era medsos.\n3. **Pembangunan yang Berkeadilan:** Memastikan bahwa pertumbuhan industri dan ekonomi dinikmati secara merata oleh buruh, petani, dan rakyat kecil."
          },
          {
            heading: "54. KONTEKSTUALISASI BAGI SISWA SMK",
            content: "Di lingkungan industri dan dunia kerja masa kini:\n* **Integritas Anti-KKN:** Dunia kerja profesional menuntut transparansi dalam pengadaan barang, pembukuan keuangan akuntansi, dan rekrutmen tenaga kerja.\n* **Kewaspadaan Manajemen Risiko Moneter:** Keahlian vokasi akuntansi dan bisnis dalam memitigasi fluktuasi kurs mata uang asing dan manajemen utang.\n* **Etos Kerja & Kepemimpinan Demokratis:** Membangun budaya kerja industri yang disiplin namun terbuka terhadap inovasi dan perbaikan mutu dari pekerja lini bawah."
          },
          {
            heading: "55. PERTANYAAN PEMANTIK",
            content: "1. Mengapa stabilitas politik dijadikan syarat mutlak bagi pelaksanaan pembangunan ekonomi oleh Orde Baru?\n2. Bagaimana konsep Dwifungsi ABRI memengaruhi jalannya pemerintahan sipil selama tiga dekade?\n3. Mengapa Indonesia yang sempat meraih penghargaan swasembada beras pada 1984 kemudian rentan terhadap krisis pangan?\n4. Mengapa krisis moneter di Thailand pada pertengahan 1997 dapat memicu kejatuhan rezim Soeharto di Indonesia?\n5. Pelajaran berharga apa yang dapat dipetik generasi muda dari peristiwa Reformasi 21 Mei 1998?"
          },
          {
            heading: "56. PERTANYAAN HOTS",
            content: "1. Analisislah mengapa model pembangunan yang menitikberatkan pada pertumbuhan (*growth*) tanpa pemerataan yang kokoh berisiko tinggi memicu keruntuhan ekonomi di saat krisis!\n2. Evaluasilah efektivitas doktrin Dwifungsi ABRI dalam menjaga stabilitas keamanan nasional versus dampaknya terhadap perkembangan demokrasi sipil!\n3. Bandingkan peran mahasiswa pada aksi Tritura 1966 dengan gerakan mahasiswa pada Reformasi Mei 1998 dalam memicu suksesi kepemimpinan nasional!\n4. Telaah bagaimana praktik monopoli dan KKN di era Orde Baru memperlemah daya tahan sektor perbankan dan industri nasional saat diterpa depresiasi kurs rupiah!\n5. Susunlah argumentasi kritis mengenai bagaimana Indonesia dapat menyeimbangkan antara stabilitas politik nasional dengan perlindungan hak asasi manusia dan kebebasan berekspresi!"
          },
          {
            heading: "57. AKTIVITAS PEMBELAJARAN",
            content: "* **Aktivitas 1: Debat Panel Kebijakan Ekonomi:** Menimbang keberhasilan pembangunan infrastruktur versus ongkos utang luar negeri.\n* **Aktivitas 2: Analisis Grafik Kurs Rupiah 1997–1998:** Siswa vokasi akuntansi menganalisis kurva depresiasi mata uang terhadap inflasi kebutuhan pokok.\n* **Aktivitas 3: Wawancara Sejarah Lisan:** Siswa mewawancarai orang tua atau tokoh masyarakat mengenai pengalaman hidup dan antrean sembako pada Mei 1998."
          },
          {
            heading: "58. PROYEK AKHIR",
            content: "Siswa menyusun karya dokumentasi bertema:\n> **“Refleksi Tiga Dekade Orde Baru: Merawat Demokrasi, Menolak KKN, dan Membangun Perekonomian yang Berdaya Saing.”**"
          },
          {
            heading: "59. RANGKUMAN BESAR",
            content: "Pemerintahan Orde Baru di bawah Presiden Soeharto (1966–1998) mencatatkan babak transformasi pembangunan ekonomi terencana melalui Trilogi Pembangunan, Repelita, Revolusi Hijau (swasembada beras 1984), penuntasan buta huruf (SD Inpres), serta peranan kunci dalam pendirian ASEAN.\n\nNamun, ketergantungan pada pendekatan keamanan (*security approach*), monopoli KKN kroni, sentralisasi kekuasaan, restriksi pers, dan doktrin Dwifungsi ABRI menciptakan kerapuhan struktural.\n\nKetika badai krisis moneter Asia menerjang pada Juli 1997, nilai tukar rupiah terpuruk bebas, memicu gelombang PHK, inflasi tinggi, dan krisis kepercayaan rakyat yang meledak menjadi gerakan Reformasi mahasiswa 1998.\n\nGugurnya empat pahlawan Trisakti dan kerusuhan Mei 1998 memaksa Presiden Soeharto menyatakan berhenti pada **21 Mei 1998**, membuka gerbang perjalanan sejarah baru bagi bangsa Indonesia: **Era Reformasi**."
          }
        ],
        glossary: [
          { term: 'Tritura', def: 'Tri Tuntutan Rakyat yang diajukan aksi mahasiswa KAMI pada 10 Januari 1966 menuntut pembubaran PKI, reshuffle kabinet, dan penurunan harga sembako.' },
          { term: 'Supersemar', def: 'Surat Perintah 11 Maret 1966 yang memberi mandat pengamanan negara dari Presiden Soekarno kepada Letjen Soeharto.' },
          { term: 'Trilogi Pembangunan', def: 'Pondasi kebijakan pembangunan Orde Baru: stabilitas nasional, pertumbuhan ekonomi tinggi, dan pemerataan hasil pembangunan.' },
          { term: 'Dwifungsi ABRI', def: 'Doktrin peran ganda militer sebagai kekuatan pertahanan keamanan sekaligus kekuatan penentu kebijakan sosial-politik sipil.' },
          { term: 'Panca Usaha Tani', def: 'Program intensifikasi pertanian padi: pemilihan bibit unggul, pemupukan teratur, irigasi teknis, pemberantasan hama, dan penyuluhan.' },
          { term: 'Pembredelan Pers', def: 'Tindakan sepihak pemerintah mencabut izin penerbitan media massa karena memuat tulisan yang dinilai kritis terhadap penguasa.' },
          { term: 'KKN', def: 'Korupsi, Kolusi, dan Nepotisme yang menjadi sasaran tuntutan utama pergerakan mahasiswa reformasi tahun 1998.' }
        ],
        reflectionQuestions: [
          'Bagaimana pelajaran dari krisis moneter 1997–1998 menyadarkan kita bahwa pertumbuhan ekonomi yang tinggi tidak akan ada artinya tanpa fondasi tata kelola keuangan yang jujur dan berkeadilan?',
          'Kebebasan pers dan berpendapat sangat dibatasi pada masa Orde Baru. Bagaimana kita sebagai warga negara bertanggung jawab menggunakan kebebasan berekspresi di era media sosial saat ini tanpa menyebarkan fitnah dan hoaks?'
        ]
      },
      {
        id: 'smk-xi-6',
        title: 'Masa Reformasi (1998 – Sekarang)',
        phase: 'Fase F',
        grade: 'Kelas XI',
        icon: '🏛️',
        period: '1998 - Masa Kini',
        cpSummary: 'Menganalisis kelahiran gerakan Reformasi 1998, suksesi kepemimpinan nasional dari Habibie hingga Jokowi, empat tahap amandemen UUD 1945, otonomi daerah, serta tantangan integrasi dan disrupsi digital abad ke-21.',
        syllabus: {
          atp: [
            '11.6.1 Menguraikan 6 agenda pokok tuntutan gerakan Reformasi 1998 dan dinamika peralihan kekuasaan pasca-Soeharto.',
            '11.6.2 Mengevaluasi terobosan kebijakan kepemimpinan nasional era B.J. Habibie, Abdurrahman Wahid (Gus Dur), Megawati Soekarnoputri, Susilo Bambang Yudhoyono, dan Joko Widodo.',
            '11.6.3 Menganalisis perubahan fundamental struktur ketatanegaraan melalui empat tahap amandemen UUD 1945 (1999–2002) dan pembentukan lembaga-lembaga negara baru (KPK, MK, DPD, KY).',
            '11.6.4 Merefleksikan tantangan kebangsaan abad ke-21: polarisasi sosial media, ketahanan siber, hilirisasi industri, serta kesiapan kompetensi vokasi SMK menghadapi revolusi industri 4.0.'
          ],
          meaningfulUnderstanding: 'Era Reformasi memberikan anugerah kebebasan sipil, pemilu demokratis langsung, dan otonomi daerah, namun menuntut tanggung jawab etika, profesionalisme, serta kesiapan generasi muda SMK untuk bersaing di era digital dan globalisasi industri.',
          essentialQuestions: [
            'Bagaimana empat kali amandemen UUD 1945 mengubah mekanisme pemilihan presiden dan pembagian kekuasaan antarlembaga negara di Indonesia?',
            'Apa tantangan terbesar dalam menjaga persatuan bangsa di tengah maraknya disinformasi dan ujaran kebencian di media sosial pada era Reformasi?'
          ]
        },
        subtopics: [
          {
            heading: "1. PENDAHULUAN",
            content: "Reformasi merupakan salah satu perubahan paling penting dalam sejarah Indonesia modern.\n\nReformasi tidak lahir secara tiba-tiba. Peristiwa 1998 merupakan puncak dari berbagai persoalan yang telah berkembang selama masa Orde Baru, seperti sentralisasi kekuasaan, dominasi politik, pembatasan kebebasan, persoalan korupsi, kolusi, nepotisme, serta ketidakpuasan terhadap kondisi sosial dan politik.\n\nKeadaan tersebut menjadi semakin berat ketika Indonesia mengalami krisis ekonomi pada 1997–1998.\n\nNilai rupiah mengalami kejatuhan yang sangat tajam. Banyak perusahaan mengalami kesulitan. Harga kebutuhan pokok meningkat. Pemutusan hubungan kerja terjadi di berbagai tempat. Kehidupan masyarakat semakin berat.\n\nKrisis ekonomi kemudian berkembang menjadi krisis kepercayaan terhadap pemerintah.\n\nMahasiswa dan masyarakat turun ke jalan menuntut perubahan.\n\nPada 12 Mei 1998 terjadi Tragedi Trisakti. Beberapa hari kemudian terjadi kerusuhan di sejumlah wilayah. Tekanan politik semakin kuat.\n\nAkhirnya pada **21 Mei 1998, Soeharto mengundurkan diri** setelah lebih dari tiga dekade memimpin Indonesia.\n\nNamun, berhentinya Soeharto bukan berarti seluruh persoalan selesai. Justru sejak saat itulah Indonesia memasuki proses perubahan yang panjang:\n* sistem politik diubah,\n* UUD 1945 diamandemen,\n* pemilu dibuat lebih kompetitif,\n* presiden dipilih langsung,\n* otonomi daerah diperluas,\n* militer meninggalkan fungsi politik formal,\n* pers menjadi lebih bebas,\n* dan masyarakat memperoleh ruang partisipasi yang lebih luas.\n\nAkan tetapi, Era Reformasi juga menghadapi persoalan baru: korupsi tetap terjadi, politik uang berkembang, disinformasi menyebar melalui media digital, ketimpangan sosial belum sepenuhnya hilang, dan penyelesaian persoalan HAM masa lalu masih menghadapi berbagai kendala.\n\nKarena itu, Reformasi lebih tepat dipahami sebagai:\n> **proses perubahan bangsa Indonesia untuk membangun kehidupan politik, hukum, ekonomi, dan masyarakat yang lebih demokratis, terbuka, adil, dan bertanggung jawab.**"
          },
          {
            heading: "2. PERTANYAAN BESAR PEMBELAJARAN",
            content: "Seluruh materi dapat diarahkan pada satu pertanyaan utama:\n\n> **“Mengapa Reformasi 1998 terjadi, perubahan apa yang dihasilkannya, dan apakah cita-cita Reformasi telah tercapai?”**\n\nPertanyaan tersebut dapat dikembangkan menjadi:\n* Mengapa Orde Baru akhirnya runtuh?\n* Mengapa mahasiswa menjadi kekuatan penting?\n* Apa yang berubah setelah 1998?\n* Apakah demokrasi Indonesia menjadi lebih baik?\n* Masalah apa yang masih tersisa?"
          },
          {
            heading: "3. KONDISI INDONESIA MENJELANG REFORMASI",
            content: "### 1. Stabilitas Orde Baru yang Mulai Rapuh\nSelama lebih dari tiga dekade, pemerintah Orde Baru berhasil menciptakan stabilitas politik dan menjalankan pembangunan ekonomi. Namun, stabilitas tersebut dibangun dalam sistem politik yang sangat terpusat: Presiden memiliki kekuasaan sangat besar, militer mempunyai peran sosial-politik (Dwifungsi ABRI), Golkar menjadi kekuatan politik dominan, serta media dan organisasi politik berada dalam kontrol ketat pemerintah.\n\nMasyarakat semakin mempertanyakan kebebasan politik, transparansi tata kelola negara, pemerataan pembangunan, dan perlindungan hak warga negara.\n\n---\n\n### 2. Korupsi, Kolusi, dan Nepotisme (KKN)\nSalah satu kritik paling besar kepada Orde Baru adalah berkembangnya praktik:\n* **Korupsi:** Penyalahgunaan kekuasaan untuk memperoleh keuntungan pribadi atau kelompok.\n* **Kolusi:** Permufakatan tersembunyi yang memberikan keuntungan monopoli kepada kelompok tertentu.\n* **Nepotisme:** Pemberian keuntungan atau jabatan kepada keluarga atau orang dekat penguasa.\n\n---\n\n### 3. Krisis Ekonomi Asia 1997 & Dampaknya\nPada Juli 1997, badai krisis keuangan Asia menghantam perekonomian Indonesia. Nilai tukar rupiah terpuruk drastis dari Rp 2.500 menjadi Rp 16.000 per dollar AS. Perusahaan-perusahaan yang memiliki utang valas bangkrut massal, memicu gelombang PHK, lonjakan harga kebutuhan pokok, merosotnya daya beli, dan meledaknya angka kemiskinan.\n\nKrisis moneter akhirnya bermutasi menjadi krisis sosial dan krisis legitimasi politik."
          },
          {
            heading: "4. KRISIS POLITIK DAN GERAKAN REFORMASI",
            content: "### 1. Dari Krisis Ekonomi ke Krisis Kepercayaan\nMasyarakat dan mahasiswa kehilangan kepercayaan terhadap kemampuan rezim Orde Baru dalam mengatasi krisis. Terjadilah eskalasi:\n> **Krisis Ekonomi ➔ Krisis Sosial ➔ Krisis Politik ➔ Krisis Legitimasi Kepemimpinan.**\n\n---\n\n### 2. Enam Agenda Tuntutan Reformasi\n1. Adili Soeharto dan kroni-kroninya.\n2. Amandemen UUD 1945.\n3. Hapus Dwifungsi ABRI.\n4. Tegakkan supremasi hukum dan HAM.\n5. Laksanakan otonomi daerah seluas-luasnya.\n6. Ciptakan pemerintahan yang bersih dari KKN.\n\n---\n\n### 3. Peran Mahasiswa sebagai Kekuatan Moral\nMahasiswa di seluruh penjuru tanah air menggelar mimbar bebas, long march, dan aksi damai menuntut suksesi kepemimpinan nasional. Mahasiswa menempatkan dirinya sebagai kompas moral nurani rakyat yang menyuarakan penderitaan masyarakat kecil."
          },
          {
            heading: "5. TRAGEDI TRISAKTI",
            content: "Pada **12 Mei 1998**, aksi damai ribuan mahasiswa Universitas Trisakti di Grogol Jakarta dihadang oleh aparat keamanan.\n\nTembakan peluru tajam aparat merenggut nyawa empat mahasiswa Trisakti:\n* **Elang Mulia Lesmana**\n* **Hafidin Royan**\n* **Heri Hertanto**\n* **Hendriawan Sie**\n\nGugurnya keempat pahlawan reformasi ini menjadi martir yang menyulut gelombang kemarahan rakyat di seluruh Indonesia."
          },
          {
            heading: "6. KERUSUHAN MEI 1998",
            content: "Pada **13–15 Mei 1998**, kerusuhan massal pecah di Jakarta, Solo, Surabaya, dan Medan. Terjadi aksi pembakaran pusat perbelanjaan, perusakan fasilitas umum, penjarahan, dan tindak kekerasan terhadap warga keturunan etnis Tionghoa.\n\nKerusuhan ini menelan ribuan korban jiwa dan kerugian ekonomi yang masif, membuktikan bahwa aparat keamanan telah kehilangan kendali dan rezim berada di ambang keruntuhan."
          },
          {
            heading: "7. SOEHARTO MENGUNDURKAN DIRI",
            content: "* **18 Mei 1998:** Puluhan ribu mahasiswa dari berbagai universitas menduduki atap gedung DPR/MPR RI di Senayan. Pimpinan DPR/MPR Harmoko mendesak Presiden Soeharto mengundurkan diri.\n* **20 Mei 1998:** Empat belas menteri bidang ekonomi dan industri kabinet menyatakan penolakan bergabung dalam Komite Reformasi.\n* **Kamis, 21 Mei 1998 Pukul 09.00 WIB:** Di Istana Merdeka Jakarta, Presiden Soeharto membacakan pidato pengunduran dirinya setelah 32 tahun berkuasa. Sesuai Pasal 8 UUD 1945, Wakil Presiden **Prof. Dr. Ing. B.J. Habibie** langsung dilantik sebagai Presiden RI ketiga."
          },
          {
            heading: "8. PEMERINTAHAN B.J. HABIBIE",
            content: "### 1. Terobosan Reformasi Kilat (1998–1999)\nMeskipun hanya menjabat selama 512 hari, Presiden B.J. Habibie meletakkan fondasi demokrasi baru:\n* Menerbitkan **UU No. 40 Tahun 1999 tentang Pers** yang mencabut kewajiban SIUPP dan menjamin kemerdekaan pers.\n* Mengesahkan **UU No. 22 Tahun 1999 tentang Otonomi Daerah** dan UU Larangan Praktik Monopoli.\n* Membebaskan tahanan politik (tapol/napol) masa Orde Baru.\n* Melakukan restrukturisasi dan rekapitalisasi perbankan yang berhasil menguatkan nilai rupiah dari Rp 16.000 menjadi **Rp 6.500 per USD**.\n* Menyelenggarakan **Pemilu Demokratis 1999** yang jujur, adil, dan damai diikuti oleh 48 partai politik."
          },
          {
            heading: "9. REFERENDUM TIMOR TIMUR",
            content: "Pada masa pemerintahan B.J. Habibie, pemerintah menawarkan opsi jajak pendapat (*referendum*) bagi rakyat Timor Timur di bawah pengawasan PBB (UNAMET) pada **30 Agustus 1999**.\n\nHasil referendum menunjukkan 78,5% rakyat Timor Timur memilih menolak otonomi khusus dan memutuskan berpisah dari NKRI. Timor Timur kemudian secara resmi merdeka menjadi negara berdaulat **Republik Demokratik Timor-Leste** pada Mei 2002."
          },
          {
            heading: "10. PEMILU 1999 DAN AWAL DEMOKRASI REFORMASI",
            content: "Pemilu 7 Juni 1999 menjadi pemilu paling demokratis sejak 1955. Diikuti oleh 48 partai politik baru tanpa campur tangan dan hegemoni penguasa.\n\nLima partai peraih suara terbesar:\n1. **PDI Perjuangan** (33,7%)\n2. **Partai Golkar** (22,4%)\n3. **Partai Persatuan Pembangunan (PPP)** (10,7%)\n4. **Partai Kebangkitan Bangsa (PKB)** (12,6%)\n5. **Partai Amanat Nasional (PAN)** (7,1%)\n\nKarena ketiadaan partai mayoritas tunggal, pemilihan presiden di Sidang Umum MPR 1999 ditentukan melalui koalisi Poros Tengah."
          },
          {
            heading: "11. PEMERINTAHAN ABDURRAHMAN WAHID",
            content: "### 1. K.H. Abdurrahman Wahid / Gus Dur (1999–2001)\nTerpilih sebagai Presiden RI ke-4 berpasangan dengan Megawati Soekarnoputri. Gus Dur dikenal sebagai **Bapak Pluralisme**:\n* Mengakui agama Khonghucu dan menetapkan Tahun Baru Imlek sebagai hari libur nasional melalui pencabutan Inpres No. 14/1967.\n* Membubarkan Departemen Penerangan dan Departemen Sosial guna memangkas birokrasi yang membatasi hak sipil.\n* Mengedepankan pendekatan dialogis kultural dan kemanusiaan di Aceh dan Papua (mengubah nama Irian Jaya menjadi Papua).\n\n---\n\n### 2. Dinamika Pemakzulan\nHubungan Gus Dur dengan parlemen mengalami konflik tajam akibat kasus Buloggate dan Bruneigate. Pada **23 Juli 2001**, Sidang Istimewa MPR memakzulkan Gus Dur dan mengangkat Megawati Soekarnoputri sebagai Presiden."
          },
          {
            heading: "12. PEMERINTAHAN MEGAWATI SOEKARNOPUTRI",
            content: "Presiden wanita pertama dalam sejarah Indonesia (2001–2004) bersama Wakil Presiden Hamzah Haz:\n* **Pemberantasan Korupsi:** Mendirikan **Komisi Pemberantasan Tindak Pidana Korupsi (KPK)** pada tahun 2002 berdasarkan UU No. 30 Tahun 2002.\n* **Stabilitas Makroekonomi:** Menuntaskan program bantuan pemulihan ekonomi dengan IMF dan mempertahankan pertumbuhan ekonomi.\n* **Pengawalan Pemilu Langsung:** Menyukseskan pelaksanaan Pemilihan Umum Langsung Presiden dan Wakil Presiden Pertama pada tahun 2004."
          },
          {
            heading: "13. PEMERINTAHAN SUSILO BAMBANG YUDHOYONO",
            content: "### 1. Era Pemilihan Presiden Langsung (2004–2014)\n**Susilo Bambang Yudhoyono (SBY)** menjadi presiden pertama yang dipilih langsung oleh rakyat melalui pemilu dua putaran, dan memimpin secara stabil selama dua periode (10 tahun).\n\n---\n\n### 2. Capaian & Prestasi\n* **Perdamaian Aceh (MoU Helsinki 2005):** Berhasil mengakhiri konflik bersenjata 30 tahun antara Pemerintah RI dan GAM di Helsinki, Finlandia.\n* **Pemulihan Gempa & Tsunami Aceh-Nias (2004):** Penanganan bencana berskala internasional melalui Badan Rehabilitasi dan Rekonstruksi (BRR).\n* **Pertumbuhan Ekonomi & G20:** Mencapai pertumbuhan ekonomi rata-rata 5–6%, melunasi seluruh sisa utang kepada IMF pada 2006, serta membawa Indonesia masuk ke dalam kelompok 20 ekonomi terbesar dunia (**G20**)."
          },
          {
            heading: "14. PEMERINTAHAN JOKO WIDODO",
            content: "### 1. Transformasi Infrastruktur & Konektivitas (2014–2024)\nMenitikberatkan pada pemerataan pembangunan fisik di seluruh pelosok nusantara (Indonesia-sentris):\n* Ribuan kilometer Jalan Tol Trans-Jawa dan Trans-Sumatra, jalur kereta api Sulawesi, dan puluhan bendungan irigasi pangan.\n* Transportasi massal modern perkotaan: MRT Jakarta, LRT Jabodebek, dan Kereta Cepat Jakarta-Bandung (Whoosh).\n\n---\n\n### 2. Hilirisasi Industri & Ibu Kota Nusantara (IKN)\n* **Kebijakan Hilirisasi Tambang:** Melarang ekspor bijih nikel dan bauksit mentah, mewajibkan pembangunan smelter domestik guna membangun ekosistem rantai pasok industri baterai kendaraan listrik (*EV Battery*).\n* **Pemindahan Ibu Kota ke IKN Nusantara:** Memulai pembangunan Ibu Kota Nusantara di Penajam Paser Utara, Kalimantan Timur dengan konsep *Smart Forest City* berkelanjutan."
          },
          {
            heading: "15. AMANDEMEN UUD 1945",
            content: "MPR melakukan reformasi konstitusi melalui **Empat Tahap Amandemen UUD 1945 (1999–2002)**:\n1. **Pembatasan Masa Jabatan Eksekutif:** Presiden dan Wakil Presiden dibatasi maksimal dua periode (10 tahun).\n2. **Penguatan Hak Asasi Manusia:** Menambahkan pasal-pasal perlindungan HAM komprehensif pada **Pasal 28A hingga 28J**.\n3. **Penyelenggaraan Pemilu Langsung:** Presiden dan wakil presiden dipilih langsung oleh rakyat satu paket.\n4. **Lembaga Negara Baru (*Checks and Balances*):**\n   * **Mahkamah Konstitusi (MK):** Menguji undang-undang terhadap UUD (*Judicial Review*), memutus sengketa kewenangan lembaga negara, dan sengketa hasil pemilu.\n   * **Dewan Perwakilan Daerah (DPD):** Kamar legislatif perwakilan daerah non-partai.\n   * **Komisi Yudisial (KY):** Mengawasi perilaku dan etika profesi hakim."
          },
          {
            heading: "16. OTONOMI DAERAH",
            content: "Reformasi mengubah tatanan hubungan pusat dan daerah dari sentralistik menjadi desentralistik melalui **otonomi daerah seluas-luasnya**:\n* Pemerintah kabupaten dan kota diberi wewenang mengelola anggaran, perizinan, dan pembangunan daerah sesuai aspirasi lokal.\n* Muncul pemilihan kepala daerah secara langsung (Pilkada langsung sejak 2005).\n\n*Tantangan Baru:* Munculnya fenomena *\"raja-raja kecil\"* di daerah, korupsi APBD oleh kepala daerah, dan tumpang tindih regulasi perizinan."
          },
          {
            heading: "17. REFORMASI TNI DAN POLRI",
            content: "* Berdasarkan **Ketetapan MPR No. VI/MPR/2000**, institusi Kepolisian Negara Republik Indonesia (Polri) secara resmi dipisahkan dari Angkatan Bersenjata Republik Indonesia (ABRI).\n* Doktrin Dwifungsi ABRI dihapus selamanya: TNI bertransformasi menjadi alat pertahanan negara profesional dari ancaman agresi militer luar, sedangkan Polri bertugas memelihara keamanan dan ketertiban masyarakat di bawah presiden.\n* Anggota militer dan polisi aktif dilarang menduduki jabatan politik sipil dan dilarang menggunakan hak pilih dalam pemilu."
          },
          {
            heading: "18. KEBEBASAN PERS",
            content: "Era Reformasi menjamin kemerdekaan pers sebagai pilar keempat demokrasi:\n* Pembredelan dan pencabutan izin terbit media dilarang oleh undang-undang.\n* Media massa dan jurnalis memiliki kebebasan melakukan investigasi kritis terhadap penyalahgunaan wewenang pejabat publik.\n\n*Tantangan Era Digital:* Masifnya penyebaran hoaks, ujaran kebencian, *clickbait*, dan disinformasi di media sosial yang menuntut literasi digital kritis dari masyarakat."
          },
          {
            heading: "19. PERKEMBANGAN PARTAI POLITIK",
            content: "Pemberlakuan sistem multipartai memulihkan iklim partisipasi politik warga negara:\n* Muncul puluhan partai politik dengan aneka spektrum ideologi (nasionalis, agamis, sosial-demokrat).\n* Sistem pemilu proporsional terbuka memungkinkan rakyat memilih langsung wakil rakyat yang dipercayainya.\n\n*Tantangan:* Biaya politik yang sangat mahal (*high-cost politics*), maraknya praktik politik uang (*money politics*), dan kecenderungan oligarki partai."
          },
          {
            heading: "20. PERKEMBANGAN DEMOKRASI",
            content: "Transformasi mendasar peradaban politik Indonesia:\n* **Masa Orde Baru:** Pemilu seremonial, hegemoni partai tunggal, eksekutif tanpa kontrol, militer mendominasi politik.\n* **Masa Reformasi:** Pemilu kompetitif terbuka, suksesi damai langsung oleh rakyat, pemisahan kekuasaan tegas (*trias politica*), supremasi sipil, dan keterbukaan informasi publik."
          },
          {
            heading: "21. EKONOMI PASCA-REFORMASI",
            content: "Perekonomian nasional berhasil bangkit dari puing-puing krisis moneter 1998:\n* Penyehatan sistem perbankan melalui Otoritas Jasa Keuangan (OJK) dan Bank Indonesia yang independen.\n* Menjaga defisit anggaran belanja di bawah batas aman 3% PDB.\n* Pertumbuhan ekonomi rata-rata di atas 5% dan kenaikan pendapatan per kapita rakyat.\n* Ketahanan terhadap krisis global (krisis finansial dunia 2008 dan pandemi COVID-19)."
          },
          {
            heading: "22. PEMBERANTASAN KORUPSI",
            content: "Pembentukan **Komisi Pemberantasan Korupsi (KPK)** pada tahun 2002 mencatatkan sejarah baru penegakan hukum di Indonesia:\n* Ratusan pejabat korup (menteri, gubernur, bupati, anggota DPR, hakim, hingga jaksa) berhasil ditangkap melalui Operasi Tangkap Tangan (OTT).\n* Pendidikan antikorupsi dan pencegahan sistemik diperkenalkan ke sekolah-sekolah dan dunia industri.\n\n*Pekerjaan Rumah:* Korupsi masih terus bermutasi dalam bentuk suap perizinan, manipulasi pengadaan barang/jasa, dan gratifikasi digital."
          },
          {
            heading: "23. PENEGAKAN HAM",
            content: "* Ratifikasi berbagai kovenan internasional hak asasi manusia oleh pemerintah Indonesia.\n* Pembentukan Komnas HAM, Komnas Perempuan, dan Pengadilan HAM ad hoc.\n* Pengakuan dan permohonan maaf negara atas terjadinya peristiwa pelanggaran HAM berat masa lalu melalui jalur non-yudisial."
          },
          {
            heading: "24. KEHIDUPAN SOSIAL PADA MASA REFORMASI",
            content: "Masyarakat menikmati kebebasan berekspresi, berorganisasi, dan berkreasi:\n* Maraknya gerakan komunitas pemuda, kesukarelawanan sosial, dan aktivisme lingkungan hidup.\n* Perkembangan seni, film, musik independen, dan industri kreatif lokal yang mendunia.\n* Menguatnya kesadaran publik terhadap kesetaraan gender dan hak-hak penyandang disabilitas."
          },
          {
            heading: "25. MASYARAKAT DIGITAL",
            content: "Revolusi internet dan ponsel pintar (*smartphone*) mengubah tatanan hidup bangsa:\n* Munculnya raksasa ekonomi digital dan *startup unicorn* Indonesia di bidang transportasi online, e-commerce, dan teknologi finansial (*fintech*).\n* Media sosial (X, Instagram, TikTok, YouTube) menjadi ruang publik baru bagi warga untuk menyuarakan aspirasi dan mengawal transparansi kebijakan pemerintah."
          },
          {
            heading: "26. PERAN GENERASI MUDA",
            content: "Generasi Z dan milenial memegang peran strategis sebagai motor perubahan:\n* Bukan sekadar objek pembangunan, melainkan inovator dan pelaku sejarah kemajuan bangsa.\n* Memelopori kewirausahaan digital (*sociopreneurship*), riset sains, dan diplomasi kebudayaan di pentas internasional."
          },
          {
            heading: "27. REFORMASI DAN PENDIDIKAN",
            content: "* Kebijakan alokasi minimal **20% APBN/APBD** khusus untuk sektor pendidikan.\n* Penerapan program Wajib Belajar 12 Tahun dan beasiswa pendidikan tinggi (seperti KIP Kuliah dan LPDP).\n* Kurikulum Merdeka yang menekankan pembelajaran berbasis proyek, nalar kritis, dan pembentukan Karakter Pelajar Pancasila."
          },
          {
            heading: "28. REFORMASI DAN DUNIA KERJA",
            content: "Transformasi ekonomi menuntut kesiapan lulusan vokasi SMK menghadapi revolusi industri 4.0:\n* Penguasaan keterampilan komputasi, otomatisasi digital, dan literasi teknologi hijau (*Green Skills*).\n* Menjunjung tinggi profesionalisme kerja, kejujuran, dan integritas bebas dari gratifikasi."
          },
          {
            heading: "29. KEBERHASILAN REFORMASI",
            content: "Tujuh pencapaian gemilang Reformasi:\n1. Pemilihan umum dan pemilihan presiden langsung yang berlangsung damai dan periodik.\n2. Kebebasan pers dan kemerdekaan berekspresi warga negara terjamin undang-undang.\n3. Desentralisasi dan otonomi daerah yang meratakan pembangunan ke luar Jawa.\n4. Terhapusnya doktrin Dwifungsi ABRI dan tegaknya supremasi sipil.\n5. Lembaga pengawal konstitusi dan antikorupsi (MK dan KPK) yang aktif bekerja.\n6. Kembalinya stabilitas ekonomi dan pertumbuhan kelas menengah yang kuat.\n7. Pengakuan penuh atas hak-hak asasi manusia dan keberagaman pluralisme budaya."
          },
          {
            heading: "30. TANTANGAN REFORMASI",
            content: "Persoalan krusial yang masih dihadapi:\n* Praktik politik uang (*money politics*) dan politik biaya tinggi.\n* Korupsi yang menyebar ke birokrasi daerah.\n* Polarisasi tajam berbasis politik identitas di media sosial.\n* Kesenjangan sosial-ekonomi dan tantangan pengangguran terdidik.\n* Penegakan hukum yang adil tanpa pandang bulu (*equality before the law*)."
          },
          {
            heading: "31. APAKAH REFORMASI TELAH BERHASIL?",
            content: "Reformasi bukanlah peristiwa statis, melainkan perjalanan dialektika sejarah yang dinamis. \n\nReformasi **berhasil** mengubah tatanan politik otoriter menjadi demokrasi terbuka terbesar ketiga di dunia, namun cita-cita mewujudkan kemakmuran dan keadilan sosial sejati masih menjadi **agenda bersama yang terus kita perjuangkan**."
          },
          {
            heading: "32. BERPIKIR HISTORIS TENTANG REFORMASI",
            content: "### 1. Kronologi Sejarah\n1997 (Krisis Moneter) ➔ Mei 1998 (Tragedi Trisakti & Pengunduran Diri Soeharto) ➔ 1999 (Pemilu Multi-Partai & Referendum Timor Leste) ➔ 1999–2002 (Empat Tahap Amandemen UUD 1945) ➔ 2004 (Pilpres Langsung Pertama) ➔ 2005 (MoU Damai Helsinki) ➔ 2014–sekarang (Transformasi Infrastruktur, Hilirisasi, dan Disrupsi Digital).\n\n---\n\n### 2. Kausalitas Runtun\nKetidakpuasan atas kesenjangan KKN Orde Baru yang terpicu oleh kejatuhan moneter 1997 melahirkan gelombang aksi mahasiswa yang memaksa suksesi kepemimpinan dan reformasi konstitusi.\n\n---\n\n### 3. Perubahan & Kesinambungan\n* **Yang Berubah:** Struktur lembaga negara, pembatasan masa jabatan presiden, kebebasan pers, dan hilangnya Dwifungsi militer.\n* **Yang Berkelanjutan:** Komitmen menjaga keutuhan NKRI, falsafah dasar Pancasila, dan cita-cita keadilan sosial bagi seluruh rakyat Indonesia."
          },
          {
            heading: "33. MEMBANDINGKAN ORDE BARU DAN REFORMASI",
            content: "| Aspek Indikator | Masa Orde Baru (1966–1998) | Masa Reformasi (1998–Sekarang) |\n| --- | --- | --- |\n| **Kekuasaan Presiden** | Sangat dominan (*Executive Heavy*) | Dibatasi secara tegas oleh konstitusi |\n| **Masa Jabatan Presiden** | Tidak dibatasi periode | Maksimal 2 periode (10 tahun) |\n| **Mekanisme Pemilihan Presiden** | Dipilih oleh formatur MPR | Dipilih langsung oleh rakyat satu paket |\n| **Sistem Partai Politik** | Tiga partai (fusi terkontrol, hegemoni Golkar) | Multipartai bebas dan kompetitif |\n| **Kemerdekaan Pers** | Dikontrol ketat dengan ancaman SIUPP | Bebas tanpa izin terbit, dilindungi UU Pers |\n| **Peran Militer** | Doktrin Dwifungsi ABRI di politik sipil | Menjadi tentara profesional pertahanan negara |\n| **Hubungan Pusat-Daerah** | Sangat sentralistik di Jakarta | Desentralisasi dan otonomi daerah luas |\n| **Perlindungan HAM** | Restriktif terhadap kebebasan berserikat | Ditegaskan komprehensif pada Pasal 28A–28J |\n| **Partisipasi Masyarakat** | Dibatasi kebijakan massa mengambang | Sangat aktif di ruang publik dan media sosial |"
          },
          {
            heading: "34. NILAI-NILAI REFORMASI",
            content: "Delapan pilar karakter generasi Reformasi:\n1. **Demokrasi:** Menghormati kedaulatan suara rakyat.\n2. **Kemerdekaan Berekspresi:** Berani berpendapat secara santun dan bertanggung jawab.\n3. **Transparansi:** Keterbukaan informasi tata kelola publik.\n4. **Akuntabilitas:** Tanggung jawab moral atas setiap amanah kepemimpinan.\n5. **Supremasi Hukum:** Kepatuhan pada hukum tanpa memandang status sosial.\n6. **Partisipasi Aktif:** Berkontribusi nyata memajukan lingkungan sekitar.\n7. **Toleransi Kebhinnekaan:** Menghargai perbedaan suku, agama, dan pandangan.\n8. **Integritas Anti-KKN:** Berani menolak suap, manipulasi, dan kecurangan."
          },
          {
            heading: "35. KONTEKSTUALISASI DI SEKOLAH",
            content: "Praktik nilai demokrasi Reformasi di lingkungan sekolah:\n* **Pemilihan Ketua OSIS:** Berkompetisi secara jujur melalui adu visi-misi program kerja.\n* **Musyawarah Kelas:** Mengambil keputusan bersama secara mufakat tanpa intimidasi.\n* **Kritik Konstruktif:** Menyampaikan saran perbaikan pembelajaran melalui forum dialog yang santun.\n* **Transparansi Anggaran Kas:** Mengelola keuangan kas kelas secara terbuka dan tercatat rapi."
          },
          {
            heading: "36. KONTEKSTUALISASI BAGI SISWA SMK",
            content: "Di lingkungan industri dan dunia kerja kejuruan:\n* **Integritas Profesional:** Bekerja sesuai SOP teknis tanpa memanipulasi spesifikasi barang atau laporan keuangan.\n* **Keterbukaan Kolaboratif:** Berani menyampaikan usulan perbaikan teknik produksi (*continuous improvement*).\n* **Literasi Digital Industri:** Menggunakan teknologi informasi secara aman dan tidak membocorkan rahasia data perusahaan."
          },
          {
            heading: "37. PERTANYAAN PEMANTIK",
            content: "1. Mengapa peristiwa krisis moneter 1997 dapat berkembang menjadi gelombang aksi Reformasi nasional yang menumbangkan Orde Baru?\n2. Bagaimana empat tahap amandemen UUD 1945 mengubah peta kekuasaan antarlembaga negara di Indonesia?\n3. Mengapa pembatasan masa jabatan presiden maksimal dua periode menjadi klausul terpenting dalam amandemen konstitusi?\n4. Apa dampak positif dan tantangan negatif dari pelaksanaan otonomi daerah bagi kemajuan wilayah di luar Pulau Jawa?\n5. Bagaimana peran generasi muda SMK dalam mengawal cita-cita Reformasi di era revolusi industri 4.0 saat ini?"
          },
          {
            heading: "38. PERTANYAAN HOTS",
            content: "1. Analisislah korelasi kausal antara kebebasan pers di era Reformasi dengan peningkatan transparansi tata kelola pemerintahan publik!\n2. Evaluasilah efektivitas pembentukan Mahkamah Konstitusi (MK) dalam menjaga prinsip *checks and balances* serta supremasi konstitusi di Indonesia!\n3. Mengapa pemisahan institusi TNI dan Polri pada tahun 2000 dipandang sebagai syarat mutlak bagi terciptanya supremasi sipil dalam negara demokrasi?\n4. Telaah bagaimana disrupsi media sosial dan fenomena *filter bubble* dapat memicu polarisasi politik yang mengancam persatuan kebangsaan!\n5. Susunlah sebuah analisis kritis mengenai mengapa agenda pemberantasan KKN masih menghadapi tantangan berat di era otonomi daerah saat ini!"
          },
          {
            heading: "39. AKTIVITAS PEMBELAJARAN",
            content: "* **Aktivitas 1: Simulasi Uji Materi di Mahkamah Konstitusi:** Siswa bermain peran sebagai pemohon, pemerintah, dan hakim konstitusi menguji sebuah peraturan sekolah.\n* **Aktivitas 2: Analisis Fact-Checking Hoaks:** Siswa membedah berita viral di media sosial menggunakan prinsip verifikasi jurnalistik dan literasi digital.\n* **Aktivitas 3: Peta Tematik Hasil Pemilu Reformasi:** Membandingkan peta perolehan suara partai pemilu 1999, 2004, 2009, 2014, dan 2019."
          },
          {
            heading: "40. PROYEK AKHIR",
            content: "Siswa menyusun produk kreasi digital (video edukasi, podcast, atau majalah digital) bertema:\n> **“Mengawal Cita-Cita Reformasi: Peran Nyata Siswa Vokasi SMK Menuju Indonesia Emas 2045.”**"
          },
          {
            heading: "41. RANGKUMAN BESAR",
            content: "Era Reformasi yang bergulir sejak 21 Mei 1998 merupakan babak pembaruan menyeluruh sistem ketatanegaraan Indonesia. \n\nDiawali oleh gerakan mahasiswa yang meruntuhkan hegemoni 32 tahun Orde Baru, Indonesia bertransformasi melalui empat tahap amandemen UUD 1945, pembatasan masa jabatan presiden, pemilu dan pilpres langsung, pemisahan TNI-Polri, otonomi daerah, serta kemerdekaan pers.\n\nDi bawah suksesi kepemimpinan B.J. Habibie, Gus Dur, Megawati, SBY, hingga Joko Widodo, Indonesia tumbuh menjadi negara demokrasi terbesar ketiga di dunia dengan stabilitas makroekonomi yang solid.\n\nMeskipun tantangan korupsi, politik uang, dan polarisasi digital masih menghadang, Reformasi adalah amanah sejarah yang harus terus dirawat oleh generasi muda dengan menjunjung tinggi integritas, nalar kritis, dan etos kebangsaan."
          },
          {
            heading: "42. INTI PEMAHAMAN PESERTA DIDIK",
            content: "1. Reformasi 1998 membuktikan bahwa kedaulatan tertinggi berada di tangan rakyat dan mahasiswa adalah kekuatan moral perubahan.\n2. Demokrasi yang sehat memerlukan konstitusi yang membatasi kekuasaan, hukum yang adil, serta keterbukaan informasi pers.\n3. Masa depan Indonesia di abad ke-21 ditentukan oleh integritas moral, nalar kritis, dan kompetensi keahlian generasi mudanya."
          },
          {
            heading: "43. REFLEKSI PESERTA DIDIK",
            content: "1. Dari enam agenda Reformasi 1998, manakah yang menurutmu paling berhasil dan mana yang paling membutuhkan kerja keras saat ini?\n2. Bagaimana caramu menggunakan kebebasan berpendapat di media sosial agar bernilai positif dan tidak merugikan orang lain?\n3. Komitmen integritas apa yang akan kamu pegang teguh saat memasuki dunia kerja industri nanti?"
          },
          {
            heading: "44. KESIMPULAN",
            content: "Masa Reformasi adalah babak pembuktian kedewasaan bangsa Indonesia: kebebasan yang diraih dengan air mata dan darah para pahlawan reformasi menuntut tanggung jawab etika, kejujuran moral, dan karya nyata seluruh anak bangsa demi mewujudkan Indonesia yang adil, makmur, dan bermartabat."
          }
        ],
        glossary: [
          { term: 'Amandemen UUD 1945', def: 'Perubahan resmi naskah konstitusi UUD 1945 sebanyak empat tahap dari tahun 1999 hingga 2002 tanpa mengubah Pembukaan UUD 1945.' },
          { term: 'Otonomi Daerah', def: 'Kewenangan daerah otonom untuk mengatur dan mengurus kepentingan masyarakat setempat sesuai prakarsa sendiri berdasarkan aspirasi rakyat.' },
          { term: 'Mahkamah Konstitusi', def: 'Lembaga peradilan tertinggi yang mengawal konstitusi melalui uji materi undang-undang dan penyelesaian sengketa pemilu.' },
          { term: 'KPK', def: 'Komisi Pemberantasan Korupsi, lembaga negara independen yang didirikan pada tahun 2002 untuk membasmi tindak pidana korupsi.' },
          { term: 'MoU Helsinki', def: 'Nota kesepahaman damai antara Pemerintah RI dan Gerakan Aceh Merdeka (GAM) yang ditandatangani di Finlandia pada 15 Agustus 2005.' },
          { term: 'Hilirisasi Industri', def: 'Strategi ekonomi meningkatkan nilai tambah bahan mentah tambang melalui proses pemurnian smelter di dalam negeri sebelum diekspor.' },
          { term: 'Smart Forest City', def: 'Konsep tata kota Ibu Kota Nusantara (IKN) yang memadukan teknologi cerdas ramah lingkungan dengan pelestarian hutan hujan tropis.' }
        ],
        reflectionQuestions: [
          'Amandemen UUD 1945 membatasi masa jabatan presiden maksimal 2 periode (10 tahun). Mengapa pembatasan kekuasaan ini mutlak diperlukan untuk mencegah kembalinya kediktatoran otoriter?',
          'Bagaimana Anda sebagai siswa SMK dapat membentengi diri dari pengaruh polarisasi hoaks di media sosial demi menjaga persatuan bangsa Indonesia?'
        ]
      }
    ]
  }
};
