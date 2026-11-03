import { Component, signal } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  fotoUrl = signal<string | undefined>(undefined);

  async tomarFoto(): Promise<void> {
    try {
      const foto = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      this.fotoUrl.set(foto.webPath);
    } catch (error) {
      console.log('No se pudo tomar la fotografía:', error);
    }
  }
}
