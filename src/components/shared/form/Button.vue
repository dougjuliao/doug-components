<template>
    <button @click="clicado($event)" :type="type" :name="name" :autofocus="focus" :disabled="desabilitar" :value="value" :id="id" :class="classe">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        type: { type: String },
        name: { type: String },
        value: { type: String },
        id: { type: String },
        classe: { type: String },
        desabilitar: { type: Boolean },
        focus: { type: Boolean }
    },
    methods: {
        clicado(event){
            this.$emit('btnClick',event);
        }
    }
}
</script>
<style>
    .btn{

    }
</style>