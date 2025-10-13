import { CurrencyPipe } from "@angular/common";
import { Component, inject, OnInit, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { ProdutoDialog } from "../produto-dialog/produto-dialog";
import { DataService } from "../../services/data";
import { Produto } from "../../interfaces/produto.interface";


@Component({
    selector: 'produto-list',
    standalone: true,
    imports: [MatTableModule, CurrencyPipe, MatIconModule, MatButtonModule],
    templateUrl: './produto-list.html',
    styleUrl: './produto-list.css'
})
export class ProdutoList implements OnInit {
    constructor(private dataService: DataService, private dialog: MatDialog) { }
    ngOnInit(): void {
        this.carregaProdutos();
    }
    //dialog = inject(MatDialog);
    title = signal('Lista de produtos');
    displayedColumns: string[] = ['id', 'nome', 'preco', 'acoes'];
    produtos: Produto[] = [];

    excluir(e: Produto) {
        this.dataService.deleteProduto(e.id).subscribe({
            next: (data) => {
                console.log(data);
                this.carregaProdutos();
            }
        });
    }
    editar(e: Produto) {
        this.openDialog(e);
    }
    adicionar() {
        this.openDialog(<Produto>{});
    }

    openDialog(e?: Produto) {
        this.dialog.open(ProdutoDialog, {
            data: e
        }).afterClosed().subscribe({
            next: (value) => {
                if (value) {
                    alert(value);
                }
                this.carregaProdutos();
            },
        });
    }
    carregaProdutos() {
        this.dataService.getProdutos().subscribe({
            next: (dados) => {
                this.produtos = dados;
            },
            error: (erro) => {
                console.error('Ocorreu um erro ao carregar os produtos', erro);
            },
            complete: () => { }
        })
    }
}