import { createWebHistory, createRouter } from "vue-router"
import FrontBtn from '../components/FrontBtn.vue';
import FormCre from '../components/FormCre.vue';
import FormTab from '../components/FormTab.vue';
import FormEdit from '../components/FormEdit.vue';
import EditQue from '../components/EditQue.vue';
import LoginPage from '../components/LoginPage.vue';

const routes = [
    {
        path : '/',
        name : "LoginPage",
        component :LoginPage
    },
    {
        path : '/front',
        name : "FrontBtn",
        component : FrontBtn
    },
    {
        path : '/Form',
        name : "FormCre",
        component : FormCre
    },
    {
        path : '/list',
        name : "FormTab",
        component : FormTab
    },
    {
        path : '/edit',
        name : "FormEdit",
        component : FormEdit
    },
    {
        path : '/foredit',
        name : "EditQue",
        component :EditQue
    },

];

const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;
