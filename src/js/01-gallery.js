
// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// import `../css/common.css`; 

console.log(SimpleLightbox);
// Change code below this line

console.log(galleryItems);

export const galleryEl = document.querySelector(`.gallery`);
export const galleryItemsEl = createdGalleryItemsEl(galleryItems);

export const galleryAdjacentHTML = galleryEl.insertAdjacentHTML(`beforeend`, galleryItemsEl);
 
export function createdGalleryItemsEl(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
   return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
    }).join(``);
}


console.log(galleryItemsEl);

export const lightbox = new SimpleLightbox('.gallery li a', {
  captionsData: `alt`,
  captionSelector: `img`,
  captionType: 'img alt="${description}"',
  captionPosition:`bottom`,
  captionDelay: 250,
});

