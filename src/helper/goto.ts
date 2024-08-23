const goToUrl = (url: string) => {
    window.open(url, '_blank');	
}

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
};

export { goToUrl, scrollToSection }