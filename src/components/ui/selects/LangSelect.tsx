import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" }
  // Puedes agregar más idiomas aquí
];

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="bg-transparent border border-blue-400/50 rounded px-2 py-1 text-[var(--primary-color)] font-[Lilita] cursor-pointer"
      aria-label="Select Language"
    >
      {languages.map(({ code, label }) => (
        <option
          key={code}
          value={code}
          className="bg-[#1e1e1e] text-white" // Estilos personalizados
        >
          {label}
        </option>
      ))}
    </select>
  );
};
