import { Country } from './Country.component';

function Countries({
  children: countries = [],
  onCountryClick = null,

  visitedCountries = [],
}) {
  return (
    <div className="border p-2">
      <h2 className="text-center font-semibold">{countries.length} país(es)</h2>
      <h3 className="text-center font-semibold text-sm">
        {visitedCountries.length} país(es) visitados
      </h3>

      {countries.map(country => {
        const isVisited = visitedCountries.includes(country.id);
        return (
          <Country
            isVisited={isVisited}
            onCountryClick={onCountryClick}
            className="border p-2 m-2"
            key={country.id}
          >
            {country}
          </Country>
        );
      })}
    </div>
  );
}

export { Countries };
