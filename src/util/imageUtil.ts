import Jimp from "jimp";

export function getRowWhite(image: Jimp, row: number) {
  const width = image.getWidth();

  for (let i = 0; i < width; i++) {
    const pixelColor = Jimp.intToRGBA(image.getPixelColor(i, row));
    if (pixelColor.r !== 255) return false;
  }

  return true;
}

export function getColWhite(image: Jimp, col: number) {
  for (let i = 0; i < image.getHeight(); i++) {
    const pixelColor = Jimp.intToRGBA(image.getPixelColor(col, i));
    if (pixelColor.r !== 255) return false;
  }
  return true;
}

export function getLeftMost(image: Jimp) {
  let leftMost = 0;
  const width = image.getWidth();

  for (let i = 0; i < width; i++) {
    console.log(i);
    if (!getColWhite(image, i)) {
      console.log(`isWhite: ${i}: false`);
      leftMost = i;
      break;
    }
  }

  return leftMost;
}

export function getRightMost(image: Jimp) {
  const width = image.getWidth();
  let rightMost = width;

  for (let i = width; i > 0; i--) {
    console.log(i);
    if (!getColWhite(image, i)) {
      console.log(`isWhite: ${i}: false`);
      rightMost = i;
      break;
    }
  }

  return rightMost;
}
