const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
  return gifts.map(gift => {
    const giftLength = gift.length + 2
    const giftWrap = '*'.repeat(giftLength)
    
    return `${giftWrap}\n*${gift}*\n${giftWrap}`
  })
}

const wrapped = wrapping(gifts)
console.log(wrapped);