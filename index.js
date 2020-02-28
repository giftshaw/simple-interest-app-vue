new Vue({
    el: "#si",
    data: {
        principal: "",
        rate: "",
        time: ""
    },
    computed: {
        simpleInterest: function(){
            return (this.principal * this.rate * this.time)/100;
        }
    }
});