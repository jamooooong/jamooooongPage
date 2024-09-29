import { Profile } from '../../ui/_components/profile';
import { ProjectBox } from './_components/projectBox';

export function ProjectPage() {
  return (
    <div className="sm:w-3/5 mx-auto py-40 text-gray_01 px-3">
      <div className="flex sm:flex-row flex-col">
        <Profile />
        <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto gap-12">
          <p className=" text-4xl text-red_01 font-bold">Project</p>
          <div className=" flex sm:flex-row flex-col sm:gap-4 gap-8">
            <ProjectBox
              imgSrc="https://github.com/user-attachments/assets/b962b54c-847e-48bc-bb97-221c86b3e83f"
              label="rankit"
              device="WEB"
              text="깃허브 시각화 프로젝트 (진행중)"
              linkBtn_text="github"
              linkBtn_link="https://github.com/capstone-kw-jjiggle"
            />
            <ProjectBox
              imgSrc="https://github.com/user-attachments/assets/51bc6b9f-9430-4a1b-bf35-7e29155174f0"
              label="전북알리미 짹짹"
              device="APP"
              text="한국 스마트 정보 교육원 주관 24년 상반기 SW 개발 공모전"
              linkBtn_text="youtube"
              linkBtn_link="https://youtu.be/c24cvJr5iu4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
