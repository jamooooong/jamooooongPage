import Profile_Img from "../../../public/imgs/profile_img.png"
import LinkBtn from "./_components/linkBtn";

export function HomePage() {
  return (
    <>
      <div className="h-screen"> 
        <div className="flex flex-row mt-56">
          <div className="flex flex-col w-60">
            <img src={Profile_Img} alt="profile_img" className=" mb-6"/>
            <p className="text-red_01 font-semibold text-base my-1">javaScript</p>
            <p className=" text-3xl font-bold my-1">jamooooong</p>
            <div className="flex flex-row my-5">
              <LinkBtn text="github" link="https://github.com/jamooooong" />
              <LinkBtn text="instagram" link="https://www.instagram.com/jamong__w.s/" />
            </div>
          </div>
          <div className="flex flex-col">
            <p>안녕하세요 박우석입니다.</p>
            <p>안녕하세요 박우석입니다.</p>
            <p>안녕하세요 박우석입니다.</p>
            <p>안녕하세요 박우석입니다.</p>
            <p>안녕하세요 박우석입니다.</p>
            <p>안녕하세요 박우석입니다.</p>

          </div>
        </div>
        
        
      </div>
    </>
  );
}
