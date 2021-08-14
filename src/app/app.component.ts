import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'Matanel\'s spot';

  images = [
    [
      "../assets/ms/1ms.png",
      "../assets/ms/2ms.PNG",
      "../assets/ms/3ms.PNG",
      "../assets/ms/4ms.PNG",
      "../assets/ms/5ms.PNG",
      "../assets/ms/6ms.PNG",
      "../assets/ms/7ms.png",
    ],
    [
      "../assets/cs/1cs.png",
      "../assets/cs/2cs.png",
      "../assets/cs/3cs.png",
      "../assets/cs/4cs.png",  
    ],
    [
      "../assets/cd/1cd.bmp",
      "../assets/cd/2cd.bmp",
      "../assets/cd/3cd.bmp",
      "../assets/cd/4cd.bmp",
      "../assets/cd/5cd.bmp",
      "../assets/cd/6cd.bmp",
    ],
    [
      "../assets/pa/1pa.PNG",
      "../assets/pa/2pa.PNG",
      "../assets/pa/3pa.PNG",
      "../assets/pa/4pa.PNG",
      "../assets/pa/5pa.PNG",
      "../assets/pa/6pa.PNG",
    ],
  ]

  indexes = [0,0,0,0]

  ngOnInit(): void {
    let menu_items = this.h(".menu-item");
    menu_items.forEach( (e) => {
      e.onclick = this.closeNav
    })
    
    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      if ( value >= 100){
        let next = document.querySelector(".next") || document.createElement("div");
        next.classList.add("hidden")
      }
    });
  }
  
  ngAfterViewInit(): void {
    // let arr = document.querySelectorAll("section:not(.hero)");
    // arr.forEach( (e) => (<HTMLElement>e).style.display = "none");
    // setTimeout( () => {
    //   arr.forEach( (e) => (<HTMLElement>e).style.display = "grid")
    // }, 3000);
  }
  
  
  answer(cls: string){
    let hover_box = this.g(".btn-hover-box");
    hover_box.setAttribute("class", "btn-hover-box "+cls );
    let response = this.g(".response");
    let new_response = this.c("div", "response")
    if ( cls == "happy"){
      new_response.innerHTML = "Nice!";
      
    }else if (cls == "cool"){
      new_response.innerHTML = "Same 😎";
    }else if ( cls == "smooth"){
      new_response.innerHTML = "Keep it up 👍";
    }else {
      new_response.innerHTML = "💧log(😄) == log(😅)"
    }
    response.remove()

    if ( window.innerWidth > 1280 ){
      new_response.style.margin = "20px";
      new_response.style.fontSize = "22px";
      
    }else{
      new_response.style.margin = "12px";
    }

    this.g(".hero").appendChild(new_response);
    this.initNext();
  }
  
  pageScrolled(e: any){
    
  }
  
  move(project: number, num: number, element: any){
    let new_index = this.indexes[project] + num;
    if ( new_index == -1 ){
      new_index = this.images[project].length - 1;
    }else if ( new_index == this.images[project].length ){
      new_index = 0;
    }
    this.indexes[project] = new_index;
    element.style.backgroundImage = `url(${this.images[project][this.indexes[project]]})`;
    console.log(this.indexes)
  }

  initNext(){
    
    let next = this.g(".next");
    next.classList.remove("hidden")
    
  }

  nextClicked(next: any){
    next.classList.add('hidden');
  }
  
  closeNav(toggler: any){
    toggler.checked = false;
    location.href = "#summary";
  }
  
  g(q: any){
    return document.querySelector(q);
  }
  
  h(q: any){
    return document.querySelectorAll(q);
  }
  
  c(q: any, c: string){
    let n = document.createElement(q);
    n.classList.add(c);
    return n;
  }
}
