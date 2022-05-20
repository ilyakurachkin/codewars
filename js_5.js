// Вы получаете любую карту в качестве аргумента. Ваша задача вернуть масть этой карты
//  (в нижнем регистре). Наша колода (предустановлена):


function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
    }