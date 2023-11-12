// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetailsList, updateCtiveImage} = props
  const {thumbnailUrl, id, thumbnailAltText} = imageDetailsList
  const changeImage = () => {
    updateCtiveImage(id)
  }

  return (
    <li className="list-items">
      <button className="button" type="button" onClick={changeImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
