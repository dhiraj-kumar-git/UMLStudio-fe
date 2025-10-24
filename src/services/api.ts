const API_BASE_URL = "https://jsonplaceholder.typicode.com"; // Example API for testing

export const api = {
  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  },
};
