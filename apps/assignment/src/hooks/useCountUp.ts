import React from "react";

export const useCountUp = (start: number, end: number, duration: number) => {
  const easingOut = (time: number) => {
    return time === 1 ? 1 : 1 - Math.pow(2, -10 * time);
  };

  const FRAME_RATE = 1000 / 60;
  const [count, setCount] = React.useState(start);

  const totalFrame = Math.round(duration / FRAME_RATE);

  React.useEffect(() => {
    let currentCount = start;

    const counter = setInterval(() => {
      const nextCount = ++currentCount;
      const progress = easingOut(nextCount / totalFrame);
      setCount(Math.round(end * progress));
      progress == 1 && clearInterval(counter);
    }, FRAME_RATE);
  }, []);

  return count;
};
