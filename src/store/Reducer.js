export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_ARTIST':
      return {
        artists: state.artists.filter((artist) => {
          return artist.id !== action.payload;
        }),
      };
    case 'ADD_ARTIST':
      return {
        artists: [action.payload, ...state.artists],
      };
    case 'EDIT_ARTIST':
      const updateArtist = action.payload;
      const updateArtists = state.artists.map((artist) => {
        if (artist.id === updateArtist.id) {
          return updateArtist;
        }
        return artist;
      });
    case 'CHANGE_RATING':
      const updateArtist = action.payload;
      

    default:
      return state;
  }
};
