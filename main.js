Vue.component('usuarios', {
    template: '<div></div>',
    mounted(){
        axios.get('https://randomuser.me/api/?results=100')
            .then((datos) => {
                console.log(datos);
            });
    },
})

new Vue({
    el: 'main',
});