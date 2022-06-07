interface AsyncClientType {
  get: <T>(endpoint: string) => Promise<T>
  post: <T>(endpoint: string, content: Partial<T>) => Promise<T>
}

const BASE_URL = 'http://localhost:8000'

class AsyncClient implements AsyncClientType {
  public constructor(
    private readonly baseUrl: string = BASE_URL,
  ) {} 

  async get<T>(endpoint: string): Promise<T> {
    const res = await fetch(this.baseUrl+endpoint);
    const data = await res.json()

    return data as T
  }

  async post<T, R>(endpoint: string, content: R): Promise<T> {
    const res = await fetch(this.baseUrl+endpoint, {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    return data as T
  }
}


export default AsyncClient
