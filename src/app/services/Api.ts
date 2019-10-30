import axios from 'axios';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// Default API will be your root
const API_ROOT = environment.API_URL;
const TIMEOUT = 20000;
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

@Injectable()
class ApiService {
  client;
  constructor() {
    const client = axios.create({
      baseURL: API_ROOT,
      timeout: TIMEOUT,
      headers: HEADERS
    });

    this.client = client;
  }
  get(path) {
    return this.client.get(path).then(response => {
      return response.data;
    });
  }

  post(path, payload) {
    return this.client.post(path, payload).then(response => response.data);
  }

  put(path, payload) {
    return this.client.put(path, payload).then(response => response.data);
  }

  patch(path, payload) {
    return this.client.patch(path, payload).then(response => response.data);
  }

  delete(path) {
    return this.client.delete(path).then(response => response.data);
  }
}

export default ApiService;
