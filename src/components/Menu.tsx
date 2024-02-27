// src/components/Menu.tsx
import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonRouterLink } from '@ionic/react';

const Menu: React.FC = () => {
  return (
    <IonMenu side="start" contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button>
            <IonRouterLink routerLink="/home">
              <IonLabel>Home</IonLabel>
            </IonRouterLink>
          </IonItem>
          <IonItem button> 
            <IonRouterLink routerLink="/tab1">
              <IonLabel>Tab 1</IonLabel>
            </IonRouterLink>
          </IonItem>
          <IonItem button>
            <IonRouterLink routerLink="/tab2">
              <IonLabel>Tab 2</IonLabel>
            </IonRouterLink>
          </IonItem>
          <IonItem button>
            <IonRouterLink routerLink="/tab3">
              <IonLabel>Tab 3</IonLabel>
            </IonRouterLink>
            </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;