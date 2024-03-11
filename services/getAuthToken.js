const getAuthToken = async () => {
	const client_id = process.env.CLIENT_ID;
	const client_secret = process.env.CLIENT_SECRET;

	const url = "https://accounts.spotify.com/api/token";
	const authOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				Buffer.from(client_id + ":" + client_secret).toString("base64"),
		},
		body: new URLSearchParams({
			grant_type: "client_credentials",
		}),
	};

	return await fetch(url, authOptions).then((res) => res.json());
};

export default getAuthToken;
