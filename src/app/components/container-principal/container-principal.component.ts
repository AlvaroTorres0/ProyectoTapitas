import { Component } from '@angular/core';
import { SupabaseServiceService } from "../../services/supabase-service.service";

@Component({
  selector: 'app-container-principal',
  templateUrl: './container-principal.component.html',
  styleUrls: ['./container-principal.component.css']
})
export class ContainerPrincipalComponent {
  public interval = 1000;
  public max = 10000;
  public tapitas = 0;
  public buscado = false;
  constructor(private supabase : SupabaseServiceService){}

  ngOnInit(): void {

    const xd = document.getElementById('tapitas');
    setInterval(() => {
      this.supabase.actualizarTapitas().subscribe((data : any) =>{
        this.buscado = true;
        this.tapitas = data[0].contador;
      });
    },this.interval)    
  }

}
