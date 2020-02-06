import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { BuscaComponent } from './busca/busca.component';
import { ListagemComponent } from './listagem/listagem.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { FaqComponent } from './faq/faq.component';
import { PessoafisicaComponent } from './pessoafisica/pessoafisica.component';
import { PessoajuridicaComponent } from './pessoajuridica/pessoajuridica.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PerfilpessoafisicaComponent } from './perfilpessoafisica/perfilpessoafisica.component';
import { PerfilpessoajuridicaComponent } from './perfilpessoajuridica/perfilpessoajuridica.component'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContatoComponent,
    HomeComponent,
    FeedComponent,
    BuscaComponent,
    ListagemComponent,
    DetalheComponent,
    FaqComponent,
    PessoafisicaComponent,
    PessoajuridicaComponent,
    NoticiasComponent,
    PerfilpessoafisicaComponent,
    PerfilpessoajuridicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
