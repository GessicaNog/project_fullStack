import { Routes } from '@angular/router';

import { ProdutoList } from './components/produto-list/produto-list';
import { ProdutoDialog } from './components/produto-dialog/produto-dialog';


export const routes: Routes = [
    {
        path: '',
        component: ProdutoList,
        title: 'Lista de produtos'
    }, {
        path: 'produto-dialog',
        component: ProdutoDialog,
        title: 'Página do produto'
    }
];
