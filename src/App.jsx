import TableUsers from './components/Table/TableUsers';
import styles from './App.module.css';
import { data } from './data/index.js';
import { useState } from 'react';

export const App = () => {
	//const [dataList, setdataList] = useState([data]);
	// useEffect(() => {
	// 	setdataList(dataList);
	// }, [dataList]);
	// console.log('ffff11', dataList);
	const [dataList, setdataList] = useState(data);
	return (
		<div className={styles.parent}>
			<div className={styles.child}>
				{<TableUsers data={dataList} setdataList={setdataList} />}
				{/* <TableUsers /> */}
			</div>
		</div>
	);
};
