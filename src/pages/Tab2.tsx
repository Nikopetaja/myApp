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
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <p>On this page you will find contact information for giving feedback. <br></br> Phone number: +3587317887320 <br></br> Email: gravediggas240@gpaemail.eu <br></br> Note: These are not real phone numbers or emails! </p>
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