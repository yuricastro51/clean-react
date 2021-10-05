import { HttpPostClient } from 'data/protocols/http/httpPostClient';
import { RemoteAuthentication } from './remoteAuthenticated';

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post (url: string): Promise<void> {
        this.url = url;
      }
    }
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});