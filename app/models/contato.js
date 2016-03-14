var mongoose = require('mongoose');

var telefoneSchema = mongoose.Schema({
    ddd: {
        type: Number, required: true
    },
    numero: {
        type: Number, required: true
    }
});

var contatoSchema = mongoose.Schema({
    nome: {
        type: String, required: true
    },
    telefones: [telefoneSchema]
});

mongoose.model('Contato', contatoSchema);