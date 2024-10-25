import axios from 'axios'


export { Api }

const Api = axios.create({
							 baseURL: 'http://localhost:3000',
							 headers: {
								 'Content-Type': 'application/json'
							 }
						 })