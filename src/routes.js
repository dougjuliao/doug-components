import Home from './components/pages/Home.vue';

import Paginas from './components/pages/paginas/Paginas.vue';
import Perfil from './components/pages/paginas/Perfil.vue';
import Galeria from './components/pages/paginas/Galeria.vue';

import Forms from './components/pages/forms/Forms.vue';
import FormInputs from './components/pages/forms/FormInputs.vue';
import Validacoes from './components/pages/forms/Validacoes.vue';

import UiElements from './components/pages/ui-elements/UiElements.vue';
import UiButtons from './components/pages/ui-elements/UiButtons.vue';
import UiComponents from './components/pages/ui-elements/UiComponents.vue';
import UiGrid from './components/pages/ui-elements/UiGrid.vue';
import UiModals from './components/pages/ui-elements/UiModals.vue';
import UiNotifications from './components/pages/ui-elements/UiNotifications.vue';
import UiProgressBar from './components/pages/ui-elements/UiProgressBar.vue';
import UiSpinners from './components/pages/ui-elements/UiSpinners.vue';

import Tabelas from './components/pages/tabelas/Tabelas.vue';

import Design from './components/pages/design/Design.vue';
import Login from './components/pages/design/Login.vue';
import NotFound from './components/pages/design/NotFound.vue';

export const routes = [
    { name: 'Home', path: '/', component: Home },
    { name: 'Páginas', path: '/paginas', component: Paginas, children: [
        { name: 'Perfil', path: 'perfil', component: Perfil },
        { name: 'Galeria', path: 'galeria', component: Galeria }
    ] },
    { name: 'Forms', path: '/forms', component: Forms, children: [
        { name: 'Inputs', path: 'inputs', component: FormInputs },
        { name: 'Validações', path: 'validacoes', component: Validacoes }
    ] },
    { name: 'Elementos UI', path: '/ui', component: UiElements, children: [
        { name: 'Buttons UI', path: 'buttons', component: UiButtons },
        { name: 'Components UI', path: 'components', component: UiComponents },
        { name: 'Grid UI', path: 'grid', component: UiGrid },
        { name: 'Modals UI', path: 'modals', component: UiModals },
        { name: 'Notifications UI', path: 'notifications', component: UiNotifications },
        { name: 'ProgressBar UI', path: 'progressBar', component: UiProgressBar },
        { name: 'Spinners UI', path: 'spinners', component: UiSpinners }
    ] },
    { name: 'Tabelas', path: '/tabelas', component: Tabelas },
    { name: 'Design', path: '/design', component: Design, children: [
        { name: 'Login', path: 'login', component: Login },
        { name: '404', path: '404', component: NotFound }
    ] }
];