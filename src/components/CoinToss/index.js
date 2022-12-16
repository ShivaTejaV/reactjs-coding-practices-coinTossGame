// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {imgUrl} = this.state
    const {heads, tails} = this.state
    const total = heads + tails
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img alt="toss result" className="img" src={imgUrl} />
          <button className="toss" onClick={this.tossTheCoin} type="button">
            Toss Coin
          </button>
          <div className="resultContainer">
            <p className="para">Total:{total}</p>
            <p className="para">Heads:{heads}</p>
            <p className="para">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
