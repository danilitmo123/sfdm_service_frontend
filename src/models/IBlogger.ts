export interface IBlogger {
  id: number,
  name: string,
  birthdate: string,
  about: string,
  rate: string,
  tags: ITag[],
  completedJobs: ICompletedJobs[]
}

interface ITag {
  id: number,
  title: string
}

interface ICompletedJobs {
  id: number,
  title: string,
  description: string,
  price: string,
  customer: string
}
