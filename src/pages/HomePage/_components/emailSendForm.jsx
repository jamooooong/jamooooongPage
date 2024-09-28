import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { InputSmall } from './inputSmall';
import { InputLarge } from './inputLarge';
import { SubmitBtn } from './submitBtn';

import Close from '../../../assets/images/svg/close.svg';

export const EmailSendForm = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          console.log('EMAIL SEND SUCCESS!');
          setIsEmailSent(true);
          setIsModalOpen(true);
        },
        (error) => {
          console.log('EMAIL SEND FAILED...', error.text);
          setIsEmailSent(false);
          setIsModalOpen(true);
        },
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <p className="text-4xl text-gray_01 font-bold mb-20">Contact Me!</p>
        <div className="flex flex-col gap-10 mb-4">
          <div className="flex flex-row content-between gap-10 justify-between">
            <InputSmall
              label="Name"
              placeholder="이름"
              type="text"
              name="from_name"
            />
            <InputSmall
              label="Email"
              placeholder="이메일주소"
              type="email"
              name="from_email"
            />
          </div>
          <InputLarge
            label="Message"
            placeholder="문의사항을 입력해주세요"
            name="message"
          />
        </div>
        <div className="flex justify-end">
          <SubmitBtn text="submit" />
        </div>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center bg-black1D">
          <div className="bg-white sm:px-36 sm:py-20 px-16 py-16 rounded-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 bg-blue-500 text-black1D px-4 py-4 rounded"
            >
              <img src={Close} alt="close" />
            </button>
            <p className=" text-base font-semibold text-gray_01 mb-6">
              {isEmailSent
                ? '이메일 전송에 성공했습니다.'
                : '이메일 전송에 실패 했습니다.'}
            </p>
            <p className=" text-base font-semibold text-gray_01">
              {isEmailSent
                ? 'woonini606@gmail.com 로 답변 드리겠습니다.'
                : 'woonini606@gmail.com 로 직접 보내주세요.'}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
