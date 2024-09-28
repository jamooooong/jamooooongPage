import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { InputSmall } from './inputSmall';
import { InputLarge } from './inputLarge';
import { SubmitBtn } from './submitBtn';

export const EmailSendForm = () => {
  const form = useRef();

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
        },
        (error) => {
          console.log('EMAIL SEND FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p className=" text-4xl text-gray_01 font-bold mb-20">나의 발자취</p>
      <div className="flex flex-col gap-10 mb-4">
        <div className=" flex flex-row content-between gap-10 justify-between">
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
      <div className=" ml-auto">
        <SubmitBtn text="submit" />
      </div>
    </form>
  );
};
