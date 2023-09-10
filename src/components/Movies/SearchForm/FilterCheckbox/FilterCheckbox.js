import "./FilterCheckbox.css";

function FilterCheckbox (props) {
  return (
    <label className="filter">
      <input type="checkbox" className="filter__checkbox" defaultChecked={props.isChecked} />
      <span className="filter__ico"></span>Короткометражки
    </label>
  );
}

export default FilterCheckbox;
