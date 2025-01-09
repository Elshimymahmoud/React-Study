import './card.css';

function AllCards(prop) {
  const { title, price, rating, image, description } = prop.product;

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-price">${price}</p>
        <div className="card-rating">
          <span>Rating: {rating.rate} </span>
          <span>({rating.count} reviews)</span>
        </div>
        <p className="card-desc">{description}</p>
        <button>Add To Card</button>
        <input className='input' type='number'/>

      </div>
    </div>
  );
}

export default AllCards;
