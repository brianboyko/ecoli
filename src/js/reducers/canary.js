import {
  SET_CANARY,
} from '../constants/index';

export const bird = (state = "chirp", action = {}) => {
  switch(action.type){
    case SET_CANARY:
      return action.birdNoise;
    default: return state;
  }
};
