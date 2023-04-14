# speedcube-scrambler

This library is designed to generate a variety of different scrambles for twisty puzzles such as a 3x3x3.

This project is currently in very early development.

The logic for this scrambler is forked from [csTimer](https://github.com/cs0x7f/cstimer) and will be updated as updates are made to that project.

## Features

- 3x3x3
  - Random WCA scramble
  - Random OLL scramble with filter

## Usage

### 3x3x3

First, initialize the scrambler:

```
import { Scramble3x3x3 } from './3x3x3';

const scrambler = new Scramble3x3x3();
```

Get a random WCA scramble:

```
const scramble = scrambler.getRandomScramble();
```

Get a random OLL scramble:

```
const scramble = getOllScramble();
```

Get an OLL scramble from two possible cases:

```
import { olls } from './3x3x3';

const possibleOlls = olls.filter((oll) => oll.name === '1' || oll.name === '2');

const scramble = getOllScramble(possibleOlls);
```

## Building

Run `nx build speedcube-scrambler` to build the library.

## Running unit tests

Run `nx test speedcube-scrambler` to execute the unit tests via [Jest](https://jestjs.io).
