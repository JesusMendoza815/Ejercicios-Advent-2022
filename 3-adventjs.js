const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {
  return Math.trunc((reindeers.join("").length * 2) / packOfGifts.join("").length);
}

distributeGifts(packOfGifts, reindeers)