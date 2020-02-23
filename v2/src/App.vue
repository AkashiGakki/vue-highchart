<template>
    <div id="app">
<!--        <line-a></line-a>-->
        <router-view/>
    </div>
</template>

<script>
    import line from './views/line'

    export default {
        name: 'App',
        components: {
            'line-a': line
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
