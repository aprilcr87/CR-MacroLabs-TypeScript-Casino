class Deck {

    cards: Card[];

    public constructor(){
        this.cards = [];
        for(let i = 0; i < 4; i ++){
            for(let k = 1; k <= 13; k++){
                this.cards.push(new Card(i,k))
            }
        }
    }
}