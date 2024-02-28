// Welcome.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

interface WelcomeProps extends RouteComponentProps {}

const Welcome: React.FC<WelcomeProps> = ({ history }) => {
  const goToHome = () => {
    history.push('/home');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          <p>Welcome to my App!</p>
          <IonButton expand="full" onClick={goToHome}>
            Get Started
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;