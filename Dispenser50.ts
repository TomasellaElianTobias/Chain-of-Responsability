import { Billetes } from "./Billetes"
import { IDispenser } from "./IDispenser"

export default class Dispenser50 implements IDispenser {
    // // Devuelve $10 si corresponde, de lo contrario continúa con el siguiente sucesor
    successor: IDispenser | undefined;

    nextSuccessor(successor: IDispenser): void {
        // Establece el siguiente sucesor
        this.successor = successor;
    }

    handle(amount: number): number {
        // gestiona la devolucion de billetes
        if (amount >= 50) {
            //Devuelve el máximo entero menor o igual a un número
            const num = Math.floor(amount / 50);
            const remainder = amount % 50;
            Billetes.billetes.set("50", num);
            if (remainder !== 0) {
                (this.successor as IDispenser).handle(remainder);
            }
        } else {
            return (this.successor as IDispenser).handle(amount);
        }
    }
}