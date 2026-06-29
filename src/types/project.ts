export type WorkingStory = {
  title: string
  before: string
  situation: string
  whatIDid: string[]
  workedWith: string[]
  result: string
  lesson: string
}

export type Project = {
  id: string
  name: string
  title: string
  chapter: string
  theme: string
  time: string
  team: string
  role: string
  tags: string[]
  story: WorkingStory
  artifacts: string[]
}