import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';

export const Footer: React.FC = () => (
  <>
   
    <IonFooter>
      <IonToolbar color="primary">
        <IonTitle><small>(c) React News App 2020. <br/> Powered By NewsApi.Org</small></IonTitle>
      </IonToolbar>
    </IonFooter>
  </>
);