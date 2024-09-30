import { Profile } from '../../ui/_components/profile';

export function AboutPage() {
  return (
    <>
      <div className="sm:w-3/5 mx-auto py-40 text-gray_01 px-3">
        <div className="flex sm:flex-row flex-col">
          <Profile />
          <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto gap-12">
            <p className=" text-4xl text-red_01 font-bold">Hobby</p>
            <div className="flex sm:flex-row flex-col w-full gap-4">
              <img
                src="https://github.com/user-attachments/assets/449f96ae-404f-4e93-ab1c-cf686bd89c08"
                className=" rounded-lg"
              />
              <div className="flex flex-col gap-4">
                <p className=" text-xl font-bold">사진</p>
                <p className=" text-base text-gray_02">
                  중학생때부터 카메라에 관심을 가지게 되었어요. 대학에서 4년째
                  사진동아리에서 활동하고 있습니다. 요즘은 흑백 사진을 찍는 것을
                  좋아하고, 주변 친구들과 즐거운 시간을 사진에 담는 것을
                  좋아해요
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col w-full gap-4">
              <img
                src="https://github.com/user-attachments/assets/ad5ac71a-3f71-45ba-a100-cb198a4dcca3"
                className=" rounded-lg"
              />
              <div className="flex flex-col gap-4">
                <p className=" text-xl font-bold">기계 만지기</p>
                <p className=" text-base text-gray_02">
                  어릴때부터 기계를 만지고 분해하는걸 좋아했어요. 컴퓨터
                  조립하고, 부품들 만지는거 좋아합니다. IT기기에 관심이
                  많습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2div */}
      <div className=" bg-gray_03 py-40 text-gray_01">
        <div className="sm:w-3/5 mx-auto px-3">
          <div className="flex sm:flex-row flex-col">
            <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto gap-12">
              <p className=" text-4xl text-red_01 font-bold">Like</p>
              <div className="flex sm:flex-row flex-col w-full gap-4">
                <img
                  src="https://github.com/user-attachments/assets/ae9ee2da-0968-4fa3-8231-4633078eae6e"
                  className=" rounded-lg"
                />
                <div className="flex flex-col gap-4">
                  <p className=" text-xl font-bold">회</p>
                  <p className=" text-base text-gray_02">
                    생선회 연어 광어 참치 고등어 등등 가리지 않고 다 좋아합니다.
                    언제든 날로먹는 건 최고!
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col w-full gap-4">
                <img
                  src="https://github.com/user-attachments/assets/4b2c9d0c-1d6c-47bb-b382-6e00d13cce62"
                  className=" rounded-lg"
                />
                <div className="flex flex-col gap-4">
                  <p className=" text-xl font-bold">i luv vietnam</p>
                  <p className=" text-base text-gray_02">
                    베트남에 놀러가는게 너무 좋아요. 24년에만 두번 다녀왔어요.
                    음식도 맛있고, 관광지도 좋고, 경치도 좋고, 물가도 저렴해서
                    여유를 즐기기 너무 좋아요. 더운거만 빼면요...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
