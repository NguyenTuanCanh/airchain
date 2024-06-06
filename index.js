const { ethers } = require('ethers');

let number = 0;
const address_1 = ['0x13f0f147BC1ec68278260813ed2B25Eb02D51D9a', 
                '0xf8FA0Ee72D266A9Dfc9DaF0f802d40b692E2539C', 
                '0x8171f3be1C5100cA3adB8Fa5D7b4c354C01c78A1', 
                '0x5C9A11f6DFbD6fCdeF727ACb9B82Dbb6C3BC28f6', 
                '0x00402ce0B7ac39b241407641a8e72b5E92627365', 
                '0x20fE49B4DA89004D57839193bDEca011d3ed87e5', 
                '0xC34164e1B380759d73a19d5366284Bf53432e5B0', 
                '0xD167C7896b8f3cA692521031931685CFC6F926AD', 
                '0x59394A6AD20FD8e2dBFF5A278C6Ec6aF16A5fB26', 
                '0x87cF834b887B389815b2Fc1D4CbC19bd98b31f79', 
            ]

const address_2 = ["0xDDa7b1aa21FA61dCbf61E56d9E583d28A3615b3e", 
                "0xCb692a887631731f1095423a5709C958c7534F41", 
                "0xf3B641866Fd4CAE186B44EB0DFAC2Cdbb9cD5B79", 
                "0x0Eb649E0f8d8Bf9C6836A880C670c7184e4134a6", 
                "0xa95d3218115b101F4BA13Ea2174f5cd65A11E783",
                '0x271fd705bB1510e54C4996777324F0a2fEA86C36',
                '0xC27c4B21C273f772F6ce30570fd33A74993bf886', 
            ]

const address_3 = ["0x1290F1Ad8fA6A50D238066872D845e3e79732943", 
                "0x83C6041b35a39675d0Ce15cE40C9aB2A4a45E8ed", 
                "0xa2351154e396CE32947AFFe9C3D3f981c50f434C", 
                "0xbdAE6f5e3504760b9c3bAC13B6E83dAae07cf40E", 
                "0xFb12627EEB9B2184d146F351E9a81e46592d2f19",
                '0x29bC09b6EBB3104Bf7A81697E614e77ebcC3f396', 
                '0x25f829aF03865D504F27E59E171b38d2f35D3aa4', 
            ]

const private_1 = "ac419e698a477de3575ce9335fa1c56f98f849489ef905139b9480d3e424280f"
const private_2 = "890d68c9764001d6da6bf5a325025e57a0e14a6859f991026744a9e44d68381f"
const private_3 = "45628ce06b59d4f8ab6dd3f4d2fcfc9d7da841962d249b27fc5b7446a03ddb3d"

function getRandomStringFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
           
function getRandomNumberInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const handleTxh = async (privateKey, recipientAddress, amount, rpc) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(rpc);
        const wallet = new ethers.Wallet(privateKey, provider);
        const amountToSend = ethers.utils.parseEther(amount.toString());
        
        const transaction = {
            to: recipientAddress,
            value: amountToSend,
            gasPrice: ethers.utils.parseUnits('30', 'gwei'),
            gasLimit: 21000,
        };

        const txResponse = await wallet.sendTransaction(transaction);
        await txResponse.wait();
        
        number = number + 1;
        console.log(`VPS 1 Da send : ${number} lan!`);
        handleTxh(private_1, getRandomStringFromArray(address_1), getRandomNumberInRange(0.1, 1), 'http://78.47.58.18:8545')
    } catch (e) {
        console.error('Error sending transaction:', e);
    }
};


const handleTxh2 = async (privateKey, recipientAddress, amount, rpc) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(rpc);
        const wallet = new ethers.Wallet(privateKey, provider);
        const amountToSend = ethers.utils.parseEther(amount.toString());
        
        const transaction = {
            to: recipientAddress,
            value: amountToSend,
            gasPrice: ethers.utils.parseUnits('30', 'gwei'),
            gasLimit: 21000,
        };

        const txResponse = await wallet.sendTransaction(transaction);
        await txResponse.wait();
        
        number = number + 1;
        console.log(`VPS 2 Da send : ${number} lan!`);
        handleTxh2(private_2, getRandomStringFromArray(address_2), getRandomNumberInRange(0.5, 1.5), 'http://116.203.234.179:8545')
    } catch (e) {
        console.error('Error sending transaction:', e);
    }
};

const handleTxh3 = async (privateKey, recipientAddress, amount, rpc) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(rpc);
        const wallet = new ethers.Wallet(privateKey, provider);
        const amountToSend = ethers.utils.parseEther(amount.toString());
        
        const transaction = {
            to: recipientAddress,
            value: amountToSend,
            gasPrice: ethers.utils.parseUnits('30', 'gwei'),
            gasLimit: 21000,
        };

        const txResponse = await wallet.sendTransaction(transaction);
        await txResponse.wait();
        
        number = number + 1;
        console.log(`VPS 3 Da send : ${number} lan!`);
        handleTxh3(private_3, getRandomStringFromArray(address_3), getRandomNumberInRange(1, 2), 'http://94.130.27.250:8545')
    } catch (e) {
        console.error('Error sending transaction:', e);
    }
};





// handleTxh(private_1, getRandomStringFromArray(address_1), getRandomNumberInRange(0.1, 1), 'http://78.47.58.18:8545')
handleTxh2(private_2, getRandomStringFromArray(address_2), getRandomNumberInRange(0.5, 1.5), 'http://116.203.234.179:8545')
handleTxh3(private_3, getRandomStringFromArray(address_3), getRandomNumberInRange(1, 2), 'http://94.130.27.250:8545')

const { exec } = require('child_process');
const path = require('path');

// Đường dẫn tới thư mục C
const folderC = path.resolve(__dirname, '../tracks');

// Lệnh bạn muốn chạy trong thư mục C
const command = 'go run cmd/main.go start'; // Dùng 'dir' cho Windows, 'ls' cho Unix

// Chạy lệnh trong thư mục C
setInterval(() => {
    exec(command, { cwd: folderC }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Lỗi khi chạy lệnh: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Lỗi stderr: ${stderr}`);
            return;
        }
        console.log(`Kết quả: ${stdout}`);
    });
}, 60000);