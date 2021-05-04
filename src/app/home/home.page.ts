import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public salary : number = 0;
  public dependents: number = 0;
  private discounts:number = 0;
  public inss:number = 0;
  public irrf:number = 0;
  public liquid_salary:number = 0;
  private value: number = 0;

  test()
  { 
    this.dependents = this.dependents > 0 ? this.dependents : 0;
    let values;

    switch (true)
    {
      case this.salary <= 1751: 
        this.inss = this.salary * 0.08;
        this.discounts = this.salary - this.dependents - this.inss;

        values = this.irrf_calc(this.discounts)

        this.irrf = values[0] - values[1]

        this.liquid_salary = this.salary - (this.irrf + this.inss)
        break

      case this.salary <= 2979:
        this.inss = this.salary * 0.09;
        this.discounts = this.salary - this.dependents - this.inss;

        values = this.irrf_calc(this.discounts)

        this.irrf = values[0] - values[1]
        
        this.liquid_salary = this.salary - (this.irrf + this.inss)
        break

      case this.salary <= 5839:
        this.inss = this.salary * 0.11;
        this.discounts = this.salary - this.dependents - this.inss;

        values = this.irrf_calc(this.discounts)

        this.irrf = values[0] - values[1]
        
        this.liquid_salary = this.salary - (this.irrf + this.inss)
        break

      case this.salary >= 5840:
        this.inss = 642
        this.discounts = this.salary - this.dependents - this.inss;

        values = this.irrf_calc(this.discounts)

        this.irrf = values[0] - values[1]
        
        this.liquid_salary = this.salary - (this.irrf + this.inss)
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

  public show_salary() 
  {
    return this.salary;
  }
  public show_inss()
  {
    return this.inss.toFixed(2)
  }
  public show_irrf()
  { 
    return this.irrf.toFixed(2);
  }
  public show_liquidsalary()
  {
    return this.liquid_salary.toFixed(2);
  }
}
