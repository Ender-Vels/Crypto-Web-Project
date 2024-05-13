import{createRouter,createWebHistory} from "vue-router";
import HomePage from "../components/HomePage/HomePage.vue";
import SignIn from "../components/Authorize/SignIn.vue";
import SignUp from "../components/Authorize/SignUp.vue";

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
        }
    ]
})


export default router