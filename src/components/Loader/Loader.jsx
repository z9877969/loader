import css from './Loader.module.css';

const Loader = () => {
	return (
		<div className={css.wrapper}>
			<div className={`${css.container}`}>
				<div className={`${css.box} ${css['box-1']}`}></div>
				<div className={`${css.box} ${css['box-2']}`}></div>
				<div className={`${css.box} ${css['box-3']}`}></div>
			</div>
		</div>
	);
};

export default Loader;
