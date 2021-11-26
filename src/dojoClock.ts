import { randomInt } from "crypto";

export class DojoClock<P> {
    private lastParticipant: P | null = null;

    public constructor(
        private participants: P[]
    ) { }

    public getNext(): P {
        let candidate: P;
        do {
            candidate = this.getRandom();
        } while (candidate === this.lastParticipant);
        this.lastParticipant = candidate;
        return candidate;
    }

    private getRandom(): P {
        const randomIndex = randomInt(this.itemCount);
        return this.participants[randomIndex];
    }

    private get itemCount(): number {
        return this.participants.length;
    }
}
