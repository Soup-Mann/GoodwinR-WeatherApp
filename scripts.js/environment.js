let isLive = true;
let prod =
{
    apiKey: '876472bfa888fce903a2ff2b5d460cdf',
    isLive: isLive
}

let dev = {
    apiKey: '876472bfa888fce903a2ff2b5d460cdf',
    isLive: !isLive
}

export {prod, dev}