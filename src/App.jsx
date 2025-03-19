import TableUsers from './Table/TableUsers';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.parent}>
			<div className={styles.child}>
				<TableUsers />
			</div>
		</div>
	);
};
