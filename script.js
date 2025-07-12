/**
 * Main JavaScript file for the static website
 * Handles mobile navigation, smooth scrolling, and form interactions
 */

// DOM elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.querySelector('.contact-form');

/**
 * Initialize all event listeners and functionality
 */
function initialize_website() {
    setup_mobile_navigation();
    setup_smooth_scrolling();
    setup_form_handling();
    setup_scroll_effects();
}

/**
 * Setup mobile navigation toggle functionality
 */
function setup_mobile_navigation() {
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Setup smooth scrolling for navigation links
 */
function setup_smooth_scrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Setup contact form handling
 */
function setup_form_handling() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            show_notification('Please fill in all fields', 'error');
            return;
        }
        
        if (!is_valid_email(email)) {
            show_notification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        show_notification('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.reset();
    });
}

/**
 * Setup scroll effects and animations
 */
function setup_scroll_effects() {
    // Add scroll class to header for styling
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-in animations
    const observer_options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observer_options);

    // Observe elements for animation
    const animate_elements = document.querySelectorAll('.project-card, .stat, .contact-method');
    animate_elements.forEach(el => observer.observe(el));
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
function is_valid_email(email) {
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email_regex.test(email);
}

/**
 * Show notification message
 * @param {string} message - Message to display
 * @param {string} type - Type of notification ('success' or 'error')
 */
function show_notification(message, type) {
    // Remove existing notifications
    const existing_notification = document.querySelector('.notification');
    if (existing_notification) {
        existing_notification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Setup close button
    const close_button = notification.querySelector('.notification-close');
    close_button.addEventListener('click', function() {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

/**
 * Add loading animation to buttons
 */
function add_loading_state(button) {
    const original_text = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    return function() {
        button.textContent = original_text;
        button.disabled = false;
    };
}

/**
 * Handle project link clicks
 */
function setup_project_links() {
    const project_links = document.querySelectorAll('.project-link');
    
    project_links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If href is just '#', prevent default and show message
            if (href === '#') {
                e.preventDefault();
                show_notification('Project links will be updated with actual URLs', 'info');
            }
        });
    });
}

/**
 * Add parallax effect to hero section
 */
function setup_parallax_effect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

/**
 * Initialize website when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initialize_website();
    setup_project_links();
    setup_parallax_effect();
});

/**
 * Handle window resize events
 */
window.addEventListener('resize', function() {
    // Close mobile menu on window resize
    if (window.innerWidth > 768) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Export functions for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initialize_website,
        setup_mobile_navigation,
        setup_smooth_scrolling,
        setup_form_handling,
        is_valid_email,
        show_notification
    };
} 