(function() {
    "use strict";

    // ======================
    // Core Initialization
    // ======================
    
    // Preloader
    function initPreloader() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            window.addEventListener('load', function() {
                setTimeout(() => {
                    preloader.classList.add('fade-out');
                    
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 500);
                }, 1000);
            });
        }
    }

    // Initialize all components
    function initAll() {
        initPreloader();
        initNavigation();
        initHeaderScroll();
        initSmoothScroll();
        initActiveNavLinks();
        initThemeToggle(); // Initialize theme (dark mode only)
        initTypedText();
        initCounters();
        initSkillBars();
        initScrollAnimations();
        initResumeDownload();
        initContactForm();
        initProjectsInteraction();
        initAnimateOnScroll();
        initFormAnimations();
        initTechStackAnimation();
        
        // Skills functions
        initSkillsFilter();
        initExpandableCategories();
        initTechItemHover();
        
        // Initialize particles after everything is loaded
        initParticles();
        
        // Set dark mode as default
        setDarkModeDefault();
    }

    // Run initialization when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    // ======================
    // Set Dark Mode as Default
    // ======================
    
    function setDarkModeDefault() {
        // Always set dark mode
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        
        // Update theme toggle button (only moon icon)
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.classList.add('active');
        }
        
        // Initialize particles for dark mode
        if (typeof particlesJS !== 'undefined') {
            initParticles();
        }
    }

    // ======================
    // Theme Toggle - Dark Mode Only (Theme toggle removed)
    // ======================
    
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        
        // Remove the sun icon from HTML and keep only moon
        if (themeToggle) {
            // Keep only moon icon
            const sunIcon = themeToggle.querySelector('.bx-sun');
            if (sunIcon) {
                sunIcon.remove();
            }
            
            // Remove click event listener for theme toggle
            themeToggle.style.cursor = 'default';
            themeToggle.addEventListener('click', function(e) {
                e.preventDefault();
                // Show a message or do nothing
                showThemeNotification();
            });
        }
        
        // Function to show notification about dark mode only
        function showThemeNotification() {
            // Remove existing notifications
            const existingNotification = document.querySelector('.theme-notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'theme-notification';
            notification.innerHTML = `
                <i class="bx bx-moon"></i>
                <span>Dark Mode Only - Designed for optimal viewing</span>
                <button class="notification-close">&times;</button>
            `;
            
            // Add styles
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--primary-color);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: var(--radius-md);
                display: flex;
                align-items: center;
                gap: 0.75rem;
                z-index: 9999;
                box-shadow: var(--shadow-lg);
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            `;
            
            document.body.appendChild(notification);
            
            // Close button
            notification.querySelector('.notification-close').addEventListener('click', () => {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            });
            
            // Auto remove after 3 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.animation = 'slideOutRight 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }
            }, 3000);
        }
        
        // Add keyframes for notification animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ======================
    // Particles Configuration (Dark Mode Only)
    // ======================
    
    function initParticles() {
        if (typeof particlesJS === 'undefined') return;
        
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#60a5fa", "#a855f7", "#22d3ee", "#3b82f6"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.4,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#60a5fa",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.4
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // ======================
    // Navigation & Header
    // ======================
    
    function initNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.classList.toggle('mobile-nav-active');
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('mobile-nav-active');
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('mobile-nav-active');
                }
            });
            
            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('mobile-nav-active');
                }
            });
        }
    }

    function initHeaderScroll() {
        const header = document.getElementById('header');
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
                
                if (currentScroll > lastScroll && currentScroll > 200) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            } else {
                header.classList.remove('scrolled');
                header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });
    }

    function initActiveNavLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        function activateNavLink() {
            const scrollY = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        window.addEventListener('scroll', throttle(activateNavLink, 100));
        activateNavLink(); // Initial call
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('#header')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash without scrolling
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    // ======================
    // Typing Effect
    // ======================
    
    function initTypedText() {
        const typedText = document.getElementById('typedText');
        if (!typedText) return;
        
        const texts = [
            'Full-Stack Developer',
            'Laravel Expert',
            'Next.js Specialist',
            'API Architect',
            'SaaS Developer'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isEnd = false;
        let typingSpeed = 100;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isEnd = true;
                typingSpeed = 1500;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }
            
            if (isEnd) {
                setTimeout(() => {
                    isDeleting = true;
                    isEnd = false;
                    setTimeout(type, typingSpeed);
                }, typingSpeed);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
        
        // Start typing after a delay
        setTimeout(type, 1000);
    }

    // ======================
    // Animated Counters
    // ======================
    
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        function animateCounter(counter) {
            const target = parseInt(counter.getAttribute('data-count'));
            const increment = target / 200;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 10);
        }
        
        // Intersection Observer for counters
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    animateCounter(counter);
                    counterObserver.unobserve(counter);
                }
            });
        }, { 
            threshold: 0.5,
            rootMargin: '50px'
        });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    // ======================
    // Skill Bars Animation
    // ======================
    
    function initSkillBars() {
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            skillBars.forEach(bar => {
                const percent = bar.getAttribute('data-percent');
                bar.style.width = percent + '%';
            });
        }
        
        // Intersection Observer for skill bars
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.3,
            rootMargin: '50px'
        });
        
        document.querySelectorAll('.skill-category').forEach(category => {
            skillObserver.observe(category);
        });
    }

    // ======================
    // Skills Filter Functionality
    // ======================

    function initSkillsFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const skillCategories = document.querySelectorAll('.skill-category');
        const techItems = document.querySelectorAll('.cloud-item');
        
        if (!filterButtons.length) return;
        
        // Function to filter skills
        function filterSkills(filter) {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === filter) {
                    btn.classList.add('active');
                }
            });
            
            // Show/hide skill categories with animation
            skillCategories.forEach(category => {
                const categoryType = category.getAttribute('data-category');
                
                if (filter === 'all' || categoryType === filter) {
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    category.style.opacity = '0';
                    category.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        category.style.display = 'none';
                    }, 300);
                }
            });
            
            // Show/hide tech items with animation
            techItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filter === 'all' || itemCategory === filter) {
                    item.style.display = 'flex';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            
            // Update visualization if needed
            updateVisualization(filter);
        }
        
        // Update visualization based on filter
        function updateVisualization(filter) {
            const radialChart = document.querySelector('.radial-chart');
            const chartValue = document.querySelector('.chart-value');
            
            if (!radialChart || !chartValue) return;
            
            let averagePercent = 90; // Default for all
            
            switch(filter) {
                case 'backend':
                    averagePercent = 92;
                    break;
                case 'frontend':
                    averagePercent = 90;
                    break;
                case 'database':
                    averagePercent = 89;
                    break;
                case 'infrastructure':
                    averagePercent = 88;
                    break;
            }
            
            // Animate the chart
            chartValue.textContent = `${averagePercent}%`;
            radialChart.style.background = `conic-gradient(var(--primary-color) 0% ${averagePercent}%, var(--bg-tertiary) ${averagePercent}% 100%)`;
            
            // Add animation effect
            radialChart.style.transform = 'scale(1.1)';
            setTimeout(() => {
                radialChart.style.transform = 'scale(1)';
            }, 300);
        }
        
        // Add click event to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                filterSkills(filter);
                
                // Add click feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
        
        // Initialize all categories with animation
        function initializeCategories() {
            skillCategories.forEach((category, index) => {
                category.style.opacity = '0';
                category.style.transform = 'translateY(20px)';
                category.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                
                setTimeout(() => {
                    category.style.opacity = '1';
                    category.style.transform = 'translateY(0)';
                }, index * 100);
            });
            
            techItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.9)';
                item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, index * 50 + 300);
            });
            
            // Initialize with all skills showing
            filterSkills('all');
        }
        
        // Initialize on page load
        setTimeout(initializeCategories, 100);
    }

    // ======================
    // Expandable Skill Categories
    // ======================

    function initExpandableCategories() {
        const expandButtons = document.querySelectorAll('.category-expand-btn');
        
        expandButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.closest('.skill-category');
                const items = category.querySelector('.skill-items');
                const icon = this.querySelector('i');
                
                category.classList.toggle('expanded');
                
                if (category.classList.contains('expanded')) {
                    items.style.maxHeight = items.scrollHeight + 'px';
                    icon.classList.remove('bx-chevron-down');
                    icon.classList.add('bx-chevron-up');
                    
                    // Animate skill bars when expanded
                    const skillBars = category.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const percent = bar.getAttribute('data-percent');
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = percent + '%';
                        }, 300);
                    });
                } else {
                    items.style.maxHeight = '0';
                    icon.classList.remove('bx-chevron-up');
                    icon.classList.add('bx-chevron-down');
                }
            });
        });
        
        // Add CSS for smooth expansion
        const style = document.createElement('style');
        style.textContent = `
            .skill-items {
                max-height: 1000px;
                overflow: hidden;
                transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .skill-category.expanded {
                box-shadow: var(--shadow-2xl);
                border-color: var(--primary-color);
            }
        `;
        document.head.appendChild(style);
    }

    // ======================
    // Hover Effects for Tech Items
    // ======================

    function initTechItemHover() {
        const techItems = document.querySelectorAll('.tech-item, .cloud-item');
        
        techItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const allItems = this.parentElement.querySelectorAll('.tech-item, .cloud-item');
                allItems.forEach(otherItem => {
                    if (otherItem !== this) {
                        otherItem.style.opacity = '0.6';
                        otherItem.style.transform = 'scale(0.95)';
                    }
                });
            });
            
            item.addEventListener('mouseleave', function() {
                const allItems = this.parentElement.querySelectorAll('.tech-item, .cloud-item');
                allItems.forEach(otherItem => {
                    otherItem.style.opacity = '1';
                    otherItem.style.transform = 'scale(1)';
                });
            });
        });
    }

    // ======================
    // Scroll Animations
    // ======================
    
    function initScrollAnimations() {
        // Add animation classes to elements
        const animateElements = document.querySelectorAll('.fade-in, [data-aos]');
        
        animateElements.forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            el.style.transitionDelay = `${index * 100}ms`;
        });
        
        // Intersection Observer for animations
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            fadeObserver.observe(element);
        });
    }

    function initAnimateOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });
    }

    // ======================
    // Tech Stack Animation
    // ======================
    
    function initTechStackAnimation() {
        const techItems = document.querySelectorAll('.tech-item');
        
        techItems.forEach((item, index) => {
            item.style.setProperty('--i', index);
            item.style.animation = `float 3s ease-in-out infinite`;
            item.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // ======================
    // Form Animations
    // ======================
    
    function initFormAnimations() {
        const formGroups = document.querySelectorAll('.form-group');
        
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            
            input.addEventListener('focus', () => {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value.trim()) {
                    group.classList.remove('focused');
                }
            });
            
            // Check on page load
            if (input.value.trim()) {
                group.classList.add('focused');
            }
        });
    }

    // ======================
    // Contact Form
    // ======================
    
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Add loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
            submitButton.disabled = true;
            
            try {
                // Send email using Formspree or similar service
                const response = await fetch('https://formspree.io/f/mpzvbdkd', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    
                    // Remove focused classes
                    document.querySelectorAll('.form-group').forEach(group => {
                        group.classList.remove('focused');
                    });
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showNotification('Failed to send message. Please try again or email me directly.', 'error');
            } finally {
                // Reset button state
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }
        });
        
        function showNotification(message, type) {
            // Remove existing notifications
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <i class="bx ${type === 'success' ? 'bx-check-circle' : 'bx-error'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            `;
            
            // Add styles
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#10b981' : '#ef4444'};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: var(--radius-md);
                display: flex;
                align-items: center;
                gap: 0.75rem;
                z-index: 9999;
                box-shadow: var(--shadow-lg);
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            `;
            
            document.body.appendChild(notification);
            
            // Close button
            notification.querySelector('.notification-close').addEventListener('click', () => {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            });
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.animation = 'slideOutRight 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }
            }, 5000);
        }
        
        // Add keyframes for notification animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ======================
    // Projects Interaction
    // ======================
    
    function initProjectsInteraction() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.zIndex = '1';
            });
        });
    }

    // ======================
    // Resume Download
    // ======================
    
    function initResumeDownload() {
        const resumeBtn = document.querySelector('.btn-download');
        
        if (resumeBtn) {
            resumeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                downloadResume();
            });
        }
    }

    function downloadResume() {
        const resumeUrl = 'assets/cv/muhammad-haroon-cv.pdf';
        const fileName = 'Muhammad_Haroon_Senior_Software_Engineer_CV.pdf';
        
        // Create loading indicator
        const downloadBtn = document.querySelector('.btn-download');
        const originalHTML = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Preparing...';
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = fileName;
        link.style.display = 'none';
        
        // Add to document and click
        document.body.appendChild(link);
        link.click();
        
        // Clean up
        setTimeout(() => {
            document.body.removeChild(link);
            
            // Update button state
            downloadBtn.innerHTML = '<i class="bx bx-check"></i> Downloaded!';
            downloadBtn.style.background = 'var(--success-color)';
            
            setTimeout(() => {
                downloadBtn.innerHTML = originalHTML;
                downloadBtn.style.background = '';
            }, 2000);
        }, 100);
        
        // Track download event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'Resume',
                'event_label': 'CV Download'
            });
        }
    }

    // ======================
    // Utility Functions
    // ======================
    
    // Debounce function for performance
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

    // Throttle function for performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ======================
    // Window Resize Handler
    // ======================
    
    window.addEventListener('resize', debounce(() => {
        // Handle any responsive adjustments
        if (window.innerWidth >= 768) {
            // Remove mobile nav classes on desktop
            document.body.classList.remove('mobile-nav-active');
            const navToggle = document.getElementById('navToggle');
            const navMenu = document.getElementById('navMenu');
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
        
        // Update particles on resize
        if (typeof particlesJS !== 'undefined' && window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }, 250));

    // ======================
    // Performance Optimizations
    // ======================
    
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load');
                    }
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px 0px' });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy-load');
            imageObserver.observe(img);
        });
    }

    // Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();


    document.addEventListener('DOMContentLoaded', function() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category').split(' ');
                    
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Add animation to project cards
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });
})();

// Make downloadResume function globally available
window.downloadResume = downloadResume;

// Export functions if needed for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        downloadResume
    };
}