import React, { useState, useMemo, useEffect } from 'react';
import { randomColor } from './List';

const ListItem = ({ item: { id, value }, checkedIds, onCheck }) => {
	const [background, setBackground] = useState(randomColor());

	const isChecked = useMemo(() => checkedIds.includes(id), [checkedIds]);

	useEffect(() => {
		setBackground(randomColor());
	}, [isChecked]);

	const handleChange = ({ target: { checked } }) => onCheck(checked, id);

	return (
		<div style={{ userSelect: 'none', background: `#${background}` }}>
			<input
				id={id}
				type="checkbox"
				checked={isChecked}
				onChange={handleChange}
			/>
			<label htmlFor={id}>{value}; renderID: {background}</label>
		</div>
	);
};

export default ListItem;
