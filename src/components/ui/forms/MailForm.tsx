import { useRef } from "react";
import { useSendEmail } from "../../../hooks/useSendEmail";
import { swalHandler } from "../../../utils";
import { useTranslation } from "react-i18next";

export const MailForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { send, isSending } = useSendEmail();
  const { t } = useTranslation();

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
        p-10 px-10 rounded-md border-2 
        border-blue-400/20  
        get-form:animate-slideIn get-form:z-[15]"
    >
      {/* Contact Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="from_name"
          className="text-[1.2em] font-[Lilita] text-[var(--primary-color)]"
        >
          {t("mailForm.contact_name")}
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          placeholder={t("mailForm.contact_name_placeholder")}
          className="w-full p-2 text-[1.2em] font-[Lilita] rounded-sm border-3 border-blue-400/50"
          required
        />
      </div>

      {/* Your Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[1.2em] font-[Lilita] text-[var(--primary-color)]"
        >
          {t("mailForm.your_message")}
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder={t("mailForm.your_message_placeholder")}
          className="w-full h-[5rem] p-2 text-[1.2em] font-[Lilita] border-3 border-blue-400/50 rounded-sm resize-none"
          required
        />
      </div>

      {/* Your Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email_id"
          className="text-[1.2em] font-[Lilita] text-[var(--primary-color)]"
        >
          {t("mailForm.your_email")}
        </label>
        <input
          type="email"
          name="email_id"
          id="email_id"
          placeholder={t("mailForm.your_email_placeholder")}
          className="w-full p-2 text-[1.2em] font-[Lilita] rounded-sm border-2 border-blue-400/50"
          required
        />
      </div>

      {/* Submit Button */}
      <input
        id="send-button"
        type="submit"
        value={isSending ? t("mailForm.sending") : t("mailForm.send_email")}
        className="border-none font-[Tungsten] text-[1.5em] tracking-widest 
  font-bold w-fit rounded-2xs pt-2 pb-0.5 px-2.5 cursor-pointer  
  shadow-[0.25rem_0.25rem_0_0_theme(colors.yellow.300),inset_0.25rem_0.25rem_0_0_theme(colors.yellow.300)] 
  transition-all duration-200 ease-in-out 
  hover:shadow-[0_0_0_0_theme(colors.blue.500),inset_6em_3.5em_0_0_theme(colors.blue.600)]"
      />
    </form>
  );
};
