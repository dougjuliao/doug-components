<template>
    <nav>
        <ul class="nav">
            <li v-for="item in routes" :class="item.filhos.length > 0 ? 'haschildren' : ''">
                <router-link @click.native="openMenu($event,item.filhos)" :to="item.path ? item.path : '/'">{{ item.nome }}<span class="arrow">{{item.filhos.length > 0 ? '>' : ''}}</span></router-link>
                <ul class="subnav">
                    <li v-for="itemFilho in item.filhos" :class="itemFilho.filhos.length > 0 ? 'haschildren' : ''">
                        <router-link :to="itemFilho.path">{{ itemFilho.nome }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    props: {
        routes: {
            type: Array,
            required: true
        }
    },
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
    }
}
</script>
<style scoped>
    nav {
        background: #4d4d4d;
        height: 100%;
        position: relative;
        top: 0;
        left:0;
        padding: 1px;
        /*width: 200px;*/
        width: 13.2%;
        text-align:center;
        box-sizing: border-box;
        box-shadow: 3px 3px 3px 0px #7b7b7b;
        z-index: 10;
        margin-left: -204px;
        float:left;
    }
    nav input {
        width: 100%;
        border: 1px solid #404040;
        background: #e7e7e7;
        outline: none;
        padding: 4px;
        border-radius: 3px;
    }
    nav ul{
        list-style: none;
        position: relative;
        width: 100%;
        padding: 0;
        text-align: center;
    }
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