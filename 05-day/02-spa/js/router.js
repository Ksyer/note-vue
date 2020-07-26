var routes = [
    {path: "/", component: Index},
    {path: "/details", component: Details},
    {path: "*", component: NoFound}
]

var router = new VueRouter({routes});