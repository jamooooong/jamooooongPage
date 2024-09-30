import { Profile } from '../../ui/_components/profile';
import { ArchivingBox } from './_components/archivingBox';

export function ArchivingPage() {
  return (
    <div className="sm:w-3/5 mx-auto py-40 text-gray_01 px-3">
      <div className="flex sm:flex-row flex-col">
        <Profile />
        <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto gap-12">
          <p className=" text-4xl text-red_01 font-bold">Archiving</p>
          <div className=" flex  flex-col gap-8">
            <div className=" flex sm:flex-row flex-col sm:gap-4 gap-8">
              <ArchivingBox
                imgSrc="https://github.com/user-attachments/assets/80425b13-6cd5-4e2c-9b4c-e6ba8d243c45"
                label="kapa 사진전"
                tool="Ai Ps"
                text="2023년 교내 사진동아리 '시선'의 이미지 작업물 입니다."
                linkBtn_text="drive"
                linkBtn_link="https://drive.google.com/drive/folders/1lJ5DXWxV0CufnABBziBaNrjPwQfMqCB-?usp=sharing"
              />
              <ArchivingBox
                imgSrc="https://github.com/user-attachments/assets/eaba33b2-eb7c-4890-8015-d506259ec5a6"
                label="크래프트 한스 메뉴판"
                tool="Ps"
                text="2020년에 제작한 크래프트 한스 광교점 메뉴판 입니다."
                linkBtn_text="drive"
                linkBtn_link="https://drive.google.com/drive/folders/1D0jqq5FW66-q9J1AACpkrw5kGC3UQAOF?usp=sharing"
              />
            </div>
            <div className=" flex sm:flex-row flex-col sm:gap-4 gap-8">
              <ArchivingBox
                imgSrc="https://github.com/user-attachments/assets/b962b54c-847e-48bc-bb97-221c86b3e83f"
                label="ranikt"
                tool="Figma"
                text="깃허브 시각화 프로젝트 (진행중)"
                linkBtn_text="Figma"
                linkBtn_link="https://www.figma.com/design/n11ktcSdQi9AuGdmJeg44M/gitbal-ver.02-shared?m=auto&t=SLFpDwzuSwMEa5lF-1"
              />
              <ArchivingBox
                imgSrc="https://github.com/user-attachments/assets/e1b330c4-77de-4a40-9ccc-b785727b1532"
                label="소리온 크림"
                tool="Ps"
                text="2021년에 재직당시 제작한 소리온 크림 상세페이지 입니다. "
                linkBtn_text="drive"
                linkBtn_link="https://drive.google.com/drive/folders/1QOgn9j8qV8wu1ya5qvnuqmGx9eLBZb1o?usp=sharing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
