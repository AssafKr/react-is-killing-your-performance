import { PropsWithChildren } from "react";

export type Action = () => void;

export type WithStepperCallback<T = {}> = T & {
  onStart: Action;
  onFinish: Action;
};

// is React.FC broken since 18 or something?
export type FCC<P = {}> = React.FC<PropsWithChildren<P>>;
