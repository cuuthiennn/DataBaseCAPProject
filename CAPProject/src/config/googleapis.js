const {google} = require('googleapis');
require('dotenv').config();

class GoogleAPI {
    constructor(){
        this.auth = new google.auth.GoogleAuth({
            keyFile: JSON.parse(process.env.KEYFILEPATH),
            scopes: [process.env.SCOPES]
        });
    }
    
    uploadFile = async (file, fileParentId) => {
        const bufferStream = new MediaStream.PassThrough();
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
                name: file.originalName,
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
        try {
            const response = await drive.files.list({
            q: `name='${parentFileName}' and mimeType='application/vnd.google-apps.folder'`,
            fields: 'files(id)',
            });
            if (response.data.files.length === 0) {
                this.createFolder(parentFileName, null);
            }
            return response.data.files[0].id;
        } catch (error) {
            console.error('Error getting ID of parent file:', error.message);
            throw error;
        }
    }

    createFolder = async (folderName, parentFolderId) => {
        const folderMetadata = {
            name: folderName,
            mimeType: 'application/vnd.google-apps.folder',
            parents: parentFolderId ? [parentFolderId] : [process.env.FOLDER_ID],
        };
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
        const paths = path.split('/');
        let parentId, result = [];
        try {
            for(let i = 1; i < paths.length; i) {
                parentId =  this.getParentFileId(paths[i-1]);
                this.createFolder(paths[i],parentId);
                result.push()
            }
        } catch (error) {
            console.error('Error creating folder:', error.message);
            throw error;
        }
    }
}

module.exports = GoogleAPI;