import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailSession(email, password); // 'this.account' reference corrected
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            // Logged in
            const user = await this.account.get();
            return user;
        } catch (err) {
            // Not logged in
            console.log('User not logged in');
            throw err;
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (err) {
            throw err;
        }
    }
}

const authServices = new AuthService(); // Correct class name
export default authServices;
