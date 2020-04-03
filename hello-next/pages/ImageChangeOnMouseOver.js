import Rect, { useRef } from 'react';

import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="../static/rosto.jpeg"
        secondaryImg="../static/rostoBlack.jpeg"
      />
    </div>

  );
}

export default ImageChangeOnMouseOver;