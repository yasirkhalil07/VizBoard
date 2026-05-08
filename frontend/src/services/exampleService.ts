import { apiFetch, apiGet, apiPost, apiPut, apiDelete } from "./apiFetch";

// ======================================================
// EXAMPLE SERVICE
// ======================================================

// This is an example of how to use the apiFetch wrapper
// You can create similar services for your API endpoints

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserData {
  name: string;
  email: string;
}

export const exampleService = {
  // =========================================
  // GET ALL USERS
  // =========================================
  getUsers: async (): Promise<User[]> => {
    const response = await apiGet("/api/users");
    const data = await response.json();
    return data;
  },

  // =========================================
  // GET USER BY ID
  // =========================================
  getUserById: async (id: number): Promise<User> => {
    const response = await apiGet(`/api/users/${id}`);
    const data = await response.json();
    return data;
  },

  // =========================================
  // CREATE USER
  // =========================================
  createUser: async (userData: CreateUserData): Promise<User> => {
    const response = await apiPost("/api/users", userData);
    const data = await response.json();
    return data;
  },

  // =========================================
  // UPDATE USER
  // =========================================
  updateUser: async (id: number, userData: Partial<CreateUserData>): Promise<User> => {
    const response = await apiPut(`/api/users/${id}`, userData);
    const data = await response.json();
    return data;
  },

  // =========================================
  // DELETE USER
  // =========================================
  deleteUser: async (id: number): Promise<void> => {
    await apiDelete(`/api/users/${id}`);
  },

  // =========================================
  // UPLOAD FILE (FormData example)
  // =========================================
  uploadFile: async (file: File): Promise<{ url: string }> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiPost("/api/upload", formData);
    const data = await response.json();
    return data;
  },

  // =========================================
  // PUBLIC ENDPOINT (skip auth)
  // =========================================
  getPublicData: async (): Promise<any> => {
    const response = await apiGet("/api/public/data", { skipAuth: true });
    const data = await response.json();
    return data;
  },
};

// ======================================================
// USAGE EXAMPLES
// ======================================================

/*
// Using the convenience methods
const users = await exampleService.getUsers();
const user = await exampleService.getUserById(1);
const newUser = await exampleService.createUser({ name: "John", email: "john@example.com" });
const updatedUser = await exampleService.updateUser(1, { name: "John Doe" });
await exampleService.deleteUser(1);

// Using apiFetch directly for custom requests
const response = await apiFetch("/api/custom-endpoint", {
  method: "PATCH",
  body: JSON.stringify({ customField: "value" }),
});

// File upload
const fileInput = document.getElementById("file") as HTMLInputElement;
const file = fileInput.files[0];
const uploadResult = await exampleService.uploadFile(file);

// Public endpoint (no auth required)
const publicData = await exampleService.getPublicData();
*/
