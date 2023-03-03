import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<a class="gallery__item" href=" ${original}">
        <img class="gallery__image" src="${preview} " alt="${description} " />
      </a>
        `;

    }).join("");
}

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });

console.log(galleryItems);
