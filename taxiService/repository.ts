import { TaxiService } from './models';
import { TaxiService as NtaxiService} from './interfaces';
import { ulid } from 'ulid';


const list = async () => {
    return await TaxiService.find();
}

const getOne = async (id: string) => {
    return await TaxiService.findOne({ id });
}
const store = async (data: NtaxiService) => {
    const id = ulid();
    const service = new TaxiService({ color: data.color, horario: data.horario, diasdisponibles: data.diasdisponibles, contacto: data.contacto, whatsapp: data.whatsapp, propietario:data.propietario,numeroPlaca: data.numeroPlaca,imagen: data.imagen, id });
    await service.save();

    return service;
}
const deleteItem = async (id : String) => {
    return await TaxiService.deleteOne({  id });

}

 const update = async (id: string, data:NtaxiService)=>{
    const model = await TaxiService. findOneAndUpdate({id}, data, {new: true});
    return model;
 }

export default {
    list,
    getOne,
    store,
    delete: deleteItem,
    update
}