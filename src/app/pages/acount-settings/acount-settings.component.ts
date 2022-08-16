import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: [
  ]
})
export class AcountSettingsComponent implements OnInit {
  

  constructor(private settingService:SettingsService) { }

  ngOnInit(): void {
    this.settingService.checkCurrentTheme()

  }

  changeTheme(theme:string){
    this.settingService.changeTheme(theme)
    

  }
}
