# Nautic 🐙

[![Greenkeeper badge](https://badges.greenkeeper.io/ynnoj/nautic.svg)](https://greenkeeper.io/)

> Node.js library for the [Mautic](https://www.mautic.org) REST API

## Usage

`yarn add nautic`

Instantiate a new client by providing your Mautic domain, along with your Mautic username and password.

This library uses the [basic authentication](https://developer.mautic.org/#basic-authentication) method when making requests to the Mautic API.

```js
const MauticClient = new Nautic({
  apiUrl: 'https://pawnee.mautic.net/api',
  username: 'ronswanson',
  password: '••••••'
})
```
