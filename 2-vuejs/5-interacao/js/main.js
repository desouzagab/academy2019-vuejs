var app = new Vue({
    el: '#app',
    data: {
        message: 'Socorro Subi no Onibus em Marrocos'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})