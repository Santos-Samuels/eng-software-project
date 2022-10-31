export const formatImageToPreview = (file: Blob | MediaSource) => {
  const objectUrl = URL.createObjectURL(file)
  return objectUrl
}