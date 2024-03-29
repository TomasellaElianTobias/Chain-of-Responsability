import ATMDispenserChain from "./ATMdispenser";
import { Billetes } from "./Billetes";

test('Cuando_Ingreso_180_DeberiaDevolver_3BilletesDe50_1BilleteDe20_1BilleteDe10', () => {
    const ATM = new ATMDispenserChain();
    ATM.chain1.handle(180);
    let billetes = Billetes.billetes;
    expect(billetes.get("50")).toBe(3);
    expect(billetes.get("20")).toBe(1);
    expect(billetes.get("10")).toBe(1);
});
test('Cuando_Ingreso_40_DeberiaDevolver_2BilleteDe20', () => {
    const ATM = new ATMDispenserChain();
    ATM.chain2.handle(40);
    let billetes = Billetes.billetes;
    expect(billetes.get("20")).toBe(2);
});

test('Cuando_Ingreso_30_DeberiaDevolver_1BilleteDe20_1BilleteDe10', () => {
    const ATM = new ATMDispenserChain();
    ATM.chain1.handle(30);
    let billetes = Billetes.billetes;
    expect(billetes.get("20")).toBe(1);
    expect(billetes.get("10")).toBe(1);
});

