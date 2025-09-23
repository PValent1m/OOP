window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabList = document.querySelector('[role="tablist"]');

    tabList.addEventListener('click', (e) => {
        const clickedTab = e.target;
        if (clickedTab.getAttribute('role') !== 'tab') {
            return;
        }

        // Desativa todas as outras abas
        tabs.forEach(tab => {
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('tabindex', '-1');
        });

        // Esconde todos os painéis
        document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
            panel.hidden = true;
        });

        // Ativa a aba clicada
        clickedTab.setAttribute('aria-selected', 'true');
        clickedTab.setAttribute('tabindex', '0');
        
        // Mostra o painel de conteúdo associado
        const controlledPanel = document.getElementById(clickedTab.getAttribute('aria-controls'));
        controlledPanel.hidden = false;
        
        clickedTab.focus();
    });
});