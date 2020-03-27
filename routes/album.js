'use strict'

var express = require('express')
var albumController = require('../controllers/album');

var api = express.Router();
var md_auth = require('../middlewares/authenticated')

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/albums'})

api.get('/albums/:artistId?',md_auth.ensureAuth,albumController.getAlbums);
api.get('/album/:id',md_auth.ensureAuth,albumController.getAlbum);
api.post('/album',md_auth.ensureAuth,albumController.saveAlbum);
api.put('/album/:id',md_auth.ensureAuth,albumController.updateAlbum);
api.delete('/album/:id',md_auth.ensureAuth,albumController.deleteAlbum);
api.post('/album-image-update/:id',[md_auth.ensureAuth, md_upload],albumController.uploadImage);
api.get('/album-image/:imageFile',albumController.getImageFile);

module.exports = api