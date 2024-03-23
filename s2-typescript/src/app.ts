import { PowerForecastValue } from './common/PowerForecastValue';
import { PowerRange } from './common/PowerRange';

export function init(){
    const power = new PowerRange(10, 10, 'ELECTRIC.POWER.L1');
    const forecast = new PowerForecastValue(10, 'ELECTRIC.POWER.L1');
    console.log('Hi from S2 typescript app');
    console.log(power);
    console.log(forecast);
}