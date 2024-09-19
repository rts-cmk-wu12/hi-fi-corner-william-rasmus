let currentImageIndex = 0;
        const images = document.querySelectorAll('.gallery img');
        const captions = document.querySelectorAll('.gallery figcaption');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
                captions[i].style.display = i === index ? 'block' : 'none';
            });
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
            showImage(currentImageIndex);
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
            showImage(currentImageIndex);
        }

        prevButton.addEventListener('click', prevImage);
        nextButton.addEventListener('click', nextImage);

        showImage(currentImageIndex);


        //   ? = terniary operator ( instead of: if else)