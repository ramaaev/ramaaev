const products = {
  grazor: {
    black: [
      'assets/images/G-Razor-black.png',
      'assets/images/G-Razor-black-front.png',
      'assets/images/G-Razor-black-side.png'
    ],

    white: [
      'assets/images/G-Razor-white.png',
      'assets/images/G-Razor-white-front.png',
      'assets/images/G-Razor-white-side.png'
    ]
  },

  glight: {
    red: [],
    blue: [],
    green: [],
    white: [],
    yellow: []
  }
};

const galleryState = {
  grazor: {
    colour: 'black',
    imageIndex: 0
  },

  glight: {
    colour: 'red',
    imageIndex: 0
  }
};


function switchColour(productId, colour, btn) {

  galleryState[productId].colour = colour;
  galleryState[productId].imageIndex = 0;

  const images = products[productId][colour];

  const mainImg =
      document.getElementById(productId + '-main');

  mainImg.classList.add('fading');

  setTimeout(() => {

      mainImg.src = images[0];

      mainImg.classList.remove('fading');

  }, 180);

  const thumbs =
      document.querySelectorAll(
          '#' + productId + '-thumbs .thumb'
      );

  thumbs.forEach((thumb, index) => {

      thumb.src = images[index];

      thumb.classList.remove('active');

  });

  thumbs[0].classList.add('active');

  btn.closest('.colour-row')
      .querySelectorAll('.colour-swatch')
      .forEach(s => s.classList.remove('active'));

  btn.classList.add('active');
}

function switchMain(productId, index, thumb) {

  galleryState[productId].imageIndex = index;

  const colour =
      galleryState[productId].colour;

  const image =
      products[productId][colour][index];

  const main =
      document.getElementById(productId + '-main');

  main.classList.add('fading');

  setTimeout(() => {

      main.src = image;

      main.classList.remove('fading');

  }, 180);

  thumb.closest('.thumb-strip')
      .querySelectorAll('.thumb')
      .forEach(t => t.classList.remove('active'));

  thumb.classList.add('active');
}

  function toggleAccordion(btn) {
    const panel = btn.nextElementSibling;
    const isOpen = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    btn.classList.toggle('open', !isOpen);
  }


  function updateGallery(productId) {

  const state = galleryState[productId];

  const images =
      products[productId][state.colour];

  const main =
      document.getElementById(
          productId + '-main'
      );

  main.src =
      images[state.imageIndex];

}