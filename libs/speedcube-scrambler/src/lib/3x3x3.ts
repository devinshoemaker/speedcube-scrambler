import { Oll, olls } from './oll';
/* eslint-disable */
const scramble_333 = require('../cstimer/scramble/scramble_333_edit');

// Class to generate a variety
export class Scramble3x3x3 {
  // Get a random WCA scramble
  getRandomScramble() {
    return scramble_333.getRandomScramble();
  }

  // Get a random scramble that results in an OLL
  getOllScramble(possibleOlls?: Oll[]) {
    const randomOll = Math.floor(
      Math.random() * (possibleOlls ? possibleOlls.length : olls.length)
    );
    return scramble_333.getOLLScramble('oll', 0, randomOll);
  }
}
