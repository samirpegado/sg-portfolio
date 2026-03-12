'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'


export default function Experience2() {
	const { t } = useLanguage();
	
	return (
		<>

			<section id="experience" className="section-experience pt-6">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> {t('experience.title')} </span>
								</div>
								<h3>
									{t('experience.years')} <br />
									<span className="text-300">
										{t('experience.subtitle')}
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<div className="d-flex flex-column">
														<h5 className="mb-1">Devfy Tecnologia</h5>
														<span className="text-300">2024 - {t('experience.present')}</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<div className="d-flex flex-column">
														<h5 className="mb-1">WA Project</h5>
														<span className="text-300">2025</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<div className="d-flex flex-column">
														<h5 className="mb-1">withnocode</h5>
														<span className="text-300">2023 - 2024</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<div className="d-flex flex-column">
														<h5 className="mb-1">Fnac Portugal</h5>
														<span className="text-300">2022 - 2023</span>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">{t('experience.position')}</h6>
										<ul className="mt-4">
											<li className="text-dark mb-3">{t('experience.description1')}</li>
											<li className="text-dark mb-3">{t('experience.description2')}</li>
											<li className="text-dark mb-3">{t('experience.description3')}</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<Link href="#" className="text-300 border border-1 px-3 py-1">Flutter</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Supabase</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">PostgreSQL</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">NodeJS</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">React</Link>
											
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
