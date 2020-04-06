import React from 'react';

import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
  return (
    <div>
      <ImageToggleOnScroll
        primaryImg="../static/rosto.jpeg"
        secondaryImg="../static/rostoBlack.jpeg"
      />
      <br />
      <ImageToggleOnScroll
        primaryImg="../static/rostoDois.jpg"
        secondaryImg="../static/rostoDoisBlack.jpg"
      />
      <br />
      <ImageToggleOnScroll
        primaryImg="../static/rostoTres.jpg"
        secondaryImg="../static/rostoTresBlack.jpg"
      />
      <br />
      <ImageToggleOnScroll
        primaryImg="../static/rostoQuatro.jpg"
        secondaryImg="../static/rostoQuatroBlack.jpg"
      />
    </div>
  );
}

export default ImageChangeOnScroll;