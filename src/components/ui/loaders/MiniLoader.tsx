export const MiniLoader = ({ className = '' }: { className?: string }) => {
	return (
		<div className={`flex flex-row gap-2 p-20 ${className}`}>
			<div className='w-4 h-4 rounded-full bg-blue-800/80 animate-bounce [animation-delay:.7s]' />
			<div className='w-4 h-4 rounded-full bg-blue-600/80 animate-bounce [animation-delay:.3s]' />
			<div className='w-4 h-4 rounded-full bg-blue-400/80 animate-bounce [animation-delay:.7s]' />
		</div>
	);
};
