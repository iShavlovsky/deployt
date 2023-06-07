export default http => ({
	async all(){
		let response = await http
			.get('what-we-dos')
			.json();

		return response.data;
	}
})
