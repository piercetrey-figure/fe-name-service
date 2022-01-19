import { QueryAddressByName, QueryAddressByNameResponse, QueryNamesByAddress, QueryNamesByAddressResponse, QuerySettingsResponse } from 'models';
import { WasmService } from 'Services';
import { MsgClient as WasmClient } from '@provenanceio/wallet-lib/lib/proto/cosmwasm/wasm/v1/tx_grpc_web_pb'
import { MsgExecuteContract } from '@provenanceio/wallet-lib/lib/proto/cosmwasm/wasm/v1/tx_pb'
import { Coin } from '@provenanceio/wallet-lib/lib/proto/cosmos/base/v1beta1/coin_pb'
import { Any } from '@provenanceio/wallet-lib/lib/proto/google/protobuf/any_pb'
import { QuerySettings, RegisterName } from '../models/NameContract';
import { FEE_DENOM } from 'consts';

export class NameContractService {
    wasmService = new WasmService()
    contractAddress: string | null = null
    rootName: string

    constructor(rootName: string) {
        this.rootName = rootName
    }

    getContractAddress(): Promise<string> {
        if (this.contractAddress != null) {
            return Promise.resolve(this.contractAddress)
        }
        return this.wasmService.lookupContractByName(this.rootName)
            .then(addr => this.contractAddress = addr)
    }

    getContractConfig(): Promise<QuerySettingsResponse> {
        return this.getContractAddress()
            .then(contractAddr => this.wasmService.queryWasmCustom<QuerySettings, QuerySettingsResponse>(contractAddr, new QuerySettings()))
    }

    listNames(address: string): Promise<string[]> {
        return this.getContractAddress()
            .then(contractAddr => this.wasmService.queryWasmCustom<QueryNamesByAddress, QueryNamesByAddressResponse>(contractAddr, new QueryNamesByAddress(address)))
            .then(queryRes => queryRes.names)
    }

    resolveName(name: string): Promise<string> {
        return this.getContractAddress()
            .then(contractAddr => this.wasmService.queryWasmCustom<QueryAddressByName, QueryAddressByNameResponse>(contractAddr, new QueryAddressByName(name)))
            .then(queryRes => queryRes.address)
    }

    generateNameRegisterMessage(name: string, address: string): Promise<Any> {
        return Promise.all([
            this.getContractAddress(),
            this.getContractConfig()
        ])
        .then(([contractAddr, contractConfig]) => {
            const message = new MsgExecuteContract()
                .setMsg(Buffer.from(new RegisterName().setName(name).toJson(), 'utf-8').toString('base64'))
                .setFundsList([new Coin().setAmount(contractConfig.fee_amount).setDenom(FEE_DENOM)])
                .setContract(contractAddr)
                .setSender(address)
            return new Any()
                .setTypeUrl("/proto.cosmwasm.wasm.v1.MsgExecuteContract")
                .setValue(message.serializeBinary())
        })
    }
}