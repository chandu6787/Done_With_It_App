import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const payload = {
    title: listing.title?.trim(),
    price: Number(listing.price),
    categoryId: listing.category?.value,
    description: listing.description?.trim() || "",
    images: Array.isArray(listing.images) ? listing.images : [],
    location: listing.location ?? null,
  };

  return client.post(endpoint, payload, {
    onUploadProgress: (progress) => {
      if (!progress) {
        onUploadProgress?.(0);
        return;
      }

      const ratio =
        progress.progress ??
        (progress.total ? progress.loaded / progress.total : undefined);

      if (typeof ratio === "number") {
        onUploadProgress?.(ratio);
      } else {
        onUploadProgress?.(0);
      }
    },
  });
};

export default {
  getListings,
  addListing,
};
