import { Oll, olls } from './oll';
import { Pll, plls } from './pll';
/* eslint-disable */
const scramble_333 = require('../cstimer/scramble/scramble_333_edit');

// Class to generate a variety
export class Scramble3x3x3 {
  // Get a random WCA scramble
  getRandomScramble() {
    return scramble_333.getRandomScramble();
  }

  // Get a random scramble that results in an OLL
  getOllScramble(ollFilter?: Oll[]) {
    const randomOll = Math.floor(
      Math.random() * (ollFilter ? ollFilter.length : olls.length)
    );
    return scramble_333.getOLLScramble('oll', 0, randomOll);
  }

  // Get a random scramble that results in an PLL
  getPllScramble(pllFilter?: Pll[]) {
    const randomPll = Math.floor(
      Math.random() * (pllFilter ? pllFilter.length : plls.length)
    );
    return scramble_333.getOLLScramble('pll', 0, randomPll);
  }
}
