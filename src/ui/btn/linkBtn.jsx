import LinkIcon from '../../assets/images/svg/link-icon.svg';

export function LinkBtn({ text, link }) {
  return (
    <>
      <a
        href={link}
        className="text-gray_02 text-base flex flex-row gap-1 mr-2 "
      >
        <img src={LinkIcon} />
        {text}
      </a>
    </>
  );
}

export default LinkBtn;
