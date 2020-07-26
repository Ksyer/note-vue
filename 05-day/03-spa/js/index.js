var Index = {
    template: `
        <div>
            <myheader></myheader>
            <h3 style="color: red">这是首页</h3>
            <div>
                <ul>
                    <li><router-link to="/details/1">查看1号商品的详情</router-link></li>
                    <li><router-link to="/details/2">查看2号商品的详情</router-link></li>
                    <button @click="toDetails(3)">查看3号商品的详情</button>
                </ul>
            </div>
        </div>
    `,
    methods: {
        toDetails(lid) {
            this.$router.push(`/details/${lid}`);
        }
    }
}