import React, { useState, useEffect } from 'react';
import {IonContent,IonHeader,IonPage,IonTitle,IonToolbar,IonLoading,IonButton, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import axios from 'axios';
interface Blog {
    title: string;
    author: string;
    description: string;
    urlToImage: string;
    url:string;
}
const NewItem: React.FC = (props) => {
    const [data, setData] = useState<Blog[]>([]);
    const [showLoading, setShowLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://newsapi.org/v2/top-headlines?country=gb&apiKey=d55eab2f7e4746cca0d4fef4a94c320d',
            );
            setData(result.data.articles);
            setShowLoading(false);
        };
        fetchData();
    }, []);

    const showDetail = (data: any) => {
        let prop: any = props;
        prop.history.push({
            pathname: '/details/'+{ "title":'test'}
        })
    }
//+ JSON.stringify(data) onClick={() => showDetail(blog)}
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar  color="primary">
                    <IonTitle>UK Top Headline News</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLoading
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Loading...'}
                />
                {data.map((blog, idx) => (
                    <IonCard key={idx} >
                        <IonCardHeader>

                            <IonImg src={blog.urlToImage} />

                            <IonCardSubtitle>{blog.author}</IonCardSubtitle>
                            <IonCardTitle>{blog.title}</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            {blog.description}
                            <p></p>
                            <IonButton href={blog.url} slot="end" >
                                Read More
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};




export default NewItem;