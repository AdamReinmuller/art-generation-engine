"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

const description = "Price test of 100 with colors";

const layerConfigurations = [
  {
    growEditionSizeTo: 2,
    layersOrder: [
      { name: "Colors" },
      { name: "Background" },
      { name: "Foreground" },
      // { name: "Eye color" },
      // { name: "Iris" },
      // { name: "Shine" },
      // { name: "Bottom lid" },
      // { name: "Top lid" },
    ],
  },
  // {
  //   growEditionSizeTo: 850,
  //   race: "Zombie",
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Eyeball" },
  //     { name: "Eye color" },
  //     { name: "Iris" },
  //     { name: "Shine" },
  //     { name: "Top lid" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 1000,
  //   race: "Zombie",
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Eyeball" },
  //     // { name: "Eye color" },
  //     { name: "Iris" },
  //     { name: "Shine" },
  //     { name: "Bottom lid" },
  //     { name: "Top lid" },
  //   ],
  // },
];

// If multiple edition then true else it is in order ie: parrots then hawks
const shuffleLayerConfigurations = false;

const format = {
  width: 512,
  height: 512,
};

const extraMetadata = {
  symbol: "TSTP",
  seller_fee_basis_points: 270, // 250 = 2.5% royalty
  collection: {
    name: "Price Test Collection",
    family: "Price Test Collection",
  },
  properties: {
    files: [
      {
        uri: "image.png",
        type: "image/png",
      },
    ],
    category: "image",
    creators: [
      {
        address: "HxJgA9nfJirrWEeghDVSjsgymphBaxwzWJF4AoP7Yqtq", // receive payments here
        share: 100,
      },
    ],
  },
};

const rarityDelimiter = "#";

const uniqueDnaTolerance = 50000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  // baseUri,
  description,
  uniqueDnaTolerance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  extraMetadata,
};
