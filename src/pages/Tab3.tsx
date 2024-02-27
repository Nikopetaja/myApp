// Tab3.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab3: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 3</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div>Content for Tab 3</div>
    </IonContent>
  </IonPage>
);

export default Tab3;