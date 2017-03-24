'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const configFirebase = exports.configFirebase = {
  serviceAccount: {
    projectId: process.env.PROJECT_ID || 'comunidad-iv-devs-9a4f1',
    clientEmail: process.env.CLIENT_EMAIL || 'comunidad-iv-devs-9a4f1@appspot.gserviceaccount.com',
    privateKey: process.env.PRIVATE_KEY || '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD56eC9ylI2tAOa\niui4+zBwVbISWsfbhO/u+VRKx02l3z8GFd4jBY2rSMC2DR+FXGWzQHJtd68FnmCO\njI/RkhRE8WFwlZfTc4sy/SNfVez4wnPoDkw9KfLFZ31NrGIY9b5M3is0hELxA4ZX\nb1F1mMR1VW9kMO3NY3gAXdpeGLXbZDCSH090GZw5m2lv7qdc6mj/RrZsVY5oAPZd\ne3x6WYiBgo2K8zK8WURcO4aMxvhcffG09rS3bB2di00nOl0re8B6XORZyd94bUY+\nbfjEP8GvMIFbH0CS2fA2owelpu0rJ3zrB2DXedqLTEGU4zNYhEH9JBafu61vOg93\nD9JzgUwxAgMBAAECggEALs0GomQuK0Jg3mMfG+0mcBMMSvWnMcveZuFYULysJOD+\n23Pi6qoSkr4IIM+qVH4uKXhrNWbRZvr22Bson7V8iECv37aT/SxJKB5RrnvX6en4\nbL+otVeSuDceNxqOMGBs59Y/PxF5u8rOMLePCLe4KsT6HEgxcGItSdxJlY+JFvF4\njcPTju6bju2mf4U15QAw2nA58cfxH8TVHVJOxteXid8DgO8bUm7Rn3Psy37vH0nw\nlvala03/HOH2vO/m48rpBrBY53OvTk2UXCpuMEWffLzMUZJthReJHPVBhxu+aoZU\nsDfXxG17xDZS5KpwFq7UQlmjsflxBwYXYvEC6paGAQKBgQD/FLYp3c2dp7MK0xbB\nprXNW1C9XVs6FQXuiXOxzR2JUL4WeQSzubry1Wa/4E4Slakj71aQxmoXeK8D7INh\nUyKc9An4L/bepEPOO+XJWvrPDgCxS2EuladyOarhYmBMrrS6WNEC3HQsAJMbtjTJ\naksHmgq0YFhEVk27/L0e8NiM4QKBgQD60GZjABwtAuU7W5UOnIbLb4qAGSNxrbJH\nDEx08aS95I8JtV5QlpEicVXNrGpTQoXLD/YcxFyFh/raIzGNvOb2JPKAM9L8yEu0\ngXZNRC+ym0HFX8MYZxifeiKg8laNVQfKrHu+Z7ZPXprhLpr1KRa6lN7Ps6cDjApV\nVWUJ/9LZUQKBgBL2bzRdkNOPi/faCW8L/afuieoJ7qY6ud4pybgGD5QNtJPnGzph\nLEyxIJpTCnrHNXO+bykEFw73ocsg4gNyMriIS9Vve2LBw2ipe0Okx9BsshB8EhVs\neq47K0DmF1KcCkNwJtmXmetLf6Qnv3TZugouoW0XXHh4Ef9Pop+SOAcBAoGBAJmp\nCcFHdPuilXwbLKPqA68pI+o8/HkN2HYss77FuI9aMsPY6PJofHxkgRPjuLRPwhZZ\nLggLyT9JwsbX3ukePUW59xPSLEYQFEl/M1I9HxfGhLH+bFFMAErcEdEXBy3JVV+2\n8o0BjzDrHeotmmPui209/Y+0WfMTXdVP3voUUEIxAoGBAPy0caO8F98BRkTiqNSI\njdxlin5HgU+qsDtuSmL1LDZZZwxrdWQjeN8w9kP90ySkRVPBNbboX4COtdo+xoBp\ngd43zvUIn6cThcrWWd2rKLWOB/sSc0RcLnuIbphwLGSEFXR+4WgnQP31JPZDj28s\nBuu06AervoWuU1OuHr056eQ0\n-----END PRIVATE KEY-----\n'
  },
  databaseURL: process.env.DATABASE_URL || 'https://comunidad-iv-devs-9a4f1.firebaseio.com/'
};

exports.default = { configFirebase: configFirebase };