// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  changeNumber = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: getRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.changeNumber}>
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
