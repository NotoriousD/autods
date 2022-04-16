import { memo, useEffect, useState } from 'react';

import { randomColor } from './List';

const ListHeader = ({ checkedItemsLength, onShuffle }) => {
	const [color, setColor] = useState(randomColor());

	useEffect(() => {
		setColor(randomColor());
	}, [checkedItemsLength]);
	
	return <>
		<div style={{ background: `#${color}` }}>
			Checked: {checkedItemsLength}; renderID: {color}
		</div>
		<div>
			<button onClick={onShuffle}>Shuffle</button>
		</div>
	</>;
}

export default memo(ListHeader);
