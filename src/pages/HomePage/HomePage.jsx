import { Profile } from '../../ui/_components/profile';
import { EmailSendForm } from './_components/emailSendForm';

export function HomePage() {
  return (
    <>
      {/* 1div */}
      <div className="sm:w-3/5 mx-auto py-40 text-gray_01 px-3">
        <div className="flex sm:flex-row flex-col">
          <Profile />
          <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto">
            <p className=" text-4xl text-red_01 font-bold mb-12">
              안녕하세요. 디자이너 박우석입니다.
            </p>
            <p className=" text-xl font-bold mb-4">
              {'{'} jamooooong {'}'}의 한줄 소개
            </p>
            <p className=" text-base text-gray_02 mb-12">
              안녕하세요 저는 디자인과, 프론트엔드에 관심이 많은 광운대학교
              19학번 정부융합학부 학생입니다.
            </p>
            <p className=" text-xl font-bold mb-4">저는 이런거를 잘해요.</p>
            <p className=" text-base text-gray_02 mb-12">
              저는 교내 프로젝트 혹은 과제에서 디자이너와 프론트엔드를
              경험하면서, 개발자의 입장에서 생각하는 디자이너 입니다. 포토샵과
              일러스트레이터를 다룰줄 알고, 오픈마켓 담당자로 쇼핑몰의
              상세페이지 및 이미지를 제작한 경험이 있습니다.
            </p>
            <p className=" text-xl font-bold mb-4">
              저는 이런걸 배우고 싶어요.
            </p>
            <p className=" text-base text-gray_02">
              Goorm Univ가 저의 첫 해커톤입니다. 프론트엔드 개발자를 지향하면서
              프로토타입의 중요성을 느꼈고, 디자이너로 성장하고자 Goorm Univ를
              참여하게되었습니다. 디자이너로서의 스킬과, 기획 및 개발 팀원들간의
              프로토타입핑을 통한 원활한 소통을 위해 배우고 싶고, 노력하고
              있습니다.
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
                <div className="flex flex-col sm:w-1/2 sm:h-[7.5rem]">
                  <p className=" font-bold text-xl  mb-1.5">Education</p>
                  <p className=" text-base  mb-1.5">별내고등학교 졸업</p>
                  <p className=" text-base">광운대학교 정보융합학부 입학</p>
                </div>
                <div className="flex flex-col sm:w-1/2 sm:h-[7.5rem]">
                  <p className=" font-bold text-xl mb-1.5">Skill</p>
                  <p className=" text-base  mb-1.5">
                    Adobe Photoshop / illustrator / lightroom
                  </p>
                  <p className=" text-base mb-1.5">Figma</p>
                  <p className=" text-base">React</p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-0 gap-12">
                <div className="flex flex-col sm:w-1/2 sm:h-[7.5rem]">
                  <p className=" font-bold text-xl mb-1.5">Work</p>
                  <p className=" text-base  mb-1.5">(주)써밋컴퍼니 재직</p>
                  <p className=" text-base">광운대학교 정보융합학부 입학</p>
                </div>
                <div className="flex flex-col sm:w-1/2 sm:h-[7.5rem] ">
                  <p className=" font-bold text-xl mb-1.5">Activity</p>
                  <p className=" text-base">Goorm univ</p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-0 gap-12">
                <div className="flex flex-col sm:w-1/2 sm:h-[7.5rem]">
                  <p className=" font-bold text-xl mb-1.5">Project</p>
                  <p className=" text-base mb-1.5">전북짹짹이</p>
                  <p className=" text-base">rankit</p>
                </div>
                <div className="flex flex-col sm:w-1/2 sm:h-[7.5rem]">
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
      <div className=" bg-white py-40 text-gray_01">
        <div className="sm:w-3/5 mx-auto px-3">
          <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto">
            <EmailSendForm />
          </div>
        </div>
      </div>
    </>
  );
}
