import styles from "./SearchEmpresas.module.css";
import {FaSearch} from "react-icons/fa"

export function SearchEmpresas() {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" />
        <button className={styles.searchButton} type="submit">
            <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
