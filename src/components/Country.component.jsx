import { Features } from './Features.component';

function Country({
  children: country,
  onCountryClick = null,
  isVisited = false,
}) {
  const { id, flag, name, capital, region, population, area } = country;

  const handleCountryClick = () => {
    onCountryClick(id);
  };

  const demographicDensity = (population / area).toFixed(2);
  const isVisitedClassName = isVisited ? 'bg-green-100' : '';
  return (
    <div
      className={`flex border p-2 m-2 items-center space-x-2 cursor-pointer ${isVisitedClassName}`}
      onClick={handleCountryClick}
    >
      <img className="w-48" src={flag} alt="bandeira" />
      <ul>
        <li>
          <Features label="Nome: ">{name}</Features>
        </li>
        <li>
          <Features label="Capital: ">{capital}</Features>
        </li>
        <li>
          <Features label="Continente: ">{region}</Features>
        </li>
        <li>
          <Features label="População: ">{population}</Features>
        </li>
        <li>
          <Features label="área: ">{area}</Features>
        </li>
        <li>
          <Features label="Densidade Demográfica: ">
            {demographicDensity}
          </Features>
        </li>
      </ul>
    </div>
  );
}

export { Country };
