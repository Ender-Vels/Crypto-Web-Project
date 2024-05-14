import{createRouter,createWebHistory} from "vue-router";
import HomePage from "../components/HomePage/HomePage.vue";
import SignIn from "../components/Authorize/SignIn.vue";
import SignUp from "../components/Authorize/SignUp.vue";
import ResetPassword from "../components/Authorize/ResetPassword.vue";
import CheckEmail from "../components/Authorize/CheckEmail.vue";
let router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'HomePage',
            component:HomePage
        },
        {
            path:'/SignIn',
            name:'SignIn',
            component:SignIn,
        },
        {
            path:'/SignUp',
            name:'SignUp',
            component:SignUp,
        },
        {
            path:'/Reset',
            name:'Reset',
            component:ResetPassword,
        }
        ,
        {
            path:'/CheckMail',
            name:'CheckMail',
            component:CheckEmail,
        }
    ]
})


export default router