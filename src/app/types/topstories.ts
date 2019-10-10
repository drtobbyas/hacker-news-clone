
export type TopStoriesType = {
  id: string,
  title: string,
  url: string,
  score: Number,
  by: any;
  time: Date,
}

export type HnType = {
  topStories: TopStoriesType
}