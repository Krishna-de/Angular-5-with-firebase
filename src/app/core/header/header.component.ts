import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              public authService:AuthService){}
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        } 
      );
      this.dataStorageService.storeSl()
      .subscribe(
        (response: Response) => {
          console.log(response);
        } 
      );
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
    this.dataStorageService.getSl();
  }
  onLogout(){
    this.authService.logout();
  }
}
