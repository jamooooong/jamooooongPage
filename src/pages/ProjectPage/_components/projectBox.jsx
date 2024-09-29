import LinkBtn from '../../../ui/btn/linkBtn';

export function ProjectBox({
  label,
  imgSrc,
  device,
  text,
  linkBtn_text,
  linkBtn_link,
}) {
  return (
    <>
      <div className="flex flex-col shadow-lg  border-gray_02 rounded-lg bg-white p-2 text-gray_01 ">
        <img
          src={imgSrc}
          className=" border-gray_03 shadow-lg rounded-lg mb-4"
        />
        <div className="flex flex-row gap-4 align-bottom">
          <p className=" font-semibold text-xl">{label}</p>
          <p className=" text-red_01 text-base">{device}</p>
        </div>
        <p className=" text-base text-gray_02 mb-4 h-10">{text}</p>
        <div className="flex justify-end">
          <LinkBtn text={linkBtn_text} link={linkBtn_link} />
        </div>
      </div>
    </>
  );
}
