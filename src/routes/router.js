import{createRouter,createWebHistory} from "vue-router";



let router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'HomePage',
        }
    ]
})


export default router