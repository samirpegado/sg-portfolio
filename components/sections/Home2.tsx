"use client";
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home2() {
	const { t } = useLanguage();

	return (
		<>
			<section id="about" className="section-hero-2 position-relative pt-130">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<img src="assets/imgs/home-page-2/hero-1/people.png" alt="zelio" />

										<div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
											<img src="assets/imgs/home-page-2/hero-1/icon.svg" alt="zelio" />

										</div>

									</div>
								</div>

								<div className="col-lg-6 mx-lg-auto col-md-12">
									<div className="p-lg-0 p-md-8 p-3" style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>
										<div className="text-secondary-2 d-flex align-items-center flex-wrap">
											&lt;span&gt;
											<div className="text-dark">
												<div className="typewriter">
													<h1 className="fs-6 fw-medium text-nowrap">{t('hero.greeting')}</h1>
												</div>
											</div>
											&lt;/span&gt;
										</div>
										<h1 
											className="my-3 lh-1"
											style={{
												fontSize: 'clamp(1.5rem, 8vw, 3.5rem)',
												wordBreak: 'break-word',
												overflowWrap: 'break-word'
											}}
										>
											<span className="text-linear-4 d-block d-sm-inline">{'{' + t('hero.title') + '} '}</span>
											<span className="d-block d-sm-inline">{t('hero.subtitle')}</span>
											<span className="flicker">_</span>
										</h1>
										<p className="mb-6 text-secondary-2 text-break">&lt;p&gt;<span className="text-dark">{t('hero.description')}</span> <span className="text-secondary-2">Flutter</span>, <span className="text-secondary-2">Supabase</span>, <span className="text-secondary-2">SQL</span>, <span className="text-secondary-2">PostgreSQL</span>, <span className="text-secondary-2">React</span>, <span className="text-secondary-2">Tailwind CSS</span><span className="text-dark">{t('hero.description2')}</span>&lt;/p&gt;</p>
										<div className="row">
											<div className="col-7">
												{/* Carausel Scroll */}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
													<ul className="carouselTicker__list ">
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-1.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-2.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-3.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-4.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-7.svg" alt="brand" />
															</Link>
														</li>
													</ul>
												</Marquee>
											</div>
											<div className="col-5 d-flex align-items-end">
												<span className="fs-6 text-300 mb-2">{t('hero.andMore')}</span>
											</div>
										</div>

										<Link href="https://flowcv.com/resume/pfcssto0ks" className="btn me-2 text-300 ps-0 mt-4" target="_blank">
											<i className="ri-download-line text-primary-2" />
											{t('hero.downloadCV')}
										</Link>



									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="assets/imgs/home-page-2/hero-1/bg.png" alt="zelio" />
					<img className="bg-d" src="assets/imgs/home-page-2/hero-1/bg-dark.png" alt="zelio" />
				</div>
			</section>
		</>
	)
}