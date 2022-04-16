import { useState } from 'react';

import ListHeader from './ListHeader';
import ListItem from './ListItem';

const initialList = Array.from([1, 2, 3, 4, 5, 6], (value) => ({ id: value * +new Date(), value }));
export const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const randomSortArray = array => {
	const result = [...array]
	let curIndex = result.length,
	randIndex;

	while (curIndex != 0) {

		randIndex = Math.floor(Math.random() * curIndex);
		curIndex--;

		[result[curIndex], result[randIndex]] = [
		result[randIndex], result[curIndex]];
	}

	return result;
}

const List = () => {
	const [list, setList] = useState(initialList);
	const [checkedIds, setChecked] = useState([]);

	const handleShuffle = () => {
		setList(randomSortArray(list));
	};

	const handleCheck = (checked, id) => {
		const newCheckedIds = checked
		? [...checkedIds, id]
		: checkedIds.filter((checkedId) => checkedId !== id);
	
		setChecked(newCheckedIds);
	};

	return (
		<>
			<ListHeader
				checkedItemsLength={checkedIds.length}
				onShuffle={handleShuffle}
			/>
			{list.map((item) =>
				<ListItem
					key={item.id}
					item={item}
					checkedIds={checkedIds}
					onCheck={handleCheck}
				/>
			)}
		</>
	);
};

export default List;
