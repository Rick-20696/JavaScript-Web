class App {
    constructor() {
        this.repositories = [];

        this.form = document.getElementById('form');

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

        console.log(this.repositories);
    }
}

new App();