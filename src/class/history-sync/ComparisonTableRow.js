import 'material-design-lite';
import PropTypes from 'prop-types';
import React from 'react';

class ComparisonTableRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { propertyName, netflixValue, traktValue } = this.props;
		return (
			<tr style={{background: (netflixValue == traktValue) ? "White" : "Red"}}>
				<td class="mdl-data-table__cell--non-numeric">{propertyName}</td>
				<td class="mdl-data-table__cell--non-numeric">{netflixValue}</td>
				<td class="mdl-data-table__cell--non-numeric">{traktValue}</td>
			</tr>
		);
	}
}

ComparisonTableRow.propTypes = {
	propertyName: PropTypes.string,
	netflixValue: PropTypes.string,
	traktValue: PropTypes.string
};

export default ComparisonTableRow;