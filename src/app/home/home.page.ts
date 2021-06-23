import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public salario : number = 0;
  public dependentes: number = 0;
  public outroDiscontos: number = 0;
  private discontos:number = 0;
  public inss:number = 0;
  public irrf:number = 0;
  public salarioLiquido:number = 0;

  calculo()
  { 
    this.dependentes = this.dependentes > 0 ? this.dependentes : 0;
    let values;

    switch (true)
    {
      case this.salario <= 1751: 
        this.inss = this.salario * 0.08;
        this.discontos = this.salario - this.dependentes - this.inss;

        values = this.irrf_calc(this.discontos)

        this.irrf = values[0] - values[1]

        this.salarioLiquido = this.salario - (this.irrf + this.inss) - this.outroDiscontos
        break

      case this.salario <= 2979:
        this.inss = this.salario * 0.09;
        this.discontos = this.salario - this.dependentes - this.inss;

        values = this.irrf_calc(this.discontos)

        this.irrf = values[0] - values[1]
        
        this.salarioLiquido = this.salario - (this.irrf + this.inss) - this.outroDiscontos
        break

      case this.salario <= 5839:
        this.inss = this.salario * 0.11;
        this.discontos = this.salario - this.dependentes - this.inss;

        values = this.irrf_calc(this.discontos)

        this.irrf = values[0] - values[1]
        
        this.salarioLiquido = this.salario - (this.irrf + this.inss) - this.outroDiscontos
        break

      case this.salario >= 5840:
        this.inss = 642
        this.discontos = this.salario - this.dependentes - this.inss;

        values = this.irrf_calc(this.discontos)

        this.irrf = values[0] - values[1]
        
        this.salarioLiquido = this.salario - (this.irrf + this.inss) - this.outroDiscontos
        break
    }
  }

  private irrf_calc(value : number)
  {
    switch(true)
    {
      case value <= 1902:
        return [0, 0]

      case value >= 1903 && value <= 2826:
        return [value * 0.075 , 142]
        break

      case value <= 3751:
        return [value * 0.15 , 354]
        break

      case value <= 4664:
        return [value * 0.225 , 636]
        break

      case value > 4664:
        return [value * 0.275 , 869]
        break
    }
  }
}
