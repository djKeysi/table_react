import styles from './DivSort.module.css';
export const DivSort = ({ children, arrowState, ...props }) => {
	return (
		<div
			{...props}
			className={
				arrowState === 'asc'
					? styles['header-cell'] + ' ' + styles['sort-asc']
					: arrowState === 'desc'
						? styles['header-cell'] + ' ' + styles['sort-desc']
						: styles['header-cell']
			}
		>
			{children}
		</div>
	);
};
