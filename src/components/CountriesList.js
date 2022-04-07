import { Link } from 'react-router-dom'

const CountriesList = ({countries}) => {
	console.log(countries);
	return (
		<ul>
		{countries.map(country => <li key={country.alpha3Code}><Link to={'/' + country.alpha3Code}>{country.name.common}</Link></li> )}
		</ul>
	)
}

export default CountriesList
