import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const CountryDetails = () => {
	const { countryCode } = useParams('countryCode')
	const [details, setDetails] = useState();

	useEffect(() => {
		axios.get('https://ih-countries-api.herokuapp.com/countries/' + countryCode)
			.then((resp) => {
				if (resp.status === 200) {
					console.log('resp.data', resp.data);
					setDetails(resp.data);
				}
			});
		return () => {

		};
	}, []);

	const getCapitalDescription = () => {
		if (details?.capital.length === 1) {
			return `The capital of ${details?.name?.common} is ${details.capital[0]}.`;
		} else if (details?.capital.length > 1) {
			return `The capitals of ${details?.name?.common} are ${details.capital.join(', ')}.`;
		} else if (details?.capital){
			return `${details?.name?.common} has no capital.`;
		}
	}

	return (
		<div>
			{getCapitalDescription()}
		</div>

	)
}

export default CountryDetails
