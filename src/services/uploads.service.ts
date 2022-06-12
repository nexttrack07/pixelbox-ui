import type { AxiosInstance } from 'axios'
import { client, getToken } from './base'

class UploadService {
  public constructor(
    private readonly client: AxiosInstance
  ) { }

  public async getPhotos() {
    const res = await this.client.get('/api/uploads/photos', {
      headers: {
        'Authorization': `Token ${getToken()}`
      }
    })

    return res.data
  }

  public async uploadPhoto(formData: FormData) {
    const res = await this.client.post('/api/uploads/photos/', formData, {
      headers: {
        'Authorization': `Token ${getToken()}`
      }
    })

    return res.data
  }
}

export const uploadService = new UploadService(client)
