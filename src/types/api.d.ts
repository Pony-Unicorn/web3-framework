export interface IApiResponse<T> {
  result: T
  statusCode: number
  message: string
}

export interface IApiResponseData<T> {
  data: IApiResponse<T>
}

export interface ILogin {
  nickname: string
  avatarUrl: string
}
