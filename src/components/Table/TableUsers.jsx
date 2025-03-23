import styles from './TableUsers.module.css';
import { data } from '../../data/index.js';

import { ButtonTable } from '../Button/ButtonTable.jsx';
import { useState } from 'react';
import { DivSort } from '../DivSort/DivSort.jsx';
import { table } from '../../data/table.js';

const DataList = (dataList, onClickButton) => {
	console.log('11111', data);

	const users = dataList.map(({ id, name, profession, age }) => (
		<tr key={id}>
			<td>{name}</td>
			<td>{profession}</td>
			<td>{age}</td>
			<td>
				<ButtonTable onClick={() => onClickButton(id)}>Удалить</ButtonTable>{' '}
			</td>
		</tr>
	));
	return <tbody>{users}</tbody>;
};

export default function TableUsers({ data, setdataList }) {
	const [arrow, setArrow] = useState(''); //создаем переменную для изменения стиля

	const DivOnClick = (column) => {
		if (column === 'Имя') {
			setArrow('asc');
			//функция которая будет менять стили на кнопках
			if (arrow === 'asc') {
				data.sort((a, b) => (a.name > b.name ? 1 : -1));
				setArrow('desc');
			} else if (arrow === 'desc') {
				//setArrow('');
				data.sort((a, b) => (a.name < b.name ? 1 : -1));
			}
		}
	};

	const onClickButton = (event) => {
		setdataList((prevState) => prevState.filter((el) => el.id !== event));
	};

	return (
		<table className={styles.table_blur}>
			<thead>
				<tr>
					{Object.keys(table).map((column) => (
						<th key={column}>
							{column === 'Удалить' ? null : (
								<DivSort
									arrowState={arrow}
									onClick={() => DivOnClick(table[column].name)}
								>
									{' '}
									{table[column].name}
								</DivSort>
							)}
						</th>
					))}
					<th>Удалить</th>

					{/* // <th>

					// 		{' '}
					// 		NAME
					// 	</DivSort>
					// </th>
					// <th>PROFESSION</th>
					// <th>AGE</th> */}
				</tr>
			</thead>
			{DataList(data, onClickButton)}
		</table>
	);
}

// data.map((data) => {
// 	return (
// 		<tr key={data.id}>
// 			<td>{data.name}</td>
// 			<td>{data.profession}</td>
// 			<td>{data.age}</td>
// 			<td>
// 				<ButtonTable onClick={() => onClickButton(data.id)}>
// 					Удалить
// 				</ButtonTable>
// 			</td>
// 		</tr>
// 	);
// })
