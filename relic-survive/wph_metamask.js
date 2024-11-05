const XRLCTokenABI = [{
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}];

const VersusAccessPassABI = [
    {
        "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ],
        "name": "balanceOf",
        "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ],
        "stateMutability": "view",
        "type": "function"
    },{
        "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "tokenURI",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType":"address", "name":"_owner", "type":"address" }],
        "name":"walletOfOwner",
        "outputs":[{ "internalType":"uint256[]", "name":"", "type":"uint256[]" }],
        "stateMutability":"view",
        "type":"function"
    },
];

const FantomLordsABI =[
    {
        "inputs": [{ "internalType":"address", "name":"_owner", "type":"address" }],
        "name":"walletOfOwner",
        "outputs":[{ "internalType":"uint256[]", "name":"", "type":"uint256[]" }],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],
        "name": "tokenURI",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }
];
const AscendedLordsABI = [
    {
        "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ],
        "name": "balanceOf",
        "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ],
        "stateMutability": "view",
        "type": "function"
    },{
        "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "tokenURI",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "lordName",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "lordLore",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "lordClass",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }
];
const DelveContractABI = [
    {
        "inputs":[],
        "name":"delve",
        "outputs":[],
        "stateMutability":"payable",
        "type":"function"
    },
    {
        "inputs":[],
        "name":"gamePrice",
        "outputs":[{
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
        }],
        "stateMutability":"view",
        "type":"function"
    }
];

const EIP1559Chains = [
    "fantom",
    // "base"
]

const enabledChains = {
    "0xfa": {
        name: "fantom"
    },
    "0x1388": {
        name: "mantle",
    },
    "0x2105": {
        name: "base"
    }
};

// const RPCs = {
//     fantom: "https://rpc.ankr.com/fantom",
//     mantle: "https://rpc.ankr.com/mantle",
//     base: "https://rpc.ankr.com/base",
// }

const contracts = {
    fantom: {
        fantomLords: {
            address: "0xfee8077c909d956e9036c2d2999723931cefe548",
            abi: FantomLordsABI
        },
        ascendedLords: {
            address: "0x6139b9c548fbd1c50d2768f3464d89c8744ab5f2",
            abi: AscendedLordsABI
        },
        delveContract: {
            address: "0xd7c721bacad18c4a847a8448e793b079e8d7eacf",
            abi: DelveContractABI
        },
        xrlcContract: {
            address: "0xE5586582E1a60E302a53e73E4FaDccAF868b459a",
            abi: XRLCTokenABI
        },
        versusAccessPass: {
            address: "0x14fc092bf3d1feabf8fc22ee327a9f0a8ca30753",
            abi: VersusAccessPassABI
        }
    }, 
    mantle: {
        fantomLords: {
            address: "",
            abi: {}
        },
        ascendedLords: {
            address: "",
            abi: {}
        },
        delveContract: {
            address: "0x7DB56689AA972242a63aEfB3f8d80ce2fcf87c3a",
            abi: DelveContractABI
        },
    },
    base: {
        fantomLords: {
            address: "",
            abi: {}
        },
        ascendedLords: {
            address: "",
            abi: {}
        },
        delveContract: {
            address: "0xbbec50f85cc7f24d4c5abdba38d1b0cb85538eff",
            abi: DelveContractABI
        },
    }
};

const API_ENDPOINT = "https://api.fantomlords.com/relic-survive";

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const getWeb3 = (rpc = window.ethereum) => { return new Web3(rpc); };

const checkEthereum = () => { return typeof window.ethereum !== 'undefined' };

const getAccount = async () => {
    const ret = {
        action: "gotAccountData",
        status: "success",
        addresses: "",
    };
    try {
        const addresses = await ethereum.request( { method: 'eth_requestAccounts' } );
        ret.addresses = addresses.join("|")
    } catch (error) {
        ret.status = "error";
        ret.error = error;
    };
    const validChain = await checkChain();
    ret.validChain = validChain.valid;
    ret.chainID = validChain.chainName;
    console.log({ ret })
    GMS_API.send_async_event_social(ret);
    return 0;
}

const getOwnedLords = async function(address) {
    const ret = {
        action: "ownedLordsData",
        status: "success",
        lords: "",
        ascendedLords: "",  
        xrlcCount: 0  
    };
    try {
        ret.lords = await checkLords(address);
        ret.ascendedLords = await checkAscendedLords(address);
        ret.xrlcCount = await getXRLCBalance(address);
    } catch (error) {
        console.log(error);
    }
    GMS_API.send_async_event_social(ret);
}

const XRLCContract = async function() {
    const chainValidation = await validChain();
    const web3 = getWeb3();
    const contractData = contracts[chainValidation.chainName].xrlcContract;
    return new web3.eth.Contract(contractData.abi, contractData.address);
}

const delveContract = async function() {
    const chainValidation = await validChain();
    // const rpc = chainValidation.chainName == "mantle" ? "https://rpc.ankr.com/mantle" : window.ethereum;
    const web3 = getWeb3();
    const contractData = contracts[chainValidation.chainName].delveContract;
    console.log({ contractData });
    return new web3.eth.Contract(contractData.abi, contractData.address);
}


const versusAccessPassContract = async function() {
    const chainValidation = await validChain();
    const web3 = getWeb3();
    const contractData = contracts[chainValidation.chainName].versusAccessPass;
    return new web3.eth.Contract(contractData.abi, contractData.address);
}

const fantomLordsContract = async function() {
    const chainValidation = await validChain();
    const web3 = getWeb3();
    const contractData = contracts[chainValidation.chainName].fantomLords;
    return new web3.eth.Contract(contractData.abi, contractData.address);
}

const ascendedLordsContract = async function() {
    const chainValidation = await validChain();
    const web3 = getWeb3();
    const contractData = contracts[chainValidation.chainName].ascendedLords;
    return new web3.eth.Contract(contractData.abi, contractData.address);
}

const getFantomLordsTokens = async function(contract, address) {
    let tokens = [];
    try {
		tokens = await contract.methods.walletOfOwner(address).call();
        tokens = tokens.map( token => parseInt(tokens));
    } catch (error) {
        console.log(error);
    }
    console.log("fantom lords: " + tokens);
    return tokens;
}

const getAscendedLordsTokens = async function(contract, address) {
    let tokens = [];
    try {
        console.log("before tokencount");
        const tokenCount = await contract.methods.balanceOf(address).call();
        console.log(tokenCount);
        for (let i = 0; i < tokenCount; i++) {
            console.log("before tokenOfOwnerByIndex");
            const tokenByIndex = await contract.methods.tokenOfOwnerByIndex(address, i).call();
            tokens.push(tokenByIndex);
        }
    } catch (error) {
        console.log(error);
    }
    console.log("ascended lords: " + tokens);
    return tokens;
}

const checkLords = async function(address) {
    const chainValidation = await validChain();
    if(chainValidation.chainName != "fantom") { return ""; };
    const chain = getChainID();
    const contract = await fantomLordsContract();
    const tokens = await getFantomLordsTokens(contract, address);
    return tokens.join(",");
}

const checkAscendedLords = async function(address) {
    const chainValidation = await validChain();
    if(chainValidation.chainName != "fantom") { return ""; };
    const contract = await ascendedLordsContract();
    const tokens = await getAscendedLordsTokens(contract, address);
    return tokens.join(",");
}

const authStep1 = async function(address) {
    const rawRes = await fetch(`${API_ENDPOINT}/auth/step/1`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            address: address
        })
    });

    const response = await rawRes.json();
    return response;    
}

