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
            <IonTitle>Home</IonTitle>
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
            <p>This is my app. <br></br> Here you can find two ways to navigate. <br></br> There is the toolbar at the bottom of the page and a side menu that opens by clicking on the button next to the header of this page.</p>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
