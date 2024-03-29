
import Dispenser10 from './Dispenser10'
import Dispenser20 from './Dispenser20'
import Dispenser50 from './Dispenser50'

export default class ATMDispenserChain {
    chain1: Dispenser50;
    chain2: Dispenser20;
    chain3: Dispenser10;

    constructor() {
        // Se inicializa la cadena de sucesores
        this.chain1 = new Dispenser50();
        this.chain2 = new Dispenser20();
        this.chain3 = new Dispenser10();
        this.chain1.nextSuccessor(this.chain2);
        this.chain2.nextSuccessor(this.chain3);
    }
}