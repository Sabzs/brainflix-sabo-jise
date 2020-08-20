// import React from 'react';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header';
import HeroVideo from './components/HeroVideo';
import MainContent from './components/MainContent';
import Comments from './components/formComments/commentsList';
import VideoList from './components/VideoList/VideoList'
import './style/app.css';
import FormInputs from './components/formInputs';



const sidebarVideos = [
  {
    id: uuidv4(),
    title: 'Become A Travel Pro In One Easy Lesson',
    channel: 'Bernice Lambert',
    image: '/images/video-list-1.jpg',
  },
  {
    id: uuidv4(),
    title: 'Les Houches The Hidden Gem Of The Chamonix',
    channel: 'Bernard Patrick',
    image: '/images/video-list-2.jpg',
  },
  {
    id: uuidv4(),
    title: '  Travel Health Useful Medical Information For',
    channel: 'Lizzie Burton',
    image: '/images/video-list-3.jpg'
  },
  {
    id: uuidv4(),
    title: ' Cheap Airline Tickets Great Ways To Save',
    channel: 'Emily Harper',
    image: '/images/video-list-4.jpg'
  },
  {
    id: uuidv4(),
    title: 'Take A Romantic Break In A Boutique Hotel',
    channel: 'Ethan Owen',
    image: '/images/video-list-5.jpg'
  },
  {
    id: uuidv4(),
    title: 'Choose The Perfect Accommodations',
    channel: 'Lydia Perez',
    image: '/images/video-list-6.jpg'
  },
  {
    id: uuidv4(),
    title: 'Cruising Destination Ideas',
    channel: 'Timothy Austin',
    image: '/images/video-list-7.jpg'
  },
  {
    id: uuidv4(),
    title: 'Train Travel On Track For Safety',
    channel: 'Scotty Cranmer',
    image: '/images/video-list-8.jpg'
  },
];

class App extends Component {
  state = {
    commentsData: [

      // function App() {
      // const commentsData = [
      {
        name: "Michael Lyons",
        timestamp: '2018/11/18',
        description: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed.",
        id: uuidv4(),
      },

      {
        name: "Gary Wong",
        timestamp: '2018/11/11',
        description: "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: uuidv4(),
      },
      {
        name: "Theodore Duncan",
        timestamp: '2018/10/15',
        description: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: uuidv4(),
      },
    ],
  }


  handleSubmitMessage = (event) => {
    event.preventDefault();

    const id = uuidv4();
    const name = event.target.name.value;
    const description = event.target.message.value;
    const timestamp = Date.now();

    this.setState({
      commentsData: [...this.state.commentsData, { id, name, description, timestamp }]
    });
    event.target.reset();
  };


  render() {
    return (
      <div className="App" >
        <Header />
        <HeroVideo />
        <main>
          <div className="formDiv">
            <MainContent />
            <div  >
              <FormInputs handleSubmitMessage={this.handleSubmitMessage} />
              <Comments commentsInfo={this.state.commentsData} />
            </div>
          </div>
          <div >
            <div className="video-list__headerDiv">
              <h4 className="video-list__header">Next Video</h4>
            </div>
            <VideoList videos={sidebarVideos} />
          </div>

        </main>
      </div>
    );
  }
}


export default App;
