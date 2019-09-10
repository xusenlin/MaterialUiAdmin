import Dashboard from '../views/dashboard'

//https://material.io/resources/icons/?style=baseline

export default [
    {
        title:'仪表盘',
        path:'/dashboard',
        icon:'dashboard',
        component:Dashboard

    },
    {
        title:'个人中心',
        path:'/demo',
        icon:'person',
        component:Dashboard
    },
    {
        title:'内容管理',
        path:'/demo1',
        icon:'library_books',
        component:Dashboard
    },
    {
        title:'分类管理',
        path:'/demo2',
        icon:'content_paste',
        component:Dashboard
    },
]
