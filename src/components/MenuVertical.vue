<template>
    <ul class="nav">
        <li v-for="item in menu" :class="item.filhos.length > 0 ? 'haschildren' : ''">
            <a @click="openMenu($event,item.filhos)" :href="item.url">{{ item.nome }}<span class="arrow">{{item.filhos.length > 0 ? '>' : ''}}</span></a>
            <ul class="subnav">
                <li v-for="itemFilho in item.filhos" :class="itemFilho.filhos.length > 0 ? 'haschildren' : ''">
                    <a  :href="itemFilho.url">{{ itemFilho.nome }}</a>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>
export default {
    methods:{
        openMenu(event,filhos){
            var minhaLi = event.currentTarget.parentNode;
            if(filhos.length > 0){
                var ulFilha = minhaLi.childNodes[2],
                    classe = ulFilha.className;
                if(classe.indexOf("subnav")!== -1){
                    animation({
                        el: ulFilha,
                        valor: 1,
                        atributo: 'height',
                        tipo: "px",
                        crescent: true,
                        time: 1,
                        total: function(){
                            var tamanhoLi = ulFilha.children[0].clientHeight,
                                lengthLis = ulFilha.children.length;
                                return tamanhoLi * lengthLis;
                        },
                        inicial: 0
                    });
                    animation({
                        el: ulFilha,
                        valor: 0.01,
                        atributo: 'opacity',
                        tipo: "",
                        crescent: true,
                        time: 2,
                        total: 1,
                        inicial: 0
                    });
                    minhaLi.childNodes[2].className = "";
                    minhaLi.childNodes[0].children[0].className = "arrow arrow-down";
                    minhaLi.className = "haschildren active";
                }else{
                    animation({
                        el: ulFilha,
                        valor: 1,
                        atributo: 'height',
                        tipo: "px",
                        crescent: false,
                        time: 2,
                        total: 0,
                        inicial: function(){
                            var tamanhoLi = ulFilha.children[0].clientHeight,
                                lengthLis = ulFilha.children.length;
                                return tamanhoLi * lengthLis;
                        }
                    });
                    animation({
                        el: ulFilha,
                        valor: 0.01,
                        atributo: 'opacity',
                        tipo: "",
                        crescent: false,
                        time: 2,
                        total: 0,
                        inicial: 1
                    });
                    minhaLi.childNodes[2].className = "subnav";
                    minhaLi.childNodes[0].children[0].className = "arrow";
                    minhaLi.className = "haschildren";
                }
            }
        }
    },
    data(){
        return {
            menu: [{ nome: 'Home', url: '#', filhos: [
                    { nome: 'Home 1', url: '#', filhos: [] },
                    { nome: 'Home 2', url: '#', filhos: [] },
                    { nome: 'Home 3', url: '#', filhos: [] },
                    { nome: 'Home 4', url: '#', filhos: [
                        { nome: 'Home 111', url: '#', filhos: [] },
                        { nome: 'Home 222', url: '#', filhos: [] },
                        { nome: 'Home 333', url: '#', filhos: [] },
                        { nome: 'Home 444', url: '#', filhos: [] }
                    ] },
                ]},
                { nome: 'Sobre', url: '#', filhos: [] },
                { nome: 'Contato', url: '#', filhos: [] },
                { nome: 'Design', url: '#', filhos: [
                    { nome: 'Design 1', url: '#', filhos: [
                        { nome: 'Design 111', url: '#', filhos: [] },
                        { nome: 'Design 222', url: '#', filhos: [] },
                        { nome: 'Design 333', url: '#', filhos: [] }
                    ] },
                    { nome: 'Design 2', url: '#', filhos: [] },
                    { nome: 'Design 3', url: '#', filhos: [] },
                    { nome: 'Design 4', url: '#', filhos: [] },
                ]},
                { nome: 'Front', url: '#', filhos: [
                     {nome: 'Front 1', url: '#', filhos: [] }
                ]}
            ]
        }
    }
}
</script>
<style scoped>
    .nav a {
        color: #e5e5e5;
        text-decoration: none;
        position: relative;
        width: 100%;
        height: 100%;
        display: block;
        padding: 3.8px 0;
    }

    .nav li {
        display: block;
        padding:0;
        border-radius: 3px;
        cursor: pointer;
        transition: .5s;
        position:relative;
        text-align:left;
        text-indent: 10px;
    }
    .nav li:hover {
        background: #434343;
    }
    .nav li ul li:hover {
        background: #817f7f;
    }
    .active{
        background: #434343;
    }
    .nav li ul{
        transition: 0.3s;
        display:block;
        overflow: hidden;
        background: #878787;
        border-radius: 2px;
    }
    .subnav{
        height:0;
        opacity:0;
    }
    .nav .arrow{
        display:block;
        position:absolute;
        right:10px;
        top:4px;
        font-family: monospace;
        transition: .3s;
        text-indent: 0 !important;
        color: #fff;
    }
    .arrow-down{
        transform: rotate(90deg);
    }
</style>