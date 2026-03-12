export const scrollToSection = (sectionId: string) => {
  // Remove o # se estiver presente
  const cleanId = sectionId.replace('#', '');
  
  // Encontra o elemento
  const element = document.getElementById(cleanId);
  
  if (element) {
    // Atualiza o hash da URL
    window.location.hash = cleanId;
    
    // Força o scroll mesmo se o hash já for o mesmo
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // Previne o comportamento padrão do link
  e.preventDefault();
  
  // Executa o scroll customizado
  scrollToSection(href);
};