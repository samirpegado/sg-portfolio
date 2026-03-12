'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import PerfectScrollbar from 'react-perfect-scrollbar'

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
											<Link className="nav-link" href="#about" onClick={handleMobileMenu}>{t('nav.about')}</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="#services" onClick={handleMobileMenu}>{t('nav.services')}</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="#experience" onClick={handleMobileMenu}>{t('nav.resume')}</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="#portfolio" onClick={handleMobileMenu}>{t('nav.portfolio')}</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="#contact" onClick={handleMobileMenu}>{t('nav.contact')}</Link>
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
