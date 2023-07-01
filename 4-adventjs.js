const boxes = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]

function fitsInOneBox(boxes) {
  const boxesOrdered = boxes.sort((a, b) => {
    return (a.l + a.w + a.h) - (b.l + b.w + b.h);
  }).reduce((prev, next, i) => {
    return prev.l < next.l && prev.w < next.w && prev.h < next.h && next
  });
  return boxesOrdered == true;
}

fitsInOneBox(boxes);