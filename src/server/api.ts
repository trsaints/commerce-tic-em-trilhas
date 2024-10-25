import axios from 'axios'


export { Api }

const Api = axios.create({
							 baseURL: 'https://localhost:3000',
							 headers: {
								 'Content-Type': 'application/json'
							 }
						 })