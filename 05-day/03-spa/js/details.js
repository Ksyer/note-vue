var Details = {
    props: ["lid"],
    template: `
        <div>
            <myheader></myheader>
            <h3 style="color: pink">这是详情页</h3>
            <div>
                <p>这里是{{lid}}商品的详细信息</p>
                <button @click="back">返回首页</button>
            </div>
        </div>
    `,
    methods: {
        back() {
            this.$router.push("/");
        }
    }
}