// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains('active');
        
        // Close all other accordions
        accordionButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.nextElementSibling.classList.remove('show');
        });
        
        // Toggle current accordion
        if (!isActive) {
            this.classList.add('active');
            content.classList.add('show');
        }
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .right-card, .duty-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Search functionality
function searchPage(searchTerm) {
    const content = document.body.textContent.toLowerCase();
    return content.includes(searchTerm.toLowerCase());
}

// Highlight search term
function highlightTerm(term) {
    if (term.trim() === '') return;
    
    const body = document.body;
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    const walker = document.createTreeWalker(
        body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    let node;
    const nodes = [];
    
    while (node = walker.nextNode()) {
        nodes.push(node);
    }
    
    nodes.forEach(node => {
        if (regex.test(node.textContent)) {
            const span = document.createElement('span');
            span.innerHTML = node.textContent.replace(
                regex,
                `<mark style="background-color: #fbbf24; padding: 2px 4px; border-radius: 3px;">$&</mark>`
            );
            node.parentNode.replaceChild(span, node);
        }
    });
}

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        accordionButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.nextElementSibling.classList.remove('show');
        });
    }
});

// Print friendly styles
window.addEventListener('beforeprint', function() {
    document.querySelectorAll('.accordion-button').forEach(btn => {
        btn.style.backgroundColor = '#2563eb';
    });
    document.querySelectorAll('.accordion-content').forEach(content => {
        content.style.display = 'block';
    });
});

console.log('CLT Website loaded successfully!');