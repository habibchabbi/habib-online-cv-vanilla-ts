
export function getImageSrcFromGroup(imagesMap: any, key: any): string {
  const thumbnailSrc = imagesMap[key];

  return typeof thumbnailSrc === 'string' ? thumbnailSrc : thumbnailSrc?.src;
}

export function getImagesSrcForGroup(imagesMap: any): string[] {

   return  Object.keys(imagesMap).map(key => getImageSrcFromGroup(imagesMap, key));
}

