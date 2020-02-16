import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'checkbox';

  form: FormGroup;

  jsonApi: any = {
    _id: '12312',
    resumo: "dsaijndsaijnijnasdijnsdaijndsaijnasijdasn",
    indOficial: 1
  };

  constructor(
    private formBuilder: FormBuilder,
    // private servico: any
  ){}


  ngOnInit(){
      this.form = this.formBuilder.group({
        _id: ['', Validators.nullValidator],
        resumo: ['', Validators.nullValidator],
        indOficial: [false, Validators.nullValidator]
      })


    this.loadForm();
  }

  loadForm() {
    //carregando dados do backend
    let id;

    // this.servico.getForm(id).subscribe(res=>{
      
    // })


    this.form.patchValue(this.jsonApi);

    console.log('antes da validação',this.form.value)

    if(this.jsonApi.indOficial == 0){
      this.form.get('indOficial').patchValue(false);
    }else{
      this.form.get('indOficial').patchValue(true);
    }

    console.log('depois da validação',this.form.value)

  }

  check(){
    console.log(this.form.value)
  }

  sendToBackEnd(){
    

   if(this.form.get('indOficial').value){
    this.form.get('indOficial').patchValue(1);

   }else{
    this.form.get('indOficial').patchValue(0);
   }

   console.log("isso foi enviado", this.form.value)


  }

}
