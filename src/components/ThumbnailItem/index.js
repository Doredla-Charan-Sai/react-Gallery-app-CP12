// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbDetails, onSelect} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbDetails
  const onTake = () => {
    onSelect(id)
  }
  return (
    <li>
      <button type="button" onClick={onTake} className="btn">
        <img className="img" src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
