// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-presentes',
//   imports: [CommonModule],
//   templateUrl: './presentes.html',
//   styleUrl: './presentes.scss'
// })
// export class PresentesComponent {
//   constructor(private http: HttpClient) {}
//   presentes = [
//       { nome: 'Presente 1', img: 'https://i.redd.it/z6dy91r4gzg11.png' },
//       { nome: 'Presente 2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3DAnOuJl86Z0wxcQy3-HK6uVionM_R4sRg&s' },
//       { nome: 'Presente 3', img: 'https://external-preview.redd.it/we-made-a-set-for-storm-inspired-from-dota-original-model-v0-6VH0Q0LY_V0GKJJzse_EmLZIC44itna0UkLy-MtPz8g.png?format=pjpg&auto=webp&s=ec6997702a3c35f169f895ae4bce5726100c058e' },
//       { nome: 'Presente 4', img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f1/Cosmetic_icon_Blossoming_Harmony.png/revision/latest?cb=20150925204557' },
//       { nome: 'Presente 5', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4qfRfCTBfhk8D4VAdUqoy1glmIH7ZLM4Mg&s' },
//     ];

//   pagar(presente: any) {
//     alert(`Você escolheu pagar por ${presente.nome}`);
//   }
// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-presentes',
//   templateUrl: './presentes.html',
//   styleUrls: ['./presentes.scss']
// })
// export class PresentesComponent {
//   presentes = [
//     { nome: 'Presente 1', img: 'https://i.redd.it/z6dy91r4gzg11.png' },
//     { nome: 'Presente 2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3DAnOuJl86Z0wxcQy3-HK6uVionM_R4sRg&s' },
//     { nome: 'Presente 3', img: 'https://external-preview.redd.it/we-made-a-set-for-storm-inspired-from-dota-original-model-v0-6VH0Q0LY_V0GKJJzse_EmLZIC44itna0UkLy-MtPz8g.png?format=pjpg&auto=webp&s=ec6997702a3c35f169f895ae4bce5726100c058e' },
//     { nome: 'Presente 4', img: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f1/Cosmetic_icon_Blossoming_Harmony.png/revision/latest?cb=20150925204557' },
//     { nome: 'Presente 5', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4qfRfCTBfhk8D4VAdUqoy1glmIH7ZLM4Mg&s' },
//   ];

//   selectedImage: string | null = null;

//   // Alteramos o método pagar para abrir a imagem no modal
//   pagar(presente: any) {
//     this.openModal(presente.img);
//   }

//   // Método que abre o modal com a imagem
//   openModal(image: string) {
//     this.selectedImage = image;
//   }

//   // Método para fechar o modal
//   closeModal() {
//     this.selectedImage = null;
//   }
// }




import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentes',
  imports: [CommonModule],
  templateUrl: './presentes.html',
  styleUrl: './presentes.scss'
})
export class PresentesComponent {
  constructor(private http: HttpClient) {}
  presentes = [
      { nome: 'Presente 1', img_1: 'D_Q_NP_2X_641053-MLA84003810983_042025-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp'},
        // https://drive.google.com/uc?export=view&id=1RBnTUhM8bx6YZJ3RQuK8U4go5F75zsR5' },
      { nome: 'Presente 2', img_1: 'D_Q_NP_2X_653584-MLU74022984442_012024-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 3', img_1: 'D_Q_NP_2X_660644-MLA84538336788_052025-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 4', img_1: 'D_Q_NP_2X_688968-MLU74196169391_012024-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 5', img_1: 'D_Q_NP_2X_705842-MLA79568202633_092024-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 6', img_1: 'D_Q_NP_2X_885723-MLU75812418576_042024-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 7', img_1: 'D_Q_NP_2X_889619-MLA84541030144_052025-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 8', img_1: 'D_Q_NP_2X_892058-MLB47746611372_102021-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 9', img_1: 'D_Q_NP_2X_917071-MLA84547981692_052025-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 10', img_1: 'D_Q_NP_2X_934159-MLA89494740731_082025-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 11', img_1: 'D_Q_NP_2X_935780-MLB46800770206_072021-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 12', img_1: 'D_Q_NP_2X_969968-MLU77147115738_062024-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
      { nome: 'Presente 13', img_1: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB.webp' , img_2: 'D_Q_NP_2X_988822-MLB82069219545_012025-AB-qrcode.webp' },
    ];



    
  selectedImage: string | null = null;

  // Alteramos o método pagar para abrir a imagem no modal
  pagar(presente: any) {
    this.openModal(presente.img_2);
  }

  // Método que abre o modal com a imagem
  openModal(image: string) {
    this.selectedImage = image;
  }

  // Método para fechar o modal
  closeModal() {
    this.selectedImage = null;
  }
}