import { ContactBtn, LanguageSelect, MailBtn, TopBtn } from "../../components";
import { useModalContext } from "../../contexts";
import { Trans, useTranslation } from "react-i18next";

export const Footer = () => {
  const { setState } = useModalContext();
  const { t } = useTranslation();

  const openModal = () => {
    setState(true);
  };

  return (
    <footer className="flex flex-col p-10 gap-8 h-full w-full bg-white-300 bg-clip-padding backdrop-filter backdrop-blur-[5px] bg-opacity-30 border-t-4 border-[var(--clear-primary)]">
      <article className="flex flex-col w-full flex-wrap text-[var(--primary-color)]">
        <h3 className="text-2xl font-[Tungsten] tracking-[0.5em] pb-10">
          <Trans
            i18nKey="footer.get_in_touch"
            components={{ blue: <span className="text-blue-400 font-black" /> }}
          />
        </h3>
        <div className="contact-div flex flex-wrap gap-8 w-4/5 px-6">
          <ContactBtn
            name="X"
            url="https://x.com"
            hoverColor="hover:text-red-500"
            pointColor="text-red-500"
          />
          <ContactBtn
            name="LinkedIn"
            url="https://linkedin.com"
            hoverColor="hover:text-blue-500"
            pointColor="text-blue-500"
          />
          <ContactBtn
            name="Instagram"
            url="https://instagram.com"
            hoverColor="hover:text-pink-500"
            pointColor="text-pink-500"
          />
          <ContactBtn
            name="GitHub"
            url="https://github.com"
            hoverColor="hover:text-green-500"
            pointColor="text-green-500"
          />
          <ContactBtn
            name="Facebook"
            url="https://facebook.com"
            hoverColor="hover:text-violet-500"
            pointColor="text-violet-500"
          />
        </div>
      </article>

      <article className="mail-article flex justify-between flex-wrap gap-12 px-4 py-2">
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-md text-blue-400 md:text-lg">
            {t("footer.want_to_move_forward")}
          </h3>
          <MailBtn text={t("footer.drop_a_line")} toggleModal={openModal} />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <LanguageSelect />
          <TopBtn />
        </div>
      </article>
    </footer>
  );
};
