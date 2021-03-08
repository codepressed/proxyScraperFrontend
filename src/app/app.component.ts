import { Component, OnInit } from '@angular/core';
import { Proxy } from './proxy'
import { ProxyService } from './proxy.service'
import { HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProxyScraperFrontEnd';
  public proxies!: Proxy[];

  constructor(private proxyService: ProxyService){}

  ngOnInit(){
    this.getProxies();
  }

  public getProxies(): void{
    this.proxyService.getProxies().subscribe(
      (response: Proxy[]) => {
        this.proxies = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message);
      }
      );
  }
}
