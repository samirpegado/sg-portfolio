import ThemeSwitch from '@/components/elements/ThemeSwitch'
import LanguageSelector from '@/components/elements/LanguageSelector'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import OffCanvas from '../OffCanvas'
import MobileMenu from '../MobileMenu'

export default function Header2({ scroll, isMobileMenu, handleMobileMenu,isOffCanvas, handleOffCanvas }:any) {
    const { t } = useLanguage();
    
    return (
        <>
            <header>
				<div className="container position-relative">
					<div className="position-relative">
						<nav className="navbar navbar-expand-lg navbar-home-2 flex-nowrap z-999 p-0 border border-1 rounded-3">
							<a className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex" data-bs-target=".offCanvas__info" aria-controls="offCanvas__info" onClick={handleOffCanvas}>
								<i className="ri-menu-2-line" />
							</a>
							<div className="container py-3 px-4 d-flex align-items-center justify-content-between">
								<Link className="navbar-brand d-flex main-logo align-items-center" href="/index-2">
									<img 
										src="assets/imgs/home-page-2/template/favicon.svg" 
										alt="zelio" 
										className="d-none d-md-block"
										style={{ width: '32px', height: '32px' }}
									/>
									<img 
										src="assets/imgs/home-page-2/template/favicon.svg" 
										alt="zelio" 
										className="d-block d-md-none"
										style={{ width: '24px', height: '24px' }}
									/>
									<span className="fs-4 ms-2 d-none d-sm-block">samir.dev</span>
									<span className="fs-4 ms-1 d-block d-sm-none">samir.dev</span>
								</Link>
								
								<div className="d-none d-xl-flex">
									<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav me-auto mb-2 mb-lg-0">
											<li className="nav-item">
												<Link className="nav-link active" href="#about">{t('nav.about')}</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" href="#services">{t('nav.services')}</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" href="#experience">{t('nav.resume')}</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" href="#portfolio">{t('nav.portfolio')}</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" href="#contact">{t('nav.contact')}</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="d-flex align-items-center gap-2">
									{/* LanguageSelector sempre visível */}
									<LanguageSelector />
									
									{/* Elementos visíveis apenas em telas xl+ */}
									<div className="d-none d-xl-flex align-items-center gap-3">
										{/* <div className="d-flex gap-3">
											<Link href="/http://instagram.com">
												<i className="ri-instagram-fill fs-18" />
											</Link>
											<Link href="/http://linkedin.com">
												<i className="ri-linkedin-fill fs-18" />
											</Link>
											<Link href="/http://github.com">
												<i className="ri-github-fill fs-18" />
											</Link>
										</div> */}
									</div>
									
									{/* Menu hambúrguer - visível apenas em telas menores que xl */}
									<button 
										className="btn border rounded-3 p-2 d-xl-none" 
										onClick={handleMobileMenu}
										style={{
											width: '40px', 
											height: '40px', 
											display: 'flex', 
											flexDirection: 'column',
											alignItems: 'center', 
											justifyContent: 'center',
											gap: '3px',
											backgroundColor: 'transparent',
											border: '1px solid #dee2e6'
										}}
									>
										<div style={{width: '20px', height: '2px', backgroundColor: 'currentColor'}}></div>
										<div style={{width: '20px', height: '2px', backgroundColor: 'currentColor'}}></div>
										<div style={{width: '20px', height: '2px', backgroundColor: 'currentColor'}}></div>
									</button>
								</div>
							</div>
							
							{/* ThemeSwitch - visível apenas em telas xl+ */}
							<div className="d-none d-xl-block">
								<ThemeSwitch />
							</div>
						</nav>
					</div>
					{/* offCanvas-menu */}
					<OffCanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
					<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
				</div>
			</header>
        </>
    )
}