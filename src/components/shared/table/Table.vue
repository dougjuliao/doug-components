<template>
    <table>
        <caption>{{ titulo }}</caption>
        <thead>
            <tr>
                <th>Header1</th>
                <th>Header2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Container1</td>
                <td>Container2</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Footer1</td>
                <td>Footer2</td>
            </tr>
        </tfoot>
    </table>
</template>
<script>
export default {
   props: {
       titulo: {
           type: String
       }
   }
}
</script>
<style>
</style>