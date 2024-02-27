// Tab1.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab1: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 1</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div>Content for Tab 1</div>
    </IonContent>
  </IonPage>
);

export default Tab1;