import VueRouter from 'vue-router'
import Home from '../components/MainHome'
import About from '../components/MainAbout'


const router=new VueRouter({
    mode:'history',
    base:'',
    routes:[
        {
            path:'/main/vue1',
            component:Home
        },
        {
            path:'/main/vue2',
            component:About
        },{
            path:'/subapp/vue1',
            redirect:'/vue1'
        },{
            path:'/subapp/vue2',
            redirect:'/vue2'
        },{
            path:'/subapp/vue3',
            name:'subAPP',
            redirect:'/subAPP'
        },
    ]
})
export default router