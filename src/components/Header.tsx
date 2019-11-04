import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

export const Header: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar color="tertiary">
        <IonButtons slot="start">
          <IonBackButton mode="ios" defaultHref="/" />
        </IonButtons>
        <IonTitle>React App</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">React App</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
  </>
);