const api = {
  async getBallotData() {
    const res = await fetch("/api/getBallotData", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
    });

    return res.json();
  },
};

export default api;
