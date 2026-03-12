'use client'
import { useEffect, useState } from "react"
import { scrollToSection } from '@/utils/navigation'

export default function BackToTop() {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			const scrolled = window.scrollY > 100
			setHasScrolled(scrolled)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const handleClick = () => {
		scrollToSection('about')
	}

	if (!hasScrolled) return null

	return (
		<div 
			onClick={handleClick} 
			style={{ 
				position: 'fixed',
				right: '1.5rem',
				bottom: '1.5rem',
				width: '3rem',
				height: '3rem',
				cursor: 'pointer',
				zIndex: 1010,
				opacity: 1,
				visibility: 'visible',
				transition: 'all 0.2s linear'
			}}
		>
			<svg 
				width="100%" 
				height="100%" 
				viewBox="0 0 512 512" 
				style={{
					filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
				}}
			>
				<g>
					<g>
						<path 
							d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M377.749,313.749
							c-4.16,4.16-9.621,6.251-15.083,6.251c-5.462,0-10.923-2.091-15.083-6.251L256,222.165l-91.584,91.584
							c-8.341,8.341-21.824,8.341-30.165,0c-8.341-8.341-8.341-21.824,0-30.165l106.667-106.667c8.341-8.341,21.824-8.341,30.165,0
							L377.75,283.584C386.091,291.925,386.091,305.408,377.749,313.749z" 
							fill="#6e4ef2"
						/>
					</g>
				</g>
			</svg>
		</div>
	)
}
