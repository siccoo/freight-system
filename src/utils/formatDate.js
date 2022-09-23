export const formatDate = data => {
	const d = new Date(data);
	const year = d.getFullYear();
	const date = d.getDate();
	// const time = d.toLocaleTimeString([], {
	// 	hour: '2-digit',
	// 	minute: '2-digit',
	// 	hour12: true
	// });

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const monthName = months[d.getMonth()];
	const formatted = `
	${monthName} 
	${date}, 
	${year} 
	`;
	return formatted;
};