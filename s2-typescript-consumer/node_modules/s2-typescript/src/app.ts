import { Handshake } from "./index";

export function init(){
    console.log('Hi from S2 typescript app');
    // const power = new PowerRange(1, 2, 'ELECTRIC.POWER.L1');
    // console.log(power);
    
    const hs = new Handshake('1', 'CEM', ['1.0.0']);
    console.log(hs);

}