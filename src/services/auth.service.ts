import type { AxiosInstance, AxiosResponse } from 'axios'
import { client } from './base'

type User = {
  email: string
  password: string
}

class AuthService {
  public constructor(private readonly client: AxiosInstance) {}

  public async login(email: string, password: string): Promise<string> {
    const res = await this.client.post<
      { email: string; password: string },
      AxiosResponse<{ auth_token: string }>
    >('/auth/token/login', { email, password })
    return res.data.auth_token
  }

  public async register(
    email: string,
    password: string
  ): Promise<Omit<User, 'password'>> {
    const res = await this.client.post<
      string,
      AxiosResponse<Omit<User, 'password'>>
    >('/accounts/register/', { email, password })
    return res.data
  }

  public async getUser(authToken: string): Promise<string> {
    console.log('Checking if user is logged in...')
    const res = await this.client.get<{ email: string }>('/auth/users/me', {
      headers: { Authorization: `Token ${authToken}` },
    })
    return res.data.email
  }
}

export const authService = new AuthService(client)
