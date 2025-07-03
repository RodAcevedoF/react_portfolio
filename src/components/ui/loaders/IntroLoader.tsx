export const IntroLoader = () => {
  return (
    <div className="flex justify-center items-center relative animate-pulse-loader">
      <div
        className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full"
        style={{
          background: "radial-gradient(circle, #fe53bb, #8f51ea)",
          transform: "translate(-50%, -50%)",
          animation: "pulse-nucleus 1s ease-in-out infinite",
          boxShadow: "0 0 20px #fe53bb, 0 0 40px #8f51ea"
        }}
      />
      <div
        className="absolute rounded-full w-[190px] h-[190px] border-b-8 border-transparent"
        style={{
          borderBottomColor: "#fe53bb",
          animation: "rotate1 1s ease-in-out infinite",
          boxShadow: "0 0 4px #8e8e8e"
        }}
      />
      <div
        className="absolute rounded-full w-[190px] h-[190px] border-b-8 border-transparent"
        style={{
          borderBottomColor: "#8f51ea",
          animation: "rotate2 1s ease-in-out infinite",
          boxShadow: "0 0 4px #8e8e8e"
        }}
      />
      <div
        className="absolute rounded-full w-[190px] h-[190px] border-b-8 border-transparent"
        style={{
          borderBottomColor: "#0044ff",
          animation: "rotate3 1s ease-in-out infinite",
          boxShadow: "0 0 4px #8e8e8e"
        }}
      />
      <div
        className="absolute rounded-full w-[380px] h-[380px] border-2 border-transparent border-b-[16px]"
        style={{
          borderBottomColor: "#fe53bb",
          animation: "rotate4 1s ease-in-out infinite",
          boxShadow: "0 0 4px #8e8e8e"
        }}
      />
      <div
        className="absolute rounded-full w-[380px] h-[380px] border-2 border-transparent border-b-[16px]"
        style={{
          borderBottomColor: "#8f51ea",
          animation: "rotate5 1s ease-in-out infinite",
          boxShadow: "0 0 4px #8e8e8e"
        }}
      />
      <div
        className="absolute rounded-full w-[380px] h-[380px] border-2 border-transparent border-b-[16px]"
        style={{
          borderBottomColor: "#0044ff",
          animation: "rotate6 1s ease-in-out infinite",
          boxShadow: "0 0 4px #8e8e8e"
        }}
      />
    </div>
  );
};
