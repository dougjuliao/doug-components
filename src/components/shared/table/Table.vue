<template>
    <table class="table">
        <caption>{{ titulo }}</caption>
        <thead>
            <tr>
                <th v-for="header in urlRest.columns">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="bd in urlRest.dt">
                <td v-for="bdItem in bd">{{ bdItem }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
   props: {
       titulo: {
           type: String
       },
       urlRest: {
            type: Object,
            required: true
       }
   }
}
</script>
<style>
</style>