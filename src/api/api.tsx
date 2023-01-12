import axios from "axios";
import qs from "qs";
export const getArticles = async (value:string[] | null) => {
  const query = qs.stringify({
    _where: {
      _or: [{ title_contains: value }, { summary_contains: value }],
    },
  });
  if (value) {
    return await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles?${query}`
    );
  } else {
    return await axios.get(`https://api.spaceflightnewsapi.net/v3/articles`);
  }
};

