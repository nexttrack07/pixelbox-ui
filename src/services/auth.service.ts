import AsyncClient from "./base";

class AuthService {
  public constructor(
    private readonly client: AsyncClient
  ) { }

  public async login(email: string, password: string): Promise<string> {
    const token = await this.client.post<string, { email: string; password: string }>('/auth/token/login', { email, password })
    return token
  }

  public async register(email: string, password: string): Promise<string> {
    const token = await this.client.post<string, { email: string; password: string }>('/auth/register', { email, password })
    return token
  }
}

export const authService = new AuthService(new AsyncClient())
