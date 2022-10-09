export interface LandingHeadingData {
  excerpt: { rendered: string };
  yoast_head_json: { title: string };
}

export interface AxiosResponse {
  data: [LandingHeadingData];
}
