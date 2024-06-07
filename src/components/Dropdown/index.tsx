import { Category, DropdownOption, PriceSort } from '@appTypes/index';

import style from './style.module.css';

interface DropdownProps extends Omit<React.HTMLProps<HTMLSelectElement>, 'onChange'> {
  options: DropdownOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  selectedValue: PriceSort | Category;
}

function Dropdown({ options, label, onChange, name, selectedValue, ...rest }: DropdownProps) {
  const selectId = `select-${label}`;

  return (
    <>
      <label className="scr-only" htmlFor={selectId}>
        {label}
      </label>
      <select id={selectId} name={name} className={style.select} onChange={onChange} {...rest}>
        {options.map((item) => (
          <option key={item.value} value={item.value} selected={selectedValue === item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
