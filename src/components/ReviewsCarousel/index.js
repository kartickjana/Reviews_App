// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRight = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="reviewContainer">
        <img src={imgUrl} alt={username} />
        <p className="userName">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeft = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewsDetails = reviewsList[activeReviewIndex]

    return (
      <div className="appContainer">
        <h1 className="heading">Reviews</h1>
        <div className="carouselContainer">
          <button
            type="button"
            onClick={this.onClickLeft}
            data-testid="leftArrow"
            className="arrowButton"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewsDetails)}
          <button
            type="button"
            onClick={this.onClickRight}
            data-testid="rightArrow"
            className="arrowButton"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
