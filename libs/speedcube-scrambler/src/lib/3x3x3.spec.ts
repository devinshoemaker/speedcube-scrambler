import { Scramble3x3x3 } from './3x3x3';

describe('Scramble3x3x3', () => {
  it('should generate random scramble', () => {
    const scrambler = new Scramble3x3x3();
    expect(scrambler.getRandomScramble().length).toBeGreaterThan(0);
  });
  it('should generate OLL scramble', () => {
    const scrambler = new Scramble3x3x3();
    expect(scrambler.getOllScramble().length).toBeGreaterThan(0);
  });
});
