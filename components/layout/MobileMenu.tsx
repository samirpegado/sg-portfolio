'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { handleNavClick } from '@/utils/navigation'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const { t } = useLanguage();
	
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
							<img src="assets/imgs/home-page-2/template/favicon.svg" alt="infinia" />
							<span className="fs-4 ms-2 text-dark">samir.dev</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<PerfectScrollbar className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										<li className="nav-item">
											<a className="nav-link" href="#about" onClick={(e) => { handleNavClick(e, '#about'); handleMobileMenu(); }}>{t('nav.about')}</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#services" onClick={(e) => { handleNavClick(e, '#services'); handleMobileMenu(); }}>{t('nav.services')}</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#experience" onClick={(e) => { handleNavClick(e, '#experience'); handleMobileMenu(); }}>{t('nav.resume')}</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#portfolio" onClick={(e) => { handleNavClick(e, '#portfolio'); handleMobileMenu(); }}>{t('nav.portfolio')}</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#contact" onClick={(e) => { handleNavClick(e, '#contact'); handleMobileMenu(); }}>{t('nav.contact')}</a>
										</li>
									</ul>
								</nav>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</>
	)
}
