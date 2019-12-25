<template>
    <div>
        <div @click="add">  增加  </div>
        <div>{{num}}</div>
        <div @click="del">  减少  </div>

        <button @click="jump">跳转</button>
    </div>
</template>

<script>
    import store from '@/store';
    import { loadStorage } from '@/store/cache';
    export default {
        data() {
            return {
                token: '',
                num: 0,
            }
        },
        created() {
            this.num = loadStorage('num');
        },
        methods: {
            add() {
                this.num += 1;
                this.set();
            },
            del() {
                this.num -= 1;
                this.set();
            },
            set() {
                store.dispatch('setNum', this.num);
            },
            jump() {
                this.$router.push({
                    path: '/twopage'
                })
            }
        },
    }
</script>

<style>

</style>
