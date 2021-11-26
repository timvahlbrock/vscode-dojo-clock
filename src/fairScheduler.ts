import { randomInt } from "crypto";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export class FairScheduler<P> {
    private currentRound: Round<P>;

    public constructor(
        private participants: P[]
    ) {
        this.currentRound = new Round<P>(participants);
    }

    public getNext(): P {
        if (this.currentRound.isOver()) {
            this.currentRound = new Round<P>(this.participants);
        }
        return this.currentRound.getNext();
    }
}

class Round<C> {
    private remainingParticipants: C[];

    public constructor(
        originalParticipants: C[]
    ) {
        this.remainingParticipants = [...originalParticipants];
    }

    public isOver(): boolean {
        return this.remainingParticipants.length === 0;
    }

    public getNext(): C {
        const randomIndex = getRandomInt(this.remainingParticipants.length - 1);
        const next = this.remainingParticipants.splice(randomIndex, 1)[0];
        return next;
    }
}
