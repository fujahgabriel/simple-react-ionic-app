import React from 'react';
import { IonContent,IonPage, IonTitle, IonToolbar,IonButtons, IonBackButton, IonImg} from '@ionic/react';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
interface DetailsPageProps extends RouteComponentProps<{
    title: string;
    urlToImage:string;
    content:string;
  }> {}

  const Details: React.FC<DetailsPageProps> = ({match}) => {
  return (
    <IonPage>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton mode="ios" defaultHref="/" />
        </IonButtons>
        <IonTitle> {match.params.title} </IonTitle>
      </IonToolbar>
      <IonContent className="ion-padding">
      <h3>{match.params.title}</h3>
      <IonImg src={match.params.urlToImage} />
      <p>{match.params.content}</p>

      </IonContent>
    </IonPage>
  );
};

export default Details;