import axios, { AxiosResponse } from "axios";
import { LoginResponse } from "../Interfaces/DTO";
import { RegisterResponse } from "../Interfaces/RegisterResponse/RegisterResponse";

class Api {
  static BASE_URL = "http://localhost:8080";

  static async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(
        `${this.BASE_URL}/auth/login`,
        { email, password }
      );
      console.log("Response", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async register(userData: Record<string, any>): Promise<RegisterResponse> {
    try {
      const response: AxiosResponse<RegisterResponse> = await axios.post(
        `${this.BASE_URL}/auth/register`,
        userData
      );
      console.log("Api Response: ", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers(token: String) {
    try {
      const response = await axios.get(`${this.BASE_URL}/admin/all-users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getAllGuestsByEventId(eventId: Number) {
    try {
      const response = await axios.get(`${this.BASE_URL}/guest/by-event/${eventId}`);
      // console.log("Event guests: ", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getScheduleByEventId(eventId: Number) {
    try {
      const response = await axios.get(`${this.BASE_URL}/schedule/items-by-event/${eventId}`);
      // console.log("Event schedule: ", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getAllEvents() {
    try {
      const response = await axios.get(`${this.BASE_URL}/events`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // static async getProfile(token) {
  //   try {
  //     const response = await axios.get(
  //       `${this.BASE_URL}/adminuser/get-profile`,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  static async getUserById(userId: Number) {
    try {
      const response = await axios.get(`${this.BASE_URL}/auth/get/${userId}`);
      console.log("Response user: ", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // static async deleteUser(userId, token) {
  //   try {
  //     const response = await axios.delete(
  //       `${this.BASE_URL}/admin/delete/${userId}`,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // static async updateUser(userId, userData, token) {
  //   try {
  //     const response = await axios.put(
  //       `${this.BASE_URL}/admin/update/${userId}`,
  //       userData,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  static async getEventById(eventId: Number) {
    try {
      const response = await axios.get(`${this.BASE_URL}/events/${eventId}`);
      // console.log("Event: ", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Check Authentication
  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("firstName");
    window.location.href = "/";
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static isAdmin() {
    const role = localStorage.getItem("role");
    return role === "ADMIN";
  }

  static isUser() {
    const role = localStorage.getItem("role");
    return role === "USER";
  }

  static isAdminOnly() {
    return this.isAuthenticated() && this.isAdmin();
  }
}

export default Api;
