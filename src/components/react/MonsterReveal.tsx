import React from "react";

interface RevealProps {
  children: React.ReactNode;
	secretRevealCode?: string;
  title: string;
}

export default function Reveal({ children, secretRevealCode, title }: RevealProps) {
  const [isBlurred, setIsBlurred] = React.useState(true);
	const [enteredCode, setEnteredCode] = React.useState("");
	const [hasWrongCode, setHasWrongCode] = React.useState(false);

  const handleClickInside = () => {
		// Only reveal if there's no secret code required
		if (!secretRevealCode) {
			setIsBlurred(false);
		}
  };

	const handleCodeSubmit = () => {
		// Only validate if user has entered something
		if (!enteredCode.trim()) {
			return;
		}

		if (enteredCode !== secretRevealCode) {
			// Trigger jiggle animation for incorrect code
			setHasWrongCode(true);
			return;
		}

		// Code is correct, reveal the content
		setIsBlurred(false);
	};

	// Reset the jiggle animation after it completes (500ms)
	React.useEffect(() => {
		if (hasWrongCode) {
			const timer = setTimeout(() => {
				setHasWrongCode(false);
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [hasWrongCode]);

  return (
		<div
			onClick={handleClickInside}
			className={`!mt-4 relative rounded-2xl bg-white/30 border-2 border-black/10 p-8 shadow-black/40 ${isBlurred ? 'shadow-2xl' : 'shadow-md shadow-black-20'}	transition duration-500	${isBlurred ? 'cursor-pointer' : 'cursor-auto'}	hover:shadow-md hover:shadow-black/20 dark:border-white/10 dark:bg-white/5`}>
			<div className={`monster-reveal-content relative !mt-0 transition duration-500
				${isBlurred ? `blur-xl select-none` : `blur-0 select-auto`}`}
			>
				{children}
			</div>

			<div className={`absolute inset-0 !mt-0 ${isBlurred ? 'block' : 'hidden'}`}>
				<div className={`!mt-0 sticky top-20 text-center text-shadow text-shadow-black/20 leading-[1.2] text-shadow-y-3	${isBlurred ? 'text-shadow-blur-2 select-none' : 'text-shadow-transparent select-auto'}	px-8 py-16 text-5xl font-black text-gray-400 transition duration-500 md:text-6xl md:leading-[1.3]	dark:text-gray-50 dark:text-shadow-black/70`}>
					{title}
					{/* If secretRevealCode is provided, show an input field to enter the code */}
					{secretRevealCode && (
						<div className="mt-8" onClick={(e) => e.stopPropagation()}>
							<input
								tabIndex={0}
								type="text"
								className="mt-2 rounded-lg border border-gray-300 text-center px-4 py-2 text-lg shadow-sm focus:outline-grey-300"
								style={{
									animation: hasWrongCode ? 'jiggle 0.5s ease-in-out' : 'none'
								}}
								placeholder="Enter super-secret code"
								value={enteredCode}
								onChange={(event) => setEnteredCode(event.target.value)}
								onKeyUp={(event) => {
									if (event.key === "Enter") {
										handleCodeSubmit();
									}
								}}
							/>
						</div>
					)}
				</div>

			</div>
		</div>
  );
}
