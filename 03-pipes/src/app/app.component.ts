import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre    : string = 'Capitán América'
  nombre2   : string = 'taNiA aBaD eRaS'

  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot']
  PI        : number = Math.PI
  porcentaje: number = 0.234
  salario   : number = 1234.5
  fecha     : Date = new Date()
  activar   : boolean = true

  idioma    : string = 'en';
  videoUrl  : string = 'https://www.youtube.com/embed/XXYlFuWEuKI'


  valorPromesa = new Promise<string>( (resolve) => {
    
    setTimeout( () =>{
      resolve('llegó la data')
    }, 4500)

  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }
}
