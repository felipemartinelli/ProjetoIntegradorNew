import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from "./home/home.component";
import { FeedComponent } from "./feed/feed.component";
import { BuscaComponent } from "./busca/busca.component";
import { ListagemComponent } from './listagem/listagem.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EmbaixadoresComponent } from './embaixadores/embaixadores.component';
import { FaqComponent } from './faq/faq.component';
import { PessoafisicaComponent } from './pessoafisica/pessoafisica.component';
import { PessoajuridicaComponent } from './pessoajuridica/pessoajuridica.component';
import { PerfilpessoafisicaComponent } from './perfilpessoafisica/perfilpessoafisica.component';
import { NoticiasComponent } from './noticias/noticias.component';
const routes = [
    { path: '', redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'quemsomos', component: QuemsomosComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'feed', component: FeedComponent },
    { path: 'busca', component: BuscaComponent },
    { path: 'listagem', component: ListagemComponent },
    { path: 'detalhe/:id', component: DetalheComponent },
    { path: 'embaixadores', component: EmbaixadoresComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'pessoafisica', component: PessoafisicaComponent },
    { path: 'pessoajuridica', component: PessoajuridicaComponent },
    { path: 'perfilpessoafisica', component: PerfilpessoafisicaComponent },
    { path: 'noticias', component: NoticiasComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map