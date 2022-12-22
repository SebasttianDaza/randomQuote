import { useReducer, useCallback } from "react";

const ACTIONS = {
  UPDATE_PAINTING: "update_painting",
  UPDATE_COLOR_RANDOM: "update_color_random",
  UPDATE_COLOR_RANDOM_SPINNER: "update_color_random_spinner",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_PAINTING:
      return { ...state, isPainting: action.payload };
    case ACTIONS.UPDATE_COLOR_RANDOM:
      return { ...state, isColorRandom: action.payload };
    case ACTIONS.UPDATE_COLOR_RANDOM_SPINNER:
      return { ...state, isColorRandomSpinner: action.payload };
    default:
      return state;
  }
};

const useQuoteRandom = () => {
  const [state, dispatch] = useReducer(reducer, {
    isPainting: false,
    isColorRandom: "bg-light",
    isColorRandomSpinner: "primary",
  });

  const { isPainting, isColorRandom, isColorRandomSpinner } = state;

  return {
    isPainting,
    isColorRandom,
    isColorRandomSpinner,
    updatePainting: useCallback(
      (payload) => dispatch({ type: ACTIONS.UPDATE_PAINTING, payload }),
      [dispatch]
    ),
    updateColorRandom: useCallback(
      (payload) =>
        dispatch({
          type: ACTIONS.UPDATE_COLOR_RANDOM,
          payload,
        }),
      dispatch
    ),
    updateColorRandomSpinner: useCallback(
      (payload) =>
        dispatch({
          type: ACTIONS.UPDATE_COLOR_RANDOM_SPINNER,
          payload,
        }),
      dispatch
    ),
  };
};

export default useQuoteRandom;
