import { Formik, Form, Field } from "formik";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";


export default function SearchBox() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const filterAction = changeFilter(e.target.value);
    dispatch(filterAction);
  };

  return (
    <>
      <Formik>
        <Form className={css.cont}>
          <label htmlFor="username" className={css.label}>
            Find contacts by name
          </label>
          <Field
            onChange={handleSubmit}
            type="text"
            name="username"
            className={css.input}></Field>
        </Form>
      </Formik>
    </>
  );
}