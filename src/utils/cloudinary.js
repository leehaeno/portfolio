const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ;

export const imageUrl = (publicId, options = "") =>
  `https://res.cloudinary.com/${cloudName}/image/upload/${options}/${publicId}`;

export const videoUrl = (publicId, options = "") =>
`https://res.cloudinary.com/${cloudName}/video/upload/${options}/${publicId}`;

export const videoThumbUrl = (publicId, options = "") =>
`https://res.cloudinary.com/${cloudName}/video/upload/${options}/${publicId}`;