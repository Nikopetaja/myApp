// Home.tsx
import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import axios from 'axios';
import './Home.css';
import Menu from '../components/Menu';

const Home: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  useEffect(() => {
    // Fetch Chuck Norris joke when the component mounts
    fetchChuckNorrisJoke();
  }, []);

  const fetchChuckNorrisJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  return (
    <>
      <Menu />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton autoHide={false}></IonMenuButton>
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home Page</IonTitle>
            </IonToolbar>
          </IonHeader>
          {/* Display Chuck Norris joke */}
          <h2>Welcome to My App</h2>
          <p>{joke}</p>
          <div>
            <p>This is my app. <br></br> Here you can find two ways to navigate. <br></br> There is the toolbar at the bottom of the page and a side menu that opens by clicking on the button next to the header of this page.</p>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
