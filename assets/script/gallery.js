const products = {
  grazor: {
    black: [
      'assets/images/G-Razor/G-Razor-black.png',
      'assets/images/G-Razor/G-Razor-black-front.png',
      'assets/images/G-Razor/G-Razor-black-side.png'
    ],

    white: [
      'assets/images/G-Razor/G-Razor-white.png',
      'assets/images/G-Razor/G-Razor-white-front.png',
      'assets/images/G-Razor/G-Razor-white-side.png'
    ]
  },

  glight: {
    black: [
      'assets/images/G-Light/black.webp',
      'assets/images/G-Light/black-front.webp',
      'assets/images/G-Light/black-side.webp'
    ],
    blue: [
      'assets/images/G-Light/blue.webp',
      'assets/images/G-Light/blue-front.png',
      'assets/images/G-Light/blue-side.png'
    ],
    gray: [
      'assets/images/G-Light/gray.webp',
      'assets/images/G-Light/gray-front.png',
      'assets/images/G-Light/gray-side.png'
    ],
    white: [
      'assets/images/G-Light/sky-blue.webp',
      'assets/images/G-Light/white-front.png',
      'assets/images/G-Light/white-side.png'
    ],
    skyblue: [
      'assets/images/G-Light/sky-blue.webp',
      'assets/images/G-Light/sky-blue-front.png',
      'assets/images/G-Light/sky-blue-side.png'
    ]
  },

  gone: {
    black: [
      'assets/images/G-One/black.png',
      'assets/images/G-One/black-front.png',
      'assets/images/G-One/black-side.png'
    ],

    white: [
      'assets/images/G-One/white.png',
      'assets/images/G-One/white-front.png',
      'assets/images/G-One/white-side.png'
    ],

    blue: [
      'assets/images/G-One/blue.png',
      'assets/images/G-One/blue-front.png',
      'assets/images/G-One/blue-side.png'
    ],

    orange: [
      'assets/images/G-One/orange.png',
      'assets/images/G-One/orange-front.png',
      'assets/images/G-One/orange-side.png'
    ]
  }
};

const galleryState = {
  grazor: {
    colour: 'black',
    imageIndex: 0
  },

  glight: {
    colour: 'black',
    imageIndex: 0
  },

  gone: {
    colour: 'black',
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