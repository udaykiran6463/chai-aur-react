import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, coverImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    coverImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, coverImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    coverImage,
                    status,
                }
            );
        } catch (err) {
            throw err;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
            return true;
        } catch (err) {
            throw err;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    // File upload services
    // file should be actual blob
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log('Error while uploading the file to the bucket: ', error);
            return false;
        }
    }

    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileID
            );
            return true;
        } catch (error) {
            console.log("Error while deleting the file from the bucket", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        );
    }
}

const service = new Service();
export default service;
