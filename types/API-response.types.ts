export interface ApiLandingHeadingData {
  excerpt: { rendered: string };
  yoast_head_json: { title: string };
}

export interface LandingHeadingData {
  excerptNoTags: string;
  yoast_head_json: { title: string };
}

export interface AxiosResponse {
  data: [LandingHeadingData];
}
