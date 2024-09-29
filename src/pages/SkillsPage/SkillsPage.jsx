import { Profile } from '../../ui/_components/profile';

export function SkillsPage() {
  return (
    <div className="sm:w-3/5 mx-auto py-40 text-gray_01 px-3">
      <div className="flex sm:flex-row flex-col">
        <Profile />
        <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto">
          <p className=" text-4xl text-red_01 font-bold mb-12">Skills</p>
          <p className=" text-xl font-bold mb-4">Design</p>
          <div className="flex sm:flex-row flex-col sm:justify-between text-base text-gray_02">
            <div className="flex flex-col sm:w-1/2 sm:h-[7.5rem]">
              <p>Adobe Photoshop</p>
              <p>Adobe Illustrator</p>
              <p>Adobe Lightroom</p>
            </div>
            <div className="flex flex-col sm:w-1/2 sm:h-[7.5rem] sm:mb-0 mb-12">
              <p>Adobe Figma</p>
              <p>Lottie (공부중)</p>
              <p>Phase (공부중)</p>
            </div>
          </div>
          <p className=" text-xl font-bold mb-4">Front-End</p>
          <div className=" text-base text-gray_02 mb-12">
            <p>html, css, js, ts</p>
            <p>React</p>
            <p>Next.js ( 공부중 )</p>
          </div>
        </div>
      </div>
    </div>
  );
}
