const contractAddress = "0x61b69962B85647b061597f8087488c93F35557d0"
//"0x61b69962B85647b061597f8087488c93F35557d0";
const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "uid",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuedTo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "course",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuedOn",
          "type": "string"
        }
      ],
      "name": "addCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "uid",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuedTo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "course",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuedOn",
          "type": "string"
        }
      ],
      "name": "verifyCertificate",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

export{contractAddress,abi};