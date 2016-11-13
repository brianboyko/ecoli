import {
  SET_CANARY
} from '../constants/index';

export const makeBirdTalk = (birdNoise) => ({
  type: SET_CANARY,
  birdNoise
});
