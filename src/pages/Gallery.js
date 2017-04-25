import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import PhotoGallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import images from '../images';

class Gallery extends Component {
  constructor(props) {
		super(props);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  	this.gotoPrevious = this.gotoPrevious.bind(this);
		this.state = {
      currentImage: 0,
      heading: 'Gallery',
      subhead: 'A collection of the best generated artworks from this system.'
		};
	}

  openLightbox(index, event){
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

  closeLightbox(){
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious(){
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext(){
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div>
      <Navigation />
      <div className="gallery-page">
        <Header heading={this.state.heading} subhead={this.state.subhead}/>
        <div className="flex flex-center flex-column" id="gallery">
          <PhotoGallery photos={images} onClickPhoto={this.openLightbox}/>
            <Lightbox
              images={images}
              backdropClosesModal={true}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              width={1600}
            />
        </div>
      </div>
    </div>
    )
  }
}

export default Gallery;
