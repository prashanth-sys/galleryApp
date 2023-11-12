// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetailsList, updateCtiveImage} = props
  const {thumbnailUrl, id} = imageDetailsList
  const changeImage = () => {
    updateCtiveImage(id)
  }

  return (
    <li className="list-items">
      <div className="list-container">
        <img src={thumbnailUrl} alt="shiva paravathi" onClick={changeImage} />
      </div>
    </li>
  )
}
export default ThumbnailItem
