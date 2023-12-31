export const todoListAbi={
    "contractName": "TodoList",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "completed",
            "type": "bool"
          }
        ],
        "name": "taskCreated",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "taskCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tasks",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "completed",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_content",
            "type": "string"
          }
        ],
        "name": "createTask",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.3+commit.8d00100c\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"completed\",\"type\":\"bool\"}],\"name\":\"taskCreated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_content\",\"type\":\"string\"}],\"name\":\"createTask\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"taskCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tasks\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"completed\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/TodoList.sol\":\"TodoList\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/TodoList.sol\":{\"keccak256\":\"0xed6dac2cb550758204a093d51d892c9c2fc789d84751df004be74c818460da82\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7d8da572eec07addee1965421993f80eec92edc7af1d6e4e23ac946d0e217f0\",\"dweb:/ipfs/QmWnWtc6hbMyScjf1eunoxhS5p9XPn9XosRLBASDDbrKYQ\"]}},\"version\":1}",
    "bytecode": "0x6080604052600080553480156200001557600080fd5b506200005c6040518060400160405280600a81526020017f6669727374207461736b000000000000000000000000000000000000000000008152506200006260201b60201c565b620003f0565b600080815480929190620000769062000333565b919050555060405180606001604052806000548152602001828152602001600015158152506001600080548152602001908152602001600020600082015181600001556020820151816001019080519060200190620000d79291906200013e565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f7ffc5def84f84c9a24e3f0ad22a6aa1dcf1626b3936280fe2f8e5d38c636b641600054826000604051620001339392919062000251565b60405180910390a150565b8280546200014c90620002fd565b90600052602060002090601f016020900481019282620001705760008555620001bc565b82601f106200018b57805160ff1916838001178555620001bc565b82800160010185558215620001bc579182015b82811115620001bb5782518255916020019190600101906200019e565b5b509050620001cb9190620001cf565b5090565b5b80821115620001ea576000816000905550600101620001d0565b5090565b620001f981620002b1565b82525050565b60006200020c8262000295565b620002188185620002a0565b93506200022a818560208601620002c7565b6200023581620003df565b840191505092915050565b6200024b81620002bd565b82525050565b600060608201905062000268600083018662000240565b81810360208301526200027c8185620001ff565b90506200028d6040830184620001ee565b949350505050565b600081519050919050565b600082825260208201905092915050565b60008115159050919050565b6000819050919050565b60005b83811015620002e7578082015181840152602081019050620002ca565b83811115620002f7576000848401525b50505050565b600060028204905060018216806200031657607f821691505b602082108114156200032d576200032c620003b0565b5b50919050565b60006200034082620002bd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000376576200037562000381565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6106e880620004006000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063111002aa146100465780638d97767214610062578063b6cb58a514610094575b600080fd5b610060600480360381019061005b919061036d565b6100b2565b005b61007c600480360381019061007791906103ae565b610188565b60405161008b93929190610449565b60405180910390f35b61009c610247565b6040516100a9919061042e565b60405180910390f35b6000808154809291906100c4906105b4565b91905055506040518060600160405280600054815260200182815260200160001515815250600160008054815260200190815260200160002060008201518160000155602082015181600101908051906020019061012392919061024d565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f7ffc5def84f84c9a24e3f0ad22a6aa1dcf1626b3936280fe2f8e5d38c636b64160005482600060405161017d93929190610449565b60405180910390a150565b60016020528060005260406000206000915090508060000154908060010180546101b190610551565b80601f01602080910402602001604051908101604052809291908181526020018280546101dd90610551565b801561022a5780601f106101ff5761010080835404028352916020019161022a565b820191906000526020600020905b81548152906001019060200180831161020d57829003601f168201915b5050505050908060020160009054906101000a900460ff16905083565b60005481565b82805461025990610551565b90600052602060002090601f01602090048101928261027b57600085556102c2565b82601f1061029457805160ff19168380011785556102c2565b828001600101855582156102c2579182015b828111156102c15782518255916020019190600101906102a6565b5b5090506102cf91906102d3565b5090565b5b808211156102ec5760008160009055506001016102d4565b5090565b60006103036102fe846104ac565b610487565b90508281526020810184848401111561031b57600080fd5b61032684828561050f565b509392505050565b600082601f83011261033f57600080fd5b813561034f8482602086016102f0565b91505092915050565b6000813590506103678161069b565b92915050565b60006020828403121561037f57600080fd5b600082013567ffffffffffffffff81111561039957600080fd5b6103a58482850161032e565b91505092915050565b6000602082840312156103c057600080fd5b60006103ce84828501610358565b91505092915050565b6103e0816104f9565b82525050565b60006103f1826104dd565b6103fb81856104e8565b935061040b81856020860161051e565b6104148161068a565b840191505092915050565b61042881610505565b82525050565b6000602082019050610443600083018461041f565b92915050565b600060608201905061045e600083018661041f565b818103602083015261047081856103e6565b905061047f60408301846103d7565b949350505050565b60006104916104a2565b905061049d8282610583565b919050565b6000604051905090565b600067ffffffffffffffff8211156104c7576104c661065b565b5b6104d08261068a565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561053c578082015181840152602081019050610521565b8381111561054b576000848401525b50505050565b6000600282049050600182168061056957607f821691505b6020821081141561057d5761057c61062c565b5b50919050565b61058c8261068a565b810181811067ffffffffffffffff821117156105ab576105aa61065b565b5b80604052505050565b60006105bf82610505565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156105f2576105f16105fd565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6106a481610505565b81146106af57600080fd5b5056fea26469706673582212205895626381cb965b1459802f3171a882c8dbe6ec0eed35ed3b3fd99e2e3ec3c564736f6c63430008030033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063111002aa146100465780638d97767214610062578063b6cb58a514610094575b600080fd5b610060600480360381019061005b919061036d565b6100b2565b005b61007c600480360381019061007791906103ae565b610188565b60405161008b93929190610449565b60405180910390f35b61009c610247565b6040516100a9919061042e565b60405180910390f35b6000808154809291906100c4906105b4565b91905055506040518060600160405280600054815260200182815260200160001515815250600160008054815260200190815260200160002060008201518160000155602082015181600101908051906020019061012392919061024d565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f7ffc5def84f84c9a24e3f0ad22a6aa1dcf1626b3936280fe2f8e5d38c636b64160005482600060405161017d93929190610449565b60405180910390a150565b60016020528060005260406000206000915090508060000154908060010180546101b190610551565b80601f01602080910402602001604051908101604052809291908181526020018280546101dd90610551565b801561022a5780601f106101ff5761010080835404028352916020019161022a565b820191906000526020600020905b81548152906001019060200180831161020d57829003601f168201915b5050505050908060020160009054906101000a900460ff16905083565b60005481565b82805461025990610551565b90600052602060002090601f01602090048101928261027b57600085556102c2565b82601f1061029457805160ff19168380011785556102c2565b828001600101855582156102c2579182015b828111156102c15782518255916020019190600101906102a6565b5b5090506102cf91906102d3565b5090565b5b808211156102ec5760008160009055506001016102d4565b5090565b60006103036102fe846104ac565b610487565b90508281526020810184848401111561031b57600080fd5b61032684828561050f565b509392505050565b600082601f83011261033f57600080fd5b813561034f8482602086016102f0565b91505092915050565b6000813590506103678161069b565b92915050565b60006020828403121561037f57600080fd5b600082013567ffffffffffffffff81111561039957600080fd5b6103a58482850161032e565b91505092915050565b6000602082840312156103c057600080fd5b60006103ce84828501610358565b91505092915050565b6103e0816104f9565b82525050565b60006103f1826104dd565b6103fb81856104e8565b935061040b81856020860161051e565b6104148161068a565b840191505092915050565b61042881610505565b82525050565b6000602082019050610443600083018461041f565b92915050565b600060608201905061045e600083018661041f565b818103602083015261047081856103e6565b905061047f60408301846103d7565b949350505050565b60006104916104a2565b905061049d8282610583565b919050565b6000604051905090565b600067ffffffffffffffff8211156104c7576104c661065b565b5b6104d08261068a565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561053c578082015181840152602081019050610521565b8381111561054b576000848401525b50505050565b6000600282049050600182168061056957607f821691505b6020821081141561057d5761057c61062c565b5b50919050565b61058c8261068a565b810181811067ffffffffffffffff821117156105ab576105aa61065b565b5b80604052505050565b60006105bf82610505565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156105f2576105f16105fd565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6106a481610505565b81146106af57600080fd5b5056fea26469706673582212205895626381cb965b1459802f3171a882c8dbe6ec0eed35ed3b3fd99e2e3ec3c564736f6c63430008030033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:2957:1",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "66:50:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "83:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "103:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "88:14:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "88:21:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "76:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "76:34:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "76:34:1"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "54:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "61:3:1",
                  "type": ""
                }
              ],
              "src": "7:109:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "214:272:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "224:53:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "271:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "238:32:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "238:39:1"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "228:6:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "286:78:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "352:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "357:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "293:58:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "293:71:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "286:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "399:5:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "406:4:1",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "395:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "395:16:1"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "413:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "418:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "373:21:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "373:52:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "373:52:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "434:46:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "445:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "472:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "450:21:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "450:29:1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "441:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "441:39:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "434:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "195:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "202:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "210:3:1",
                  "type": ""
                }
              ],
              "src": "122:364:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "557:53:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "574:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "597:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "579:17:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "579:24:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "567:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "567:37:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "567:37:1"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "545:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "552:3:1",
                  "type": ""
                }
              ],
              "src": "492:118:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "784:353:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "794:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "806:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "817:2:1",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "802:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "802:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "794:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "874:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "887:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "898:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "883:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "883:17:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "830:43:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "830:71:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "830:71:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "922:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "933:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "918:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "918:18:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "942:4:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "948:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "938:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "938:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "911:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "911:48:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "911:48:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "968:86:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "1040:6:1"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1049:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "976:63:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "976:78:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "968:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "1102:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1115:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1126:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1111:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1111:18:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1064:37:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1064:66:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1064:66:1"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256_t_string_memory_ptr_t_bool__to_t_uint256_t_string_memory_ptr_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "740:9:1",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "752:6:1",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "760:6:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "768:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "779:4:1",
                  "type": ""
                }
              ],
              "src": "616:521:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1202:40:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1213:22:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1229:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "1223:5:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1223:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1213:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1185:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1195:6:1",
                  "type": ""
                }
              ],
              "src": "1143:99:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1344:73:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1361:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1366:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1354:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1354:19:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1354:19:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1382:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1401:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1406:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1397:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1397:14:1"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "1382:11:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1316:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1321:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "1332:11:1",
                  "type": ""
                }
              ],
              "src": "1248:169:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1465:48:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1475:32:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1500:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1493:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1493:13:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "1486:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1486:21:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "1475:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1447:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1457:7:1",
                  "type": ""
                }
              ],
              "src": "1423:90:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1564:32:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1574:16:1",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1585:5:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "1574:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1546:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1556:7:1",
                  "type": ""
                }
              ],
              "src": "1519:77:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1651:258:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1661:10:1",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "1670:1:1",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "1665:1:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1730:63:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "1755:3:1"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "1760:1:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1751:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1751:11:1"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "1774:3:1"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "1779:1:1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1770:3:1"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1770:11:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "1764:5:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1764:18:1"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "1744:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1744:39:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1744:39:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "1691:1:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1694:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "1688:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1688:13:1"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "1702:19:1",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "1704:15:1",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "1713:1:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1716:2:1",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1709:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1709:10:1"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1704:1:1"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "1684:3:1",
                      "statements": []
                    },
                    "src": "1680:113:1"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1827:76:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "1877:3:1"
                                  },
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "1882:6:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1873:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1873:16:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1891:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "1866:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1866:27:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1866:27:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "1808:1:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1811:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1805:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1805:13:1"
                    },
                    "nodeType": "YulIf",
                    "src": "1802:2:1"
                  }
                ]
              },
              "name": "copy_memory_to_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "1633:3:1",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "1638:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1643:6:1",
                  "type": ""
                }
              ],
              "src": "1602:307:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1966:269:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1976:22:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "1990:4:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1996:1:1",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "1986:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1986:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1976:6:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2007:38:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "2037:4:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2043:1:1",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "2033:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2033:12:1"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "2011:18:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2084:51:1",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "2098:27:1",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "2112:6:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2120:4:1",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "2108:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2108:17:1"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2098:6:1"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "2064:18:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "2057:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2057:26:1"
                    },
                    "nodeType": "YulIf",
                    "src": "2054:2:1"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2187:42:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "2201:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2201:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2201:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "2151:18:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2174:6:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2182:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2171:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2171:14:1"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "2148:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2148:38:1"
                    },
                    "nodeType": "YulIf",
                    "src": "2145:2:1"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "1950:4:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1959:6:1",
                  "type": ""
                }
              ],
              "src": "1915:320:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2284:190:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2294:33:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2321:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "2303:17:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2303:24:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2294:5:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2417:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "2419:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2419:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2419:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2342:5:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2349:66:1",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "2339:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2339:77:1"
                    },
                    "nodeType": "YulIf",
                    "src": "2336:2:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2448:20:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2459:5:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2466:1:1",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2455:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2455:13:1"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "2448:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "increment_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2270:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "2280:3:1",
                  "type": ""
                }
              ],
              "src": "2241:233:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2508:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2525:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2528:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2518:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2518:88:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2518:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2622:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2625:4:1",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2615:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2615:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2615:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2646:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2649:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "2639:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2639:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2639:15:1"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "2480:180:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2694:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2711:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2714:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2704:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2704:88:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2704:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2808:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2811:4:1",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2801:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2801:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2801:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2832:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2835:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "2825:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2825:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2825:15:1"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "2666:180:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2900:54:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2910:38:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2928:5:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2935:2:1",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2924:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2924:14:1"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2944:2:1",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "2940:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2940:7:1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "2920:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2920:28:1"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "2910:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "round_up_to_mul_of_32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2883:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "2893:6:1",
                  "type": ""
                }
              ],
              "src": "2852:102:1"
            }
          ]
        },
        "contents": "{\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256_t_string_memory_ptr_t_bool__to_t_uint256_t_string_memory_ptr_t_bool__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n}\n",
        "id": 1,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:5914:1",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "91:261:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "101:75:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "168:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "array_allocation_size_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "126:41:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "126:49:1"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "110:15:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "110:66:1"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "101:5:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "192:5:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "199:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "185:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "185:21:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "185:21:1"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "215:27:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "230:5:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "237:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "226:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "226:16:1"
                    },
                    "variables": [
                      {
                        "name": "dst",
                        "nodeType": "YulTypedName",
                        "src": "219:3:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "280:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "289:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "292:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "282:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "282:12:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "282:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "261:3:1"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "266:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "257:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "257:16:1"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "275:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "254:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "254:25:1"
                    },
                    "nodeType": "YulIf",
                    "src": "251:2:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "329:3:1"
                        },
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "334:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "339:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "copy_calldata_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "305:23:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "305:41:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "305:41:1"
                  }
                ]
              },
              "name": "abi_decode_available_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "64:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "69:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "77:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "85:5:1",
                  "type": ""
                }
              ],
              "src": "7:345:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "434:211:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "483:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "492:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "495:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "485:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "485:12:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "485:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "462:6:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "470:4:1",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "458:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "458:17:1"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "477:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "454:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "454:27:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "447:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "447:35:1"
                    },
                    "nodeType": "YulIf",
                    "src": "444:2:1"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "508:34:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "535:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "522:12:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "522:20:1"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "512:6:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "551:88:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "612:6:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "620:4:1",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "608:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "608:17:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "627:6:1"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "635:3:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_available_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "560:47:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "560:79:1"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "551:5:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "412:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "420:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "428:5:1",
                  "type": ""
                }
              ],
              "src": "372:273:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "703:87:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "713:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "735:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "722:12:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "722:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "713:5:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "778:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "751:26:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "751:33:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "751:33:1"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "681:6:1",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "689:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "697:5:1",
                  "type": ""
                }
              ],
              "src": "651:139:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "872:299:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "918:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "927:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "930:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "920:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "920:12:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "920:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "893:7:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "902:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "889:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "889:23:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "914:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "885:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "885:32:1"
                    },
                    "nodeType": "YulIf",
                    "src": "882:2:1"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "944:220:1",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "959:45:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "990:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1001:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "986:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "986:17:1"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "973:12:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "973:31:1"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "963:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1051:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1060:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1063:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1053:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1053:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1053:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1023:6:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1031:18:1",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1020:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1020:30:1"
                        },
                        "nodeType": "YulIf",
                        "src": "1017:2:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1081:73:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1126:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1137:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1122:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1122:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1146:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "1091:30:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1091:63:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1081:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "842:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "853:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "865:6:1",
                  "type": ""
                }
              ],
              "src": "796:375:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1243:196:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1289:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1298:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1301:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1291:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1291:12:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1291:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1264:7:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1273:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1260:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1260:23:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1285:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "1256:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1256:32:1"
                    },
                    "nodeType": "YulIf",
                    "src": "1253:2:1"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "1315:117:1",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1330:15:1",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1344:1:1",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1334:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1359:63:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1394:9:1"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1405:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1390:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1390:22:1"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1414:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "1369:20:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1369:53:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1359:6:1"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1213:9:1",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "1224:7:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1236:6:1",
                  "type": ""
                }
              ],
              "src": "1177:262:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1504:50:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1521:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1541:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "1526:14:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1526:21:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1514:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1514:34:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1514:34:1"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1492:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1499:3:1",
                  "type": ""
                }
              ],
              "src": "1445:109:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1652:272:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1662:53:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1709:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "1676:32:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1676:39:1"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "1666:6:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1724:78:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1790:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1795:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1731:58:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1731:71:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1724:3:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1837:5:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1844:4:1",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1833:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1833:16:1"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1851:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1856:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "1811:21:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1811:52:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1811:52:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1872:46:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1883:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1910:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "1888:21:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1888:29:1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1879:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1879:39:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1872:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1633:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1640:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1648:3:1",
                  "type": ""
                }
              ],
              "src": "1560:364:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1995:53:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2012:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2035:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2017:17:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2017:24:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2005:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2005:37:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2005:37:1"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1983:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1990:3:1",
                  "type": ""
                }
              ],
              "src": "1930:118:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2152:124:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2162:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2174:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2185:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2170:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2170:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2162:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2242:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2255:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2266:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2251:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2251:17:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2198:43:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2198:71:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2198:71:1"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2124:9:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2136:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2147:4:1",
                  "type": ""
                }
              ],
              "src": "2054:222:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2450:353:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2460:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2472:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2483:2:1",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2468:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2468:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2460:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2540:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2553:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2564:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2549:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2549:17:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2496:43:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2496:71:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2496:71:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2588:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2599:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2584:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2584:18:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "2608:4:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2614:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2604:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2604:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2577:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2577:48:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2577:48:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2634:86:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "2706:6:1"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2715:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2642:63:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2642:78:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2634:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "2768:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2781:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2792:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2777:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2777:18:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2730:37:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2730:66:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2730:66:1"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256_t_string_memory_ptr_t_bool__to_t_uint256_t_string_memory_ptr_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2406:9:1",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "2418:6:1",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "2426:6:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2434:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2445:4:1",
                  "type": ""
                }
              ],
              "src": "2282:521:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2850:88:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2860:30:1",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "allocate_unbounded",
                        "nodeType": "YulIdentifier",
                        "src": "2870:18:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2870:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "2860:6:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "2919:6:1"
                        },
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "2927:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "finalize_allocation",
                        "nodeType": "YulIdentifier",
                        "src": "2899:19:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2899:33:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2899:33:1"
                  }
                ]
              },
              "name": "allocate_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "2834:4:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "2843:6:1",
                  "type": ""
                }
              ],
              "src": "2809:129:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2984:35:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2994:19:1",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3010:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "3004:5:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3004:9:1"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "2994:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "2977:6:1",
                  "type": ""
                }
              ],
              "src": "2944:75:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3092:241:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3197:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "3199:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3199:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3199:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3169:6:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3177:18:1",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3166:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3166:30:1"
                    },
                    "nodeType": "YulIf",
                    "src": "3163:2:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3229:37:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3259:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "round_up_to_mul_of_32",
                        "nodeType": "YulIdentifier",
                        "src": "3237:21:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3237:29:1"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "3229:4:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3303:23:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "3315:4:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3321:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3311:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3311:15:1"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "3303:4:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_allocation_size_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "3076:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "3087:4:1",
                  "type": ""
                }
              ],
              "src": "3025:308:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3398:40:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3409:22:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3425:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "3419:5:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3419:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3409:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3381:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "3391:6:1",
                  "type": ""
                }
              ],
              "src": "3339:99:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3540:73:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3557:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3562:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3550:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3550:19:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3550:19:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3578:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3597:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3602:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3593:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3593:14:1"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "3578:11:1"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3512:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "3517:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "3528:11:1",
                  "type": ""
                }
              ],
              "src": "3444:169:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3661:48:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3671:32:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3696:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "3689:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3689:13:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3682:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3682:21:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "3671:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3643:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "3653:7:1",
                  "type": ""
                }
              ],
              "src": "3619:90:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3760:32:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3770:16:1",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3781:5:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "3770:7:1"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3742:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "3752:7:1",
                  "type": ""
                }
              ],
              "src": "3715:77:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3849:103:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "3872:3:1"
                        },
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "3877:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3882:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "calldatacopy",
                        "nodeType": "YulIdentifier",
                        "src": "3859:12:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3859:30:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3859:30:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "3930:3:1"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3935:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3926:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3926:16:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3944:1:1",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3919:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3919:27:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3919:27:1"
                  }
                ]
              },
              "name": "copy_calldata_to_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "3831:3:1",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "3836:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "3841:6:1",
                  "type": ""
                }
              ],
              "src": "3798:154:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4007:258:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4017:10:1",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "4026:1:1",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "4021:1:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4086:63:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "4111:3:1"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "4116:1:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "4107:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4107:11:1"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "4130:3:1"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "4135:1:1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4126:3:1"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4126:11:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "4120:5:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4120:18:1"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "4100:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4100:39:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4100:39:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "4047:1:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "4050:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "4044:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4044:13:1"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "4058:19:1",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "4060:15:1",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "4069:1:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4072:2:1",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4065:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4065:10:1"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "4060:1:1"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "4040:3:1",
                      "statements": []
                    },
                    "src": "4036:113:1"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4183:76:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "4233:3:1"
                                  },
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "4238:6:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "4229:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4229:16:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4247:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "4222:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4222:27:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4222:27:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "4164:1:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "4167:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4161:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4161:13:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4158:2:1"
                  }
                ]
              },
              "name": "copy_memory_to_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "3989:3:1",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "3994:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "3999:6:1",
                  "type": ""
                }
              ],
              "src": "3958:307:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4322:269:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4332:22:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "4346:4:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4352:1:1",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "4342:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4342:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4332:6:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4363:38:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "4393:4:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4399:1:1",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "4389:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4389:12:1"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "4367:18:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4440:51:1",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "4454:27:1",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "4468:6:1"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4476:4:1",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "4464:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4464:17:1"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "4454:6:1"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "4420:18:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4413:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4413:26:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4410:2:1"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4543:42:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "4557:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4557:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4557:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "4507:18:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "4530:6:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4538:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "4527:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4527:14:1"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "4504:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4504:38:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4501:2:1"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "4306:4:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "4315:6:1",
                  "type": ""
                }
              ],
              "src": "4271:320:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4640:238:1",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4650:58:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "4672:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "size",
                              "nodeType": "YulIdentifier",
                              "src": "4702:4:1"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "4680:21:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4680:27:1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4668:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4668:40:1"
                    },
                    "variables": [
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulTypedName",
                        "src": "4654:10:1",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4819:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "4821:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4821:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4821:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "4762:10:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4774:18:1",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "4759:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4759:34:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "4798:10:1"
                            },
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "4810:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "4795:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4795:22:1"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "4756:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4756:62:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4753:2:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4857:2:1",
                          "type": "",
                          "value": "64"
                        },
                        {
                          "name": "newFreePtr",
                          "nodeType": "YulIdentifier",
                          "src": "4861:10:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4850:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4850:22:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4850:22:1"
                  }
                ]
              },
              "name": "finalize_allocation",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "4626:6:1",
                  "type": ""
                },
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "4634:4:1",
                  "type": ""
                }
              ],
              "src": "4597:281:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4927:190:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4937:33:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4964:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "4946:17:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4946:24:1"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4937:5:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5060:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "5062:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5062:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5062:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4985:5:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4992:66:1",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "4982:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4982:77:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4979:2:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5091:20:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5102:5:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5109:1:1",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5098:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5098:13:1"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "5091:3:1"
                      }
                    ]
                  }
                ]
              },
              "name": "increment_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4913:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "4923:3:1",
                  "type": ""
                }
              ],
              "src": "4884:233:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5151:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5168:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5171:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5161:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5161:88:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5161:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5265:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5268:4:1",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5258:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5258:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5258:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5289:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5292:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "5282:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5282:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5282:15:1"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "5123:180:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5337:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5354:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5357:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5347:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5347:88:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5347:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5451:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5454:4:1",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5444:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5444:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5444:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5475:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5478:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "5468:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5468:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5468:15:1"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "5309:180:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5523:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5540:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5543:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5533:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5533:88:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5533:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5637:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5640:4:1",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5630:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5630:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5630:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5661:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5664:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "5654:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5654:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5654:15:1"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "5495:180:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5729:54:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5739:38:1",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5757:5:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5764:2:1",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5753:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5753:14:1"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5773:2:1",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "5769:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5769:7:1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "5749:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5749:28:1"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "5739:6:1"
                      }
                    ]
                  }
                ]
              },
              "name": "round_up_to_mul_of_32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5712:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "5722:6:1",
                  "type": ""
                }
              ],
              "src": "5681:102:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5832:79:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5889:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5898:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5901:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "5891:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5891:12:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5891:12:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5855:5:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "5880:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "5862:17:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5862:24:1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "5852:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5852:35:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "5845:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5845:43:1"
                    },
                    "nodeType": "YulIf",
                    "src": "5842:2:1"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5825:5:1",
                  "type": ""
                }
              ],
              "src": "5789:122:1"
            }
          ]
        },
        "contents": "{\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptr(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_string_memory_ptr_t_bool__to_t_uint256_t_string_memory_ptr_t_bool__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
        "id": 1,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "58:522:0:-:0;;;106:1;82:25;;320:56;;;;;;;;;;344:24;;;;;;;;;;;;;;;;;;:10;;;:24;;:::i;:::-;58:522;;384:193;444:9;;:11;;;;;;;;;:::i;:::-;;;;;;485:30;;;;;;;;490:9;;485:30;;;;500:8;485:30;;;;509:5;485:30;;;;;466:5;:16;472:9;;466:16;;;;;;;;;;;:49;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;531:38;543:9;;553:8;563:5;531:38;;;;;;;;:::i;:::-;;;;;;;;384:193;:::o;58:522::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:109:1:-;88:21;103:5;88:21;:::i;:::-;83:3;76:34;66:50;;:::o;122:364::-;;238:39;271:5;238:39;:::i;:::-;293:71;357:6;352:3;293:71;:::i;:::-;286:78;;373:52;418:6;413:3;406:4;399:5;395:16;373:52;:::i;:::-;450:29;472:6;450:29;:::i;:::-;445:3;441:39;434:46;;214:272;;;;;:::o;492:118::-;579:24;597:5;579:24;:::i;:::-;574:3;567:37;557:53;;:::o;616:521::-;;817:2;806:9;802:18;794:26;;830:71;898:1;887:9;883:17;874:6;830:71;:::i;:::-;948:9;942:4;938:20;933:2;922:9;918:18;911:48;976:78;1049:4;1040:6;976:78;:::i;:::-;968:86;;1064:66;1126:2;1115:9;1111:18;1102:6;1064:66;:::i;:::-;784:353;;;;;;:::o;1143:99::-;;1229:5;1223:12;1213:22;;1202:40;;;:::o;1248:169::-;;1366:6;1361:3;1354:19;1406:4;1401:3;1397:14;1382:29;;1344:73;;;;:::o;1423:90::-;;1500:5;1493:13;1486:21;1475:32;;1465:48;;;:::o;1519:77::-;;1585:5;1574:16;;1564:32;;;:::o;1602:307::-;1670:1;1680:113;1694:6;1691:1;1688:13;1680:113;;;1779:1;1774:3;1770:11;1764:18;1760:1;1755:3;1751:11;1744:39;1716:2;1713:1;1709:10;1704:15;;1680:113;;;1811:6;1808:1;1805:13;1802:2;;;1891:1;1882:6;1877:3;1873:16;1866:27;1802:2;1651:258;;;;:::o;1915:320::-;;1996:1;1990:4;1986:12;1976:22;;2043:1;2037:4;2033:12;2064:18;2054:2;;2120:4;2112:6;2108:17;2098:27;;2054:2;2182;2174:6;2171:14;2151:18;2148:38;2145:2;;;2201:18;;:::i;:::-;2145:2;1966:269;;;;:::o;2241:233::-;;2303:24;2321:5;2303:24;:::i;:::-;2294:33;;2349:66;2342:5;2339:77;2336:2;;;2419:18;;:::i;:::-;2336:2;2466:1;2459:5;2455:13;2448:20;;2284:190;;;:::o;2480:180::-;2528:77;2525:1;2518:88;2625:4;2622:1;2615:15;2649:4;2646:1;2639:15;2666:180;2714:77;2711:1;2704:88;2811:4;2808:1;2801:15;2835:4;2832:1;2825:15;2852:102;;2944:2;2940:7;2935:2;2928:5;2924:14;2920:28;2910:38;;2900:54;;;:::o;58:522:0:-;;;;;;;",
    "deployedSourceMap": "58:522:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;384:193;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;116:32;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;82:25;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;384:193;444:9;;:11;;;;;;;;;:::i;:::-;;;;;;485:30;;;;;;;;490:9;;485:30;;;;500:8;485:30;;;;509:5;485:30;;;;;466:5;:16;472:9;;466:16;;;;;;;;;;;:49;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;531:38;543:9;;553:8;563:5;531:38;;;;;;;;:::i;:::-;;;;;;;;384:193;:::o;116:32::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;82:25::-;;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:345:1:-;;110:66;126:49;168:6;126:49;:::i;:::-;110:66;:::i;:::-;101:75;;199:6;192:5;185:21;237:4;230:5;226:16;275:3;266:6;261:3;257:16;254:25;251:2;;;292:1;289;282:12;251:2;305:41;339:6;334:3;329;305:41;:::i;:::-;91:261;;;;;;:::o;372:273::-;;477:3;470:4;462:6;458:17;454:27;444:2;;495:1;492;485:12;444:2;535:6;522:20;560:79;635:3;627:6;620:4;612:6;608:17;560:79;:::i;:::-;551:88;;434:211;;;;;:::o;651:139::-;;735:6;722:20;713:29;;751:33;778:5;751:33;:::i;:::-;703:87;;;;:::o;796:375::-;;914:2;902:9;893:7;889:23;885:32;882:2;;;930:1;927;920:12;882:2;1001:1;990:9;986:17;973:31;1031:18;1023:6;1020:30;1017:2;;;1063:1;1060;1053:12;1017:2;1091:63;1146:7;1137:6;1126:9;1122:22;1091:63;:::i;:::-;1081:73;;944:220;872:299;;;;:::o;1177:262::-;;1285:2;1273:9;1264:7;1260:23;1256:32;1253:2;;;1301:1;1298;1291:12;1253:2;1344:1;1369:53;1414:7;1405:6;1394:9;1390:22;1369:53;:::i;:::-;1359:63;;1315:117;1243:196;;;;:::o;1445:109::-;1526:21;1541:5;1526:21;:::i;:::-;1521:3;1514:34;1504:50;;:::o;1560:364::-;;1676:39;1709:5;1676:39;:::i;:::-;1731:71;1795:6;1790:3;1731:71;:::i;:::-;1724:78;;1811:52;1856:6;1851:3;1844:4;1837:5;1833:16;1811:52;:::i;:::-;1888:29;1910:6;1888:29;:::i;:::-;1883:3;1879:39;1872:46;;1652:272;;;;;:::o;1930:118::-;2017:24;2035:5;2017:24;:::i;:::-;2012:3;2005:37;1995:53;;:::o;2054:222::-;;2185:2;2174:9;2170:18;2162:26;;2198:71;2266:1;2255:9;2251:17;2242:6;2198:71;:::i;:::-;2152:124;;;;:::o;2282:521::-;;2483:2;2472:9;2468:18;2460:26;;2496:71;2564:1;2553:9;2549:17;2540:6;2496:71;:::i;:::-;2614:9;2608:4;2604:20;2599:2;2588:9;2584:18;2577:48;2642:78;2715:4;2706:6;2642:78;:::i;:::-;2634:86;;2730:66;2792:2;2781:9;2777:18;2768:6;2730:66;:::i;:::-;2450:353;;;;;;:::o;2809:129::-;;2870:20;;:::i;:::-;2860:30;;2899:33;2927:4;2919:6;2899:33;:::i;:::-;2850:88;;;:::o;2944:75::-;;3010:2;3004:9;2994:19;;2984:35;:::o;3025:308::-;;3177:18;3169:6;3166:30;3163:2;;;3199:18;;:::i;:::-;3163:2;3237:29;3259:6;3237:29;:::i;:::-;3229:37;;3321:4;3315;3311:15;3303:23;;3092:241;;;:::o;3339:99::-;;3425:5;3419:12;3409:22;;3398:40;;;:::o;3444:169::-;;3562:6;3557:3;3550:19;3602:4;3597:3;3593:14;3578:29;;3540:73;;;;:::o;3619:90::-;;3696:5;3689:13;3682:21;3671:32;;3661:48;;;:::o;3715:77::-;;3781:5;3770:16;;3760:32;;;:::o;3798:154::-;3882:6;3877:3;3872;3859:30;3944:1;3935:6;3930:3;3926:16;3919:27;3849:103;;;:::o;3958:307::-;4026:1;4036:113;4050:6;4047:1;4044:13;4036:113;;;4135:1;4130:3;4126:11;4120:18;4116:1;4111:3;4107:11;4100:39;4072:2;4069:1;4065:10;4060:15;;4036:113;;;4167:6;4164:1;4161:13;4158:2;;;4247:1;4238:6;4233:3;4229:16;4222:27;4158:2;4007:258;;;;:::o;4271:320::-;;4352:1;4346:4;4342:12;4332:22;;4399:1;4393:4;4389:12;4420:18;4410:2;;4476:4;4468:6;4464:17;4454:27;;4410:2;4538;4530:6;4527:14;4507:18;4504:38;4501:2;;;4557:18;;:::i;:::-;4501:2;4322:269;;;;:::o;4597:281::-;4680:27;4702:4;4680:27;:::i;:::-;4672:6;4668:40;4810:6;4798:10;4795:22;4774:18;4762:10;4759:34;4756:62;4753:2;;;4821:18;;:::i;:::-;4753:2;4861:10;4857:2;4850:22;4640:238;;;:::o;4884:233::-;;4946:24;4964:5;4946:24;:::i;:::-;4937:33;;4992:66;4985:5;4982:77;4979:2;;;5062:18;;:::i;:::-;4979:2;5109:1;5102:5;5098:13;5091:20;;4927:190;;;:::o;5123:180::-;5171:77;5168:1;5161:88;5268:4;5265:1;5258:15;5292:4;5289:1;5282:15;5309:180;5357:77;5354:1;5347:88;5454:4;5451:1;5444:15;5478:4;5475:1;5468:15;5495:180;5543:77;5540:1;5533:88;5640:4;5637:1;5630:15;5664:4;5661:1;5654:15;5681:102;;5773:2;5769:7;5764:2;5757:5;5753:14;5749:28;5739:38;;5729:54;;;:::o;5789:122::-;5862:24;5880:5;5862:24;:::i;:::-;5855:5;5852:35;5842:2;;5901:1;5898;5891:12;5842:2;5832:79;:::o",
    "source": "//SPDX-License-Identifier:MIT\r\npragma solidity ^0.8.0;\r\n\r\ncontract TodoList{\r\n    uint public taskCount = 0;\r\n\r\n    mapping(uint=>Task) public tasks;\r\n\r\n    struct Task{\r\n        uint id;\r\n        string content;\r\n        bool completed;\r\n    }\r\n\r\n    event taskCreated(uint id , string content, bool completed);\r\n\r\n    constructor(){\r\n        createTask(\"first task\");\r\n    }\r\n\r\n    function createTask(string memory _content)public{\r\n        taskCount++;\r\n        tasks[taskCount] = Task(taskCount,_content,false);\r\n        emit taskCreated(taskCount,_content, false);\r\n    }\r\n}",
    "sourcePath": "C:\\MyFiles\\web3Projects\\eth-todo-list\\contracts\\TodoList.sol",
    "ast": {
      "absolutePath": "project:/contracts/TodoList.sol",
      "exportedSymbols": {
        "TodoList": [
          58
        ]
      },
      "id": 59,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "31:23:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 58,
          "linearizedBaseContracts": [
            58
          ],
          "name": "TodoList",
          "nameLocation": "67:8:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "b6cb58a5",
              "id": 4,
              "mutability": "mutable",
              "name": "taskCount",
              "nameLocation": "94:9:0",
              "nodeType": "VariableDeclaration",
              "scope": 58,
              "src": "82:25:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 2,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "82:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "30",
                "id": 3,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "106:1:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "8d977672",
              "id": 9,
              "mutability": "mutable",
              "name": "tasks",
              "nameLocation": "143:5:0",
              "nodeType": "VariableDeclaration",
              "scope": 58,
              "src": "116:32:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$16_storage_$",
                "typeString": "mapping(uint256 => struct TodoList.Task)"
              },
              "typeName": {
                "id": 8,
                "keyType": {
                  "id": 5,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "124:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "116:19:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$16_storage_$",
                  "typeString": "mapping(uint256 => struct TodoList.Task)"
                },
                "valueType": {
                  "id": 7,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 6,
                    "name": "Task",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 16,
                    "src": "130:4:0"
                  },
                  "referencedDeclaration": 16,
                  "src": "130:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Task_$16_storage_ptr",
                    "typeString": "struct TodoList.Task"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "canonicalName": "TodoList.Task",
              "id": 16,
              "members": [
                {
                  "constant": false,
                  "id": 11,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "184:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "179:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "179:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13,
                  "mutability": "mutable",
                  "name": "content",
                  "nameLocation": "204:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "197:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "197:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15,
                  "mutability": "mutable",
                  "name": "completed",
                  "nameLocation": "227:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "222:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "222:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "name": "Task",
              "nameLocation": "164:4:0",
              "nodeType": "StructDefinition",
              "scope": 58,
              "src": "157:87:0",
              "visibility": "public"
            },
            {
              "anonymous": false,
              "id": 24,
              "name": "taskCreated",
              "nameLocation": "258:11:0",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 23,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 18,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "275:2:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 24,
                    "src": "270:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 17,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "270:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 20,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "content",
                    "nameLocation": "287:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 24,
                    "src": "280:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 19,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "280:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 22,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "completed",
                    "nameLocation": "301:9:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 24,
                    "src": "296:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 21,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "296:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "269:42:0"
              },
              "src": "252:60:0"
            },
            {
              "body": {
                "id": 31,
                "nodeType": "Block",
                "src": "333:43:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "hexValue": "6669727374207461736b",
                          "id": 28,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "355:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d102b0bf045a8ad1550054adbd32e668669787db93243e21902849064ac3d94e",
                            "typeString": "literal_string \"first task\""
                          },
                          "value": "first task"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d102b0bf045a8ad1550054adbd32e668669787db93243e21902849064ac3d94e",
                            "typeString": "literal_string \"first task\""
                          }
                        ],
                        "id": 27,
                        "name": "createTask",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57,
                        "src": "344:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 29,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "344:24:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 30,
                    "nodeType": "ExpressionStatement",
                    "src": "344:24:0"
                  }
                ]
              },
              "id": 32,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 25,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "331:2:0"
              },
              "returnParameters": {
                "id": 26,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "333:0:0"
              },
              "scope": 58,
              "src": "320:56:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 56,
                "nodeType": "Block",
                "src": "433:144:0",
                "statements": [
                  {
                    "expression": {
                      "id": 38,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "444:11:0",
                      "subExpression": {
                        "id": 37,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "444:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 39,
                    "nodeType": "ExpressionStatement",
                    "src": "444:11:0"
                  },
                  {
                    "expression": {
                      "id": 48,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 40,
                          "name": "tasks",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9,
                          "src": "466:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$16_storage_$",
                            "typeString": "mapping(uint256 => struct TodoList.Task storage ref)"
                          }
                        },
                        "id": 42,
                        "indexExpression": {
                          "id": 41,
                          "name": "taskCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4,
                          "src": "472:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "466:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$16_storage",
                          "typeString": "struct TodoList.Task storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 44,
                            "name": "taskCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4,
                            "src": "490:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 45,
                            "name": "_content",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "500:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "hexValue": "66616c7365",
                            "id": 46,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "509:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 43,
                          "name": "Task",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16,
                          "src": "485:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Task_$16_storage_ptr_$",
                            "typeString": "type(struct TodoList.Task storage pointer)"
                          }
                        },
                        "id": 47,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "485:30:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Task_$16_memory_ptr",
                          "typeString": "struct TodoList.Task memory"
                        }
                      },
                      "src": "466:49:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$16_storage",
                        "typeString": "struct TodoList.Task storage ref"
                      }
                    },
                    "id": 49,
                    "nodeType": "ExpressionStatement",
                    "src": "466:49:0"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 51,
                          "name": "taskCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4,
                          "src": "543:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 52,
                          "name": "_content",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34,
                          "src": "553:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 53,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "563:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 50,
                        "name": "taskCreated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24,
                        "src": "531:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_bool_$returns$__$",
                          "typeString": "function (uint256,string memory,bool)"
                        }
                      },
                      "id": 54,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "531:38:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 55,
                    "nodeType": "EmitStatement",
                    "src": "526:43:0"
                  }
                ]
              },
              "functionSelector": "111002aa",
              "id": 57,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "createTask",
              "nameLocation": "393:10:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 35,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 34,
                    "mutability": "mutable",
                    "name": "_content",
                    "nameLocation": "418:8:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 57,
                    "src": "404:22:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 33,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "404:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "403:24:0"
              },
              "returnParameters": {
                "id": 36,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "433:0:0"
              },
              "scope": 58,
              "src": "384:193:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 59,
          "src": "58:522:0"
        }
      ],
      "src": "31:549:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.3+commit.8d00100c.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {
          "0x7ffc5def84f84c9a24e3f0ad22a6aa1dcf1626b3936280fe2f8e5d38c636b641": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "content",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "completed",
                "type": "bool"
              }
            ],
            "name": "taskCreated",
            "type": "event"
          }
        },
        "links": {},
        "address": "0xeF04021919305a1ce9013AC6299c170923C93dA8",
        "transactionHash": "0xc77666bcf37e10457bf3a0a771cbbfd5fc3ebf687a3f7a93165a003546f38041"
      }
    },
    "schemaVersion": "3.4.16",
    "updatedAt": "2023-10-24T17:29:02.957Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }