import { Component } from '@angular/core';
import { CathalogService } from 'src/services/cathalog.service';
import { CustomStateService } from 'src/services/customState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';
  constructor(
    private serviceLocal: CustomStateService,
    private serviceCatalogs: CathalogService,
  ) {
    this.InitCatalogs();
  }

  private InitCatalogs(){
    this.serviceCatalogs.GetCatalogs().then((result: any) => {
      this.serviceLocal.SaveItem("_state", JSON.stringify(result));
    });
  }
}
