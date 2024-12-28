import { Component,  ElementRef, ViewChild, OnInit, AfterViewInit, asNativeElements } from '@angular/core';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { BodyComponent } from "../components/body/body.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink, BodyComponent],
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.css'
})
export class Pag1Component {
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  isCameraAvailable = false;
  errorMessage: string | null = null;

  ngOnInit() {
    this.startCamera();
  }

  startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          this.isCameraAvailable = true;
          this.videoElement.nativeElement.srcObject = stream;
          this.videoElement.nativeElement.play();
        })
        .catch((error) => {
          this.isCameraAvailable = false;
          this.errorMessage = `Error al acceder a la cámara: ${error.message}`;
          console.error('Error accessing webcam:', error);
        });
    } else {
      this.isCameraAvailable = false;
      this.errorMessage = 'El acceso a la cámara no está soportado en este navegador.';
    }
  }



}
