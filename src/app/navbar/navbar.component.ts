import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled:boolean=false;

  @HostListener('window:scroll', ['$event'])
    onScroll(){
      let scrollY=window.scrollY;

      if(scrollY>100){
        this.isScrolled=true;
      }

      else{
        this.isScrolled=false;
      }

    }
    


}
