import { PreviewList, previewList } from "./models";

export function fromJsonToProp(jsonApi: JSON): PreviewList {
  const propList = previewList.safeParse(jsonApi);
  if (propList.success) {
    return propList.data;
  } else {
    return { businesses: [] } as PreviewList;
  }
}
