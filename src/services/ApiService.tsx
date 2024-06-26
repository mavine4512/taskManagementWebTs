import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://task.quatrixglobal.com",
});

class ApiService {
  private apiurl: string;
  
  constructor(apiurl: string) {
    this.apiurl = apiurl;
  }

  post(url: string, objeto: any): Promise<any> {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.post(requestUrl, objeto);
  }

  patch(url: string, objeto: any): Promise<any> {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.patch(requestUrl, objeto);
  }
  delete(url: string): Promise<any> {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.delete(requestUrl);
  }

  get(url: string): Promise<any> {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.get(requestUrl);
  }
}

export default ApiService;
