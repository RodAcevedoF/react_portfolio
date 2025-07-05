import { useLocation, useNavigate } from "react-router-dom";
import { HomeBtn, ToggleBtn } from "../../components";
import { useScrollContext } from "../../contexts";

export const NavBar = () => {
  const { scrolled } = useScrollContext();
  const location = useLocation();
  const navigate = useNavigate();

  const isAboutPage = location.pathname === "/about";
  const handleClickScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTogglePage = () => {
    if (isAboutPage) {
      navigate("/home");
    } else {
      navigate("/about");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`flex items-center justify-between fixed top-0 w-full min-h-[5rem] z-50 px-4 sm:px-8 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <HomeBtn parentMethod={handleClickScrollToTop} text="Rod Acevedo" />
      <ToggleBtn isAboutPage={isAboutPage} onToggle={handleTogglePage} />
    </nav>
  );
};
