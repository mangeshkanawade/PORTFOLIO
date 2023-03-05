import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Menus: any[] = [
    { Key: 1, Value: 'Home', IsActive: true },
    { Key: 2, Value: 'About', IsActive: false },
    { Key: 3, Value: 'Projects', IsActive: false },
    { Key: 4, Value: 'ContactMe', IsActive: false },
  ];

  ShowMobileMenus : boolean = false;
  RandomBackgroundImage : string = '';
  ImagePath : string = '../../assets/images/';
  RandNumberRange : number = 2 

  constructor() { }

  ngOnInit(): void {
    this.RandomBackgroundImage = this.GetRandomImage()
    document.documentElement.style.setProperty('--SiteColor', '#19605d');
    
  }

  GetRandomImage() : string{
    var RandNumber = Math.floor(Math.random() * this.RandNumberRange) + 1
    var ImgName = `url(${this.ImagePath}Background${RandNumber}.jpg)`
    console.log(ImgName);
    
    return ImgName;
  }
  

  IsMenuActive(Menu: string) {
    let Result = this.Menus.find(el => el.Value == Menu);
    return Result ? Result.IsActive : false
  }

  async SetMenuIsActive(Menu: string) {
    this.Menus.forEach(element => element.IsActive = element.Value == Menu ? true : false);
  }

  async NavigateTo(PageName: string) {
    await this.SetMenuIsActive(PageName);
  }

}
