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

  async getSensors() {
    return await client.get('');
  }

  async postSensor(sensor) {
    return await client.post('', sensor);
  }
  async getSensor(id) {
    return await client.get(`${id}`);
  }
  async updateSensor(obj) {
    try {
      return await client.put(`${obj.id}`, obj);
    } catch (error) {}
  }
  async deleteSensor(objId) {
    return await client.delete(`${objId}`);
  }
  async getSensorsByPage(ids, page) {
    const { begin, end } = getPageSlice(PAGE_LIMIT, page);
    const activeIds = getPageValues({ begin, end, items: ids });
    const storyPromises = activeIds.map(id => this.getSensor(id));
    return Promise.all(storyPromises);
  }
}
