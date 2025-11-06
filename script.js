// =========================================
// SCRIPT.JS - INTERATIVIDADE
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o botão de toggle (hambúrguer) e o menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');

    // 2. Função para alternar a classe 'active' no menu ao clicar no botão
    menuToggle.addEventListener('click', () => {
        // Adiciona ou remove a classe 'active' para mostrar/esconder o menu (estilizado no CSS)
        navMenu.classList.toggle('active');
        // Alterna o ícone de hambúrguer para 'X' (opcional, mas bom para UX)
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times'); // O 'fa-times' é o ícone de fechar (X)
    });

    // 3. Fecha o menu ao clicar em um link (útil para navegação "one-page")
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                // Se o menu estiver aberto, feche-o
                navMenu.classList.remove('active');
                // Retorna o ícone para o hambúrguer
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    console.log("Koosh World: Scripts de navegação carregados com sucesso!");
});
                              
