Vue.component("myheader", {
    template: `
        <div>
            <h3 style="color: #ccc">页面头部header</h3>
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/details">商品详情</router-link></li>
            </ul>
            <hr>
        </div>
    `
});