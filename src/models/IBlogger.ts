export interface IBlogger {
  id: number,
  blogger: IBloggerDescription,
  rate: number,
  case: IBloggerCase[],
  tag: IBloggerTag[]
}

export interface IBloggerDescription {
  name: string,
  surname: string,
  about: string,
  img: string
}

export interface IBloggerCase {
  title: string,
  date: string
}

export interface IBloggerTag {
  title: string,
}
