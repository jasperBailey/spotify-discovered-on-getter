async function getPlaylist(access_token, playlistID) {
	const response = await fetch(
		"https://api.spotify.com/v1/playlists/" +
			playlistID +
			"?fields=description,tracks.items(track(artists(id)))",
		{
			method: "GET",
			headers: { Authorization: "Bearer " + access_token },
		}
	);

	return await response.json();
}

export default getPlaylist;
