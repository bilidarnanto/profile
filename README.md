<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bili Darnanto Susilo | Portfolio & Profile</title>
    <!-- Google Fonts & FontAwesome -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --bg-color: #0d1117;
            --card-bg: #161b22;
            --border-color: #30363d;
            --text-primary: #c9d1d9;
            --text-heading: #ffffff;
            --accent-color: #58a6ff;
            --accent-hover: #1f6feb;
            --tag-bg: #21262d;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            line-height: 1.6;
            padding: 2rem 1rem;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            padding: 2.5rem 1.5rem;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            margin-bottom: 2rem;
        }

        header h1 {
            color: var(--text-heading);
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
        }

        header p.subtitle {
            font-size: 1.1rem;
            color: var(--accent-color);
            font-weight: 600;
            margin-bottom: 1rem;
        }

        header p.bio {
            max-width: 700px;
            margin: 0 auto 1.5rem auto;
            font-size: 0.95rem;
        }

        .contact-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .contact-links a {
            color: var(--text-primary);
            text-decoration: none;
            background: var(--tag-bg);
            padding: 0.5rem 1rem;
            border-radius: 6px;
            border: 1px solid var(--border-color);
            font-size: 0.88rem;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .contact-links a:hover {
            border-color: var(--accent-color);
            color: var(--accent-color);
        }

        section {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
        }

        section h2 {
            color: var(--text-heading);
            font-size: 1.4rem;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        section h2 i {
            color: var(--accent-color);
        }

        .item {
            margin-bottom: 1.5rem;
        }

        .item:last-child {
            margin-bottom: 0;
        }

        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-bottom: 0.3rem;
        }

        .item-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-heading);
        }

        .item-company {
            color: var(--accent-color);
            font-weight: 600;
        }

        .item-date {
            font-size: 0.85rem;
            color: #8b949e;
        }

        ul.item-details {
            list-style-type: disc;
            padding-left: 1.2rem;
            font-size: 0.93rem;
            margin-top: 0.5rem;
        }

        ul.item-details li {
            margin-bottom: 0.4rem;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.2rem;
        }

        .skill-category h3 {
            font-size: 1rem;
            color: var(--text-heading);
            margin-bottom: 0.6rem;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tag {
            background: var(--tag-bg);
            border: 1px solid var(--border-color);
            padding: 0.3rem 0.7rem;
            border-radius: 20px;
            font-size: 0.82rem;
        }

        footer {
            text-align: center;
            font-size: 0.85rem;
            color: #8b949e;
            padding-top: 1rem;
        }

        @media (max-width: 600px) {
            .item-header {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>

<div class="container">

    <!-- HEADER SECTION -->
    <header>
        <h1>Bili Darnanto Susilo, M.T.</h1>
        <p classsubtitle">IoT Systems Engineer | Linux & Network Specialist | Renewable Energy</p>
        <p class="bio">
            Magister Teknik Mesin dengan fokus spesialisasi pada Rekayasa Sistem IoT, Energi Terbarukan, dan Infrastruktur IT. Berpengalaman mendesain integrasi hardware/software, mengelola server Linux enterprise, sistem kelistrikan terdistribusi, hingga jaringan Gigabit berkeandalan tinggi.
        </p>
        <div class="contact-links">
            <a href="mailto:bilidarnanto@hotmail.com"><i class="fa-solid fa-envelope"></i> Email</a>
            <a href="tel:+6285334398681"><i class="fa-solid fa-phone"></i> +62 853-3439-8681</a>
            <a href="#"><i class="fa-solid fa-location-dot"></i> Pasuruan, Jawa Timur</a>
            <a href="https://github.com" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
        </div>
    </header>

    <!-- PENGALAMAN KERJA -->
    <section>
        <h2><i class="fa-solid fa-briefcase"></i> Pengalaman Profesional</h2>

        <div class="item">
            <div class="item-header">
                <div>
                    <span class="item-title">IT Networking and Support</span> – <span class="item-company">PT Best Profit Futures</span>
                </div>
                <span class="item-date">Agustus 2022 – Saat Ini</span>
            </div>
            <ul class="item-details">
                <li>Mengelola dan memelihara infrastruktur jaringan IT Gigabit untuk memastikan operasional tanpa hambatan (zero-downtime)[cite: 1].</li>
                <li>Administrasi server Linux (Ubuntu/Debian) menggunakan Nginx, Docker containers, dan optimalisasi swap memory[cite: 1].</li>
                <li>Membangun dan mengelola server Nextcloud internal untuk sinkronisasi data yang aman dan dokumentasi perusahaan[cite: 1].</li>
                <li>Mengembangkan modul aplikasi ERP, mengintegrasikan fitur pembelian multi-item, pembayaran non-tunai, dan cetak struk otomatis (FPDF)[cite: 1].</li>
                <li>Implementasi integrasi komunikasi Starlink dan pemantauan daya baterai LiFePO4 untuk unit perbankan keliling[cite: 1].</li>
            </ul>
        </div>

        <div class="item">
            <div class="item-header">
                <div>
                    <span class="item-title">Production Engineering Technician</span> – <span class="item-company">CV Clawing Kreative</span>
                </div>
                <span class="item-date">Januari 2022 – Saat Ini</span>
            </div>
            <ul class="item-details">
                <li>Merancang dan memproduksi sistem kelistrikan khusus kendaraan campervan dengan fokus pada efisiensi daya[cite: 1].</li>
                <li>Mengoptimalkan proses produksi guna menekan lead time dan biaya operasional tanpa mengurangi standar mutu[cite: 1].</li>
            </ul>
        </div>

        <div class="item">
            <div class="item-header">
                <div>
                    <span class="item-title">Asisten Profesor & Laboratorium</span> – <span class="item-company">Universitas Negeri Malang</span>
                </div>
                <span class="item-date">Agustus 2020 – Desember 2021</span>
            </div>
            <ul class="item-details">
                <li>Melakukan riset tingkat lanjut pada Nanoselulosa Bakteri (BNC) dari limbah nanas untuk aplikasi anoda baterai[cite: 1].</li>
                <li>Fabrikasi dan karakterisasi film komposit diperkuat Graphite Nanoplatelets untuk baterai Lithium-ion[cite: 1].</li>
            </ul>
        </div>

        <div class="item">
            <div class="item-header">
                <div>
                    <span class="item-title">Community Service Practitioner (IoT & PV System)</span> – <span class="item-company">Universitas Negeri Malang</span>
                </div>
                <span class="item-date">Oktober 2020 – September 2021</span>
            </div>
            <ul class="item-details">
                <li>Merancang perangkat IoT untuk mengontrol mesin microbubble generator bertenaga surya[cite: 1].</li>
                <li>Membangun dan memantau sistem PLTS Off-Grid 1 kW serta menetapkan protokol remote monitoring IoT[cite: 1].</li>
            </ul>
        </div>
    </section>

    <!-- PENDIDIKAN -->
    <section>
        <h2><i class="fa-solid fa-graduation-cap"></i> Pendidikan</h2>
        
        <div class="item">
            <div class="item-header">
                <div>
                    <span class="item-title">Magister Teknik Mesin (M.T.)</span> – <span class="item-company">Universitas Negeri Malang</span>
                </div>
                <span class="item-date">2021 | IPK: 3.60 / 4.00</span>
            </div>
        </div>

        <div class="item">
            <div class="item-header">
                <div>
                    <span class="item-title">Sarjana Teknik Mesin (S.T.)</span> – <span class="item-company">Universitas Jember</span>
                </div>
                <span class="item-date">2019 | IPK: 3.55 / 4.00</span>
            </div>
        </div>
    </section>

    <!-- KEAHLIAN & SERTIFIKASI -->
    <section>
        <h2><i class="fa-solid fa-gears"></i> Keahlian & Lisensi</h2>
        
        <div class="skills-grid">
            <div class="skill-category">
                <h3>IT & Software</h3>
                <div class="tags">
                    <span class="tag">Linux (Debian/Ubuntu)</span>
                    <span class="tag">Docker</span>
                    <span class="tag">Nginx</span>
                    <span class="tag">Gigabit Networking</span>
                    <span class="tag">PHP</span>
                    <span class="tag">HTML/CSS</span>
                    <span class="tag">C</span>
                    <span class="tag">Nextcloud</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Engineering & Renewable Energy</h3>
                <div class="tags">
                    <span class="tag">IoT Development</span>
                    <span class="tag">Desain Sistem PLTS (PV)</span>
                    <span class="tag">LiFePO4 Power Management</span>
                    <span class="tag">Turbin Angin (NACA Airfoil)</span>
                    <span class="tag">Autodesk Inventor (CAD)</span>
                </div>
            </div>
        </div>

        <div style="margin-top: 1.5rem;">
            <p><strong>Sertifikasi / Lisensi:</strong> Surat Pencatatan Ciptaan (KEMENKUMHAM) No. 000331414[cite: 1].</p>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 Bili Darnanto Susilo. Built with GitHub Pages.</p>
    </footer>

</div>

</body>
</html>
