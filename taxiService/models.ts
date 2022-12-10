import mongoose from "mongoose";

const taxiServiceSchema = new mongoose.Schema({
    id: String,
    color: String,
    horario: String,
    diasdisponibles: String,
    contacto: String,
    whatsapp: String,
    propietario: String,
    numeroPlaca:String,
    imagen: String

});

export const TaxiService = mongoose.model('TaxiServices', taxiServiceSchema);