<template>
    <div>
        <h2>{{ titulo }}</h2>
        <br>
        <m-input type="text" name="teste" placeholder="Teste"></m-input>
    </div>
</template>
<script>
import Input from '../../shared/form/Input.vue';
export default {
    components: {
        'm-input': Input
    },
    data(){
        return { titulo: 'Home'};
    }
}
</script>
<style></style>