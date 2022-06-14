function Countries({ key, area, capital, flag, name, population, region }) {
  return (
    <tr key={key} className="flex flex-row justify-between text-center">
      <td>{flag}</td>
      <td>{name}</td>
      <td>{capital}</td>
      <td>{region}</td>
      <td>{population}</td>
      <td>{area}</td>
    </tr>
  );
}

export { Countries };
