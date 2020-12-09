import axios from "axios";

const UserAPI = {
  getUser: function (id) {
    return axios.get("/api/user/user/" + id);
  }
  // postMessage: function (id, data) {
  //   return axios.post("/api/user/user/" + id, data);
  // }
};

export default UserAPI;
