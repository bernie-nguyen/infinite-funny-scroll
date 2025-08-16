import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for API requests
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Main page - The mysterious infinite scroll experience
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Infinite Scroll of Profound Nothingness</title>
        <meta name="description" content="Một hành trình khám phá vô nghĩa nhưng đầy ý nghĩa trong vũ trụ vô tận của sự hài hước">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Custom Fonts & Styles -->
        <link href="/static/style.css" rel="stylesheet">
        
        <!-- Favicon -->
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌀</text></svg>">
        
        <!-- Meta tags for mysterious feel -->
        <meta property="og:title" content="The Infinite Scroll of Profound Nothingness">
        <meta property="og:description" content="Khám phá những triết lý sâu sắc... hoặc không">
        <meta property="og:type" content="website">
    </head>
    <body>
        <!-- Scroll Progress Indicator -->
        <div class="scroll-progress" id="scroll-progress"></div>
        
        <!-- Mysterious Floating Elements -->
        <div class="floating-element" style="top: 20%; left: 10%;">🌀</div>
        <div class="floating-element" style="top: 60%; right: 15%; animation-delay: -2s;">✨</div>
        <div class="floating-element" style="top: 40%; left: 80%; animation-delay: -4s;">🔮</div>
        
        <!-- Header Section -->
        <header class="header">
            <h1>The Infinite Scroll of Profound Nothingness</h1>
            <p class="subtitle">
                Một cuộc hành trình khám phá những triết lý sâu sắc về cuộc sống, 
                vũ trụ và mọi thứ... hoặc có thể chỉ là những điều ngẫu nhiên vô nghĩa.
            </p>
            <div class="mysterious-hint">
                ↓ Cuộn xuống để khám phá sự khôn ngoan vô tận ↓
            </div>
        </header>

        <!-- Main Content Container -->
        <main class="main-content">
            <div id="wisdom-container">
                <!-- Dynamic content will be loaded here by JavaScript -->
            </div>
        </main>

        <!-- Footer Hint -->
        <footer class="footer-hint">
            <p>
                "Trong cuộc sống, có những câu hỏi không có câu trả lời...<br>
                và có những câu trả lời không ai hỏi."
            </p>
            <p style="margin-top: 1rem; font-size: 0.8rem; opacity: 0.5;">
                💡 Tip: Nhấn ESC để... à không, không có gì xảy ra đâu.
            </p>
        </footer>

        <!-- Scripts -->
        <script>
            // Scroll progress indicator
            window.addEventListener('scroll', () => {
                const scrollProgress = document.getElementById('scroll-progress');
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollTop = window.pageYOffset;
                const scrollPercentage = (scrollTop / scrollHeight) * 100;
                scrollProgress.style.transform = \`scaleX(\${scrollPercentage / 100})\`;
            });
            
            // Add some mysterious console messages
            console.log("🌀 Chào mừng đến với The Infinite Scroll of Profound Nothingness");
            console.log("💭 Bạn đang tìm kiếm gì trong console?");
            console.log("🤔 Có lẽ câu trả lời nằm ở việc... cuộn xuống?");
        </script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

// API endpoint for health check
app.get('/api/health', (c) => {
  return c.json({ 
    status: 'alive', 
    message: 'The infinite scroll is infinitely scrolling...',
    wisdom: 'Server status: Existentially questioning its purpose but running fine 🤖'
  })
})

// API endpoint for random wisdom (backup if external APIs fail)
app.get('/api/wisdom', (c) => {
  const wisdomQuotes = [
    "Cuộc sống như một API - đôi khi nó hoạt động, đôi khi trả về 404",
    "Debug code như tìm kiếm ý nghĩa cuộc sống - khó khăn nhưng đáng giá",
    "Trong vũ trụ vô tận, bugs vẫn là vô hạn hơn",
    "Một developer khôn ngoan nói: 'It works on my machine' ",
    "Tính năng hay bug? Đó là câu hỏi triết học của kỷ nguyên số",
    "Coffee + Code = Infinite Possibilities",
    "Tại sao developers thích dark mode? Vì ánh sáng làm lộ bugs!",
    "Git commit như những lời hứa - đầy hy vọng nhưng thường bị revert"
  ];
  
  const randomWisdom = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
  
  return c.json({
    wisdom: randomWisdom,
    timestamp: new Date().toISOString(),
    source: 'The Infinite Database of Developer Wisdom'
  });
})

export default app
