import styles from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";

const SearchBar = (props) => {
  const inputRef = useRef();
  const handlerClick = () => {
    if (inputRef.current.value.length > 1) {
      console.log(inputRef.current.value);
    }

    inputRef.current.value = "";
  };
  return (
    <form className={styles.form}>
      <label htmlFor="search">Search</label>
      <div className={styles.container__input}>
        <input
          type="search"
          id="search"
          className={styles.input}
          placeholder="Search in ULTI MOBILE"
          name="search"
          ref={inputRef}
        />
        <span className={styles.button} onClick={handlerClick}>
          <BiSearch />
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
