import { Injectable } from '@angular/core';
import { CathalogService } from './cathalog.service';

@Injectable({
  providedIn: 'root'
})
export class CustomStateService {

  constructor(
    private service: CathalogService
  ) { }

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

  public GetState(): any{
    if(this.ExistItem("_state")){
      const result = localStorage.getItem("_state");
      return JSON.parse(result);
    }else{
      this.service.GetCatalogs().then((result: any) => {
        const value = JSON.stringify(result);
        this.SaveItem("_state", value);
        return value;
      });
    }
  }
}
