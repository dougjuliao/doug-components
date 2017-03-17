<template>
    <input :type="type" class="input" :class="classe" :id="id" :placeholder="placeholder" :name="name" :value="value">
</template>
<script>
export default {
    props: {
        type: { type: String, required: true },
        name: { type: String },
        placeholder:{ type: String },
        value: { type: String },
        id: { type: String },
        classe: { type: String }
    }
}
</script>
<style scoped>
    .input{
        outline: 0;
        background: #4d4d4d;
        border: none;
        padding: 10px 0;
        text-indent: 10px;
        color: #fff;
        border-radius: 3px;
        width: 100%;
    }
</style>