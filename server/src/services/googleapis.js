const {google} = require('googleapis');
require('dotenv').config();
const stream = require('stream');
class GoogleAPI {
    constructor(){
        this.auth = new google.auth.GoogleAuth({
            keyFile: './src/config/credentials.json',
            scopes: [process.env.SCOPES]
        });
    }
    
    uploadFile = async (file, fileParentId) => {
        const bufferStream = new stream.PassThrough();
        bufferStream.end(file.buffer);
        const {data} = await google.drive({
            version: 'v3',
            auth: this.auth
        }).files.create({
            media: {
                mimeType: file.mimeType,
                body: bufferStream
            },
            requestBody: {
                name: file.originalname,
                parents: [fileParentId]
            },
            fields: 'id,name'
        }).catch(err => {
            if (err){
                throw new Error(err);
            }
        });
        const result = {
            id: data.id,
            name: data.name
        }
        return JSON.stringify(result);
    };

    getParentFileId = async (parentFileName) => {
        let result;
        try {
            const drive = google.drive({
                version: 'v3',
                auth: this.auth
            });
            const response = await drive.files.list({
                q: `name='${parentFileName}' and mimeType='application/vnd.google-apps.folder'`,
                fields: 'files(id)',
            });
            if (response.data.files.length === 0) {
                result = JSON.parse( await this.createFolder(parentFileName, null)).id;
            } else {
                result = response.data.files[0].id;
            }
        } catch (error) {
            console.error('Error getting ID of parent file:', error.message);
            throw error;
        }
        return result;
    }

    createFolder = async (folderName, parentFolderId) => {
        const folderMetadata = {
            name: folderName,
            mimeType: 'application/vnd.google-apps.folder',
            parents: parentFolderId ? [parentFolderId] : [process.env.FOLDER_ID],
        };
        const drive = google.drive({
            version: 'v3',
            auth: this.auth
        });
        try {
            const response = await drive.files.create({
            resource: folderMetadata,
            fields: 'id, name',
            });
            return JSON.stringify({
                id: response.data.id,
                name: response.data.name
            });
        } catch (error) {
            console.error('Error creating folder:', error.message);
            throw error;
        }
    }
    
    createFolderByPath = async (path) => {
        const paths =  path.split('/');
        let parentId, result;
        let folder = [];
        try {
            for(let i = 0; i < paths.length; i++) {
            parentId = (paths.length > 1) ? await this.getParentFileId(paths[i-1]): null;
                result = JSON.parse( await this.createFolder(paths[i], parentId));
                folder.push(result);
            }
        } catch (error) {
            console.error('Error creating folder:', error.message);
            throw error;
        }
        return folder;
    }
}

module.exports = GoogleAPI;