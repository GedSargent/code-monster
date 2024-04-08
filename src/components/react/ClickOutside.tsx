import { useRef, useEffect } from 'react'

interface ClickOutsideProps {
	children: React.ReactNode
	exceptionRef?: React.RefObject<any>
	onClick: () => void
	className?: string
}

export default function ClickOutside({
	children,
	exceptionRef,
	onClick,
	className,
}: ClickOutsideProps) {
	const wrapperRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		document.addEventListener('mousedown', handleClickListener)

		return () => {
			document.removeEventListener('mousedown', handleClickListener)
		}
	}, [])

	const handleClickListener = (event: Event) => {
		let clickedInside: Boolean | undefined = false

		// Ensure wrapperRef?.current and exceptionRef?.current are treated as Node when calling contains
		const target = event.target as Node // Safely asserting event.target as Node
		const { nodeName } = target
		const parentNodeName = target.parentNode?.nodeName

		const isNotInsideButton = parentNodeName !== 'BUTTON'
		const nodesToTriggerOutsideClick = [
			'DIV',
			'P',
			'H1',
			'H2',
			'H3',
			'H4',
			'H5',
			'H6',
			'IMG',
			'SVG',
			'KBD',
			'DL',
			'DT',
			'DD',
			'OL',
			'UL',
			'LI',
		]

		const shouldTriggerOutsideClick =
			!clickedInside &&
			nodesToTriggerOutsideClick.includes(nodeName) &&
			isNotInsideButton

		if (exceptionRef && exceptionRef.current) {
			clickedInside =
				wrapperRef?.current?.contains(target) ||
				exceptionRef.current === target ||
				exceptionRef.current.contains(target)
		} else {
			clickedInside = wrapperRef?.current?.contains(target)
		}

		if (shouldTriggerOutsideClick) {
			onClick()
		}
	}

	return (
		<div ref={wrapperRef} className={`${className || ''}`}>
			{children}
		</div>
	)
}
