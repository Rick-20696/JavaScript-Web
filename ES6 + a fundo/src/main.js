import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.form = document.getElementById('form');
        this.ul = document.getElementById('list');
        this.input = document.getElementById('input');

        this.registerEvents();
    }

    registerEvents() {
        this.form.onsubmit = event => this.addRepository(event);
    }

    //Transformando em um método assíncrono
    async addRepository(event) {
        //Essa linha previne que o formulário fique atualizando a página desnecessaramente
        event.preventDefault();

        const inp = this.input.value;

        if(inp.length === 0)
            return;

        try{
            const response = await api.get(`/repos/${inp}`);
        }catch(error){
            alert('Repositório inexistente');
        }

        const {name, description, html_url, owner: {avatar_url}} = response.data

        //Aqui eu estou fazendo a sintaxe curta de notação de objeto: 
        //o atributo do objeto tem o mesmo nome de uma variável criada
        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });


        this.input.value = '';
        //No lugar do console.log() eu vou renderizar em tela
        this.render();
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
            img.setAttribute('src', repository.avatar_url);
            strong.appendChild(document.createTextNode(repository.name));
            p.appendChild(document.createTextNode(repository.description));
            a.setAttribute('target', '_blank');
            a.setAttribute('href', repository.html_url);
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