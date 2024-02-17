import React from 'react';

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
	return (
		<header className="App-header">
			<h1>MY SHOPPING CART</h1>
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search for required Products..."
					value={searchCourse}
					onChange={courseSearchUserFunction}
				/>
			</div>
		</header>
	);
}

export default SearchComponent;
