// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);

const refs = {
  galleryContainer: document.querySelector('.gallery'),
};

const markup = galleryItems
  .map(
    item => `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>`
  )
  .join('');

refs.galleryContainer.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
