import { toast } from "react-toastify";

export const deleteReview = (id, setHitApi, hitApi) => {
  fetch(`https://bohemian-catch-server.vercel.app/delete-review?id=${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount !== 0) {
        setHitApi(!hitApi);
        toast.success("Deleted Successfully");
      }
    });
};
