import React, { useState, useEffect } from "react";

import { getPhotos } from "../services/photoService";
import PhotoCard from "./PhotoCard";
import Spinner from "./Spinner";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchPhotos() {
      setLoading(true);
      const { data } = await getPhotos();

      setPhotos(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="row">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </>
      )}
    </div>
  );
};

export default Photos;
