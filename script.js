// 1. ANIMASI PERGANTIAN TEXT ROLE (Efek Fade Seperti Video)
const roles = [
    "Electronics Engineering Student", 
    "Humas HM Elektro", 
    "Public Relations GI BEI"
];

const subRoles = [
    "Electronics Engineering",
];

let index = 0;
const roleElement = document.getElementById("typing-role");
const cardSubRoleElement = document.getElementById("card-sub-role");

setInterval(() => {
    index = (index + 1) % roles.length;
    
    // Transisi memudar keluar
    roleElement.style.opacity = 0;
    cardSubRoleElement.style.opacity = 0;
    
    setTimeout(() => {
        roleElement.innerText = roles[index];
        cardSubRoleElement.innerText = subRoles[index];
        
        // Transisi muncul kembali
        roleElement.style.opacity = 1;
        cardSubRoleElement.style.opacity = 1;
    }, 300);
}, 3500);


// 2. STATS COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');
const speed = 200; 

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// Memicu counter saat section "Tentang" terlihat di layar
const tentangSection = document.getElementById('tentang');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(tentangSection);
