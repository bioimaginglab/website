function loadSection(section) {
    fetch(section + '.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the section:', error);
        });
}

page('/', () => loadSection('home'));
page('/home', () => loadSection('home'));
page('/research', () => loadSection('research'));
page('/team', () => loadSection('team'));
page('/publication', () => loadSection('publication'));
page('/contact', () => loadSection('contact'));


page.start();
