export const Slow = () => {
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > 100) {
      break;
    }
  }

  return <div className="text-[2vw]">I'm slow... 🐌</div>;
};
