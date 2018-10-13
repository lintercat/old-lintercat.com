import axios from 'axios'

// TODO: Extract target API url to env
export default ({ name, email }) => axios({
  method: 'POST',
  url: 'https://lintercat.services.app/api/leads',
  data: { name, email }
})
