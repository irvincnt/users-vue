Vue.component('usuarios', {
    template: '#usuarios-template',
    mounted(){
        axios.get('https://randomuser.me/api/?results=100')
            .then((datos) => {
                const listado = datos.data.results.map((usuario) => {
                    return {
                        nombre: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
                        correo: usuario.email,
                        foto: usuario.picture.large,
                    }
                })
                this.usuarios = listado;
            });
    },
    data() {
        return {
            usuarios: [],
        }
    } 
})

Vue.component('usuario', {
    props: ['datos'],
    template: '#usuario-template',
});

new Vue({
    el: 'main',
});