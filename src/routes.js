import Home from './components/pages/home/Home.vue';
import Home1 from './components/pages/home/Home1.vue';
import Home2 from './components/pages/home/Home2.vue';
import Home3 from './components/pages/home/Home3.vue';

import Design from './components/pages/design/Design.vue';
import Design2 from './components/pages/design/Design2.vue';
import Design3 from './components/pages/design/Design3.vue';
import Design4 from './components/pages/design/Design4.vue';

import Contato from './components/pages/contato/Contato.vue';
import Sobre from './components/pages/sobre/Sobre.vue';
import Front from './components/pages/front/Front.vue';

export const routes = [
    { nome: 'Home', path: '', component: Home, filhos: [] },
    { nome: 'Dropdown', path: '', filhos: [
        { nome: 'Home 1', path: '/home1', component: Home1, filhos: [] },//Tentando entender, por que o submenu não funciona a chamada de página
        { nome: 'Home 2', path: '/home2', component: Home2, filhos: [] },
        { nome: 'Home 3', path: '/home3', component: Home3, filhos: [] },
        { nome: 'Home 4', path: '', filhos: [
            { nome: 'Home 111', path: '#', filhos: [] },//Ainda preciso verificar um jeito de deixar o menu recursivo
            { nome: 'Home 222', path: '#', filhos: [] },
            { nome: 'Home 333', path: '#', filhos: [] },
            { nome: 'Home 444', path: '#', filhos: [] }
        ] },
    ]},
    { nome: 'Sobre', path: '/sobre', component: Sobre, filhos: [] },
    { nome: 'Contato', path: '/contato', component: Contato, filhos: [] },
    { nome: 'Dropdown2', path: '', filhos: [
        { nome: 'Design', path: '/design', component: Design, filhos: [
            { nome: 'Design 111', path: '#', filhos: [] },
            { nome: 'Design 222', path: '#', filhos: [] },
            { nome: 'Design 333', path: '#', filhos: [] }
        ] },
        { nome: 'Design 2', path: '/design2', filhos: [] },
        { nome: 'Design 3', path: '/design3', filhos: [] },
        { nome: 'Design 4', path: '/design4', filhos: [] },
    ]},
    { nome: 'Dropdown3', path: '', filhos: [
            {nome: 'Front 1', path: '/front', component: Front, filhos: [] }
    ]}

];