searchState.loadedDescShard("alloy_provider", 0, "alloy-provider\nA builder for an <code>&quot;eth_call&quot;</code> request. This type is returned …\nA task that polls the provider with <code>eth_getFilterChanges</code>, …\nType alias for a <code>RootProvider</code> using the <code>Http</code> transport and …\nAn identity layer that does nothing.\nRepresents a transaction that is yet to be confirmed a …\nA builder for configuring a pending transaction watcher.\nConfiguration for watching a pending transaction.\nProvider is parameterized with a network and a transport. …\nThe provider constructed by this layer.\nA builder for constructing a <code>Provider</code> from various layers.\nA layering abstraction in the vein of <code>tower::Layer</code>\nType alias for a <code>RootProvider</code> using the <code>Http</code> transport and …\nThe root provider manages the RPC client and the …\nAn <code>RpcCall</code> that takes an optional <code>BlockId</code> parameter. By …\nThe underlying <code>NetworkSigner</code> type contained in this stack.\nA stack of two providers.\nTrait for Providers, Fill stacks, etc, which contain …\nExtended APIs for the provider module.\nTransaction Fillers\nBlock heartbeat and pending transaction watcher.\nThe inner state of the root provider.\nThe inner state of the root provider.\nThe inner state of the root provider.\nWrap the given provider in the layer’s provider.\nUseful layer implementations for the provider. Currently …\nRequire a number of confirmations.\nReturns the root provider.\nThe receiver for the notification.\nGet a reference to the underlying signer.\nGet a mutable reference to the underlying signer.\nOptional timeout for the transaction.\nThe transaction hash.\nThe transaction hash to watch for.\nProvider-related utilities.\nAn identity layer that does nothing.\nThe provider constructed by this layer.\nA builder for constructing a <code>Provider</code> from various layers.\nA layering abstraction in the vein of <code>tower::Layer</code>\nA stack of two providers.\nAdd a chain ID filler to the stack being built. The filler …\nAdd a transaction filler to the stack being built. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWrap the given provider in the layer’s provider.\nAdd a layer to the stack being built. This is similar to …\nChange the network.\nCreate a new <code>Stack</code>.\nCreate a new <code>ProviderBuilder</code>.\nBuild this provider with anvil, using an Reqwest HTTP …\nBuild this provider with anvil, using an Reqwest HTTP …\nBuild this provider with anvil, using an Reqwest HTTP …\nBuild this provider with anvil, using an Reqwest HTTP …\nFinish the layer stack by providing a connection string …\nFinish the layer stack by providing a root <code>RpcClient</code>, …\nBuild this provider with an Reqwest HTTP transport.\nBuild this provider with an Hyper HTTP transport.\nBuild this provider with an IPC connection.\nFinish the layer stack by providing a root <code>Provider</code>, …\nBuild this provider with a websocket connection.\nAdd a signer layer to the stack being built.\nAdd a chain layer to the stack being built. The layer will …\nAdd a specific chain ID to the stack being built. The …\nAdd gas estimation to the stack being built.\nAdd nonce management to the stack being built.\nAdd preconfigured set of layers handling gas estimation, …\nThe size of the block cache.\nMaximum number of retries for fetching a block.\nDefault block number for when we don’t have a block yet.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAdmin namespace rpc interface that gives access to several …\nAnvil namespace rpc interface that gives access to several …\nDebug namespace rpc interface that gives access to several …\nExtension trait that gives access to engine API RPC …\nTrace namespace rpc interface that gives access to several …\nList of trace calls for use with <code>TraceApi::trace_call_many</code>\nTxpool namespace rpc interface.\nRequests adding the given peer, returning a boolean …\nRequests adding the given peer as a trusted peer, which …\nThis module extends the Ethereum JSON-RPC provider with …\nThis module extends the Ethereum JSON-RPC provider with …\nIf set to true will make every account impersonated.\nRemoves all transactions from the pool.\nRemoves transactions from the pool.\nCreate a buffer that represents all state on the chain, …\nReturns true if auto mining is enabled, and false.\nSend transactions impersonating specific account and …\nJump forward in time by the given amount of time, in …\nAppend chain state buffer to current chain. Will overwrite …\nRetrieves metadata about the Anvil instance.\nMines a series of blocks.\nMine blocks, instantly and return the mined blocks. This …\nRetrieves the Anvil node configuration params.\nUnsets the interval for the block timestamp.\nRemoves all transactions from the pool for a specific …\nReset the fork to a fresh forked state, and optionally …\nRevert the state of the blockchain to a previous snapshot. …\nEnables or disables, based on the single boolean argument, …\nModifies the balance of an account.\nSet the next block gas limit.\nSets an interval for the block timestamp.\nSets the chain ID.\nSets the code of a contract.\nSets the coinbase address.\nSets the mining behavior to interval with the given …\nEnable or disable logging.\nSet the minimum gas price for the node.\nSets the base fee of the next block.\nSimilar to <code>evm_increaseTime</code> but takes the exact timestamp …\nSets the nonce of an address.\nSets the backend rpc url.\nWrites a single slot of the account’s storage.\nSets the specific timestamp and returns the number of …\nSnapshot the state of the blockchain at the current block.\nStops impersonating an account if previously set with …\nThis module extends the Ethereum JSON-RPC provider with …\nReturn a full stack trace of all invoked opcodes of all …\nSame as <code>debug_trace_block_by_hash</code> but block is specified …\nExecutes the given transaction without publishing it like …\nSame as <code>debug_trace_call</code> but it used to run and trace …\nReruns the transaction specified by the hash and returns …\nExecute a transaction regardless of signature status.\nMine blocks, instantly. This will mine the blocks …\nReturns the list of Engine API methods supported by the …\nUpdates the execution layer client with the given fork …\nUpdates the execution layer client with the given fork …\nUpdates the execution layer client with the given fork …\nReturns the execution client version information.\nReturns the execution payload bodies by the given hash.\nReturns the execution payload bodies by the range starting …\nRetrieves an execution payload from a previously started …\nRetrieves an execution payload from a previously started …\nRetrieves an execution payload from a previously started …\nReturns the most recent version of the payload that is …\nSends the given payload to the execution layer client, as …\nSends the given payload to the execution layer client, as …\nSends the given payload to the execution layer client, as …\nSends the given payload to the execution layer client, as …\nReturns general information about the node as well as …\nReturns the list of peers currently connected to the node.\nRequests to remove the given peer, returning true if the …\nRequests to remove the given peer, returning a boolean …\nThis module extends the Ethereum JSON-RPC provider with …\nTrace all transactions in the given block.\nExecutes the given transaction and returns a number of …\nTraces multiple transactions on top of the same block, …\nParity trace transaction.\nThis modules extends the Ethereum JSON-RPC provider with …\nReturns the content of the transaction pool.\nReturns the content of the transaction pool filtered by a …\nReturns a textual summary of each transaction in the pool.\nReturns the current status of the transaction pool.\nAdmin namespace rpc interface that gives access to several …\nRequests adding the given peer, returning a boolean …\nRequests adding the given peer as a trusted peer, which …\nReturns general information about the node as well as …\nReturns the list of peers currently connected to the node.\nRequests to remove the given peer, returning true if the …\nRequests to remove the given peer, returning a boolean …\nAnvil namespace rpc interface that gives access to several …\nIf set to true will make every account impersonated.\nRemoves all transactions from the pool.\nRemoves transactions from the pool.\nCreate a buffer that represents all state on the chain, …\nReturns true if auto mining is enabled, and false.\nSend transactions impersonating specific account and …\nJump forward in time by the given amount of time, in …\nAppend chain state buffer to current chain. Will overwrite …\nRetrieves metadata about the Anvil instance.\nMines a series of blocks.\nMine blocks, instantly and return the mined blocks. This …\nRetrieves the Anvil node configuration params.\nUnsets the interval for the block timestamp.\nRemoves all transactions from the pool for a specific …\nReset the fork to a fresh forked state, and optionally …\nRevert the state of the blockchain to a previous snapshot. …\nEnables or disables, based on the single boolean argument, …\nModifies the balance of an account.\nSet the next block gas limit.\nSets an interval for the block timestamp.\nSets the chain ID.\nSets the code of a contract.\nSets the coinbase address.\nSets the mining behavior to interval with the given …\nEnable or disable logging.\nSet the minimum gas price for the node.\nSets the base fee of the next block.\nSimilar to <code>evm_increaseTime</code> but takes the exact timestamp …\nSets the nonce of an address.\nSets the backend rpc url.\nWrites a single slot of the account’s storage.\nSets the specific timestamp and returns the number of …\nSnapshot the state of the blockchain at the current block.\nStops impersonating an account if previously set with …\nExecute a transaction regardless of signature status.\nMine blocks, instantly. This will mine the blocks …\nDebug namespace rpc interface that gives access to several …\nReturn a full stack trace of all invoked opcodes of all …\nSame as <code>debug_trace_block_by_hash</code> but block is specified …\nExecutes the given transaction without publishing it like …\nSame as <code>debug_trace_call</code> but it used to run and trace …\nReruns the transaction specified by the hash and returns …\nExtension trait that gives access to engine API RPC …\nReturns the list of Engine API methods supported by the …\nUpdates the execution layer client with the given fork …\nUpdates the execution layer client with the given fork …\nUpdates the execution layer client with the given fork …\nReturns the execution client version information.\nReturns the execution payload bodies by the given hash.\nReturns the execution payload bodies by the range starting …\nRetrieves an execution payload from a previously started …\nRetrieves an execution payload from a previously started …\nRetrieves an execution payload from a previously started …\nReturns the most recent version of the payload that is …\nSends the given payload to the execution layer client, as …\nSends the given payload to the execution layer client, as …\nSends the given payload to the execution layer client, as …\nSends the given payload to the execution layer client, as …\nTrace namespace rpc interface that gives access to several …\nList of trace calls for use with <code>TraceApi::trace_call_many</code>\nTrace all transactions in the given block.\nExecutes the given transaction and returns a number of …\nTraces multiple transactions on top of the same block, …\nParity trace transaction.\nTxpool namespace rpc interface.\nReturns the content of the transaction pool.\nReturns the content of the transaction pool filtered by a …\nReturns a textual summary of each transaction in the pool.\nReturns the current status of the transaction pool.\nA <code>TxFiller</code> that populates the chain ID of a transaction.\nA <code>Provider</code> that applies one or more <code>TxFiller</code>s.\nThe properties that this filler retrieves from the RPC. to …\nThe control flow for a filler.\nThe filler has filled in all properties that it can fill.\nA <code>TxFiller</code> that populates gas related fields in …\nA layer that can fill in a <code>TransactionRequest</code> with …\nThe filler is missing a required property.\nA <code>TxFiller</code> that fills nonces on transactions.\nThe filler is ready to fill in the transaction request.\nThe recommended filler, a preconfigured set of layers …\nA layer that signs transactions locally.\nA layer that can fill in a <code>TransactionRequest</code> with …\nAbsorb the control flow of another filler.\nReturns true if the filler is missing a required property.\nReturns <code>true</code> if the filler is should continue filling.\nFills in the transaction request with the fillable …\nFills the transaction request, using the configured fillers\nPerforms any synchronous filling. This should be called …\nReturns <code>true</code> if the filler is finished filling in the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the filler is finished filling in the …\nReturns <code>true</code> if the filler is missing information required …\nReturns <code>true</code> if the filler is ready to fill in the …\nJoins this filler with another filler to compose multiple …\nJoins a filler to this provider\nCreates a new <code>Missing</code> control flow.\nCreates a new <code>FillProvider</code> with the given filler and inner …\nPrepares fillable properties, potentially by making an RPC …\nPrepares and fills the transaction request with the …\nReturns <code>true</code> if the filler is ready to fill in the …\nReturn a control-flow enum indicating whether the filler …\nA <code>TxFiller</code> that populates the chain ID of a transaction.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreate a new <code>ChainIdFiller</code> with an optional chain ID.\nA <code>TxFiller</code> that populates gas related fields in …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA layer that can fill in a <code>TransactionRequest</code> with …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nGet a reference to the left filler.\nCreates a new <code>JoinFill</code> with the given layers.\nGet a request for the left filler, if the left filler is …\nGet a prepare for the right filler, if the right filler is …\nGet a reference to the right filler.\nGet a mutable reference to the left filler.\nA <code>TxFiller</code> that fills nonces on transactions.\nReturns the argument unchanged.\nGet the next nonce for the given account.\nCalls <code>U::from(self)</code>.\nA layer that signs transactions locally.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new signing layer with the given signer.\nA heartbeat task that receives blocks and watches for …\nA handle to the heartbeat task.\nRepresents a transaction that is yet to be confirmed a …\nA builder for configuring a pending transaction watcher.\nConfiguration for watching a pending transaction.\nCheck if any transactions have enough confirmations to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new pending transaction builder from the given …\nWaits for the transaction to confirm with the given number …\nHandle a new block by checking if any of the transactions …\nHandle a watch instruction by adding it to the watch list, …\nReturns the inner configuration.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes this builder, returning the inner configuration.\nReturns a watcher that always sees the latest block.\nCreate a new heartbeat task.\nCreates a new pending transaction builder.\nCreate a new watch for a transaction.\nGet the next time to reap a transaction. If no reaps, this …\nNotify the waiter.\nReturns the provider.\nOrdered map of transactions to reap at a certain time.\nReap any timeout\nRegisters the watching configuration with the provider.\nReturns the number of confirmations to wait for.\nReturns the number of confirmations to wait for.\nRequire a number of confirmations.\nThe receiver for the notification.\nSets the number of confirmations to wait for.\nSets the number of confirmations to wait for.\nSets the timeout.\nSets the timeout.\nSets the transaction hash.\nSets the transaction hash.\nSpawn the heartbeat task, returning a <code>HeartbeatHandle</code>.\nConsumes this builder, returning the provider and the …\nThe stream of incoming blocks to watch.\nReturns the timeout.\nReturns the timeout.\nOptional timeout for the transaction.\nReturns this transaction’s hash.\nReturns the transaction hash.\nReturns the transaction hash.\nThe transaction hash.\nThe transaction hash to watch for.\nTransactions to watch for.\nOrdered map of transactions waiting for confirmations.\nWaits for the transaction to confirm with the given number …\nWatch for a transaction to be confirmed with the given …\nWraps this configuration with a provider to expose …\nSets the number of confirmations to wait for.\nSets the number of confirmations to wait for.\nSets the timeout.\nSets the timeout.\nSets the transaction hash.\nSets the transaction hash.\nA layer that wraps an <code>Anvil</code> config. The config will be used\nA provider that wraps an <code>AnvilInstance</code>, preventing the …\nA layer that wraps a <code>NamedChain</code>. The layer will be used to …\nA layer that wraps an <code>Anvil</code> config. The config will be used\nA provider that wraps an <code>AnvilInstance</code>, preventing the …\nGet the instance http endpoint.\nReturns the argument unchanged.\nReturns the argument unchanged.\nStarts the anvil instance, or gets a reference to the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>AnvilProvider</code> with the given inner provider …\nGet the instance ws endpoint.\nA layer that wraps a <code>NamedChain</code>. The layer will be used to …\nGet the chain’s average blocktime, if applicable.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nEthereum JSON-RPC provider.\nA builder for an <code>&quot;eth_call&quot;</code> request. This type is returned …\nSet the block to use for this call.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate new EthCall for gas estimates.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the future is in the preparing state.\nReturns <code>true</code> if the future is in the running state.\nMap the response to a different type.\nCreate a new CallBuilder.\nSet the state overrides for this call.\nThe root provider manages the RPC client and the …\nThe root provider manages the RPC client and the …\nBoxes the inner client.\nConnects to a boxed transport with the given connector.\nCreates a new root provider from the provided connection …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets the subscription corresponding to the given RPC …\nThe inner state of the root provider.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new root provider from the given RPC client.\nCreates a new HTTP root provider from the given URL.\nUnsubscribes from the subscription corresponding to the …\nA task that polls the provider with <code>eth_getFilterChanges</code>, …\nProvider is parameterized with a network and a transport. …\nExecute a smart contract call with a transaction request …\nExecute a smart contract call with a transaction request …\nReturns the RPC client used to send requests.\nReturns the RPC client used to send requests.\nCreate an EIP-2930 access list.\nCreate an EIP-2930 access list.\nEstimates the EIP1559 <code>maxFeePerGas</code> and <code>maxPriorityFeePerGas</code>…\nEstimates the EIP1559 <code>maxFeePerGas</code> and <code>maxPriorityFeePerGas</code>…\nThis function returns an <code>EthCall</code> which can be used to get …\nThis function returns an <code>EthCall</code> which can be used to get …\nRetrieves account information (Account) for the given …\nRetrieves account information (Account) for the given …\nGets the accounts in the remote node. This is usually …\nGets the accounts in the remote node. This is usually …\nGets the balance of the account at the specified tag, …\nGets the balance of the account at the specified tag, …\nReturns the base fee per blob gas (blob gas price) in wei.\nReturns the base fee per blob gas (blob gas price) in wei.\nGets a block by either its hash, tag, or number, with full …\nGets a block by either its hash, tag, or number, with full …\nGets a block by its BlockHash, with full transactions or …\nGets a block by its BlockHash, with full transactions or …\nGet a block by its number.\nGet a block by its number.\nGet the last block number available.\nGet the last block number available.\nGets the selected block BlockNumberOrTag receipts.\nGets the selected block BlockNumberOrTag receipts.\nGets the chain ID.\nGets the chain ID.\nGets the client version of the chain client().\nGets the client version of the chain client().\nGets the bytecode located at the corresponding Address.\nGets the bytecode located at the corresponding Address.\nReturns a collection of historical gas information …\nReturns a collection of historical gas information …\nGet a list of values that have been added since the last …\nGet a list of values that have been added since the last …\nGet a list of values that have been added since the last …\nGet a list of values that have been added since the last …\nGets the current gas price in wei.\nGets the current gas price in wei.\nRetrieves a <code>Vec&lt;Log&gt;</code> with the given Filter.\nRetrieves a <code>Vec&lt;Log&gt;</code> with the given Filter.\nReturns a suggestion for the current <code>maxPriorityFeePerGas</code> …\nReturns a suggestion for the current <code>maxPriorityFeePerGas</code> …\nGets the network ID. Same as <code>eth_chainId</code>.\nGets the network ID. Same as <code>eth_chainId</code>.\nGet the account and storage values of the specified …\nGet the account and storage values of the specified …\nGets the specified storage value from Address.\nGets the specified storage value from Address.\nGets a transaction by its TxHash.\nGets a transaction by its TxHash.\nGets the transaction count (AKA “nonce”) of the …\nGets the transaction count (AKA “nonce”) of the …\nGets a transaction receipt if it exists, by its TxHash.\nGets a transaction receipt if it exists, by its TxHash.\nGets an uncle block through the tag BlockId and index u64.\nGets an uncle block through the tag BlockId and index u64.\nGets the number of uncles for the block specified by the …\nGets the number of uncles for the block specified by the …\nNotify the provider that we are interested in new blocks.\nNotify the provider that we are interested in new blocks.\nNotify the provider that we are interested in logs that …\nNotify the provider that we are interested in logs that …\nNotify the provider that we are interested in new pending …\nNotify the provider that we are interested in new pending …\nSends a raw JSON-RPC request.\nSends a raw JSON-RPC request.\nSends a raw JSON-RPC request with type-erased parameters …\nSends a raw JSON-RPC request with type-erased parameters …\nReturns the root provider.\nBroadcasts a raw transaction RLP bytes to the network.\nBroadcasts a raw transaction RLP bytes to the network.\nBroadcasts a transaction to the network.\nBroadcasts a transaction to the network.\nBroadcasts a transaction envelope to the network.\nBroadcasts a transaction envelope to the network.\nSubscribe to an RPC event.\nSubscribe to an RPC event.\nSubscribe to a stream of new block headers.\nSubscribe to a stream of new block headers.\nSubscribe to a stream of pending transaction bodies.\nSubscribe to a stream of pending transaction bodies.\nSubscribe to a stream of logs matching given filter.\nSubscribe to a stream of logs matching given filter.\nSubscribe to a stream of pending transaction hashes.\nSubscribe to a stream of pending transaction hashes.\nGets syncing info.\nGets syncing info.\nCreates a new <code>TransactionRequest</code>.\nCreates a new <code>TransactionRequest</code>.\nCancels a subscription given the subscription ID.\nCancels a subscription given the subscription ID.\nWatch for new blocks by polling the provider with …\nWatch for new blocks by polling the provider with …\nWatch for new pending transaction bodies by polling the …\nWatch for new pending transaction bodies by polling the …\nWatch for new logs using the given filter by polling the …\nWatch for new logs using the given filter by polling the …\nWatch for the confirmation of a single pending transaction …\nWatch for the confirmation of a single pending transaction …\nWatch for new pending transaction by polling the provider …\nWatch for new pending transaction by polling the provider …\nReturns a <code>Weak</code> RPC client used to send requests.\nReturns a <code>Weak</code> RPC client used to send requests.\nThe underlying <code>NetworkSigner</code> type contained in this stack.\nTrait for Providers, Fill stacks, etc, which contain …\nGet the default signer address.\nGet the default signer address.\nCheck if the signer can sign for the given address.\nCheck if the signer can sign for the given address.\nGet a reference to the underlying signer.\nGet an iterator of all signer addresses. Note that because …\nGet an iterator of all signer addresses. Note that because …\nGet a mutable reference to the underlying signer.\nAn <code>RpcCall</code> that takes an optional <code>BlockId</code> parameter. By …\nA future for <code>RpcWithBlock</code>. Simple wrapper around <code>RpcCall</code>.\nStates of the\nSet the block id.\nSet the block id to “earliest”.\nSet the block id to “finalized”.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSet the block id to a specific hash, without requiring the …\nSet the block id to a specific hash and require the hash …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the block id to “latest”.\nMap the response.\nCreate a new <code>RpcWithBlock</code> instance.\nSet the block id to a specific height.\nSet the block id to “pending”.\nSet the block id to “safe”.\nMultiplier for the current base fee to estimate max base …\nThe number of blocks from the past for which the fee …\nThe default percentile of gas premiums that are fetched …\nThe minimum priority fee to provide.\nReturn type of EIP1155 gas fee estimator.\nAn estimator function for EIP1559 fees.\nConvert <code>U128</code> to <code>u128</code>.\nThe default EIP-1559 fee estimator which is based on the …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe base fee per gas.\nThe max priority fee per gas.")