
let images = []; // Array to store images
let currentIndex = 0;
let intervalId;
let speed = 4000; // Default speed

function fetchData() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        images = data.map(item => ({ url: item.url, title: item.title }));
        showImage();
      } else {
        console.error('Failed to fetch data');
      }
    }
  };
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums/1/photos');
  xhr.send();
}

function showImage() {
  document.getElementById('slider-image').src = images[currentIndex].url;
  document.getElementById('slider-text').innerText = images[currentIndex].title;
}

function playSlider() {
  intervalId = setInterval(nextImage, speed);
}

function stopSlider() {
  clearInterval(intervalId);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

function changeSpeed(newSpeed) {
  speed = newSpeed;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = setInterval(nextImage, speed);
  }
}

fetchData(); 
