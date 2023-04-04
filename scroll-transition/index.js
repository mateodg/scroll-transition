document.addEventListener('DOMContentLoaded', () => {
  const slide0 = document.querySelector("body > div > div.thumbnails > p:nth-child(1)");
  slide0.style.fontWeight = 'bold';
})
const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const scrollbarThumb = document.querySelector('.thumb');
const slideCount = slides.length;
const slideHeight = 720;
const marginTop = 16;

const scrollThumb = () => {
  const index = Math.floor(slideGallery.scrollTop / slideHeight);
  scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};

const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(0, index * slideHeight + marginTop);
};

document.querySelector('.thumbnails').innerHTML += [...slides]
  .map(
    (slide, i) => `<p class="slide-cursor" src="${slide.querySelector('img').src}" data-id="${i}">Slide ${i}</p>`
  )
  .join('');

document.querySelectorAll('.thumbnails p').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
    
});

slideGallery.addEventListener('scroll', e => scrollThumb());

scrollThumb();
/* Slider 1 */
document.querySelector("body > div > div.thumbnails > p:nth-child(1)").addEventListener('click', () =>{
  document.querySelector("body > div > div.thumbnails > p:nth-child(1)").style.fontWeight = 'bold';    
  document.querySelector("body > div > div.thumbnails > p:nth-child(2)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(3)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(4)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(5)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(6)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(7)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(8)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(9)").style.fontWeight = 'normal';
});
/* Slider 2 */
document.querySelector("body > div > div.thumbnails > p:nth-child(2)").addEventListener('click', () =>{
  document.querySelector("body > div > div.thumbnails > p:nth-child(1)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(2)").style.fontWeight = 'bold';
  document.querySelector("body > div > div.thumbnails > p:nth-child(3)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(4)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(5)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(6)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(7)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(8)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(9)").style.fontWeight = 'normal';
});
/* Slider 3 */
document.querySelector("body > div > div.thumbnails > p:nth-child(3)").addEventListener('click', () =>{
  document.querySelector("body > div > div.thumbnails > p:nth-child(2)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(3)").style.fontWeight = 'bold';
  document.querySelector("body > div > div.thumbnails > p:nth-child(4)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(5)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(6)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(7)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(8)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(9)").style.fontWeight = 'normal';
});
/* Slider 4 */
document.querySelector("body > div > div.thumbnails > p:nth-child(4)").addEventListener('click', () =>{
  document.querySelector("body > div > div.thumbnails > p:nth-child(1)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(2)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(3)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(4)").style.fontWeight = 'bold';
  document.querySelector("body > div > div.thumbnails > p:nth-child(5)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(6)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(7)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(8)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(9)").style.fontWeight = 'normal';
});
/* Slider 5 */
document.querySelector("body > div > div.thumbnails > p:nth-child(5)").addEventListener('click', () =>{
  document.querySelector("body > div > div.thumbnails > p:nth-child(1)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(2)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(3)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(4)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(5)").style.fontWeight = 'bold';
  document.querySelector("body > div > div.thumbnails > p:nth-child(6)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(7)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(8)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(9)").style.fontWeight = 'normal';
});
/* Slider 6 */
document.querySelector("body > div > div.thumbnails > p:nth-child(6)").addEventListener('click', () =>{
  document.querySelector("body > div > div.thumbnails > p:nth-child(1)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(2)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(3)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(4)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(5)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(6)").style.fontWeight = 'bold';
  document.querySelector("body > div > div.thumbnails > p:nth-child(7)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(8)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(9)").style.fontWeight = 'normal';
});
/* Slider 7 */
document.querySelector("body > div > div.thumbnails > p:nth-child(7)").addEventListener('click', () =>{
  document.querySelector("body > div > div.thumbnails > p:nth-child(1)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(2)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(3)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(4)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(5)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(6)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(7)").style.fontWeight = 'bold';
  document.querySelector("body > div > div.thumbnails > p:nth-child(8)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(9)").style.fontWeight = 'normal';
});
/* Slider 8 */
document.querySelector("body > div > div.thumbnails > p:nth-child(8)").addEventListener('click', () =>{
  document.querySelector("body > div > div.thumbnails > p:nth-child(1)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(2)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(3)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(4)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(5)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(6)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(7)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(8)").style.fontWeight = 'bold';
  document.querySelector("body > div > div.thumbnails > p:nth-child(9)").style.fontWeight = 'normal';
});
/* Slider 9 */
document.querySelector("body > div > div.thumbnails > p:nth-child(9)").addEventListener('click', () =>{
  document.querySelector("body > div > div.thumbnails > p:nth-child(1)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(2)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(3)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(4)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(5)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(6)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(7)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(8)").style.fontWeight = 'normal';
  document.querySelector("body > div > div.thumbnails > p:nth-child(9)").style.fontWeight = 'bold';
});