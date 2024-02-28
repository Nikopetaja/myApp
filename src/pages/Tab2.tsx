import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Menu from '../components/Menu';

const TabPage: React.FC = () => {
  return (
    <IonPage id='main-content'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h1>Main content</h1>
        <p>Click the icon in the top left to toggle the Menu.</p>
      </IonContent>
    </IonPage>
  );
};

const TabPageWithMenu: React.FC = () => {
  return (
    <>
      <Menu />
      <TabPage />
    </>
  );
};

export const Tab1: React.FC = () => {
  return <TabPageWithMenu />;
};

export const Tab2: React.FC = () => {
  return <TabPageWithMenu />;
};

export const Tab3: React.FC = () => {
  return <TabPageWithMenu />;
};

export default Tab2;