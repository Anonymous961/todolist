import {ethers} from 'ethers';
import { JsonRpcProvider } from 'ethers/providers';

const TodoListArtifact=require('../build/contracts/TodoList.json')
const provider = new JsonRpcProvider('http://127.0.0.1:7545');

const privateKey="0xd34b3bebddf9c0670429e15b31b3b45b05a5b9d8fa1a22ddc55d2329e2bc0a49"
const wallet= new ethers.Wallet(privateKey,provider);


const todoListContract=new ethers.Contract(
    TodoListArtifact.networks['*'].address,
    TodoListArtifact.abi,
    wallet
)

export {provider,wallet,todoListContract};