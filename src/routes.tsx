import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Details from './pages/Details';
import NewItem from './pages/NewItem';


const Routes: React.FC = () => {
  return (
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/new" component={NewItem} exact={true} />
          <Route path="/details" component={Details} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/new" />} />
        </IonRouterOutlet>
      </IonReactRouter>
  );
};

export default Routes;