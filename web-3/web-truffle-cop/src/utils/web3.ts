import Web3 from "web3";

const contractAddress = "0x1bEF3D240c3769D1EC8E8648c9D84c9Fbc4c96d3";
const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "message",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_message", type: "string" }],
    name: "setMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

let web3: any;
let contract: any;

export const initWeb3 = async () => {
  if ((window as any).ethereum) {
    web3 = new Web3((window as any).ethereum);
    await (window as any).ethereum.request({ method: "eth_requestAccounts" });
    contract = new web3.eth.Contract(contractABI, contractAddress);
  } else {
    alert("Please install MetaMask!");
  }
};

export const getMessage = async () => {
  return await contract.methods.message().call();
};

export const setMessage = async (newMessage: any) => {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.setMessage(newMessage).send({ from: accounts[0] });
};
