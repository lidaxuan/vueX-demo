<template>
    <div>
        <ul>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
        </ul>
        {{num}}----- <br/>
        {{token}}
    </div>
</template>

<script>
    import store from '@/store';
    import { loadStorage } from '@/store/cache';
    export default {
        data() {
            return {
                num: undefined,
                token: ''
            }
        },
        created() {
            this.num =   loadStorage('num')
            this.token = loadStorage('token')
        },
    }
</script>

<style>
    li {
        background-color: pink;
        margin-bottom: 20px;
    }
</style>
