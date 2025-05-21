window.onload = function() {
    image = document.getElementById('scroll-image');
    leftArrow = document.getElementById('left-arrow');
    rightArrow = document.getElementById('right-arrow');
    scrollImage();
    scrollImageAutomatically();

    // Dynamically load all images in image-scrolls (assume images are named 1.png, 2.png, ..., max.png)
    const galleryRow = document.getElementById('gallery-row');
    if (galleryRow) {
        galleryRow.innerHTML = '';
        for (let i = min; i <= max; i++) {
            const img = document.createElement('img');
            img.className = 'gallery-thumb';
            img.src = `/static/src/image-scrolls/${i}.png`;
            img.setAttribute('data-img', i);
            img.alt = `thumb${i}`;
            galleryRow.appendChild(img);
        }
    }

    // Gallery thumbnail click logic
    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach(function(thumb) {
        thumb.addEventListener('click', function() {
            const imgNum = this.getAttribute('data-img');
            image.src = `/static/src/image-scrolls/${imgNum}.png`;
            current = parseInt(imgNum);
            // Highlight selected thumbnail
            thumbs.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    // Set initial selected
    if (thumbs.length) thumbs[0].classList.add('selected');
};

window.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.latest-messages-body');
    const scrolling = document.querySelector('.scrolling-messages');
    if (container && scrolling) {
        const messageCount = scrolling.children.length;
        // Set duration: e.g., 2s per message, minimum 6s
        const duration = Math.max(6, messageCount * 2);
        scrolling.style.animationDuration = duration + 's';
    }
});

let image;
let leftArrow;
let rightArrow;
let current = 1;
const min = 1;
const max = 6; // Set this to your max image number



async function scrollImageAutomatically() {
     setInterval(() => {
        scrollImageDirection('left');
    }, 3000);
}

function scrollImage() {

    leftArrow.onclick = () => scrollImageDirection('left');
    rightArrow.onclick = () => scrollImageDirection('right');
}

async function scrollImageDirection(direction) {
        if (direction === 'left') {
            if (current > min) current--;
            else    current=max;
        } else if (direction === 'right') {
            if (current < max) current++;
            else    current=min;
        }
        await new Promise(r => setTimeout(r, 50));
        image.src = `/static/src/image-scrolls/${current}.png`;
    }