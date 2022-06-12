export const CMSURL = 'http://' + getCMSHostIp() + ':' + getCMSPort()

function getCMSHostIp() {
    // var ip = process.env.REACT_APP_CMSHOST
    var ip = '127.0.0.1'
    if (ip) {
        return ip
    } else {
        console.log('No cmshost is found')
    }
}

function getCMSPort() {
    // var port = process.env.REACT_APP_CMSPORT
    var port = '1337'
    if (port) {
        return port
    } else {
        return '8080'
    }
}