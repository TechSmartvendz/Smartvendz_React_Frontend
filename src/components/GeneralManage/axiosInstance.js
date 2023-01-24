import axios from "axios"

var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJjMTc4OGNkZWVhNjM4Mzk1Y2NkMmQiLCJpYXQiOjE2Mzk3MTY3NDR9.wCHHhEiKNrD_1nQkaEoOCAS7f4rAxxpW1v9AL2aJfwo"

export  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
  });

axiosInstance.defaults.headers.common['Authorization'] =`Bearer ${token}` ;


