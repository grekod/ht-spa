import { Product } from './Product';

export enum Foglalat{
    DDR3 = "DDR3",
    DDR4 = "DDR4",
}

export class Memory extends Product
{
    Socket: Foglalat;
    MemorySize: Number;
    Size: Number;
    Latency: Number;
}