import React from 'react';
import Movie from './Movie';
import emna from '../OB3A7674.jpg';
import Slider from "react-slick";
import Title from "./Title";

class CategoryList extends React.Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
      };
    return (
      <div style={{marginBottom:45}}>
        <Title size={50}>{this.props.name}</Title>
        <Slider {...settings}>
        {this.props.list.map(movie => (
                <Movie
                  onClickDetails={()=>this.props.onSelectedMovie(movie)}
                  className={"scale-up-animation"}
                  title={movie.name} image={movie.taswira} buttonLabel={"Details"}/>
            ))} 
        </Slider>
      </div>
    )
  }
}
export default CategoryList;