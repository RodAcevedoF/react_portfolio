import type { FC } from "react";

export const MusicSpin: FC = () => {
  return (
    <div className="relative h-10 w-10 rounded-full bg-[#0c0c0c] grid place-content-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="12px"
        viewBox="0 -960 960 960"
        width="12px"
        fill="#e0f2fe" // azul claro (equivalente a Tailwind blue-100)
        className="[animation:spin_5s_linear_infinite]"
      >
        <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
      </svg>

      <div
        className="absolute inset-0 rounded-full 
          [animation:spin_5s_linear_infinite]
          shadow-[inset_0_0_0_5px_#0c0c0c,inset_0_0_0_7px_#3b82f6,inset_0_0_0_10px_#0c0c0c,inset_0_0_0_12px_#e0f2fe]"
      />

      <div
        className="absolute inset-[-3px] z-[-1] rounded-full
          [animation:spin_5s_linear_infinite]
          [background-image:conic-gradient(#60a5fa,#fde68a,#3b82f6)]"
      />
      <div
        className="absolute inset-[-3px] z-[-2] rounded-full blur-[10px]
          [animation:spin_5s_linear_infinite]
          [background-image:conic-gradient(#60a5fa,#fde68a,#3b82f6)]"
      />
    </div>
  );
};
