<template>
    <div>
        <h2>{{ titulo }}</h2>
        <tbl></tbl>
    </div>
</template>
<script>
import Table from '../../../components/shared/table/Table.vue';
export default {
    components: {
        'tbl' : Table
    },
    data(){
        return { titulo: 'Tabelas'};
    }
}
</script>
<style></style>