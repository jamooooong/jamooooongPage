import Profile_Img from '../../../public/imgs/profile_img.png';
import LinkBtn from './_components/linkBtn';

export function HomePage() {
  return (
    <>
      {/* 1div */}
      <div className="sm:w-3/5 mx-auto py-40 text-gray_01 px-3">
        <div className="flex sm:flex-row flex-col">
          <div className="flex flex-col w-60 mr-24 sm:fixed">
            <img src={Profile_Img} alt="profile_img" className=" mb-6" />
            <p className="text-red_01 font-semibold text-base my-1">
              javaScript
            </p>
            <p className=" text-3xl font-bold my-1">jamooooong</p>
            <div className="flex flex-row my-5">
              <LinkBtn text="github" link="https://github.com/jamooooong" />
              <LinkBtn
                text="instagram"
                link="https://www.instagram.com/jamong__w.s/"
              />
            </div>
          </div>
          <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto">
            <p className=" text-4xl text-red_01 font-bold mb-12">
              안녕하세요. UI디자이너 박우석입니다.
            </p>
            <p className=" text-xl font-bold mb-4">
              {'{'} jamooooong {'}'}의 한줄 소개
            </p>
            <p className=" text-base text-gray_02 mb-12">
              안녕하세요 저는 디자인과, 프론트엔드에 관심이 많은 광운대학교
              19학번 아저씨 입니다.
            </p>
            <p className=" text-xl font-bold mb-4">저는 이런거를 잘해요.</p>
            <p className=" text-base text-gray_02 mb-12">
              안녕하세요 저는 프론트엔드에 관심이 많은 광운대학교 19학번 늙은이
              입니다. 저는 리액트를 공부하고 있는데 너무 힘들어요. 세상이
              너무나도 빨리 빨리 변해서 너무 힘들어요.
            </p>
            <p className=" text-xl font-bold mb-4">
              저는 이런걸 배우고 싶어요.
            </p>
            <p className=" text-base text-gray_02">
              안녕하세요 저는 프론트엔드에 관심이 많은 광운대학교 19학번 늙은이
              입니다. 저는 리액트를 공부하고 있는데 너무 힘들어요. 세상이
              너무나도 빨리 빨리 변해서 너무 힘들어요.
            </p>
          </div>
        </div>
      </div>

      {/* 2div */}
      <div className=" bg-gray_03 py-40 text-gray_01">
        <div className="sm:w-3/5 mx-auto px-3">
          <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto">
            <p className=" text-4xl text-red_01 font-bold mb-20">나의 발자취</p>
            <div className="flex flex-col gap-12">
              <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-0 gap-12">
                <div className="flex flex-col w-1/2 sm:h-[7.5rem]">
                  <p className=" font-bold text-xl  mb-1.5">Education</p>
                  <p className=" text-base  mb-1.5">별내고등학교 졸업</p>
                  <p className=" text-base">광운대학교 정보융합학부 입학</p>
                </div>
                <div className="flex flex-col w-1/2 sm:h-[7.5rem]">
                  <p className=" font-bold text-xl mb-1.5">Skill</p>
                  <p className=" text-base  mb-1.5">
                    Adobe Photoshop / illustrator / lightroom
                  </p>
                  <p className=" text-base mb-1.5">Figma</p>
                  <p className=" text-base">React</p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-0 gap-12">
                <div className="flex flex-col w-1/2 sm:h-[7.5rem]">
                  <p className=" font-bold text-xl mb-1.5">Work</p>
                  <p className=" text-base  mb-1.5">(주)써밋컴퍼니 재직</p>
                  <p className=" text-base">광운대학교 정보융합학부 입학</p>
                </div>
                <div className="flex flex-col w-1/2 sm:h-[7.5rem] ">
                  <p className=" font-bold text-xl mb-1.5">Activity</p>
                  <p className=" text-base">Goorm univ</p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-0 gap-12">
                <div className="flex flex-col w-1/2 sm:h-[7.5rem]">
                  <p className=" font-bold text-xl mb-1.5">Project</p>
                  <p className=" text-base mb-1.5">전북짹짹이</p>
                  <p className=" text-base">rankit</p>
                </div>
                <div className="flex flex-col w-1/2 sm:h-[7.5rem]">
                  <p className=" font-bold text-xl mb-1.5">Scope</p>
                  <p className=" text-base mb-1.5">ui design</p>
                  <p className=" text-base">Frontend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3div */}
      <div className=" w-3/5 mx-auto">
        <div className=" w-2/3 ml-auto">
          <p>Contact Me</p>
        </div>
      </div>
    </>
  );
}
