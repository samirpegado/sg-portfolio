'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { Icon } from '@/components/icons/Icon'

export default function Contact2() {
	const { t } = useLanguage();
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			// Construir a mensagem completa com todos os dados
			const fullMessage = `
Origem: Site Portfólio Samir Gomes

Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Assunto: ${formData.subject}

Mensagem:
${formData.message}
			`.trim();

			const response = await fetch('https://uwvijftcdcdzavmnkydp.supabase.co/functions/v1/send-contact', {
				method: 'POST',
				headers: {
					'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3dmlqZnRjZGNkemF2bW5reWRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMjY2MTgsImV4cCI6MjA0MTgwMjYxOH0.XT-7KOfBCEalizAXJAtZnWVRKq5RZrGUzvt0qdf9jm8',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: fullMessage
				})
			});

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({
					name: '',
					phone: '',
					email: '',
					subject: '',
					message: ''
				});
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			console.error('Erro ao enviar formulário:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};
	
	return (
		<>

			<section id="contact" className="section-contact-2 position-relative pt-60 pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-primary-2 mb-3">{t('contact.title')}</h3>
									
									{submitStatus === 'success' && (
										<div className="alert alert-success mb-3" role="alert">
											{t('contact.successMessage')}
										</div>
									)}
									
									{submitStatus === 'error' && (
										<div className="alert alert-danger mb-3" role="alert">
											{t('contact.errorMessage')}
										</div>
									)}
									
									<form onSubmit={handleSubmit}>
										<div className="row g-3">
											<div className="col-md-6 ">
												<input 
													type="text" 
													className="form-control bg-3 border border-1 rounded-3" 
													id="name" 
													name="name" 
													placeholder={t('contact.name')} 
													aria-label="username"
													value={formData.name}
													onChange={handleInputChange}
													required
												/>
											</div>
											<div className="col-md-6">
												<input 
													type="text" 
													className="form-control bg-3 border border-1 rounded-3" 
													id="phone" 
													name="phone" 
													placeholder={t('contact.phone')} 
													aria-label="phone"
													value={formData.phone}
													onChange={handleInputChange}
												/>
											</div>
											<div className="col-md-6">
												<input 
													type="email" 
													className="form-control bg-3 border border-1 rounded-3" 
													id="email" 
													name="email" 
													placeholder={t('contact.email')} 
													aria-label="email"
													value={formData.email}
													onChange={handleInputChange}
													required
												/>
											</div>
											<div className="col-md-6">
												<input 
													type="text" 
													className="form-control bg-3 border border-1 rounded-3" 
													id="subject" 
													name="subject" 
													placeholder={t('contact.subject')} 
													aria-label="subject"
													value={formData.subject}
													onChange={handleInputChange}
												/>
											</div>
											<div className="col-12">
												<textarea 
													className="form-control bg-3 border border-1 rounded-3" 
													id="message" 
													name="message" 
													placeholder={t('contact.message')} 
													aria-label="With textarea"
													value={formData.message}
													onChange={handleInputChange}
													rows={4}
													required
												/>
											</div>
											<div className="col-12">
												<button 
													type="submit" 
													className="btn btn-primary-2 rounded-2"
													disabled={isSubmitting}
												>
													{isSubmitting ? t('contact.sending') : t('contact.sendMessage')}
													<Icon name="ri-arrow-right-up-line" className="ms-2" />
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<Icon name="ri-phone-fill" className="text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">{t('contact.phoneNumber')}</span>
									<h6 className="mb-0">+55 84 99115-5280</h6>
								</div>
								<a href="https://wa.me/5584991155280" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<Icon name="ri-mail-fill" className="text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">{t('contact.email')}</span>
									<h6 className="mb-0">samirpegado@gmail.com</h6>
								</div>
								<a href="mailto:someone@example.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
						
							
							{/* Redes Sociais */}
							<div className="mt-4">
								<span className="text-400 fs-6 mb-3 d-block">{t('contact.socialMedia')}</span>
								<div className="d-flex gap-3">
									<a href="https://www.instagram.com/samirpegado/" target="_blank" className="icon-shape icon-md rounded-circle bg-3 border d-flex align-items-center justify-content-center">
										<Icon name="ri-instagram-fill" className="text-primary-2" />
									</a>
									<a href="https://www.linkedin.com/in/samir-pegado" target="_blank" className="icon-shape icon-md rounded-circle bg-3 border d-flex align-items-center justify-content-center">
										<Icon name="ri-linkedin-fill" className="text-primary-2" />
									</a>
									<a href="https://github.com/samirpegado" target="_blank" className="icon-shape icon-md rounded-circle bg-3 border d-flex align-items-center justify-content-center">
										<Icon name="ri-github-fill" className="text-primary-2" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



		</>
	)
}