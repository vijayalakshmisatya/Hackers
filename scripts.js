document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const showSection = (sectionId) => {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = event.target.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Initially show home section
    showSection('home');
});

// Carousel Logic
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
};

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// File Upload Logic
const uploadButton = document.querySelector('.upload-button');
const fileUploadInput = document.querySelector('#file-upload');

uploadButton.addEventListener('click', () => {
    fileUploadInput.click();
});

fileUploadInput.addEventListener('change', (event) => {
    const files = event.target.files;
    // Handle file uploads
});















document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const sectionId = this.getAttribute('data-section');
            const sections = document.querySelectorAll('.section');

            sections.forEach(section => {
                if (section.getAttribute('id') === sectionId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});






// Function to toggle the upload form visibility
function toggleUploadForm() {
    const uploadForm = document.getElementById('upload-form');
    if (uploadForm.style.display === 'none' || !uploadForm.style.display) {
        uploadForm.style.display = 'block';
    } else {
        uploadForm.style.display = 'none';
    }
}

// Function to handle post submission
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').files[0];
    const postHashtags = document.getElementById('post-hashtags').value;

    if (postImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            createPostElement(postText, e.target.result, postHashtags);
            toggleUploadForm();
            document.getElementById('post-form').reset();
        }
        reader.readAsDataURL(postImage);
    }
});

// Function to create a new post element
function createPostElement(text, imageUrl, hashtags) {
    const newPost = document.createElement('div');
    newPost.className = 'community-post';
    newPost.innerHTML = `
        <div class="community-post-header">
            <img src="profile.jpg" alt="User">
            <div>
                <h3>User Name</h3>
                <p>Content Creator</p>
            </div>
        </div>
        <div class="community-post-content">
            <p>${text}</p>
            <img src="${imageUrl}" alt="New Post">
            <p>${hashtags}</p>
        </div>
        <div class="community-post-actions">
            <button class="like-button">Like</button>
            <button class="comment-button">Comment</button>
            <button class="shop-button">Shop</button>
        </div>
    `;

    // Event listeners for post actions
    const likeButton = newPost.querySelector('.like-button');
    likeButton.addEventListener('click', function() {
        toggleLike(likeButton);
    });

    const commentButton = newPost.querySelector('.comment-button');
    commentButton.addEventListener('click', function() {
        // Add your comment functionality here
        alert('Comment functionality will be implemented later.');
    });

    const shopButton = newPost.querySelector('.shop-button');
    shopButton.addEventListener('click', function() {
        // Redirect to product page or implement shop functionality
        window.location.href = 'product-page.html'; // Replace with actual product page URL
    });

    // Append new post to my-posts section
    document.getElementById('my-posts').appendChild(newPost);
}

// Function to toggle like button state
function toggleLike(button) {
    button.classList.toggle('liked');
}

// Navigation and section toggling
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});
