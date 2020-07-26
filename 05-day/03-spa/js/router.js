var routes = [
    {path: "/", component: Index},
    {path: "/details", component: Details},
    {path: "/details/:lid", component: Details, props: true},
    {path: "*", component: NoFound}
]

var router = new VueRouter({routes});