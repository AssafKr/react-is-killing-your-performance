export type Action = () => void;

export type WithStepperCallback<T = {}> = T & {
  onStart: Action;
  onFinish: Action;
};
