import Web3 from "web3";

const contractAddress = "0x763d2c9a121b42AAc50CCE5A4F9a138d1825e53E";
const contractABI = [
  {
    inputs: [],
    name: "result",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "num1", type: "uint256" },
      { internalType: "uint256", name: "num2", type: "uint256" },
    ],
    name: "add",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "num1", type: "uint256" },
      { internalType: "uint256", name: "num2", type: "uint256" },
    ],
    name: "sub",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "num1", type: "uint256" },
      { internalType: "uint256", name: "num2", type: "uint256" },
    ],
    name: "mul",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "num1", type: "uint256" },
      { internalType: "uint256", name: "num2", type: "uint256" },
    ],
    name: "div",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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

export const getResult = async () => {
  return await contract.methods.result().call();
};

export const calculate = async (
  num1: number,
  num2: number,
  operator: string
) => {
  const accounts = await web3.eth.getAccounts();
  let method;
  switch (operator) {
    case "+":
      method = contract.methods.add(num1, num2);
      break;
    case "-":
      method = contract.methods.sub(num1, num2);
      break;
    case "*":
      method = contract.methods.mul(num1, num2);
      break;
    case "/":
      method = contract.methods.div(num1, num2);
      break;
    default:
      throw new Error("Invalid operator");
  }
  await method.send({ from: accounts[0] });
  return await getResult();
};
