import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

export const Header: React.FC = () => (
  <>
  <IonContent>
    <IonHeader>
      <IonToolbar color="primary">
          <IonTitle>Headline News App</IonTitle>
      </IonToolbar>
    </IonHeader>
    </IonContent>

    
  </>
);

/** 
 * <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">React App</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent> 
    */