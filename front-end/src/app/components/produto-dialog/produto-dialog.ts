
import { Component, inject, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { Produto } from "../../interfaces/produto.interface";
import { MatInput } from "@angular/material/input";
import { DataService } from "../../services/data";
import { ProdutoList } from "../produto-list/produto-list";


@Component({
    selector: 'produto-dialog',
    standalone: true,
    imports: [MatDialogContent, MatDialogActions,
        MatLabel, MatFormField, MatButtonModule,
        FormsModule, MatInput, MatLabel, MatDialogTitle
    ],
    templateUrl: './produto-dialog.html',
    styleUrl: './produto-dialog.css'
})
export class ProdutoDialog {
    title = signal('Pagina do produto');
    produto: Produto = inject(MAT_DIALOG_DATA);
    constructor(private dataService: DataService, private dialogRef: MatDialogRef<ProdutoDialog>) { }

    salvar() {
        if (this.produto.id == null) {
            this.dataService.createProduto(this.produto).subscribe({
                next: (dados) => {
                    console.log(dados);
                },
            })
        } else {
            this.dataService.updateProduto(this.produto, this.produto.id).subscribe({
                next: (dados) => {
                    console.log(dados)
                }
            });
        }
        this.dialogRef.close('Dados salvos');
        //new ProdutoList(this.dataService).carregaProdutos();
    }
    cancelar() { 
        this.dialogRef.close();
    }

}