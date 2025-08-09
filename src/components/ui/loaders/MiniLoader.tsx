export const MiniLoader = () => {
  return (
    <div className='flex flex-row gap-2 p-10'>
      <div className='w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:.7s]' />
      <div className='w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:.3s]' />
      <div className='w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:.7s]' />
    </div>
  );
};
