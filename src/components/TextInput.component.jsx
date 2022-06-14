function TextInput({
  labelDescription = 'Descrição do label',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
  id = 'inputIdText',
  autoFocus = false,
}) {
  const handleInputChange = ({ currentTarget }) => {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  };

  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        value={inputValue}
        onChange={handleInputChange}
        autoFocus={autoFocus}
        id={id}
        className="border p-2"
        type="text"
      />
    </div>
  );
}

export { TextInput };
