import { useState, useEffect, RefObject } from "react";

export const useOnLoadImages = (ref: RefObject<HTMLElement>) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const updateStatus = (images: HTMLImageElement[]) => {
      // console.log(images.map((image) => image.complete));
      setStatus(
        images.map((image) => image.complete).every((item) => item === true)
      );
    };

    if (ref.current) {
      const imagesLoaded = Array.from(ref.current.querySelectorAll("img"));
      if (imagesLoaded.length === 0) {
        setStatus(true);
      } else {
        imagesLoaded.forEach((image) => {
          image.addEventListener("load", () => updateStatus(imagesLoaded), {
            once: true
          });
          image.addEventListener("error", () => updateStatus(imagesLoaded), {
            once: true
          });
        });
      }
    }

    return undefined;
  }, [ref]);

  return status;
};