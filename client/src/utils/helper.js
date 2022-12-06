/* All the helper functions shared between components*/
import axios from 'axios';
import token from '../../../config.js';

  // sorting helper function
  export function sortResults(array, criteria, cb) {
    console.log('sorting')

    function compare(a, b) {
      if (a[criteria] < b[criteria]) {
        return 1;
      }
      if (a[criteria] > b[criteria]) {
        return -1;
      }
      return 0;
    }

    array.sort(compare);
    console.log('sort result is : ', array);
    cb(array);
  }

  // imcrement vote for helpfulness
  export function imcrementVote(voteName, id , cb) {
    console.log('Voting for : ', voteName, id);
      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/${voteName}/${id}/helpful`, {}, { headers: { Authorization: token.TOKEN } })
      .then((response) => {
        console.log('Client side response is : ', response);
        cb();
      })
      .catch((error) => {
        console.log('Client side error is : ', error);
      });

  }

