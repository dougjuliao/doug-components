<template>
    <div>
        <h2>{{ titulo }}</h2>
        <div class="container">
            <section>
                <div class="grid exemplo-grid g-1"><p>1</p></div>
            </section>
            <section>
                <div class="grid exemplo-grid g-2"><p>2</p></div>
                <div class="grid exemplo-grid g-2"><p>2</p></div>
            </section>
            <section>
                <div class="grid exemplo-grid g-3"><p>3</p></div>
                <div class="grid exemplo-grid g-3"><p>3</p></div>
                <div class="grid exemplo-grid g-3"><p>3</p></div>
            </section>
            <section>
                <div class="grid exemplo-grid g-4"><p>4</p></div>
                <div class="grid exemplo-grid g-4"><p>4</p></div>
                <div class="grid exemplo-grid g-4"><p>4</p></div>
                <div class="grid exemplo-grid g-4"><p>4</p></div>
            </section>
            <section>
                <div class="grid exemplo-grid g-5"><p>5</p></div>
                <div class="grid exemplo-grid g-5"><p>5</p></div>
                <div class="grid exemplo-grid g-5"><p>5</p></div>
                <div class="grid exemplo-grid g-5"><p>5</p></div>
                <div class="grid exemplo-grid g-5"><p>5</p></div>
            </section>
            <section>
                <div class="grid exemplo-grid g-6"><p>6</p></div>
                <div class="grid exemplo-grid g-6"><p>6</p></div>
                <div class="grid exemplo-grid g-6"><p>6</p></div>
                <div class="grid exemplo-grid g-6"><p>6</p></div>
                <div class="grid exemplo-grid g-6"><p>6</p></div>
                <div class="grid exemplo-grid g-6"><p>6</p></div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return { titulo: 'UI - Elements - Grid'};
    }
}
</script>
<style scoped>
.exemplo-grid{
    height:60px;
    color:#fff;
    text-align:center;
}
.container section{
    margin-top:5px;
    position:relative;
    display:block;
}
</style>