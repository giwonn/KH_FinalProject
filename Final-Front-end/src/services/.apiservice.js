import axios from "axios";
import { backUrl } from "../config/config";

const ApiService = () => {};

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

ApiService.get = async (uri) => {
  let data = [];

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    data = await axios.get(`${uri}`, config);
  } catch (error) {
    console.error(error);
  }
  return data;
};

ApiService.getWithHeader = async (uri, email) => {
  let data = [];

  const config = {
    headers: {
      "Content-Type": "application/json",
      Email: email,
    },
  };

  try {
    data = await axios.get(`${uri}`, config);
  } catch (error) {
    console.error(error);
  }

  return data;
};

ApiService.post = async (uri, body) => {
  let resData = {};

  const config = { "Content-Type": "application/json" };

  try {
    resData = await axios.post(`${uri}`, body, config);
  } catch (error) {
    console.error(error);
  }

  return resData;
};

ApiService.postWithHeader = async (uri, body, email) => {
  let resData = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      Email: email,
    },
  };

  try {
    resData = await axios.post(`${uri}`, body, config);
  } catch (error) {
    console.error(error);
  }

  return resData;
};

ApiService.delete = async (uri, data) => {
  let resData = {};

  try {
    resData = await axios.delete(uri, data);
  } catch (err) {
    console.error(err);
  }

  return resData;
};

ApiService.put = async (uri, data) => {
  let res = {};
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    res = await axios.put(uri, data, config);
  } catch (err) {
    console.error(err);
  }
  return res;
};

ApiService.putWithHeader = async (uri, data, email) => {
  let res = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      Email: email,
    },
  };
  try {
    res = await axios.put(uri, data, config);
  } catch (err) {
    console.error(err);
  }
  return res;
};

ApiService.patch = async (uri, data) => {
  let res = {};
  try {
    res = await axios.patch(uri, data);
  } catch (err) {
    console.error(err);
  }
  return res;
};
export default ApiService;
