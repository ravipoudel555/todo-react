import EcommerceService from "../services/ecommerce.service";

export const RetrieveProductsAction = () => async (dispatch) => {
  try {
    const res = await EcommerceService.getAll();

    dispatch({
      type: "RETRIEVE_PRODUCTS",
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
