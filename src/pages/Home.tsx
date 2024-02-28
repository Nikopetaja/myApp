// Home.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButtons, IonMenuButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Menu from '../components/Menu';

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton autoHide={false}></IonMenuButton>
            </IonButtons>
            <IonTitle>Home Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home Page</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer />
          <div>
            <p>This is the Home Page content.</p>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
