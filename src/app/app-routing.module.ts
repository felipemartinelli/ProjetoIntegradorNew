import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from "./home/home.component";
import { FeedComponent } from "./feed/feed.component";
import { BuscaComponent } from "./busca/busca.component";
import { ListagemComponent } from './listagem/listagem.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { FaqComponent } from './faq/faq.component';
import { PessoafisicaComponent } from './pessoafisica/pessoafisica.component';
import { PessoajuridicaComponent } from './pessoajuridica/pessoajuridica.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { PerfilpessoafisicaComponent } from './perfilpessoafisica/perfilpessoafisica.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerfilpessoajuridicaComponent } from './perfilpessoajuridica/perfilpessoajuridica.component';




const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full"},
  { path: 'home', component: HomeComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'busca', component: BuscaComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'detalhe/:id', component: DetalheComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'pessoafisica', component: PessoafisicaComponent},
  { path: 'pessoajuridica', component: PessoajuridicaComponent},
  { path: 'perfilpessoafisica', component: PerfilpessoafisicaComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'perfilpessoajuridica', component: PerfilpessoajuridicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
