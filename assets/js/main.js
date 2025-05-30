<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dra. Keila Arcanjo - Advogada</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }

        /* Header */
        .header {
            background: #f5f2ed;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            color: #8b3a3a;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .nav {
            display: flex;
            gap: 2rem;
        }

        .nav-btn {
            background: none;
            border: none;
            color: #333;
            padding: 0.8rem 0;
            cursor: pointer;
            font-size: 1rem;
            position: relative;
            transition: color 0.3s ease;
        }

        .nav-btn:hover,
        .nav-btn.active {
            color: #8b3a3a;
        }

        .nav-btn.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: #8b3a3a;
        }

        .cta-btn {
            background: #8b3a3a;
            color: white;
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .cta-btn:hover {
            background: #7a3333;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23445566"/><path d="M100 300 Q200 250 300 300 T500 300" stroke="%23667788" stroke-width="20" fill="none" opacity="0.3"/><circle cx="150" cy="200" r="80" fill="%23556677" opacity="0.4"/><circle cx="650" cy="150" r="60" fill="%23667788" opacity="0.3"/></svg>');
            background-size: cover;
            background-position: center;
            height: 600px;
            display: flex;
            align-items: center;
            padding: 0 2rem;
            gap: 3rem;
            position: relative;
        }

        .hero-content {
            flex: 1;
            color: white;
            max-width: 500px;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            font-weight: 300;
        }

        .hero p {
            font-size: 1rem;
            margin-bottom: 2rem;
            line-height: 1.6;
            max-width: 400px;
        }

        .hero-btn {
            background: #8b3a3a;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .hero-btn:hover {
            background: #7a3333;
        }

        .hero-image {
            width: 350px;
            height: 450px;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 450"><rect width="350" height="450" fill="%23f4f4f4" rx="10"/><rect x="25" y="50" width="300" height="350" fill="%238b3a3a" rx="5"/><rect x="50" y="75" width="250" height="300" fill="%23ffffff" rx="3"/><circle cx="175" cy="150" r="40" fill="%23d4a574"/><rect x="125" y="210" width="100" height="15" rx="7" fill="%23333"/><rect x="100" y="240" width="150" height="10" rx="5" fill="%23666"/><rect x="100" y="260" width="120" height="10" rx="5" fill="%23666"/></svg>') center/cover;
            border-radius: 10px;
            position: relative;
        }

        /* About Section */
        .about {
            background: #f8f8f8;
            padding: 4rem 2rem;
            display: flex;
            align-items: center;
            gap: 4rem;
        }

        .about-image-container {
            position: relative;
            flex-shrink: 0;
        }

        .about-image {
            width: 280px;
            height: 280px;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280"><circle cx="140" cy="140" r="140" fill="%23445566"/><circle cx="140" cy="110" r="35" fill="%23d4a574"/><path d="M90 200 Q140 170 190 200 L190 250 Q140 220 90 250 Z" fill="%238b3a3a"/></svg>') center/cover;
            border-radius: 50%;
            border: 8px solid #556677;
        }

        .circle-accent {
            position: absolute;
            width: 100px;
            height: 100px;
            background: #8b3a3a;
            border-radius: 50%;
            top: -20px;
            left: -30px;
            z-index: -1;
        }

        .about-content {
            flex: 1;
        }

        .about h2 {
            font-size: 2.5rem;
            color: #8b3a3a;
            margin-bottom: 1.5rem;
            font-weight: 400;
        }

        .about p {
            font-size: 1rem;
            color: #666;
            line-height: 1.8;
        }

        /* Services Section */
        .services {
            display: flex;
            min-height: 400px;
        }

        .services-left {
            flex: 1;
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"><rect width="500" height="400" fill="%23445566"/><path d="M50 200 Q150 150 250 200 T450 200" stroke="%23667788" stroke-width="15" fill="none" opacity="0.3"/></svg>');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .services-left h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            font-weight: 300;
        }

        .services-left p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
        }

        .services-btn {
            background: #8b3a3a;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            width: fit-content;
            transition: all 0.3s ease;
        }

        .services-btn:hover {
            background: #7a3333;
        }

        .services-right {
            flex: 1;
            background: #f8f8f8;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        }

        .service-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            border: 1px solid #e0e0e0;
        }

        .service-item:nth-child(even) {
            background: #556677;
            color: white;
        }

        .service-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 1rem;
            background: currentColor;
            mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><rect x="15" y="10" width="30" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="3"/><rect x="20" y="15" width="20" height="3" fill="currentColor"/><rect x="20" y="22" width="15" height="2" fill="currentColor"/><rect x="20" y="27" width="18" height="2" fill="currentColor"/><path d="M25 35 L30 40 L45 25" stroke="currentColor" stroke-width="3" fill="none"/></svg>') center/contain no-repeat;
        }

        .service-item h3 {
            font-size: 1.1rem;
            font-weight: bold;
        }

        /* Testimonials */
        .testimonials {
            background: #f8f8f8;
            padding: 4rem 2rem;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .testimonial {
            background: #556677;
            color: white;
            padding: 2rem;
            border-radius: 10px;
        }

        .testimonial-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .testimonial-avatar {
            width: 50px;
            height: 50px;
            background: #d4a574;
            border-radius: 50%;
        }

        .testimonial-name {
            font-weight: bold;
            font-size: 1.1rem;
        }

        .testimonial p {
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 1rem;
        }

        .stars {
            color: #ffd700;
            font-size: 1.2rem;
        }

        .carousel-dots {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 2rem;
        }

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ccc;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .dot.active {
            background: #8b3a3a;
        }

        /* Comment Form */
        .comment-form {
            background: #556677;
            padding: 2rem;
            text-align: center;
        }

        .comment-form h3 {
            color: white;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .comment-input {
            background: white;
            border: none;
            padding: 1rem;
            margin-right: 1rem;
            border-radius: 5px;
            width: 300px;
        }

        .comment-btn {
            background: #8b3a3a;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .comment-btn:hover {
            background: #7a3333;
        }

        /* Footer */
        .footer {
            background: #556677;
            color: white;
            padding: 3rem 2rem 2rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer-left {
            display: flex;
            gap: 2rem;
        }

        .social-icons {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: white;
            font-size: 1.5rem;
            transition: all 0.3s ease;
        }

        .facebook { background: #3b5998; }
        .instagram { background: #e4405f; }
        .whatsapp { background: #25d366; }

        .social-icon:hover {
            transform: translateY(-2px);
        }

        .footer-nav {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .footer-nav a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.3s ease;
        }

        .footer-nav a:hover {
            color: #8b3a3a;
        }

        .footer-right h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        .map-placeholder {
            width: 100%;
            height: 200px;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23e8f4f8"/><path d="M50 50 Q100 30 150 50 T250 50 T350 50" stroke="%238b3a3a" stroke-width="3" fill="none"/><circle cx="120" cy="80" r="8" fill="%23ff4444"/><circle cx="200" cy="120" r="8" fill="%23ff4444"/><circle cx="280" cy="90" r="8" fill="%23ff4444"/></svg>') center/cover;
            border-radius: 5px;
        }

        .footer-bottom {
            text-align: center;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid #667788;
            color: #ccc;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header {
                flex-direction: column;
                gap: 1rem;
            }

            .nav {
                flex-wrap: wrap;
                justify-content: center;
            }

            .hero {
                flex-direction: column;
                text-align: center;
                height: auto;
                padding: 3rem 1rem;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .about {
                flex-direction: column;
                text-align: center;
            }

            .services {
                flex-direction: column;
            }

            .services-right {
                grid-template-columns: 1fr;
            }

            .testimonials-grid {
                grid-template-columns: 1fr;
            }

            .footer-content {
                grid-template-columns: 1fr;
            }

            .comment-input {
                width: 250px;
                margin-bottom: 1rem;
                margin-right: 0;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="logo">logo</div>
        <nav class="nav">
            <button class="nav-btn active">Sobre</button>
            <button class="nav-btn">Atuação</button>
            <button class="nav-btn">Orçamentos</button>
            <button class="nav-btn">Contatos</button>
        </nav>
        <button class="cta-btn">Faça seu orçamento</button>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Keila Arcanjo</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button class="hero-btn">Faça seu agendamento</button>
        </div>
        <div class="hero-image"></div>
    </section>

    <!-- About Section -->
    <section class="about">
        <div class="about-image-container">
            <div class="circle-accent"></div>
            <div class="about-image"></div>
        </div>
        <div class="about-content">
            <h2>Saiba mais sobre a Dra. Keila</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services">
        <div class="services-left">
            <h2>Área de atuação</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button class="services-btn">Fale conosco</button>
        </div>
        <div class="services-right">
            <div class="service-item">
                <div class="service-icon"></div>
                <h3>DIREITO CIVIL</h3>
            </div>
            <div class="service-item">
                <div class="service-icon"></div>
            </div>
            <div class="service-item">
                <div class="service-icon"></div>
                <h3>DIREITO TRABALHISTA</h3>
            </div>
            <div class="service-item">
                <div class="service-icon"></div>
            </div>
            <div class="service-item">
                <div class="service-icon"></div>
                <h3>DIREITO CRIMINAL</h3>
            </div>
            <div class="service-item">
                <div class="service-icon"></div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
        <div class="testimonials-grid">
            <div class="testimonial">
                <div class="testimonial-header">
                    <div class="testimonial-avatar"></div>
                    <div class="testimonial-name">Jose Maria Costa</div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div class="stars">★★★★★</div>
            </div>
            <div class="testimonial">
                <div class="testimonial-header">
                    <div class="testimonial-avatar"></div>
                    <div class="testimonial-name">Maria Aparecida</div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div class="stars">★★★★★</div>
            </div>
            <div class="testimonial">
                <div class="testimonial-header">
                    <div class="testimonial-avatar"></div>
                    <div class="testimonial-name">Antonio João Silveira</div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div class="stars">★★★★★</div>
            </div>
        </div>
        <div class="carousel-dots">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </section>

    <!-- Comment Form -->
    <section class="comment-form">
        <h3>Envie seu comentário sobre o atendimento</h3>
        <form class="comment-form-inline">
            <input type="text" class="comment-input" placeholder="Digite seu comentário...">
            <button type="submit" class="comment-btn">Enviar</button>
        </form>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-left">
                <div>
                    <div class="social-icons">
                        <a href="#" class="social-icon facebook">📘</a>
                        <a href="#" class="social-icon instagram">📷</a>
                        <a href="#" class="social-icon whatsapp">📱</a>
                    </div>
                    <div class="footer-nav">
                        <a href="#">Sobre</a>
                        <a href="#">Área de atuação</a>
                        <a href="#">Orçamentos</a>
                        <a href="#">Contatos</a>
                    </div>
                </div>
            </div>
            <div class="footer-right">
                <h3>Localização</h3>
                <div class="map-placeholder"></div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Todos os direitos reservados</p>
        </div>
    </footer>

    <script>
        // Navigation functionality
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.nav-btn.active').classList.remove('active');
                btn.classList.add('active');
            });
        });

        // Carousel dots functionality
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                document.querySelector('.dot.active').classList.remove('active');
                dot.classList.add('active');
            });
        });

        // Comment form
        document.querySelector('.comment-form-inline').addEventListener('submit', (e) => {
            e.preventDefault();
            const input = e.target.querySelector('.comment-input');
            if (input.value.trim()) {
                alert('Comentário enviado com sucesso!');
                input.value = '';
            } else {
                alert('Por favor, digite um comentário.');
            }
        });

        // Button actions
        document.querySelectorAll('.cta-btn, .hero-btn, .services-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Funcionalidade em desenvolvimento!');
            });
        });
    </script>
</body>
</html>
