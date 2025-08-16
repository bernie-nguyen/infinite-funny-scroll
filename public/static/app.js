// Infinite Nothing Scroll - The Profound Journey of Meaninglessness

class InfiniteWisdom {
    constructor() {
        this.contentContainer = document.getElementById('wisdom-container');
        this.isLoading = false;
        this.scrollCount = 0;
        
        // Predefined "profound" content that gets progressively more ridiculous
        this.profoundTexts = [
            "Trong vũ trụ bao la, chúng ta chỉ là những hạt bụi nhỏ bé...",
            "Ý nghĩa của cuộc sống không phải để tìm kiếm, mà để tạo ra...",
            "Khi bạn nhìn vào vực thẳm, vực thẳm cũng nhìn lại bạn... và nó đang cười khúc khích",
            "Triết lý cổ xưa dạy: 'Biết mình là không biết gì'... nhưng tôi thậm chí còn không biết điều đó",
            "Thời gian là một ảo tưởng... đặc biệt là khi bạn đang chờ pizza được giao",
            "Sự im lặng là vàng... nhưng tiếng cười là kim cương",
            "Đường đời như một cuộc hành trình... và tôi đã quên mang theo bản đồ",
            "Hạnh phúc là khi thực tế đúng với kỳ vọng... hoặc khi bạn hạ thấp kỳ vọng xuống đủ thấp",
            "Người khôn ngoan nói ít... nhưng người ngu ngẩy thì tweet nhiều",
            "Cuộc sống như một hộp socola... bạn không bao giờ biết viên nào bị kiến cắn",
            "Tình yêu là mù... nhưng hôn nhân làm bạn lấy lại thị lực",
            "Thành công là 1% cảm hứng, 99% mồ hôi... và 50% toán học tồi",
            "Hãy sống như ngày hôm nay là ngày cuối... nhưng đừng quên trả hóa đơn điện",
            "Tri thức là sức mạnh... nhưng wifi mạnh hơn",
            "Những điều tốt nhất trong cuộc sống là miễn phí... trừ pizza",
            "Thời gian trôi nhanh khi bạn đang vui... và chậm như rùa khi bạn đang họp",
            "Con người sinh ra bình đẳng... cho đến khi ai đó phát minh ra wifi VIP",
            "Đừng khóc vì sữa đã đổ... trừ khi đó là sữa organic đắt tiền",
            "Một hành trình ngàn dặm bắt đầu từ một bước... hoặc một cú click Grab",
            "Sự kiên nhẫn là một đức tính... nhưng tôi muốn nó ngay bây giờ!",
            "Tiền không mua được hạnh phúc... nhưng nó mua được pizza, cũng tương tự thôi",
            "Lịch sử lặp lại chính nó... như những lời bài hát K-pop",
            "Sự thật sẽ giải phóng bạn... nhưng trước tiên nó sẽ làm bạn tức giận",
            "Không có gì là không thể... trừ việc tôi hiểu JavaScript closures",
            "Hãy là chính mình... trừ khi bạn có thể là Batman, thì hãy là Batman"
        ];

        this.init();
    }

    init() {
        // Add initial content
        this.addContent("Chào mừng đến với hành trình khám phá vô nghĩa...", "text");
        
        // Setup scroll listener
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Add some initial mystery content
        setTimeout(() => {
            this.addContent("Bạn đang tìm kiếm ý nghĩa?", "text");
        }, 2000);
        
        setTimeout(() => {
            this.addContent("Hoặc chỉ đang trì hoãn công việc?", "text");
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
            this.addContent("Lỗi trong matrix... hoặc chỉ là API đang nghỉ coffee ☕", "text");
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
            
            let jokeText = data.joke || "Tại sao lập trình viên không thích thiên nhiên? Vì nó có quá nhiều bugs! 🐛";
            
            // Add Vietnamese translation for English jokes
            if (data.joke && !this.isVietnamese(data.joke)) {
                jokeText = `🎭 ${data.joke}\n\n(Đùa thế thôi, đừng Google Translate nhé!)`;
            }
            
            this.addContent(jokeText, "joke");
        } catch (error) {
            this.addContent("Joke API đang buồn và không muốn kể chuyện cười 😢", "text");
        }
    }

    async addMeme() {
        try {
            const response = await fetch('https://meme-api.com/gimme');
            const data = await response.json();
            
            if (data.url) {
                this.addContent(data.url, "meme", data.title);
            } else {
                this.addContent("Meme bị mất trong không gian ảo... như tất cả hy vọng của chúng ta", "text");
            }
        } catch (error) {
            this.addContent("Meme API đang có existential crisis 🤔", "text");
        }
    }

    isVietnamese(text) {
        const vietnameseChars = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
        return vietnameseChars.test(text);
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
                             onerror="this.parentElement.innerHTML='<p class=\\'text-gray-500\\'>Hình ảnh đã biến mất vào hư vô... như tất cả mọi thứ khác 👻</p>'">
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
                <span class="text-gray-500">Đang tải sự khôn ngoan...</span>
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
            alert('Không có lối thoát khỏi cuộc sống... nhưng có thể refresh trang này 🔄');
        }
    });
    
    // Add click counter for fun
    let clickCount = 0;
    document.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 10) {
            alert('Bạn đã click 10 lần! Đó là... một thành tích đáng ghi nhận? 🎉');
        } else if (clickCount === 50) {
            alert('50 clicks! Bạn thực sự cần một hobby mới 😅');
        } else if (clickCount === 100) {
            alert('100 clicks!!! OK, tôi thán phục sự kiên trì của bạn 👏');
        }
    });
});