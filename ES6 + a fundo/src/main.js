class App {
    constructor() {
        this.repositories = [];

        this.form = document.getElementById('form');
        this.ul = document.getElementById('list');

        this.registerEvents();
    }

    registerEvents() {
        this.form.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        //Essa linha previne que o formulário fique atualizando a página desnecessaramente
        event.preventDefault();

        this.repositories.push({
            name: 'RicardoSousa83',
            description: 'Estudante de Desenvolvimento de Sistemas',
            avatar_ulr: 'https://avatars3.githubusercontent.com/u/62113652?=v4',
            url: 'https://github.com/Rick-20696/Web',
        });

        //No lugar do console.log() eu vou renderizar em tela
        this.render()
    }

    render() {
        this.ul.innerHTML = '';

        this.repositories.forEach(repository => {
            let lis = document.createElement('li');
            let img = document.createElement('img');
            let strong = document.createElement('strong');
            let p = document.createElement('p');
            let a = document.createElement('a');
            
            //Uma curiosidade: Minhas formatações de estilo não irão funcionar se eu estiver filiando os textos aos respectivos elementos 
            img.setAttribute('src', repository.avatar_ulr);
            strong.appendChild(document.createTextNode(repository.name));
            p.appendChild(document.createTextNode(repository.description));
            a.setAttribute('target', '_blank');
            a.setAttribute('href', repository.url);
            a.appendChild(document.createTextNode('Acessar'));

            lis.appendChild(img);
            lis.appendChild(strong);
            lis.appendChild(p);
            lis.appendChild(a);

            this.ul.appendChild(lis);
        })
    }
}

new App();