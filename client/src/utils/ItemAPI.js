import axios from "axios";

const ItemAPI = {
  getUserItems: function () {
    return axios
      .get("/api/user/userItems")
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          return { message: "Not Signed In", error: true };
        }
      });
  },
  getAllItems: function () {
    return axios
      .get("/api/user/allItems")
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          return { message: "Not Signed In", error: true };
        }
      });
  },
  getItem: function (id) {
    return axios.get("/api/user/allItems/" + id);
  },
  deleteItem: function (id) {
    return axios.delete("/api/user/allItems/" + id);
  },
  postItem: function (item) {
    return axios
      .post("/api/user/allItems", item)
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          return { message: "Not Signed In", error: true };
        }
      });
  },
  uploadPhoto: function (data, config) {
    return axios
      .post("/api/user/upload", data, config)
      .then(
        (res) => res.data
        // {
        // // console.log(res.data)
        // if (res.status === 200) {
        //     if ('LIMIT_FILE_SIZE' === res.data.error.code) {
        //         console.log("File too large. Max size: 2MB")
        //     } else {
        //         console.log(res.data);
        //     }
        // } else {
        //     let fileName = res.data;
        //     console.log('fileName', fileName)
        // }}
      )
      .catch((err) => console.log(err.response));
  },
};

export default ItemAPI;
