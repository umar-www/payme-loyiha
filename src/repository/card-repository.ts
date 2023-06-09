import { Card } from "../entities/card";

export class CardRepository {
  private list: Card[] = [];
  counterID = 0;

  add(newCards: Card[]) {
    for (let newCard of newCards) {
      if (this.isExist(newCard.cardNumber))
        throw new Error(`${newCard.cardNumber} is already exist`);
      newCard.setId(++this.counterID);
      this.list.push(newCard);
    }
  }

  isExist(cardNumber: string) {
    for (let card of this.list) {
      if (card.cardNumber === cardNumber) return true;
    }

    return false;
  }

  getCardsByOwnerID(ownerID: number) {
    const cards: Card[] = [];

    for (let card of this.list) {
      if (card.ownerId === ownerID) cards.push(card);
    }

    return cards;
  }

  getList() {
    return this.list;
  }

  transactionCard(senderCard: Card, recieverCard: Card, funds: number){
    if(senderCard.balance < funds) throw new Error(`${senderCard.cardNumber} is not enough funds`);
    senderCard.balance -= funds;
    recieverCard.balance += funds;
  };
}