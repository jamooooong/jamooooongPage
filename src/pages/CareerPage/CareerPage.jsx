import { Profile } from '../../ui/_components/profile';
import Lottie from 'react-lottie';
import LottieData from '../../assets/images/lottie/gongsa-joong.json';
import { useState } from 'react';
import { useEffect } from 'react';

export function CareerPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    '준비중이에요',
    '취업하고 싶어요!',
    'career를 쌓기위한 공부중이에요',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="sm:w-3/5 mx-auto py-40 text-gray_01 px-3">
      <div className="flex sm:flex-row flex-col">
        <Profile />
        <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto">
          <Lottie
            options={defaultOptions}
            height={210}
            width={300}
            isClickToPauseDisabled
          />
          <p className="mt-2  text-center text-base font-semibold">
            {texts[textIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}
