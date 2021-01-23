import { boyGroup } from "../../post/bg-post";
import { girlGroup } from "../../post/gg-post";

export const BoyGroup = () => (dispatch) => {
  dispatch({
    type: "boy-group",
    payload: boyGroup,
  });
};

export const GirlGroup = () => (dispatch) => {
  dispatch({
    type: "girl-group",
    payload: girlGroup,
  });
};
