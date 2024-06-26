document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.campanha-item');
    const contents = document.querySelectorAll('.campanha-conteudo');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-target')).classList.add('active');
        });
    });
});
