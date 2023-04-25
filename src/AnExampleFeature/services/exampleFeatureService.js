import { apiClient } from '_shared/dataFetching/apiConfig';

export const exampleFeatureService = {
  async getMatch({ matchId }) {
    const url = `match/${matchId}/`;
    const res = await apiClient.get(url);
    const data = res.data;
    return data;
  }
};
