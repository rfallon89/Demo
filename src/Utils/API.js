import axios from "axios";

const api = axios.create({
  baseURL: "https://interview-assessment.api.avamae.co.uk/api/v1",
});

export const bannerDetails = () => {
  return api
    .get("home/banner-details")
    .then(({ data: { Details } }) => Details);
};

export const contactUS = (data, address) => {
  const body = { ...data, AddressDetails: { ...address } };
  return api.post("contact-us/submit", body).then((res) => res);
};
