import styles from './TableUsers.module.css';
import { data } from '../data/index.js';
export default function TableUsers() {
	console.log(data.id);

	return (
		<table className={styles.table_blur}>
			<thead>
				<tr>
					<th>NAME</th>
					<th>PROFESSION</th>
					<th>AGE</th>
				</tr>
			</thead>
			<tbody>
				{data.map((data) => {
					return (
						<tr key={data.id}>
							<td>{data.name}</td>
							<td>{data.profession}</td>
							<td>{data.age}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
