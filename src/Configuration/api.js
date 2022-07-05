import axios from "axios";

let api = axios.create({
  baseURL: "https://dailyserviceapp.herokuapp.com/",
  //baseURL: "http://localhost:3000/",
});

api.defaults.headers["secfetchmodel"] = "220992-1";
api.defaults.headers["pm-app-id-store"] = "1";
api.defaults.headers["Cache-Control"] = "no-cache";
api.defaults.headers["Pragma"] = "no-cache";
api.defaults.headers["Expires"] = "0";

export const GetRegionsList = async (
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiNmJlN2VlNmQyMTJkYTZjM2FiMDQiLCJjb2RlIjoiQ09SLTE2NTU0MDE0NDczMzUtbFhuTWEiLCJpYXQiOjE2NTU0NzI2NzB9.7wAsV0aIb2ieRUoGcOXa8JMwbauWjRByq_Iav-jCvcE"
) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
  return await api.get("region/list");
};

export const GetResultsByRegion = async (
  payload,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiNmJlN2VlNmQyMTJkYTZjM2FiMDQiLCJjb2RlIjoiQ09SLTE2NTU0MDE0NDczMzUtbFhuTWEiLCJpYXQiOjE2NTU0NzI2NzB9.7wAsV0aIb2ieRUoGcOXa8JMwbauWjRByq_Iav-jCvcE"
) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
  return await api.post("results/list/regions", payload);
};

export const GetResultsByDepartments = async (
  payload,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiNmJlN2VlNmQyMTJkYTZjM2FiMDQiLCJjb2RlIjoiQ09SLTE2NTU0MDE0NDczMzUtbFhuTWEiLCJpYXQiOjE2NTU0NzI2NzB9.7wAsV0aIb2ieRUoGcOXa8JMwbauWjRByq_Iav-jCvcE"
) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
  return await api.post("results/list/departments", payload);
};

export const GetResultsByCommunes = async (
  payload,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiNmJlN2VlNmQyMTJkYTZjM2FiMDQiLCJjb2RlIjoiQ09SLTE2NTU0MDE0NDczMzUtbFhuTWEiLCJpYXQiOjE2NTU0NzI2NzB9.7wAsV0aIb2ieRUoGcOXa8JMwbauWjRByq_Iav-jCvcE"
) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
  return await api.post("results/list/communes", payload);
};

export const GetResultsByLocations = async (
  payload,
  location,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiNmJlN2VlNmQyMTJkYTZjM2FiMDQiLCJjb2RlIjoiQ09SLTE2NTU0MDE0NDczMzUtbFhuTWEiLCJpYXQiOjE2NTU0NzI2NzB9.7wAsV0aIb2ieRUoGcOXa8JMwbauWjRByq_Iav-jCvcE"
) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
  return await api.post(`results/list/${location}`, payload);
};


export const GetDepartmentsByRegions = async (
  payload,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiNmJlN2VlNmQyMTJkYTZjM2FiMDQiLCJjb2RlIjoiQ09SLTE2NTU0MDE0NDczMzUtbFhuTWEiLCJpYXQiOjE2NTU0NzI2NzB9.7wAsV0aIb2ieRUoGcOXa8JMwbauWjRByq_Iav-jCvcE"
) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
  return await api.post("department/byregions", payload);
};

export const GetCommunesByDepartments = async (
  payload,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiNmJlN2VlNmQyMTJkYTZjM2FiMDQiLCJjb2RlIjoiQ09SLTE2NTU0MDE0NDczMzUtbFhuTWEiLCJpYXQiOjE2NTU0NzI2NzB9.7wAsV0aIb2ieRUoGcOXa8JMwbauWjRByq_Iav-jCvcE"
) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
  return await api.post("commune/bydepartments", payload);
};

export const GetStationsByCommunes = async (
  payload,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiNmJlN2VlNmQyMTJkYTZjM2FiMDQiLCJjb2RlIjoiQ09SLTE2NTU0MDE0NDczMzUtbFhuTWEiLCJpYXQiOjE2NTU0NzI2NzB9.7wAsV0aIb2ieRUoGcOXa8JMwbauWjRByq_Iav-jCvcE"
) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
  return await api.post("voting-station/bycommunes", payload);
};

export const Authentification = async (payload) => 
  api.post('/authentification/login', payload)

const Endpoints = {
  GetRegionsList,
  GetResultsByRegion,
  GetDepartmentsByRegions,
  GetResultsByDepartments,
  GetResultsByCommunes,
  GetCommunesByDepartments,
  GetStationsByCommunes,
  GetResultsByLocations,
  Authentification
};

export default Endpoints;
