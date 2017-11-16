import mongoose from 'mongoose'

var RepublicaSchema = new mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  nome: {
    type: String,
    required: true
  },
  caixa: {
    type: Number,
    required: false,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Republica', RepublicaSchema)
