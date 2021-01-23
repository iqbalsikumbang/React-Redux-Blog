const initialStates = {
  boyGroup: [],
  girlGroup: [],
};

export default function (state = initialStates, action) {
  switch (action.type) {
    case "boy-group":
      return {
        ...state,
        boyGroup: action.payload,
      };
    case "girl-group":
      return {
        ...state,
        girlGroup: action.payload,
      };
    default:
      return state;
  }
}
