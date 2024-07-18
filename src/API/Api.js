import axios from "axios";

class Api {
  static BASE_URL = "http://localhost:8080";

  static async login(email, password) {
    try {
      const response = await axios.post(`${this.BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async register(userData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/auth/register`,
        userData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers(token) {
    try {
      const response = await axios.get(`${this.BASE_URL}/admin/all-users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
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

  static async getProfile(token) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/adminuser/get-profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(userId, token) {
    try {
      const response = await axios.get(`${this.BASE_URL}/admin/get/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(userId, token) {
    try {
      const response = await axios.delete(
        `${this.BASE_URL}/admin/delete/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(userId, userData, token) {
    try {
      const response = await axios.put(
        `${this.BASE_URL}/admin/update/${userId}`,
        userData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getEventById(eventId, token) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/get-event/${eventId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Event: ", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Check Authentication
  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
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
