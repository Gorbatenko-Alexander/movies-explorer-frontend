import "./FilterCheckbox.css";

function FilterCheckbox (props) {
  return (
    <label className="filter">
      <input type="checkbox" className="filter__checkbox" checked={props.isChecked}
             onChange={props.setIsChecked}/>
      <span className="filter__ico"></span>Короткометражки
    </label>
  );
}

export default FilterCheckbox;
