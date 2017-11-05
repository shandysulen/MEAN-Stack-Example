export class MainController {
	
  constructor ($http) {
 		'ngInject';
		this.$http = $http;
  }
	
	//Use Angular's HTTP service to post data to the follow URL
	postMessage() {
		this.$http.post('http://localhost:5000/api/message', {msg: this.message});
	}

}
