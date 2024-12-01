
import apiClient from "../ApiClient";

// all price list in subscription service
export const getSubscriptionPriceList = async () => {
    const response = await apiClient.get("/api/public/product/pricing/vip");
    return response.data;
  };

export const startStripeCheckout = async (priceId) => {
    const params = {
        priceId: priceId,
    };
    const response = await apiClient.post("/api/create-checkout-session", params);
    return response.data;
  };