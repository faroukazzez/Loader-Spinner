import React, { Component } from "react";
import WithLoading from "./withLoading";
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmList: [
        {
          filmName: "Game Of Thrones",
          year: 2013,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",
        },
        {
          filmName: "Peaky Blinders",
          year: 2015,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/jeWoeUQyHdxGFNZCrzbOUP78FiZ.jpg",
        },
        {
          filmName: "Breaking Bad",
          year: 2012,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg",
        },
        {
          filmName: "Sherlock",
          year: 2014,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg",
        },
        {
          filmName: "Shernobyl",
          year: 2018,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
        },
        {
          filmName: "Friends",
          year: 2000,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/7buCWBTpiPrCF5Lt023dSC60rgS.jpg",
        },
        {
          filmName: "Vikings",
          year: 2016,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/94gP9uXNdbypwCLORjeurlad15Z.jpg",
        },
      ],
    };
  }
  render() {
      console.log(this.props)
    return (
      <div className="movie-list">
        {this.state.filmList.map((e) => (
          <div className="card">
            <img src={e.imgUrl} className="card-img-top" alt="" />
            <div className="card-body">
              <h3 className="card-title">{e.filmName}</h3>
              <p className="card-text"> {e.year} </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default WithLoading(MovieList);
