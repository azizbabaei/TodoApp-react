import React from 'react';

function Todo(props) {
	const { item } = props;

	return (
		<div className="col-6 mb-2">
			<div className="d-flex justify-content-between align-items-center border rounded p-3">
				<div>{item.text}</div>
				<div>
					<button
						type="button"
						className={` btn btn-sm mr-1 ${
							item.done ? 'btn-warning' : 'btn-success'
						}`}
						onClick={() => props.done(item.key)}
					>
						{item.done ? 'undone' : 'done'}
					</button>
					<button type="button" className="btn btn-info btn-sm mr-1">
						edit
					</button>
					<button
						type="button"
						className="btn btn-danger btn-sm "
						onClick={() => props.delete(item.key)}
					>
						delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default Todo;
