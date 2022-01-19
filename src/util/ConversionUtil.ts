import { QueryAllBalancesResponse } from '@provenanceio/wallet-lib/lib/proto/cosmos/bank/v1beta1/query_pb';

export class ConversionUtil {
    static getHashBalance(balanceResponse?: QueryAllBalancesResponse.AsObject): number | null {
        if (!balanceResponse) {
            return null;
        }
        let nhash = balanceResponse.balancesList.find(coin => coin.denom === "nhash");
        if (!nhash?.amount) {
            return null;
        }
        return this.convertStringNanoHashToHash(nhash.amount);
    }

    static convertStringNanoHashToHash(nanoHash: string): number | null {
        try {
            return this.convertNanoHashToHash(+nanoHash);
        } catch (error) {
            console.log(`Failed to convert derived nano amount [${nanoHash}] to hash: ${error}`)
            return null;
        }
    }

    static convertNanoHashToHash(nanoHash: number): number {
        return nanoHash / 1000000000;
    }
}
