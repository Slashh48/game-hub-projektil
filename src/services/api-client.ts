import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e19ffc4236ae42f998f1b1d07d02023b",
  },
});
