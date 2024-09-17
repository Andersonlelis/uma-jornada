document.addEventListener('DOMContentLoaded', () => {
    // Obtém todos os botões e seções de passos
    const buttons = document.querySelectorAll('.btn-proximo');
    const passos = document.querySelectorAll('.passo');
    
    // Função para mostrar o passo atual e ocultar os outros
    function showStep(id) {
        passos.forEach(passo => passo.classList.remove('ativo'));
        document.getElementById(id).classList.add('ativo');
    }

    // Função para inicializar a navegação
    function initializeNavigation() {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const nextStepId = button.getAttribute('data-proximo');
                // Verifica se o próximo passo é válido
                if (nextStepId !== 'final') {
                    showStep(`passo-${nextStepId}`);
                } else {
                    // Se for o passo final, mostra a tela de finalização
                    showStep('final');
                }
            });
        });
    }

    // Inicializa mostrando o passo 0
    showStep('passo-0');
    // Inicializa a navegação
    initializeNavigation();
});