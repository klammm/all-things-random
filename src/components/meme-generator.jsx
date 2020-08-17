import React, { Component } from 'react';

import fetchMemes from '../utils/meme-fetch';

import '../styles/meme.css';

class GenerateMemes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meme: null,
    };
  }

  componentDidMount() {
    fetchMemes().then((meme) => this.setState({ meme }));
  }

  render() {
    const { meme } = this.state;

    return meme ? (
      <div>
        <h3>Meme of the Day</h3>
        <h4 className="Meme-title">{meme.title}</h4>
        <p className="Meme-author">
          Posted by: u/
          {meme.author}
        </p>
        <img src={meme.url} alt={`meme of the day ${meme.title}`} />
        <p>Created using the Reddit API from /r/dankmemes</p>
      </div>
    ) : null;
  }
}

export default GenerateMemes;
