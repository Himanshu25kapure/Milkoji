/* ===========================================
   MILKOJI - PREMIUM JAVASCRIPT
   Interactive Features & Animations
   =========================================== */

// ===== STRICT MODE =====
'use strict';

// ===== DOM ELEMENTS =====
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navClose = document.getElementById('navClose');
const navLinks = document.querySelectorAll('.nav__link');
const faqItems = document.querySelectorAll('.faq__item');
const testimonialSlider = document.getElementById('testimonialSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderDots = document.getElementById('sliderDots');

// ===== MOBILE NAVIGATION =====
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

if (navToggle) {
    navToggle.addEventListener('click', toggleMobileNav);
}

if (navClose) {
    navClose.addEventListener('click', toggleMobileNav);
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMobileNav();
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)) {
        toggleMobileNav();
    }
});

// ===== HEADER SCROLL EFFECT =====
let lastScroll = 0;

function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleScroll);

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        
        if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ===== FAQ ACCORDION =====
faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== TESTIMONIALS SLIDER =====
class TestimonialSlider {
    constructor(sliderElement, dotsElement, prevButton, nextButton) {
        this.slider = sliderElement;
        this.dotsContainer = dotsElement;
        this.prevBtn = prevButton;
        this.nextBtn = nextButton;
        this.cards = Array.from(this.slider.querySelectorAll('.testimonial__card'));
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000;
        
        this.init();
    }
    
    init() {
        if (this.cards.length === 0) return;
        
        // Create dots
        this.createDots();
        
        // Show first card
        this.showCard(0);
        
        // Event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevCard());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextCard());
        }
        
        // Start autoplay
        this.startAutoplay();
        
        // Pause on hover
        this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        // Only create dots if there are multiple cards
        if (this.cards.length <= 1) return;
        
        this.cards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('slider__dot');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            
            if (index === 0) {
                dot.classList.add('active');
            }
            
            dot.addEventListener('click', () => {
                this.showCard(index);
                this.stopAutoplay();
                this.startAutoplay();
            });
            
            this.dotsContainer.appendChild(dot);
        });
    }
    
    showCard(index) {
        // Hide all cards
        this.cards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Show current card
        if (this.cards[index]) {
            this.cards[index].style.display = 'block';
        }
        
        // Update dots
        if (this.dotsContainer) {
            const dots = this.dotsContainer.querySelectorAll('.slider__dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        this.currentIndex = index;
    }
    
    nextCard() {
        const nextIndex = (this.currentIndex + 1) % this.cards.length;
        this.showCard(nextIndex);
    }
    
    prevCard() {
        const prevIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.showCard(prevIndex);
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextCard();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

// Initialize testimonial slider
if (testimonialSlider && prevBtn && nextBtn && sliderDots) {
    new TestimonialSlider(testimonialSlider, sliderDots, prevBtn, nextBtn);
}

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with data-aos attribute (for simple fade-in effect)
document.querySelectorAll('[data-aos]').forEach(el => {
    // Set initial state
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // Get delay if specified
    const delay = el.getAttribute('data-aos-delay');
    if (delay) {
        el.style.transitionDelay = `${parseInt(delay)}ms`;
    }
    
    observer.observe(el);
});

// ===== LAZY LOADING IMAGES =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    handleScroll();
    highlightActiveSection();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== PREVENT LAYOUT SHIFT =====
// Set explicit heights for images once loaded
document.querySelectorAll('img').forEach(img => {
    if (img.complete) {
        img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
    } else {
        img.addEventListener('load', function() {
            this.style.aspectRatio = `${this.naturalWidth} / ${this.naturalHeight}`;
        });
    }
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Keyboard navigation for slider
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && prevBtn) {
        prevBtn.click();
    } else if (e.key === 'ArrowRight' && nextBtn) {
        nextBtn.click();
    }
});

// ===== WHATSAPP BUTTON ANALYTICS (Optional) =====
const whatsappButton = document.querySelector('.whatsapp__float');
if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('WhatsApp button clicked');
    });
}

// ===== INITIALIZATION LOG =====
console.log('🥛 Milkoji website loaded successfully!');

// ===== CSS FOR SLIDER DOTS (Injected via JS) =====
const style = document.createElement('style');
style.textContent = `
    .slider__dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--color-gray-light);
        border: none;
        cursor: pointer;
        transition: var(--transition-base);
    }
    
    .slider__dot.active {
        background: var(--color-saffron);
        transform: scale(1.2);
    }
    
    .slider__dot:hover {
        background: var(--color-saffron-light);
    }
`;
document.head.appendChild(style);

/* ===== BUSINESS CONFIG (SIMULATED CMS) ===== */
const BUSINESS_CONFIG = {
  phone: "919876543210",
  whatsapp: "919876543210",
  deliveryRadiusKm: 8,
  prices: {
    "500ml": 900,
    "1L": 1700
  }
};

/* ===== ORDER STATUS (DEMO) ===== */
const statusForm = document.getElementById("statusForm");
const statusResult = document.getElementById("statusResult");

if (statusForm) {
  statusForm.addEventListener("submit", e => {
    e.preventDefault();

    const stages = [
      "📩 Order Received",
      "✅ Order Confirmed",
      "🧈 In Preparation",
      "🚚 Ready for Delivery"
    ];

    const randomStage = stages[Math.floor(Math.random() * stages.length)];

    statusResult.innerHTML = `
      <div class="status__card">
        <strong>Status:</strong> ${randomStage}
        <p class="muted">Updates provided after confirmation</p>
      </div>
    `;
  });
}


/* ===== SMART ORDER FLOW ===== */
const orderForm = document.getElementById("orderForm");
const orderSuccess = document.getElementById("orderSuccess");
const orderRefBox = document.getElementById("orderRef");
const orderWhatsapp = document.getElementById("orderWhatsapp");

if (orderForm) {
  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = product.value;
    const qty = quantity.value;
    const name = customerName.value;
    const phone = customerPhone.value;
    const area = customerArea.value;

    const refId = "MKJ-" + Math.floor(1000 + Math.random() * 9000);

    orderRefBox.textContent = refId;

    const message = `
Order Ref: ${refId}
Name: ${name}
Product: ${product}
Quantity: ${qty}
Area: ${area}
Phone: ${phone}
`;

    orderWhatsapp.href =
      `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=` +
      encodeURIComponent(message);

    orderSuccess.style.display = "block";
    orderForm.reset();
  });
}
