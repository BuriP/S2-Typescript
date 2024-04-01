import { Timer as GenTimer} from '../../schemas/generated';
import { Duration } from '../../schemas/generated';

export class Timer implements GenTimer {
    id: string;
    diagnostic_label?: string;
    duration: Duration;

    constructor(id: string, duration: Duration, diagnostic_label?: string){
        this.id = id;
        this.duration = duration;
        this.diagnostic_label = diagnostic_label;
    }
}