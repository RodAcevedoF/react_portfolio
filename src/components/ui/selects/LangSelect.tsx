import { useTranslation } from "react-i18next";
import { en, es, de } from "../../../assets";

const languages = [
  { code: "en", label: "English", icon: en },
  { code: "es", label: "Español", icon: es },
  { code: "de", label: "Deutsch", icon: de }
];

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const currentLang = languages.find((lang) => lang.code === i18n.language);

  return (
    <div className="flex items-center gap-1 border-2 p-2 rounded-md border-yellow-200/30">
      {currentLang && (
        <img
          src={currentLang.icon}
          alt={`${currentLang.label} icon`}
          className="w-6 h-6"
        />
      )}
      <select
        onChange={handleChange}
        value={i18n.language}
        className="bg-transparent rounded px-2 py-1 text-[var(--primary-color)] font-[Lilita] cursor-pointer"
        aria-label="Select Language"
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code} className="bg-[#1e1e1e] text-white">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
