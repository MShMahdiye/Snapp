import React, { Component } from 'react'
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../pages/Creer.css'

// export default function Slider() {
//   const slideImage = document.querySelector("#image");
//   var i = 0;
//   var images = [];
//   var time = 5000;

//   images[0] = "https://career.snapp.ir/img/slider/slider1.jpg";
//   images[1] = "https://career.snapp.ir/img/slider/workshop.png";
//   images[2] = "https://career.snapp.ir/img/slider/cube.jpg";
//   images[3] = "https://career.snapp.ir/img/slider/working.jpg";
//   images[4] = "https://career.snapp.ir/img/slider/meeting.jpg";
//   images[5] = "https://career.snapp.ir/img/slider/new_cube.jpg";
//   images[6] = "https://career.snapp.ir/img/slider/car.jpg";


//   function prev() {
//     if (i <= 0) i = images.length;
//     i--;
//     return setImg();
//   }

//   function next() {
//     if (i >= images.length - 1) i = -1;
//     i++;
//     return setImg();
//   }

//   function setImg() {
//     return slideImage.setAttribute('src', images[i])
//   }

//   function changeImage() {
//     document.getElementById("image").src = images[i];
//     console.log(document.getElementById("image").src);
//     if (i < images.length - 1) {
//       i++;
//     } else {
//       i = 0;
//     }
//     setTimeout("changeImage()", time);
//   }

//   changeImage()

//   return (
//     <>
//       <div id="container">
//         <h1>ImageSlider</h1>
//       </div>
//       <div className="wrapper">
//         <div className="prev-btn" onclick={() => prev()}><i className="fas fa-chevron-left"></i></div>
//         <div className="next-btn" onclick={() => {next()}}><i className="fas fa-chevron-right"></i></div>
//         <img id="image" name='slide' width='100%' height="1000px" />
//       </div>
//     </>
//   )
// }

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_card: 0
    }
  }

  componentDidMount() {
    let first_card_clone = this.card_container.children[0].cloneNode(true);
    let last_card_clone = this.card_container.children[this.card_container.children.length - 1].cloneNode(true);
    this.card_container.insertBefore(last_card_clone, this.card_container.children[0]);
    this.card_container.append(first_card_clone);
    this.card_container.style.transitionDuration = "0.5s";
    this.card_container.style.transform = `translate(-${350}px)`;
  }

  handle_next = () => {
    if (this.state.current_card < this.card_container.children.length - 1) {
      let new_current_card = this.state.current_card + 1;
      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${350 * this.state.current_card}px)`;
        if (this.state.current_card === this.card_container.children.length - 1) {
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0.0s";
            this.card_container.style.transform = `translate(-${350}px)`;
            this.setState({ current_card: 1 })
          }, 502)
        }
      })
    } else {
      return;
    }
  }

  handle_prev = () => {
    if (this.state.current_card > 0) {
      let new_current_card = this.state.current_card - 1;
      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${330 * this.state.current_card}px)`;
        if (this.state.current_card === 0) {
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0.5s";
            this.card_container.style.transform = `translate(${350 * this.card_container.children.length - 2}px)`;
            this.setState({ current_card: this.card_container.children.length - 2 })
          }, 502)
        }
      })
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <button className="prev-btn" onClick={this.handle_prev}><h1><FontAwesomeIcon icon={faChevronLeft} /></h1></button>
        <button className="next-btn" onClick={this.handle_next}><h1><FontAwesomeIcon icon={faChevronRight} /></h1></button>
        <div className='view-port' style={styles.view_port}>
          <div ref={ref_id => this.card_container = ref_id} className='card-container' style={styles.card_container}>
            <Card card_number="https://career.snapp.ir/img/slider/cube.jpg" />
            <Card card_number="https://career.snapp.ir/img/slider/workshop.png" />
            <Card card_number="https://career.snapp.ir/img/slider/slider1.jpg" />
            <Card card_number="https://career.snapp.ir/img/slider/working.jpg" />
            <Card card_number="https://career.snapp.ir/img/slider/meeting.jpg" />
            <Card card_number="https://career.snapp.ir/img/slider/new_cube.jpg" />
            <Card card_number="https://career.snapp.ir/img/slider/car.jpg" />
          </div>
        </div>
      </div>
    )
  }

}

const styles = {
  view_port: {
    position: 'absolute',
    top: '82%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100%',
    height: '600px',
    // backgroundColor: 'red',
    direction: 'ltr',
    marginBottom: '40px',
    overflow: 'hidden'
  },
  card_container: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content'
  }
}