import { Scramble3x3x3 } from './3x3x3';
import { olls } from './oll';
import { plls } from './pll';

describe('Scramble3x3x3', () => {
  describe('getRandomScramble', () => {
    it('should generate random scramble', () => {
      const scrambler = new Scramble3x3x3();
      expect(scrambler.getRandomScramble().length).toBeGreaterThan(0);
    });

    it('should generate unique scrambles', () => {
      const scrambler = new Scramble3x3x3();
      const scramble1 = scrambler.getRandomScramble();
      const scramble2 = scrambler.getRandomScramble();
      expect(scramble1).not.toEqual(scramble2);
    });
  });

  describe('getOllScramble', () => {
    it('should generate OLL scramble', () => {
      const scrambler = new Scramble3x3x3();
      expect(scrambler.getOllScramble().length).toBeGreaterThan(0);
    });

    it('should generate unique scrambles', () => {
      const scrambler = new Scramble3x3x3();
      const scramble1 = scrambler.getOllScramble();
      const scramble2 = scrambler.getOllScramble();
      expect(scramble1).not.toEqual(scramble2);
    });

    it('should filter OLLs', () => {
      const ollFilter = olls.filter((oll) => oll.name === '1');
      const scrambler = new Scramble3x3x3();
      expect(scrambler.getOllScramble(ollFilter).length).toBeGreaterThan(0);
    });
  });

  describe('getPllScramble', () => {
    it('should generate PLL scramble', () => {
      const scrambler = new Scramble3x3x3();
      expect(scrambler.getPllScramble().length).toBeGreaterThan(0);
    });

    it('should generate unique scrambles', () => {
      const scrambler = new Scramble3x3x3();
      const scramble1 = scrambler.getPllScramble();
      const scramble2 = scrambler.getPllScramble();
      expect(scramble1).not.toEqual(scramble2);
    });

    it('should filter PLLs', () => {
      const pllFilter = plls.filter((pll) => pll.name === '1');
      const scrambler = new Scramble3x3x3();
      expect(scrambler.getPllScramble(pllFilter).length).toBeGreaterThan(0);
    });
  });
});
