import { useRef } from "react";
import { useSendEmail } from "../../../hooks/useSendEmail";
import { swalHandler } from "../../../utils";

export const MailForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { send, isSending } = useSendEmail();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const result = await send(formRef.current);
    if (result.success) {
      swalHandler.success();
      formRef.current.reset();
    } else {
      swalHandler.error();
    }
  };

  return (
    <form
      ref={formRef}
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit}
      className="flex w-full h-full min-w-[30vw] flex-col text-[var(--primary-color)] gap-5 
        p-10 px-10 rounded-xl border-2 
        border-[var(--primary-color)] 
        bg-[var(--secondary-color)] 
        get-form:animate-slideIn get-form:z-[15]"
    >
      {/* Contact Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="from_name"
          className="text-[1.2em] font-[Lilita] text-[var(--primary-color)]"
        >
          Contact Name
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          placeholder="What's your name?"
          className="w-full p-2 text-[1.2em] font-[Lilita] rounded-md border-2 border-[var(--primary-color)]"
          required
        />
      </div>

      {/* Your Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[1.2em] font-[Lilita] text-[var(--primary-color)]"
        >
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="Leave me a message"
          className="w-full h-[5rem] p-2 text-[1.2em] font-[Lilita] border-2 border-[var(--primary-color)] rounded-md resize-none"
          required
        />
      </div>

      {/* Your Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email_id"
          className="text-[1.2em] font-[Lilita] text-[var(--primary-color)]"
        >
          Your Email
        </label>
        <input
          type="email"
          name="email_id"
          id="email_id"
          placeholder="I'll reply ASAP!"
          className="w-full p-2 text-[1.2em] font-[Lilita] rounded-md border-2 border-[var(--primary-color)]"
          required
        />
      </div>

      {/* Submit Button */}
      <input
        id="send-button"
        type="submit"
        value={isSending ? "Sending..." : "Send Email"}
        className="border-none font-tungsten text-[1.5em] tracking-widest 
          font-bold w-fit rounded-md pt-2 pb-0.5 px-2.5 cursor-pointer 
          text-[var(--back-general)] bg-[var(--letter-general)] 
          shadow-[0.3em_0.3em_0_0_rgb(52,124,226),inset_0.3em_0.3em_0_0_rgb(52,124,226)] 
          transition-all duration-200 ease-in-out 
          hover:shadow-[0_0_0_0_blueviolet,inset_6em_3.5em_0_0_blueviolet]"
      />
    </form>
  );
};
