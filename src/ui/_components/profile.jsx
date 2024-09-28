import Profile_Img from '../../assets/images/profile_img.png';
import LinkBtn from '../btn/linkBtn';

export function Profile() {
  return (
    <div className="flex flex-col w-60 mr-24 sm:fixed">
      <img src={Profile_Img} alt="profile_img" className=" mb-6" />
      <p className="text-red_01 font-semibold text-base my-1">javaScript</p>
      <p className=" text-3xl font-bold my-1">jamooooong</p>
      <div className="flex flex-row my-5">
        <LinkBtn text="github" link="https://github.com/jamooooong" />
        <LinkBtn
          text="instagram"
          link="https://www.instagram.com/jamong__w.s/"
        />
      </div>
    </div>
  );
}
