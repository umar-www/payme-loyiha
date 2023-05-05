export type CARD_TYPE = "UZCARD" | "HUMO" | "VISA" | "MASTER CARD";

export class Card {
	private id: number;
	balance = 0

	constructor(public cardNumber: string, public pin: number, public expiry: string, public type: CARD_TYPE,  public ownerId: number, public bankName: string) {}

	getId() {
		return this.id;
	}

	setId(newId: number) {
		this.id = newId;
	}
	
	depositeBalance(funds: number){
		let money = this.balance
		money += funds
		this.balance = money
	}
}
