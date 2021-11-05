import chalk from "chalk";
import Jimp from "jimp";
import path from "path";
import * as util from "./util";

const imagePath = path.join(__dirname, "../apple.png");
const savePath = path.join(__dirname, "../images/appleCropped.png");

async function autoCropImage() {
  const image = await Jimp.read(imagePath);
  const leftMost = util.getLeftMost(image);
  const rightMost = util.getRightMost(image);

  console.log(chalk.bgCyan.bold(`left-most: ${leftMost}`));
  console.log(chalk.bgCyan.bold(`right-most: ${rightMost}`));

  image.crop(leftMost, 0, rightMost, image.getHeight()).write(savePath);
}

autoCropImage();
