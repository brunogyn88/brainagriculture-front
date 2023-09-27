import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducerFormComponent } from './components/producer-form/producer-form.component';
import { ProducerListComponent } from './components/producer-list/producer-list.component';

const routes: Routes = [
  { path: '', component: ProducerListComponent },
  { path: 'cadastro-produtor', component: ProducerFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
