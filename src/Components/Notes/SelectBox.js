export default function SelectBox({ options, label, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <select {...props}>
        {options.map((option, i) => (
          <option key={i} defaultValue={option.default ? true : undefined} value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
