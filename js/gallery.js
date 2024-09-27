let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery img');
const captions = document.querySelectorAll('.gallery figcaption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function showImage(index) {
    images.forEach((img, i) => {
        //toggle active class based on index
        img.classList.toggle('active', i === index);
        //show captions if index matches. if not, hide it
        captions[i].style.display = i === index ? 'block' : 'none';
    });
}
//   ? = terniary operator ( instead of: if else)

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    showImage(currentImageIndex);
}

function nextImage() {
    //go to next image or loop back to the first if at the end
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

showImage(currentImageIndex);


