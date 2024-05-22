import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onChange }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onChange}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
