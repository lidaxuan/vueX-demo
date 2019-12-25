<template>
    <div class="login-container">
        <div class="containerBg">李大玄</div>
        <el-form :model="loginForm" :rules="loginRules" autoComplete="on" class="card-box login-form" label-position="left"
                 label-width="0px" ref="loginForm">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <span class="svg-container"><icon-svg icon-class="jiedianyoujian"></icon-svg></span>
                <el-input autoComplete="on" name="username" placeholder="账户" type="text"
                          v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container"><icon-svg icon-class="mima"></icon-svg></span>
                <el-input @keyup.enter.native="handleLogin" autoComplete="on" name="password" placeholder="密码"
                          type="password"
                          v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading" @click.native.prevent="handleLogin" style="width:100%;" type="primary">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
      
    </div>
</template>

<script>
    import store from '@/store';
    export default {
        name: 'login',
        data() {
            const validatePass = (rule, value, callback) => {
                if (value.length < 5) {
                    callback(new Error('密码不能小于5位'));
                } else {
                    callback();
                }
            };
            return {
                loginForm: {
                    username: 'admin',
                    password: 'admin'
                },
                loginRules: {
                    username: [{required: true, message: '账户不能为空', trigger: 'blur'},
                        {min: 3, max: 40, message: '长度在 3 到 20 个字符', trigger: 'blur'}],
                    password: [{required: true, trigger: 'blur', validator: validatePass}]
                },
                loading: false,
                showDialog: false
            }
        },
        computed: {
        },
        methods: {
            handleLogin() {
                this.FetchPost('/admin/auth/jwt/token', this.loginForm).then(res => {
                    if (res.status == 200) {
                        store.dispatch('setToken', res.data);
                        this.$router.replace({
                            path: "/",
                        });
                    }
                }).catch(err =>{
                    console.log(err)
                })
            },
        },
    }
</script>

<style lang="less" rel="stylesheet/less">
    /*@import "src/styles/mixin.scss";*/
    
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 5px;
    }
    
    .login-container {
    @include relative;
        height: 100vh;
        background-color: #2d3a4b;
        
        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px #293444 inset !important;
            -webkit-text-fill-color: #fff !important;
        }
        
        input {
            background: transparent;
            border: 0;
            -webkit-appearance: none;
            border-radius: 0;
            padding: 12px 5px 12px 15px;
            color: #eeeeee;
            height: 47px;
        }
        
        .containerBg {
            position: absolute;
            width: 100%;
            height: 100%;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
        }
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;
        }
        
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: #889aa4;
        }
        
        .title {
            font-size: 26px;
            font-weight: 400;
            color: #eeeeee;
            margin: 0 auto 40px;
            text-align: center;
            font-weight: bold;
        }
        
        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 400px;
            padding: 35px 35px 15px;
            margin: 120px auto;
        }
        
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
        
        .forget-pwd {
            color: #fff;
        }
    }
</style>
