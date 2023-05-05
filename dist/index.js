"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
const main_service_1 = require("./services/main-service");
const mainService = new main_service_1.MainService();
const mark = new entities_1.User("Mark", "Tween", "+998991234567", "root123");
const kent = new entities_1.User("Kent", "John", "+998991234512", "root124");
mainService.register(mark, kent);
const card1 = new entities_1.Card("8600 1348 1111 2223", 1234, "12/02", "MASTER CARD", mark.getId(), "Master Bank");
const card2 = new entities_1.Card("8600 1348 1111 2222", 1234, "12/02", "MASTER CARD", mark.getId(), "Master Bank");
mainService.registerCard(card1, card2);
console.log(mainService.getUserList());
;
console.log(mainService.getCardList());
;
try {
    card1.depositeBalance(1000);
    card2.depositeBalance(2000);
    mainService.transaction(card1, card2, 500);
    console.log(mainService.getCardList());
}
catch (error) {
    console.log();
    console.error("----- |" + error.message + "| ------");
    console.log();
}
