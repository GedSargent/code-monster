import React from "react";

interface RevealProps {
  children: React.ReactNode;
  title: string;
}

export default function Reveal({ children, title }: RevealProps) {
  const [isBlurred, setIsBlurred] = React.useState(true);

  const handleClickInside = () => {
		setIsBlurred(false);
  };

  return (
		<div onClick={handleClickInside} className={`!mt-4 relative rounded-2xl bg-white/30 border-2 border-black/10 p-8 shadow-black/40 ${isBlurred ? 'shadow-2xl' : 'shadow-md shadow-black-20'} transition duration-500 ${isBlurred ? 'cursor-pointer' : 'cursor-auto'} hover:shadow-md hover:shadow-black/20 dark:border-white/10 dark:bg-white/5`}>
			<div className={`relative !mt-0 select-none transition duration-500 ${isBlurred ? `blur-xl select-none` : `blur-0 select-auto`}`}>
				{children}
			</div>

			<div className={`absolute inset-0 !mt-0 ${isBlurred ? 'block' : 'hidden'}`}>
				<div className={`!mt-0 sticky top-20 text-shadow text-shadow-black/20 leading-[1.2] text-shadow-y-3 ${isBlurred ? 'text-shadow-blur-2 select-none' : 'text-shadow-transparent select-auto'} px-8 py-16 text-5xl font-black text-gray-400 transition duration-500 md:text-6xl md:leading-[1.3] dark:text-gray-50 dark:text-shadow-black/70`}>
					{title}
				</div>
			</div>
		</div>
  );
}
