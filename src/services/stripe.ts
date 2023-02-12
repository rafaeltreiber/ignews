import Stripe from "stripe";
import { version } from "../../package.json";

const API_KEY = process.env.STRIPE_API_KEY ?? "";

export const stripe = new Stripe(API_KEY, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "Ignews",
    version,
  },
});
