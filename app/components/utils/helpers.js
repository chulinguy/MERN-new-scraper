import axios from "axios";
// NYT authKey
const authKey ='2cf1a63b906045d88b4a23f716fd6264';

const helper = {
    //runs the query with beginning and end dates
    runQuery: function(query, startYear, endYear){
      return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",
        {
          params: {
            'api-key': authKey,
            'q': query.trim(),
            'begin_date': `${startYear.trim() || '1970'}0101`,
            'end_date': `${endYear.trim() || '2017'}1231`,
          },
        }
      ).then((res) => {
        var axiosRes = res.data.response.docs; 
        return axiosRes.map((v) => {
          return {
            title: v.headline.main,
            date: v.pub_date,
            url: v.web_url
          }
        })
      })
    },
    // retrieves saved articles from server
    getSavedArticles: function(){
        return axios.get('/api/saved');
    },
    // adds articles to database
    addSavedArticle: function(article){
        return axios.post('/api/saved', article)
    },
    //deletes articles from db
    deleteSavedArticle: function(id){
        return axios.delete(`/api/saved/${id}`);
    }
}

export default helper;