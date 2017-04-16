import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Scrollchor from 'react-scrollchor';

class Joy extends Component {
  constructor(props) {
		super(props);
		this.state = {
      heading: 'Gallery',
      subhead: 'A collection of the best generated artworks from this system.',
      images: [
        {
          id: 'deep-joy',
          file: 'http://i.imgur.com/Dxdklzw.jpg',
          title: 'deep-joy.jpg',
          desc: 'A rendering from the Deep Joy algorithm.',
          next: 'perlin'
        },
        {
          id: 'perlin',
          file: 'http://i.imgur.com/AI98620.jpg',
          title: 'perlin.jpg',
          desc: 'A select rendering from the Rorschach Perlin Noise Generator.',
          next: 'sandsplines1',
          prev: 'deep-joy'
        },
        {
          id: 'sandsplines1',
          file: 'http://i.imgur.com/q0J4sND.jpg',
          title: 'sandsplines1.jpg',
          desc: 'Sandsplines',
          next: '',
          prev: 'perlin'
        }
      ]
		};
	}

  render() {
    return (
      <div>
        <div className="gallery-index index flex flex-column flex-space">
          <Navigation />
          <Header heading={this.state.heading} subhead={this.state.subhead}/>
          <Scrollchor to="#deep-joy" animate={{offset: 10, duration: 300}} className="m2 flex flex-center">View the Gallery</Scrollchor>
        </div>

        {this.state.images.map(image => (
          <div>
            <div className="index flex flex-center" id={image.id}>
              <div className="img-container flex-grow flex flex-center">
                <img className="gallery-img m2" src={image.file} alt="gallery" />
              </div>
              <div className="m2 flex-grow flex flex-column">
                <h2>{image.title}</h2>
                <p>{image.desc}</p>
                <div className="flex flex-space">
                  <Scrollchor to={image.prev} animate={{offset: 10, duration: 300}} className="nav-link">Prev</Scrollchor>
                  <Scrollchor to={image.next} animate={{offset: 10, duration: 300}} className="nav-link">Next</Scrollchor>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Joy;
