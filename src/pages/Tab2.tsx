// Tab2.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab2: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 2</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div>Content for Tab 2</div>
    </IonContent>
  </IonPage>
);

export default Tab2;