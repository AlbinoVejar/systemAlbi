import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  private readonly apiUrl = environment.apiUrl;
  constructor(
    private category: string,
    public http: HttpClient
  ) {
  }

  public async GetOne(id: number){
    try {
      return await firstValueFrom(this.http.get(`${this.apiUrl}/${this.category}/${id}`));
    } catch (error) {
      return error;
    }
  }

  public async GetAll(){
    try {
      return await firstValueFrom(this.http.get(`${this.apiUrl}/${this.category}`));
    } catch (error) {
      return error;
    }
  }

  public async Store(data: any){
    try {
      return await firstValueFrom(this.http.put(`${this.apiUrl}/${this.category}`, data));
    } catch (error) {
      return error;
    }
  }

  public async Update(id: number, data: any){
    try {
      return await firstValueFrom(this.http.put(`${this.apiUrl}/${this.category}/${id}`, data));
    } catch (error) {
      return error;
    }
  }

  public async Delete(id: number){
    try {
      return await firstValueFrom(this.http.delete(`${this.apiUrl}/${this.category}/${id}`));
    } catch (error) {
      return error;
    }
  }
}
