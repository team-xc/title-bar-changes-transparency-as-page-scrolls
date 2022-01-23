window.onload = () => {
    const app = new Vue({
        el: '#app',
        data: {
            headerOpacity: 0
        },
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.headerOpacity = scrollTop / 60;
            }
        },
        mounted() {
            // 监听页面滚动
            window.addEventListener("scroll", this.handleScroll, true);
        },
        beforeDestroy() {
            // 移除滚动监听
            window.removeEventListener("scroll", this.handleScroll, true);
        }
    })
}