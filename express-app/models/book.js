module.exports = {
    data: [
        { id: 1, name: "Harry Potter", author: "JakisTam" },
        { id: 2, name: "Star Wars", author: "John Williams" },
    ],
    findAll() {
        return this.data;
    },
    findById(id) {
        var book = this.data.find(function (e) {
            return e.id === parseInt(id)
        });

        if (book) {
            return book;
        } else {
            return null;
        }
    }
};