class ApiResponse {
  constructor(message = "success", statusCode, data) {
    this.success = statusCode < 400;
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default ApiResponse;
