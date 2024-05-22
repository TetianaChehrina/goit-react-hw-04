import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { Formik, Field, Form } from "formik";
import { AiOutlineExclamation } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useId } from "react";

const SearchBar = ({ onSearch }) => {
  const initialValues = { text: "" };
  const searchId = useId();
  const notify = () =>
    toast(
      <p className={css.error_Toast}>
        <AiOutlineExclamation className={css.error_Icon} />
        Please enter a search query!
      </p>
    );

  function handleSubmit(values, actions) {
    if (!values.text) {
      notify();
      return;
    } else {
      onSearch(values.text);
      console.log(values.text);
    }
    actions.resetForm();
  }

  return (
    <header className={css.header}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "red",
            color: "#fff",
          },

          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <div>
            <label className={css.label} htmlFor={searchId}>
              Search
            </label>
            <Field
              className={css.search_Text}
              type="text"
              name="text"
              autoComplete="off"
              id={searchId}
              autoFocus
              placeholder="Search images"
            />
          </div>
          <button className={css.formBtn} type="submit">
            <AiOutlineSearch className={css.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
