import React from "react";

interface MonsterRevealProps {
  children: React.ReactNode;
  title: string;
}


export default function MonsterReveal({ children, title }: MonsterRevealProps) {
  const [isBlurred, setIsBlurred] = React.useState(true);

	const handleClick = () => {
		if (!isBlurred) return;

		setIsBlurred(false);
	};

  return (
		<div onClick={handleClick} className={`relative rounded-2xl border-2 border-gray-200 p-8 shadow-2xl shadow-black/40 transition duration-500 ${isBlurred ? 'cursor-pointer' : 'cursor-auto'} hover:shadow-md dark:border-gray-700 dark:bg-white/5`}>
			<div className={`relative select-none transition duration-500 ${isBlurred ? `blur-xl select-none` : `blur-0 select-auto`}`}>
				{children}
			</div>

			<div className={`absolute inset-0 !mt-0 ${isBlurred ? 'block' : 'hidden'} `}>
				<div className={`text-shadow text-shadow-gray-300 text-shadow-y-3 ${isBlurred ? 'text-shadow-blur-2' : 'text-shadow-transparent'} px-8 py-16 text-center text-5xl font-black text-gray-500 transition duration-500 md:text-6xl dark:text-gray-50 dark:text-shadow-black/70`}>
					{title}
				</div>
			</div>
		</div>
  );
}
