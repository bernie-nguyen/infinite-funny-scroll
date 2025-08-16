// Infinite Nothing Scroll - The Profound Journey of Meaninglessness

class InfiniteWisdom {
    constructor() {
        this.contentContainer = document.getElementById('wisdom-container');
        this.isLoading = false;
        this.scrollCount = 0;
        
        // Predefined "profound" content that gets progressively more ridiculous
        this.profoundTexts = [
            "In the vast cosmos, we are but tiny specks of dust...",
            "The meaning of life is not to be found, but to be created...",
            "When you stare into the abyss, the abyss stares back... and it's giggling",
            "Ancient philosophy teaches: 'To know that you know nothing'... but I don't even know that",
            "Time is an illusion... especially when you're waiting for pizza delivery",
            "Silence is golden... but laughter is diamond",
            "Life's journey is like a road trip... and I forgot to bring the map",
            "Happiness is when reality meets expectations... or when you lower expectations enough",
            "Wise people speak little... but foolish people tweet a lot",
            "Life is like a box of chocolates... you never know which one has ants in it",
            "Love is blind... but marriage gives you back your sight",
            "Success is 1% inspiration, 99% perspiration... and 50% bad math",
            "Live each day like it's your last... but don't forget to pay the electricity bill",
            "Knowledge is power... but WiFi is stronger",
            "The best things in life are free... except pizza",
            "Time flies when you're having fun... and crawls like a turtle during meetings",
            "All humans are born equal... until someone invented premium WiFi",
            "Don't cry over spilled milk... unless it's organic and expensive",
            "A journey of a thousand miles begins with a single step... or a Uber ride",
            "Patience is a virtue... but I want it right now!",
            "Money can't buy happiness... but it can buy pizza, which is pretty close",
            "History repeats itself... like K-pop song lyrics",
            "The truth will set you free... but first it will make you angry",
            "Nothing is impossible... except me understanding JavaScript closures",
            "Be yourself... unless you can be Batman, then be Batman",
            "They say laughter is the best medicine... but have you tried chocolate?",
            "Home is where the heart is... and where the WiFi connects automatically",
            "Early bird gets the worm... but the second mouse gets the cheese",
            "Practice makes perfect... but nobody's perfect, so why practice?",
            "If at first you don't succeed... try doing it the way your wife told you",
            "The pen is mightier than the sword... but the keyboard is mightier than both",
            "Actions speak louder than words... unless you're in a library",
            "Fortune favors the bold... and also people who read the fine print",
            "You can't teach an old dog new tricks... but you can teach it to use Spotify",
            "Better late than never... unless you're a programmer fixing production bugs"
        ];

        this.init();
    }

    init() {
        // Add initial content
        this.addContent("Welcome to the journey of meaningless exploration...", "text");
        
        // Setup scroll listener
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Add some initial mystery content
        setTimeout(() => {
            this.addContent("Are you seeking meaning?", "text");
        }, 2000);
        
        setTimeout(() => {
            this.addContent("Or just procrastinating?", "text");
        }, 4000);
    }

    handleScroll() {
        if (this.isLoading) return;
        
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        
        // Trigger when user scrolls to 80% of the page
        if (scrollTop + clientHeight >= scrollHeight * 0.8) {
            this.loadMoreContent();
        }
    }

    async loadMoreContent() {
        this.isLoading = true;
        this.scrollCount++;
        
        // Show loading indicator
        this.addLoadingIndicator();
        
        // Random content type
        const contentTypes = ['text', 'joke', 'meme'];
        const randomType = contentTypes[Math.floor(Math.random() * contentTypes.length)];
        
        try {
            switch (randomType) {
                case 'text':
                    await this.addProfoundText();
                    break;
                case 'joke':
                    await this.addJoke();
                    break;
                case 'meme':
                    await this.addMeme();
                    break;
            }
        } catch (error) {
            console.error('Error loading content:', error);
            this.addContent("Error in the matrix... or maybe the API is just having coffee ☕", "text");
        }
        
        this.removeLoadingIndicator();
        this.isLoading = false;
    }

