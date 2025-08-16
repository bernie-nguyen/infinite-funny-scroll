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
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Infinite Scroll of Profound Nothingness</title>
        <meta name="description" content="A journey of meaningless exploration that's somehow meaningful in the infinite universe of humor">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Custom Fonts & Styles -->
        <link href="/static/style.css" rel="stylesheet">
        
        <!-- Favicon -->
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌀</text></svg>">
        
        <!-- Meta tags for mysterious feel -->
        <meta property="og:title" content="The Infinite Scroll of Profound Nothingness">
        <meta property="og:description" content="Explore deep philosophies... or maybe not">
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
                A journey through the deep philosophies of life, 
                the universe, and everything... or perhaps just random meaningless things.
            </p>
            <div class="mysterious-hint">
                ↓ Scroll down to discover infinite wisdom ↓
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
                "In life, there are questions without answers...<br>
                and answers that nobody asked for."
            </p>
            <p style="margin-top: 1rem; font-size: 0.8rem; opacity: 0.5;">
                💡 Tip: Press ESC for... well, nothing really happens.
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
            console.log("🌀 Welcome to The Infinite Scroll of Profound Nothingness");
            console.log("💭 What are you looking for in the console?");
            console.log("🤔 Perhaps the answer lies in... scrolling down?");
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
    "Life is like an API - sometimes it works, sometimes it returns 404",
    "Debugging code is like seeking the meaning of life - difficult but worthwhile",
    "In the infinite universe, bugs are still more infinite",
    "A wise developer once said: 'It works on my machine'",
    "Feature or bug? That's the philosophical question of the digital age",
    "Coffee + Code = Infinite Possibilities",
    "Why do developers love dark mode? Because light reveals all the bugs!",
    "Git commits are like promises - full of hope but often get reverted",
    "There are only 10 types of people: those who understand binary and those who don't",
    "A programmer's wife asks: 'Would you go to the store and pick up a loaf of bread? And if they have eggs, get a dozen.' The programmer returns with 12 loaves of bread.",
    "Why do programmers prefer dark mode? Light attracts bugs!",
    "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science"
  ];
  
  const randomWisdom = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
  
  return c.json({
    wisdom: randomWisdom,
    timestamp: new Date().toISOString(),
    source: 'The Infinite Database of Developer Wisdom'
  });
})

export default app
