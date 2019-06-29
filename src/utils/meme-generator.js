import React, { Component } from "react";

import { REDDIT_URL } from "./constants";

import "../styles/meme.css";

class GenerateMemes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meme: null
    };
  }

  componentDidMount() {
    this.fetchMemes().then(meme => this.setState({ meme }))
  }

  fetchMemes() {
    return fetch(REDDIT_URL)
      .then(res => res.json())
      .then(response => response.data.children[1].data)
      .catch(err => console.error("Error Generating Memes: ", err));
  }

  render() {
    const { meme } = this.state;

    return meme && (
      <div>
        <h3>Meme of the Day</h3>
        <h4 className="Meme-title">
          {meme.title}
        </h4>
        <p className="Meme-author">
          Posted by: u/{meme.author}
        </p>
        <img src={meme.url} alt={`meme of the day ${meme.title}`} />
        <p>Created using the Reddit API from /r/dankmemes</p>
      </div>
    )
  }
}

export default GenerateMemes;