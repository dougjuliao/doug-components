<template>
    <div>
        <h2>{{ titulo }}</h2>
        <tbl :urlRest="data" titulo="Tabela teste"></tbl>
    </div>
</template>
<script>
import Table from '../../../components/shared/table/Table.vue';
export default {
    components: {
        'tbl' : Table
    },
    data(){
        return { 
            titulo: 'Tabelas',
            data: {
                columns: ['id','userId','title','body'],
                dt: []
            }
        };
    },
    created(){
        //ES5
        /*this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){
            return response.json();
        }).then(function(posts){
            this.data = posts;
        },function(err){
            console.error(err);
        });*/

        //ES6
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => this.data.dt = posts,err => console.error(err));
    }
}
</script>
<style></style>