import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import iconFavorite from "./favorite.png"
import iconUnfavorite from "./unfavorite.png"
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ id }) {

  const {favorite, addFavorite} = useFavoriteContext();
  const isfavorite = favorite.some((item) => item.id === id);
  const icconn = isfavorite ? iconUnfavorite : iconFavorite;

  return (
    <section className={styles.card}>
      <Link to={`/play/${id}`} >
        <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="cover" className={styles.cover}>
        </img>
      </Link>
      <figure className={styles.icon}>
        <img 
          src={icconn} 
          alt="Icon"
          onClick={() => addFavorite({id})}
        />
      </figure>
    </section>
  )
}

export default Card;