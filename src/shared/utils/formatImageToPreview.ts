export const formatImageToPreview = (file: FileList) => {
  const objectUrl = URL.createObjectURL(file[0]);
  return objectUrl;
};
