import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomStateService {

  constructor() { }

  private ExistItem(item: string): boolean{
    return localStorage.getItem(item) != null ? true : false;
  }

  public SaveItem(item:string, data: string): void{
    if(!this.ExistItem(item)){
      localStorage.setItem(item, data); 
    }
  }

  public GetItem(item: string): any{
    if(this.ExistItem(item)){
      const result = localStorage.getItem(item);
      return JSON.parse(result);
    }else{
      return null;
    }
  }
}
