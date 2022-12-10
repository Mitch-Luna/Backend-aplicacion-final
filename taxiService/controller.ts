import repository from "./repository"
import { TaxiService } from './interfaces';

const list = async() => {
    return await repository.list();
}
 const getOne = async (id: string)=>{
    const model = await repository.getOne(id);
    if (!model) throw new Error("Taxi Service not found");
    return model;
 }

 const store = async (data: TaxiService)=> {
   //  if (!data.name) throw Error ("propiety name is missing")
    const service = await repository.store(data);
    return service;
 }

 const deleteItem =async (id : string) =>{
    const model = await repository.getOne(id);
    if(!model) throw new Error("Taxi Service no found");

    return await repository.delete(id);
 }
 const update = async (id : string, data: TaxiService)=>{
    const model = await repository.getOne(id);
    if (!model) throw new Error('Taxi Service not found');
    
    const modelUpdated = await repository.update(id, data);
    return modelUpdated;
 }

export default {
    list,
    getOne,
    store,
    delete: deleteItem,
    update
}