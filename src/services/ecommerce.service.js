import http from "../http-common";

class EcommerceService {
  getAll() {
    return http.get("/products");
  }
}
export default new EcommerceService();
