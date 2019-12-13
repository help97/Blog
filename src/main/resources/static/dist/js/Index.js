var all = new Vue({
    el: "#all",
    data: {
        showPage: ""
    },
    mounted: function () {
        this.getPage("body");
    },
    methods: {
        getPage: function (url) {
            var that = this;
            console.log(url);
            axios.get(url).then(function (value) {
                // console.log(value.data);
                that.showPage = value.data;
            })
        }
    }
})