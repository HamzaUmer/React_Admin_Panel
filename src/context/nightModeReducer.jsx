const NightModeReducer = (state, action) => {
    switch(action.type) {
        case "SAND": {
            return{
                nightMode: false,
            };
        }
        case "NIGHT": {
            return{
                nightMode: true,
            };
        }
        case "TOGGLE": {
            return{
                nightMode: !state.nightMode,
            };
        }
        default:
            return state;
    }
}

export default NightModeReducer;