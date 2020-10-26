//Uma factory retorna uma nova instância
module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value++
        }
    }
}