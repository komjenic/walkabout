import ApiService from './Api';
import { Injectable } from '@angular/core';

const client = new ApiService();
const PAGE_LIMIT = 20;

const getPageSlice = (limit, page = 0) => ({
  begin: page * limit,
  end: (page + 1) * limit
});
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

@Injectable({
  providedIn: 'root'
})
export class SensorApi {
  constructor() {}

  getSensors = async () => {
    return await client.get('');
  };

  postSensor = async sensor => {
    return await client.post('', sensor);
  };
  getSensor = async id => {
    return await client.get(`${id}`);
  };
  updateSensor = async obj => {
    try {
      return await client.put(`${obj.id}`, obj);
    } catch (error) {}
  };
  deleteSensor = async objId => {
    return await client.delete(`${objId}`);
  };
  getSensorsByPage = (ids, page) => {
    const { begin, end } = getPageSlice(PAGE_LIMIT, page);
    const activeIds = getPageValues({ begin, end, items: ids });
    const storyPromises = activeIds.map(id => this.getSensor(id));
    return Promise.all(storyPromises);
  };
}

// this.uiService.showSnackbar('Card added successfully!', null, 3000);
