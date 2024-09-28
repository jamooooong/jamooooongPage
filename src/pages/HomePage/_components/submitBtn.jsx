import Arrow_forward from '../../../assets/images/svg/arrow_forward.svg';

export function SubmitBtn({ text }) {
  return (
    <button
      className="w-fit text-red_01 hover:text-red_01_hover active:text-red_01_press text-3xl font-bold py-2 border-b-2 flex flex-row"
      type="submit"
    >
      {text}
      <img src={Arrow_forward} className="my-auto" />
    </button>
  );
}
