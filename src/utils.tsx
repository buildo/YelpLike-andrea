import {
  PreviewList,
  previewList,
  detailsPropApi,
  DetailsPropApi,
} from "./models";

export function fromJsonToPropPreview(jsonApi: JSON): PreviewList {
  const propList = previewList.safeParse(jsonApi);
  if (propList.success) {
    return propList.data;
  } else {
    throw Error(
      `Something went wrong with the APIs response: ${propList.error}`
    );
  }
}

export function fromJsonToPropDetails(jsonApi: JSON): DetailsPropApi {
  const propDetails = detailsPropApi.safeParse(jsonApi);
  if (propDetails.success) {
    return propDetails.data;
  } else {
    throw Error(
      `Something went wrong with the APIs response: ${propDetails.error}`
    );
  }
}
