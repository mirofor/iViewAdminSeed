<template>
    <div>
        <h1>page2</h1>
        <ol>
            <router-link :to="{name:'page1'}" tag="li">page1</router-link>
            <router-link :to="{name:'home_index'}" tag="li">home</router-link>
            <router-link :to="{name:'error-500'}" tag="li">500</router-link>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'page2'
    };
</script>