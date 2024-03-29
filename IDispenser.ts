
export interface IDispenser {
    //Establece el siguiente manejador de la lista.
    nextSuccessor(successor: IDispenser): void;
    //unico metodo para manejar solicitudes.
    handle(amount: number): number;
}