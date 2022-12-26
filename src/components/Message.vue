<template>
    <div class="message">{{msg}}</div>
</template>

<script>
    export default{
        props:{
            msg:{
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped>
    .message{
        position: fixed;
        top: 10%;
        left: 45%;
    }
</style>