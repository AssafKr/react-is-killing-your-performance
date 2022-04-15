import { useEffect } from "react";
import {
  atom,
  DefaultValue,
  RecoilState,
  selector,
  useSetRecoilState,
} from "recoil";
import { Action } from "../../types";

type InferStateFromAtom<T> = T extends RecoilState<infer S> ? S : never;

export const deckStateAtom = atom({
  key: "deckStateAtom",
  default: {
    currSlide: 0,
    slidesAmount: 0,
    currStep: 0,
    stepsAmount: 0,
  },
});

export const currSlideSelector = selector<number>({
  key: "currSlideSelector",
  get: ({ get }) => get(deckStateAtom).currSlide,
});

export const currStepSelector = selector<number>({
  key: "currStepSelector",
  get: ({ get }) => get(deckStateAtom).currStep,
});

type DeckState = InferStateFromAtom<typeof deckStateAtom>;
type SetDeckStateCallback = (state: DeckState) => DeckState;

interface DeckControls {
  previous: Action;
  next: Action;
}

export function useGetDeckControls(): DeckControls {
  const setDeckState = useSetRecoilState(deckStateAtom);

  const previousSlide: SetDeckStateCallback = (state) =>
    state.currSlide > 0 ? { ...state, currSlide: state.currSlide - 1 } : state;

  const nextSlide: SetDeckStateCallback = (state) =>
    state.currSlide < state.slidesAmount - 1
      ? { ...state, currSlide: state.currSlide + 1 }
      : state;

  const previousStep: SetDeckStateCallback = (state) =>
    state.currStep > 0
      ? {
          ...state,
          currStep: state.currStep - 1,
        }
      : previousSlide({
          ...state,
          currStep: 0,
          stepsAmount: 0,
        });

  const nextStep: SetDeckStateCallback = (state) =>
    state.currStep < state.stepsAmount - 1
      ? {
          ...state,
          currStep: state.currStep + 1,
        }
      : nextSlide({
          ...state,
          currStep: 0,
          stepsAmount: 0,
        });

  const previous = () => {
    setDeckState((state) =>
      state.stepsAmount > 0 ? previousStep(state) : previousSlide(state)
    );
  };

  const next = () => {
    setDeckState((state) =>
      state.stepsAmount > 0 ? nextStep(state) : nextSlide(state)
    );
  };

  return { previous, next };
}

export const useSubscribeArrowsToDeck = ({ previous, next }: DeckControls) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        previous();
      }
      if (e.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
};