const authStep2 = async function(address, message, signature) {
    const rawResAuth = await fetch(`${API_ENDPOINT}/auth/step/2`, {
        method: 'POST',
        body: JSON.stringify({ 
            address: address,
            message: message,
            signature: signature
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    const responseAuth = await rawResAuth.json();
    console.log("responseAuth:");
    console.log({ responseAuth });
    return responseAuth;
}

const asyncLogin = async function(address) {
    const ret = {
        "action": "asyncLogin",
        "status": "ok",
        "authToken": ""
    };
    try {
        const response = await authStep1(address);
        console.log("response: "); console.log({ response });
        const nonce = response.data.user.nonce;
        console.log({ user: response.data.user }); console.log({ user: response.data.user.nonce });
        const message = `Welcome summoner, your hallowed nonce is ${nonce}, sign to authenticate into the world of Relic Survive!`;
        const signature = await ethereum.request({ 
            method: 'personal_sign', 
            params: [ 
                message,
                address
            ]
        });
        console.log("signature"); console.log({ signature });
        const responseAuth = await authStep2(address, message, signature);
        if("error" in responseAuth) { throw new Error('error during log in'); }
        const authToken = responseAuth.token;
        ret.authToken = authToken;
        GMS_API.send_async_event_social(ret);
    } catch(error) {
        ret.action = "asyncLoginError";
        GMS_API.send_async_event_social(ret);
    }
}


const confirmTransaction = async function(txSignature, authToken) {
    const ret = {
        "action": "confirmedTx",
        "status": "ok",
    };
    const chainData = await validChain();
    let success = false;
    for (let tryIndex = 0; tryIndex < 3; tryIndex++) {
        if(success) { break; }
        await delay(1500);
        try {
            const rawRes = await fetch(`${API_ENDPOINT}/checkTx/${chainData.chainName}/${txSignature}`, {
                method: 'POST',
                body: JSON.stringify({}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer: ' + authToken
                },
            });
            const json = await rawRes.json();
            console.log({ json });
            const validTx = json.valid;
            ret["validTx"] = validTx;
            if(!validTx) { continue; }
        } catch(error) {
            console.log(error);
            console.log("trying again...");
        }
    }
    GMS_API.send_async_event_social(ret);
} 

const getDelveTx = async function(contract, address) {
    const chainData = await validChain();
    console.log(`about to ask price`);
    const price = await contract.methods.gamePrice().call();
    console.log(`delve price is: ${price}`);
    const tx = {
        from: address,
        value: price,
        // gasPrice: null,
        // gas: null
    };
    if(false && EIP1559Chains.includes(chainData.chainName)) {
        tx.maxPriorityFeePerGas = "258000000000"; 
        tx.maxFeePerGas = "555000000000";
    } else {
        tx.type = "0x0"
    }
    return tx;
}

const delve = async function(address) {
    const ret = {
        "action": "onPaidGame",
        "status": "ok",
        "txHash": "" 
    };
    try {
        const contract = await delveContract();
        const tx = await getDelveTx(contract, address);
        const receipt = await contract.methods.delve().send(tx);
        console.log(receipt);
        ret.txHash = receipt.transactionHash;      
    } catch (error) {
        console.log(error);
    }
    GMS_API.send_async_event_social(ret);
}

const getLeaderboard = async function(chain) {
    const ret = {
        "action": "leaderboardData",
        "status": "ok",
    };
    // try {
    console.log("")
    const leaderboardResponse = await fetch(`${API_ENDPOINT}/${chain}/leaderboard`);
    const leaderboard = await leaderboardResponse.json();
    ret["leaderboard"] = JSON.stringify(leaderboard);
    GMS_API.send_async_event_social(ret);
    // } catch(error) {
    //     console.log(error);
    //     ret.status = "error";
    //     ret["error"] = error;
    //     GMS_API.send_async_event_social(ret);
    // }
}

const postHighscore = async function(address, highscore, authToken, chain, txHash) {
    const setHighScoreResponse = await fetch(`${API_ENDPOINT}/${chain}/highscore`, {
        method: 'POST',
        body: JSON.stringify({ 
            address,
			highscore,
            tx: txHash
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: ' + authToken
        },
    });

	const responseHighScore = await setHighScoreResponse.json();
	console.log({ responseHighScore });
    return responseHighScore;
};

// only one
const sendHighScore = async function (address, authToken, highscore, chain, txHash) {
    const ret = {
        "action": "highscoreSent",
        "status": "ok",
    }; 
    try {
        const responseHighScore = await postHighscore(address, highscore, authToken, chain, txHash);
        GMS_API.send_async_event_social(ret);
    } catch(error) {
        console.log(error);
        ret.status = "error";
        ret["error"] = error;
        GMS_API.send_async_event_social(ret);
    }
}

const getXRLCBalance = async function(address) {
    const web3 = getWeb3();
    const chainValidation = await validChain();
    console.log({ chainValidation });
    if(chainValidation.chainName != "fantom") { return ""; };
    const chain = getChainID();
    const contract = await XRLCContract();
    const balanceInWei = await contract.methods.balanceOf(address).call();
    const balanceInEth = parseFloat(web3.utils.fromWei(balanceInWei, 'ether'));
    console.log("xrlc balance in Wei: " + balanceInWei);
    console.log("xrlc balance in Ether: " + balanceInEth);
    return balanceInEth;
}

const getChainID = async function() {
    return await window.ethereum.request({ method: 'eth_chainId' });
}

const validChain = async function() {
    const ret = { valid: false, chainName: "" };
    const chainId = await getChainID();
    if(chainId in enabledChains) {
        ret.valid = true;
        console.log(enabledChains[chainId].name);
        ret.chainName = enabledChains[chainId].name;
    }
    return ret;
}

const checkChain = async function() {
    const ret = {
        "action": "chainStatus",
        "status": "ok",
        "valid": false,
        "chainName": ""
    };
    const { valid, chainName } = await validChain();
    ret.valid = valid;
    ret.chainName =  chainName;
    return ret;
    GMS_API.send_async_event_social(ret);
}

const getMultipleMetadataAndImagesFromIPFS = async function(_ipfsURLs, listener="fantomlords") {
    // const ret = {
    //     "action": "metadataAndImagesFetched",
    //     "status": "ok",
    //     "metadata": ""
    // };
    const ipfsURLs = _ipfsURLs.split(",");
    let results = [];
    for (let i = 0; i < ipfsURLs.length; i++) {
        if(i > 15) { break; }
        const ipfsURL = ipfsURLs[i];
        const convertedURL = convertIPFSURL(ipfsURL);
        console.log("on getMultipleMetadataAndImagesFromIPFS: ", ipfsURL, convertedURL);
        const result = await getMetadataAndImageFromIPFS(convertedURL);
        results.push(result);
        // Send the event
        const ret = {
            action: "metadataAndImageFetched",
            imageURL: result.imageURL,
            metadata: JSON.stringify(result.metadata),
            listener: listener
        };
        GMS_API.send_async_event_social(ret);
        // Wait for 1 second before making the next request
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    // ret.results = JSON.stringify(results);
    // GMS_API.send_async_event_social(ret);
}

const convertIPFSURL = function(ipfsURL) {
    return ipfsURL.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
}

const getMetadataAndImageFromIPFS = async function(ipfsURL) {
    let metadata = null;
    let imageURL = null;
    try {
        console.log("on getMetadataAndImageFromIPFS: " + ipfsURL);
        const response = await fetch(ipfsURL);
        if (response.ok) {
            metadata = await response.json();
            imageURL = convertIPFSURL(metadata.image);
        } else {
            console.log('HTTP-Error: ' + response.status);
        }
    } catch (error) {
        console.log(error);
    }
    return { metadata, imageURL };
}

const getOtherCompanionsTokensWithURI = async function(address) {
    console.log("getOtherCompanionsTokensWithURI: " + address);
    const ret = {
        "action": "otherCompanionsTokensWithURI",
        "status": "ok",
    };    
    const tokens = [];
    const _contracts = [await versusAccessPassContract()];

    try {
        for (let i = 0; i < _contracts.length; i++) {
            const contract = _contracts[i];
            const tokenIds = await contract.methods.walletOfOwner(address).call();
            for (let i = 0; i < tokenIds.length; i++) {
                const tokenId = tokenIds[i];
                const tokenURI = await contract.methods.tokenURI(tokenId).call();
                tokens.push({
                    tokenId: parseInt(tokenId),
                    tokenURI: tokenURI
                });
            }
        }
    } catch (error) {
        ret.status = "error";
        console.log(error, tokens);
    }
    GMS_API.send_async_event_social({...ret, tokens: JSON.stringify(tokens)});
}

const getFantomLordsTokensWithURI = async function(address) {
    const ret = {
        "action": "fantomLordsTokensWithURI",
        "status": "ok",
    };
    const tokens = [];
    const contract = await fantomLordsContract();
    try {
        const tokenIds = await contract.methods.walletOfOwner(address).call();
        for (let i = 0; i < tokenIds.length; i++) {
            const tokenId = tokenIds[i];
            const tokenURI = await contract.methods.tokenURI(tokenId).call();
            tokens.push({
                tokenId: parseInt(tokenId),
                tokenURI: tokenURI
            });
        }
    } catch (error) {
        ret.status = "error";
        console.log(error, tokens);
    }
    console.log("before send_async_event_social: event: fantomLordsTokensWithURI");
    GMS_API.send_async_event_social({...ret, tokens: JSON.stringify(tokens)});
    // console.log("fantom lords: ", tokens);
    // return tokens;
}

window.ethereum.on('accountsChanged', function (accounts) {
    const ret = {
        "action": "accountsChanged",
        "status": "ok",
    }; 
    GMS_API.send_async_event_social(ret);
});

window.ethereum.on('chainChanged', async function (chainId) {
    const ret = {
        "action": "chainChanged",
        "status": "ok",
    }
    checkChain().then(res => GMS_API.send_async_event_social(res));
    GMS_API.send_async_event_social(ret);
});

