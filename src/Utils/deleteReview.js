export const deleteReview = (id, setHitApi, hitApi) => {
  fetch(`http://localhost:5000/delete-review?id=${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount !== 0) {
        setHitApi(!hitApi);
      }
    });
};
