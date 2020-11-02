import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyCN6e98GjAfa_d4E4mISSn8uCP6g5b1DvE';

const useVideos = (defaultSearchTerm) => { /*Input: defaultSearchTerm */
    const [videos, setVideos] = useState([]); /*Output: a list of videos */

    useEffect(() => {
        search(defaultSearchTerm);
      }, [defaultSearchTerm]);

      const search = async (term) => { /* Output: a function that can be used for a search of the list of videos */
        const response = await youtube.get('/search', {
          params: {
            q: term,
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            key: KEY,
          },
        });
    
        setVideos(response.data.items);
        
        
      };
      return [videos, search]; /* Output; alt: return {videos, onTermSubmit}*/
};


export default useVideos;