    addProfoundText() {
        const randomText = this.profoundTexts[Math.floor(Math.random() * this.profoundTexts.length)];
        this.addContent(randomText, "text");
    }

    async addJoke() {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single&safe-mode');
            const data = await response.json();
            
            let jokeText = data.joke || "Why don't programmers like nature? It has too many bugs! 🐛";
            
            this.addContent(jokeText, "joke");
        } catch (error) {
            this.addContent("The Joke API is feeling sad and doesn't want to tell jokes 😢", "text");
        }
    }

    async addMeme() {
        try {
            const response = await fetch('https://meme-api.com/gimme');
            const data = await response.json();
            
            if (data.url) {
                this.addContent(data.url, "meme", data.title);
            } else {
                this.addContent("The meme got lost in cyberspace... like all our hopes and dreams", "text");
            }
        } catch (error) {
            this.addContent("The Meme API is having an existential crisis 🤔", "text");
        }
    }

    addContent(content, type, title = '') {
        const contentElement = document.createElement('div');
        contentElement.className = 'content-item opacity-0 transform translate-y-4 transition-all duration-700 ease-out';
        
        let innerHTML = '';
        
        switch (type) {
            case 'text':
                innerHTML = `
                    <div class="text-content">
                        <p class="text-lg md:text-xl leading-relaxed text-gray-800">${content}</p>
                    </div>
                `;
                break;
                
            case 'joke':
                innerHTML = `
                    <div class="joke-content bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-l-4 border-orange-400">
                        <div class="text-sm text-orange-600 font-medium mb-2">WISDOM FRAGMENT</div>
                        <p class="text-gray-800 whitespace-pre-line">${content}</p>
                    </div>
                `;
                break;
                
            case 'meme':
                innerHTML = `
                    <div class="meme-content text-center">
                        <div class="text-sm text-gray-500 mb-4">VISUAL ENLIGHTENMENT</div>
                        ${title ? `<h3 class="text-lg font-medium mb-4 text-gray-700">${title}</h3>` : ''}
                        <img src="${content}" alt="Meme" class="max-w-full h-auto rounded-lg shadow-lg mx-auto" loading="lazy"
                             onerror="this.parentElement.innerHTML='<p class=\\'text-gray-500\\'>The image vanished into the void... like everything else 👻</p>'">
                    </div>
                `;
                break;
        }
        
        contentElement.innerHTML = innerHTML;
        this.contentContainer.appendChild(contentElement);
        
        // Trigger animation
        setTimeout(() => {
            contentElement.classList.remove('opacity-0', 'translate-y-4');
            contentElement.classList.add('opacity-100', 'translate-y-0');
        }, 100);
        
        // Add some spacing
        const spacer = document.createElement('div');
        spacer.className = 'h-12';
        this.contentContainer.appendChild(spacer);
    }

    addLoadingIndicator() {
        const loader = document.createElement('div');
        loader.id = 'loading-indicator';
        loader.className = 'text-center py-8';
        loader.innerHTML = `
            <div class="inline-flex items-center space-x-2">
                <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
                <span class="text-gray-500">Loading wisdom...</span>
            </div>
        `;
        this.contentContainer.appendChild(loader);
    }

    removeLoadingIndicator() {
        const loader = document.getElementById('loading-indicator');
        if (loader) {
            loader.remove();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new InfiniteWisdom();
    
    // Add some interactive elements
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            alert('There is no escape from life... but you can refresh this page 🔄');
        }
    });
    
    // Add click counter for fun
    let clickCount = 0;
    document.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 10) {
            alert('You clicked 10 times! That is... a noteworthy achievement? 🎉');
        } else if (clickCount === 50) {
            alert('50 clicks! You really need a new hobby 😅');
        } else if (clickCount === 100) {
            alert('100 clicks!!! OK, I admire your persistence 👏');
        }
    });
});