import React, { useState, useEffect } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLoading,
    IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel

} from '@ionic/react';
import axios from 'axios';
interface Blog {
    title: string;
    subtitle:string;
    content: string;
}
const NewItem: React.FC = (props) => {
    const [data, setData] = useState<Blog[]>([]);
    const [showLoading, setShowLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://192.168.0.10/reactapi/data.json',
            );
            setData(result.data);
            setShowLoading(false);
        };

        fetchData();
    }, []);

    const showDetail = (data: any) => {
        let prop: any = props;
        prop.history.push({
            pathname: '/tab1/details/' + JSON.stringify(data)
        })
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>New Item</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLoading
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Loading...'}
                />
                {data.map((blog, idx) => (
                <IonCard key={idx}>
                    <IonCardHeader>
                        <IonCardSubtitle>{blog.subtitle}</IonCardSubtitle>
                        <IonCardTitle>{blog.title}</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                    {blog.content}
                    </IonCardContent>
                </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};




export default NewItem;