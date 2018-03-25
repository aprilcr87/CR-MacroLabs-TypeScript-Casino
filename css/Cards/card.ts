enum Suit{
    Spades,
    Clubs,
    Diamonds,
    Hearts,
}

class Card{
    public suit:any;
    public rank:any;

    public constructor(rank: number, suit:Suit){
        this.rank = rank;
        this.suit = suit;
    }

    private static ranks = [
        'Ace',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
    ];

    public get ranks(): string {
        return Card.ranks[this.rank -1]
    }
    public get Suit(): string  {
        return Suit[this.suit]
    }
    public get name(): string {
        return this.ranks + ' of ' + this.suit;
    }
}