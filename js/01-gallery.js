import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);



function createGalleryMarkup (galleryItems) {
    return galleryItems
    .map(( {preview, original, description} ) => {
        
        return  `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src="${preview} "
        data-source="${original} "
        alt="${description} "
      />
    </a>
  </div> 
    `
    })
    .join("");

}

galleryContainer.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onClickEsc);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onClickEsc);
      },
    }
  );

  function onClickEsc(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
