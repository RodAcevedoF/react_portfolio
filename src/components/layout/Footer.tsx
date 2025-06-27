import { ContactBtn, MailBtn, TopBtn } from "../../components";
import { useModalContext } from "../../contexts";

export const Footer = () => {
  const { setState } = useModalContext();

  const openModal = () => {
    setState(true);
  };

  return (
    <footer className="flex flex-col p-10 gap-8 h-full w-full bg-white-300 bg-clip-padding backdrop-filter backdrop-blur-[5px] bg-opacity-30 border-t-4 border-[var(--clear-primary)]">
      <article className="flex flex-col w-full flex-wrap text-[var(--primary-color)]">
        <h3 className="text-2xl font-[Tungsten] tracking-[0.5em] pb-10">
          GET IN TOUCH
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
          <h3 className="text-md text-[var(--primary-color)] md:text-lg">
            Want to move forward?
          </h3>
          <MailBtn text="DROP A LINE" toggleModal={openModal} />
        </div>
        <TopBtn />
      </article>
    </footer>
  );
};
