import { useScrollContext } from '../../../contexts';
import { type PortraitProps } from '../../../types';

export const Portrait = ({ src, alt }: PortraitProps) => {
	const { scrolled } = useScrollContext();
	return (
		<img
			src={src}
			alt={alt}
			className={`
            w-[300px] sm:w-[350px] md:w-[500px] absolute top-[-12vh] sm:top-[-14vh] md:top-[-10vh] right-[20%] md:right-[10vw]
            transition-all duration-300
            ${scrolled ? 'invert' : 'filter-none'}
          `}
		/>
	);
};
/* mask-[radial-gradient(circle,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_99%)] */
