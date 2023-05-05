import { Card, User } from "./entities";
import { MainService } from "./services/main-service";

const mainService = new MainService();

const mark = new User("Mark", "Tween", "+998991234567", "root123");
const kent = new User("Kent", "John", "+998991234512", "root124");

mainService.register(mark, kent);

const card1 = new Card("8600 1348 1111 2223", 1234, "12/02", "MASTER CARD", mark.getId(), "Master Bank",);
const card2= new Card("8600 1348 1111 2222", 1234, "12/02", "MASTER CARD", mark.getId(), "Master Bank",);

mainService.registerCard(card1, card2);

console.log(mainService.getUserList());;
console.log(mainService.getCardList());;

try {
  card1.depositeBalance(1000);
  card2.depositeBalance(2000);
  mainService.transaction( card1, card2, 500);
  console.log(mainService.getCardList());
} catch (error: any) {
  console.log();
  console.error("----- |" + error.message + "| ------");
  console.log();
}
