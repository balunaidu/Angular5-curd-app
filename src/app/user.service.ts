import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiURL: string = 'http://localhost:4321/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUserById(id) {
  	const url = `${apiURL}/${id}`;
  	return this.http.get(url)
  	.toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }
  getUser() {
  	const url = `${apiURL}/`;
  	return this.http.get(url)
  	.toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }
  updateUser(data) {
  	const url = `${apiURL}/${data._id}`;
  	return this.http.put(url , data)
  	.toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }

  createUser(data) {
  	const url = `${apiURL}/`;
  	return this.http.post(url , data)
  	.toPromise()
      .then((data: any) => {
        return data;
      })
      .catch(err => {
        console.log(err)
      })
  }

}
