import Profile_Img from '../../../public/imgs/profile_img.png';
import LinkBtn from './_components/linkBtn';

export function HomePage() {
  return (
    <>
      <div className="h-screen text-gray_01 flex flex-row">
        <div className="flex flex-row mt-56">
          <div className="flex flex-col w-60 mr-24">
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
          <div className="flex flex-col">
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
    </>
  );
}
